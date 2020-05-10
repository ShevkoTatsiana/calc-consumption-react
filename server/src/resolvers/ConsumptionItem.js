function includeIn(parent, args, context) {
    return context.prisma.consumptionItem({ id: parent.id }).includeIn()
}

module.exports = {
    includeIn,
}