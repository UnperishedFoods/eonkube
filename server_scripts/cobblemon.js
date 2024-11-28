ServerEvents.recipes((event) => {
  event.shaped(
    "cobblemon:ability_capsule",
    [
      "DDD",
      "DCD",
      "BAB",
    ],
    {
      A: "minecraft:glass_bottle",
      B: "minecraft:diamond",
      C: "minecraft:ender_pearl",
      D: "#cobblemon:apricorns",
    },
  );
})