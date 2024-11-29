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
            "minecraft:lapis_lazuli",
            Item.of("minecraft:lapis_lazuli").withChance(0.25),
        ],
        "createbb:white_phosphorus", 
    )
    event.recipes.create.milling(
        [
            "createbb:white_phosphorus", Item.of("createbb:white_phosphorus").withChance(0.75),
        ],
        "create:limestone",
    )
    event.remove(
        {
            id: "create:splashing/red_sand"
        }
    )
    event.recipes.create.splashing(
        [
            Item.of("thermal:tin_nugget").withChance(0.25),
            Item.of("minecraft:dead_bush").withChance(0.12),
        ],
        "minecraft:red_sand",
    )
})