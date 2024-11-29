ServerEvents.recipes((event) => {
    event.shapeless(
        "minecraft:diorite", 
        [
            "minecraft:cobblestone",
            "minecraft:quartz",
        ],
    )
    event.splashing(
        [
            "minecraft:lapis_lazuli",
        ],
        "createbb:white_phosphorus", 
    )
    event.milling(
        [
            "createbb:white_phosphorus", Item.of("createbb:white_phosphorus").withChance(0.75)
        ],
        "create:limestone"
    )
})