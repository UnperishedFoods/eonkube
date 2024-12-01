const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')
StartupEvents.registry('mekanism:gas', event => {
    event.createCustom('kubejs:protactinium_oxide', () => new $Gas($GasBuilder.builder().tint(0xb7ebcf)))
    event.createCustom('kubejs:fluorite_gas', () => new $Gas($GasBuilder.builder().tint(0xc9f3ff)))
    event.createCustom('kubejs:fluorine', () => new $Gas($GasBuilder.builder().tint(0xc3fad2)))
    event.createCustom('kubejs:calcium_ion_gas', () => new $Gas($GasBuilder.builder().tint(0xfff9f2)))
    event.createCustom('kubejs:sodium_fluoride', () => new $Gas($GasBuilder.builder().tint(0xffffff)))
    event.createCustom('kubejs:beryllium_fluoride', () => new $Gas($GasBuilder.builder().tint(0x737373)))
    event.createCustom('kubejs:sbf_salt', () => new $Gas($GasBuilder.builder().tint(0xabc9c3)))
})
StartupEvents.registry("item", event => {
  event.create("thorium_grit")
  event.create("thorium_ingot")
  event.create("protactinium")
  event.create("thorium_pellet")
  event.create("beryllium")
  event.create("crushed_granite")
})
StartupEvents.registry('fluid', event => {
    event.create("liquid_fluorite")
      .displayName("Liquid Fluorite")
      .thinTexture(0xc9f3ff)
      .bucketColor(0xc9f3ff)
})