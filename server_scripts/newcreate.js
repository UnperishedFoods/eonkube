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
})