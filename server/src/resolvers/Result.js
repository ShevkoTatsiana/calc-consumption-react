function consumption_items(parent, args, context) {
    return context.prisma.result({ id: parent.id }).consumption_items()
}

module.exports = {
    consumption_items,
}