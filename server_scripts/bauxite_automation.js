ServerEvents.recipes((event) => {
    event.recipes.create.splashing(
        [
            Item.of("immersiveengineering:raw_aluminum").withChance(0.15),
            Item.of("kubejs:gallium").withChance(0.01)
        ],
        "minecraft:smooth_basalt"
    )
    event.recipes.create.mixing("minecraft:basalt", [Fluid.lava(50), "minecraft:basalt", "minecraft:blue_ice"])
})
