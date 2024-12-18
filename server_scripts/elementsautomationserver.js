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
        "fluid": "kubejs:reactor_salt",
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
        "max_temp": 973,
        "min_temp": 773,
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
          "item": "kubejs:thorium_ingot",
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
      "input": 
      {
        "ingredient": 
        {
          "item": "mekanism:fluorite_gem",
        },
      },
      "output": 
      {
        "amount": 100,
        "gas": "kubejs:fluorite_gas",
      },
    },
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
  event.custom(
    {
      "type": "mekanism:oxidizing",
      "input": 
      {
        "ingredient": 
        {
          "tag": "mekanism:fluorite_gem",
        },
      },
      "output": 
      {
        "amount": 100,
        "gas": "kubejs:liquid_fluorite",
      },
    }
  )
  event.custom(
    {
      "type": "mekanism:separating",
      "input": 
      {
        "amount": 3,
        "tag": "forge:liquid_fluorite",
      },
      "leftGasOutput": 
      {
        "amount": 1,
        "gas": "kubejs:calcium_ion_gas",
      },
      "rightGasOutput": 
      {
        "amount": 2,
        "gas": "kubejs:fluorine",
      },
    },
  )
  event.custom(
    {
      "type": "mekanism:chemical_infusing",
      "leftInput": 
      {
        "amount": 1,
        "gas": "mekanism:sodium",
      },
      "output": 
      {
        "amount": 2,
        "gas": "kubejs:sodium_fluoride"
      },
      "rightInput": 
      {
        "amount": 1,
        "gas": "kubejs:fluorine",
      },
    },
  )
  event.custom(
    {
      "type": "mekanism:rotary",
      "fluidInput": {
        "amount": 1,
        "fluid": "kubejs:liquid_fluorite"
      },
      "fluidOutput": {
        "amount": 1,
        "fluid": "kubejs:liquid_fluorite"
      },
      "gasInput": {
        "amount": 1,
        "gas": "kubejs:fluorite_gas"
      },
      "gasOutput": {
        "amount": 1,
        "gas": "kubejs:fluorite_gas"
      }
    }
  )
  event.recipes.create.milling(
    [
      "kubejs:crushed_granite",
    ],
    "minecraft:granite",
  )
  event.recipes.create.milling(
    [
      "minecraft:red_sand",
    ],
    "kubejs:crushed_granite",
  )
  event.remove(
    {
        id: "create:milling/granite",
    },
  )
  event.custom(
    {
      "type": "mekanism:dissolution",
      "gasInput": 
      {
        "amount": 2,
        "gas": "kubejs:fluorine",
      },
      "itemInput": 
      {
        "amount": 1,
        "ingredient": 
        {
          "item": "kubejs:beryllium",
        },
      },
      "output": 
      {
        "amount": 300,
        "chemicalType": "gas",
        "gas": "kubejs:beryllium_fluoride",
      },
    },
  )
  event.custom(
    {
      "type": "mekanism:chemical_infusing",
      "leftInput": 
      {
        "amount": 1,
        "gas": "kubejs:sodium_fluoride",
      },
      "output": 
      {
        "amount": 2,
        "gas": "kubejs:Sodium-Beryllium_Fluoride"
      },
      "rightInput": 
      {
        "amount": 1,
        "gas": "kubejs:beryllium_fluoride",
      },
    },
  )
  event.custom(
    {
      "type": "mekanism:rotary",
      "fluidInput": {
        "amount": 1,
        "fluid": "kubejs:reactor_salt"
      },
      "fluidOutput": {
        "amount": 1,
        "fluid": "kubejs:reactor_salt"
      },
      "gasInput": {
        "amount": 1,
        "gas": "kubejs:Sodium-Beryllium_Fluoride"
      },
      "gasOutput": {
        "amount": 1,
        "gas": "kubejs:Sodium-Beryllium_Fluoride"
      }
    }
  )
})
ServerEvents.tags('fluid', event => {
  event.add('forge:liquid_fluorite', 'kubejs:liquid_fluorite')
  event.add("forge:Sodium-Beryllium_Fluoride", "kubejs:Sodium-Beryllium_Fluoride")
})