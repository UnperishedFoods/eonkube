StartupEvents.registry("item", event => {
    event.create("thorium_grit")
    event.create("thorium_ingot")
    event.create("protactinium")
})
StartupEvents.registry('fluid', event => {
    event.create('protactinium_oxide')
    .thinTexture(0xb7ebcf)
    .bucketColor(0xb7ebcf)
    .displayName('Protactinium Oxide')
    .gaseous()
})