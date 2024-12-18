ServerEvents.recipes((event) => {
    event.shapeless(
        "minecraft:diorite", 
        [
            "minecraft:cobblestone",
            "minecraft:quartz",
        ],
    )
    event.recipes.create.splashing(
        [
            Item.of("minecraft:lapis_lazuli").withChance(0.25),
            Item.of("minecraft:white_dye").withChance(0.12),
        ],
        "createbb:white_phosphorus", 
    )
    event.recipes.create.milling(
        [
            "createbb:white_phosphorus",
            Item.of("createbb:white_phosphorus").withChance(0.75),
        ],
        "create:limestone",
    )
    event.remove(
        {
            id: "create:splashing/red_sand"
        },
    )
    event.recipes.create.splashing(
        [
            Item.of("thermal:tin_nugget").withChance(0.12),
            Item.of("minecraft:dead_bush").withChance(0.06),
        ],
        "minecraft:red_sand",
    )
    event.recipes.create.splashing(
        [
            Item.of("create:zinc_nugget").withChance(0.12),
            Item.of("minecraft:stick").withChance(0.06),
        ],
        "minecraft:clay_ball",
    )
    event.recipes.create.crushing(
        [
            Item.of("minecraft:prismarine_crystals").withChance(0.5),
        ],
        "minecraft:prismarine_shard",
    )
})