function material(parent, args, context) {
    return context.prisma.material()
}

module.exports = {
    material
}