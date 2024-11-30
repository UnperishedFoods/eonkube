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
    "kubejs:thorium_grit",
  )
  event.custom(
    {
      "type": "mekanism:oxidizing",
      "input": 
        {
          "ingredient": 
            {
              "item": "kubejs:protactinium",
            },
        },
      "output": 
        {
          "amount": 100,
          "gas": "kubejs:protactinium_oxide",
        },
    },
  )
  event.custom(
    {
      "type": "mekanism:activating",
      "input": 
        {
          "amount": 10,
          "gas": "kubejs:protactinium_oxide",
        },
        "output": 
          {
            "amount": 10,
            "gas": "mekanism:uranium_oxide",
          },
    },
  )
  event.custom(
    {
      "type": "pneumaticcraft:thermo_plant",
      "exothermic": false,
      "fluid_input": 
      {
        "type": "pneumaticcraft:fluid",
        "amount": 100,
        "tag": "kubejs:sbf_salt",
      },
      "item_input": 
      {
        "item": "kubejs:thorium_pellet",
      },
      "item_output": 
      {
        "item": "kubejs:protactinium",
      },
      "pressure": 3.0,
      "temperature": 
      {
        "max_temp": 700,
        "min_temp": 500,
      },
    },
  )
})