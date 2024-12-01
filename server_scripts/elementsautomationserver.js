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
  event.custom(
    {
      "type": "mekanism:enriching",
      "input": 
      {
        "ingredient": 
        {
          "tag": "kubejs:thorium_ingot",
        },
      },
      "output": 
      {
        "item": "kubejs:thorium_pellet",
      },
    },
  )
  event.custom(
    {
      "type": "mekanism:oxidizing",
      "input": {
        "ingredient": {
          "item": "mekanism:fluorite_gem"
        }
      },
      "output": {
        "amount": 100,
        "gas": "kubejs:liquid_fluorite"
      }
    }
  )
  event.custom(
    {
      "type": "mekanism:separating",
      "input": {
        "amount": 10,
        "gas": "kubejs:liquid_fluorite"
      },
      "leftGasOutput": {
        "amount": 5,
        "gas": "kubejs:calcium_ion_gas"
      },
      "rightGasOutput": {
        "amount": 5,
        "gas": "kubejs:fluorine"
      }
    }
  )
  event.custom(
    {
      "type": "mekanism:rotary",
      "fluidInput": {
        "amount": 1,
        "fluid": "kubejs:calcium_ion_solution"
      },
      "fluidOutput": {
        "amount": 1,
        "fluid": "kubejs:calcium_ion_solution"
      },
      "gasInput": {
        "amount": 1,
        "gas": "kubejs:calcium_ion_gas"
      },
      "gasOutput": {
        "amount": 1,
        "gas": "kubejs:calcium_ion_gas"
      }
    }
  )
})