function feed(parent, args, context, info) {
    return context.prisma.links()
}

function materials(parent, args, context, info) {
    return context.prisma.materials()
}

function material(parent, args, context, info) {
    return context.prisma.material({id: args.id})
}

function result(parent, args, context, info) {
    return context.prisma.result({id: args.id})
}

function gallery(parent, args, context, info) {
    return context.prisma.results()
}

module.exports = {
    feed,
    materials,
    material,
    result,
    gallery
}