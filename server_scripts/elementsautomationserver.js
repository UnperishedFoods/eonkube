ServerEvents.recipes((event) => {
    event.recipes.create.splashing(
        [
            Item.of("mekanism:dirty_dust_uranium").withChance(0.06),
            Item.of("kubejs:thorium_grit").withChance(0.06),
        ],
        "create_things_and_misc:crushed_magma",
    )
    event.smelting(
        "kubejs:thorium_ingot",
        "kubejs:thorium_grit"
    )
})