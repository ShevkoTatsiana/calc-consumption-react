const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId, getResultId } = require('../utils')

async function signup(parent, args, context, info) {
    const hashedPassword = await bcrypt.hash(args.password, 10)
    const {password, ...user} = await context.prisma.createUser({ ...args, password: hashedPassword })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function login(parent, args, context, info) {
    const {password, ...user} = await context.prisma.user({ email: args.email })
    if (!user) {
        throw new Error('No such user found')
    }
    const valid = await bcrypt.compare(args.password, password)
    if (!valid) {
        throw new Error('Invalid password')
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

function post(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } },
    })
}

async function addMaterial(parent, args, context, info) {
    return context.prisma.createMaterial({
        name: args.name,
        consumption: args.consumption,
    })
}

//Добавляется в указанный Result по его id
async function addConsumptionItem(parent, args, context, info) {
    return context.prisma.createConsumptionItem({
        name: args.input.name,
        area: args.input.area,
        height: args.input.height,
        consumption: args.input.consumption,
        general_consumption: args.input.general_consumption,
        coast: args.input.coast,
        includeIn: { connect: { id: args.input.resultID } }
    })
}

// Item автоматически удаляется из Result с которым он был связан
async function deleteConsumptionItem(parent, args, context, info) {
    return context.prisma.deleteConsumptionItem({id: args.id})
}

//Создает новый объект Result, id которого используется для сохранения в него consumptionItem
async function addResult(parent, args, context, info) {
    return context.prisma.createResult({
        consumption_items: null,
        title: null,
        grand_total: null
    })
}

async function deleteResult(parent, args, context, info) {
    return context.prisma.deleteResult({id: args.id})
}

//обновляем результат, найденный по id, добавляя title и grand_total
async function updateResult(parent, args, context, info) {
    return context.prisma.updateResult({
        data: {
            title: args.title,
            grand_total: args.grand_total
        },
        where: {id: args.id}
    })
}

module.exports = {
    signup,
    login,
    post,
    addMaterial,
    addConsumptionItem,
    addResult,
    deleteConsumptionItem,
    deleteResult,
    updateResult
}