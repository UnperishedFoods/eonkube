const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')
StartupEvents.registry('mekanism:gas', event => {
    event.createCustom('kubejs:protactinium_oxide', () => new $Gas($GasBuilder.builder().tint(0xb7ebcf)))
})
StartupEvents.registry("item", event => {
    event.create("thorium_grit")
    event.create("thorium_ingot")
    event.create("protactinium")
    event.create("thorium_pellet")
})
StartupEvents.registry('fluid', event => {
    event.create("sbf_salt")
      .displayName("Sodium-beryllium fluoride")
      .stillTexture("kubejs:fluid/sbf_salt_still")
      .flowingTexture("kubejs:fluid/sbf_salt_flowing")
      .bucketColor(0xe9f3ff)
})