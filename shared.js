// shared.js — Shared Magic Item Database
// Loaded by both player.html and dm.html
// Do not define any functions here — data only
// To add items: append to MAGIC_ITEM_DATABASE.items array
// To add homebrew items at runtime: push to MAGIC_ITEM_DATABASE.items from app code
// Source: magic_items_complete.json — 314 items from 11
// Generated from: Dungeon Masters Guide 2014, Xanathar's Guide to Everything, Tasha's Cauldron of Everything, Fizban's Treasury of Dragons, Bigby Presents: Glory of the Giants, Explorer's Guide to Wildemount, Guildmasters' Guide to Ravnica, Eberron: Rising from the Last War, Spelljammer: Adventures in Space, Mordenkainen Presents: Monsters of the Multiverse, Heroes of Faerûn
const MAGIC_ITEM_DATABASE = {
  "version": "1.0",
  "source": "Complete D&D 5e Magic Item Database — All Sources",
  "tables": {
    "A": "Minor Items Common and Uncommon",
    "B": "Minor Items Uncommon",
    "C": "Minor Items Rare and Very Rare",
    "D": "Minor Items Very Rare",
    "E": "Minor Items Legendary",
    "F": "Major Items Uncommon",
    "G": "Major Items Rare",
    "H": "Major Items Very Rare",
    "I": "Major Items Legendary",
    "Special": "Named items not on standard tables"
  },
  "rarities": [
    "Common",
    "Uncommon",
    "Rare",
    "Very Rare",
    "Legendary",
    "Artifact"
  ],
  "types": [
    "Weapon",
    "Armor",
    "Ring",
    "Wand",
    "Rod",
    "Staff",
    "Wondrous Item",
    "Potion",
    "Scroll",
    "Artifact"
  ],
  "items": [
    {
      "id": "bgg_giant_horn",
      "name": "Giant Horn",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 2,
      "value": "Unknown",
      "desc": "Sound as action: giants within 600 ft make DC 14 Wisdom save or frightened 1 minute. Immune for 24 hours after successful save. Once per day.",
      "properties": [
        "Frighten giants within 600 ft DC 14 Wisdom 1 min",
        "Immune for 24 hours after success",
        "Once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "horn",
        "giant",
        "fear",
        "utility"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "bgg_giant_slayer_axe",
      "name": "Giant Slayer",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": false,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 7,
      "value": "Unknown",
      "desc": "+1 attack and damage. Hit giant: +2d6 damage and DC 15 Strength save or fall prone.",
      "properties": [
        "+1 attack and damage",
        "+2d6 damage vs giants",
        "DC 15 Strength or prone vs giants"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "giant slayer",
        "combat"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "bgg_lucent_wand",
      "name": "Lucent Wand",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 1,
      "value": "Unknown",
      "desc": "Crafted by cloud giants. 7 charges regain 1d6+1 at dawn. Cast Daylight 2 charges, Faerie Fire 1, Fog Cloud 1, Lightning Bolt DC 15 at 3, Sunbeam 4.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Daylight Faerie Fire Fog Cloud Lightning Bolt Sunbeam"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "tags": [
        "wand",
        "cloud giant",
        "lightning",
        "light"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "bgg_mighty_servants_of_leuk_o",
      "name": "Mighty Servants of Leuk-o",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 0,
      "value": "Unknown",
      "desc": "Three ebony figurines each summoning a golem: Iron Golem, Stone Golem, Flesh Golem. Each single use then crumbles. Artifact level power.",
      "properties": [
        "Three figurines summon golems once each",
        "Figurine crumbles after use",
        "Artifact level power"
      ],
      "charges": 3,
      "recharge": null,
      "tags": [
        "artifact",
        "golem",
        "summoning",
        "legendary"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "bgg_staff_of_the_giants",
      "name": "Staff of the Giants",
      "rarity": "Very Rare",
      "type": "Staff",
      "table": "Special",
      "attunement": true,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 4,
      "value": "Unknown",
      "desc": "+2 attack and damage. 10 charges regain 1d6+4 at dawn. Cast giant-themed spells: Commune with Nature 3, Conjure Animals giant versions 4, Earthquake 8, Enlarge Reduce DC 15 at 1, Stoneskin 4, Transmute Rock 4.",
      "properties": [
        "+2 attack and damage",
        "10 charges regain 1d6+4 at dawn",
        "Cast multiple giant-themed spells"
      ],
      "charges": 10,
      "recharge": "Dawn",
      "tags": [
        "staff",
        "giant",
        "earth",
        "nature"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "bgg_wayfarer_boots",
      "name": "Wayfarer Boots",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Bigby Presents: Glory of the Giants",
      "sourceTag": "BGG",
      "weight": 1,
      "value": "Unknown",
      "desc": "Walking speed +10 ft. Cast Longstrider on self once per day without spell slot.",
      "properties": [
        "Walking speed plus 10 ft",
        "Cast Longstrider on self once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "boots",
        "giant",
        "speed",
        "movement"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "alchemy_jug",
      "name": "Alchemy Jug",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 12,
      "value": "6000 gp",
      "desc": "Produces chosen liquid once per day: acid 8 oz, ale 1 gal, honey 1 gal, mayonnaise 2 gal, oil 1 qt, poison 0.5 oz, salt water 12 gal, vinegar 2 gal, water 8 gal, wine 1 gal, aqua regia 1 oz.",
      "properties": [
        "Produce specific liquid 1 per day",
        "Weighs 12 lbs regardless",
        "Pour up to 2 gallons per min"
      ],
      "charges": null,
      "recharge": "Dawn",
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "utility",
        "liquid",
        "alchemy"
      ]
    },
    {
      "id": "amulet_of_health",
      "name": "Amulet of Health",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "8000 gp",
      "desc": "Constitution score becomes 19. No effect if already 19 or higher.",
      "properties": [
        "Constitution score becomes 19"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "constitution",
        "enhancement"
      ]
    },
    {
      "id": "amulet_of_proof_against_detection",
      "name": "Amulet of Proof Against Detection and Location",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "20000 gp",
      "desc": "Hidden from divination magic. Cannot be targeted by divination or perceived through scrying sensors.",
      "properties": [
        "Hidden from divination magic",
        "Cannot be scried upon"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "protection",
        "divination",
        "stealth",
        "privacy"
      ]
    },
    {
      "id": "amulet_of_the_planes",
      "name": "Amulet of the Planes",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "160000 gp",
      "desc": "Action: name familiar location on another plane and make DC 15 Intelligence check. Success: cast Plane Shift. Fail: random destination for you and creatures within 15 feet.",
      "properties": [
        "Cast Plane Shift DC 15 Int check",
        "Fail: random planar destination"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "planar travel",
        "teleportation",
        "risky"
      ]
    },
    {
      "id": "animated_shield",
      "name": "Animated Shield",
      "rarity": "Very Rare",
      "type": "Armor",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 6,
      "value": "50000 gp",
      "desc": "Bonus action to animate shield. It hovers and protects you hands-free for 1 minute. Falls if incapacitated or dead.",
      "properties": [
        "Animate hands-free bonus action",
        "Lasts 1 minute",
        "Falls if incapacitated or dead"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "armor",
        "shield",
        "combat",
        "hands-free"
      ]
    },
    {
      "id": "apparatus_of_kwalish",
      "name": "Apparatus of Kwalish",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "E",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 500,
      "value": "250000 gp",
      "desc": "Appears as sealed iron barrel. DC 20 Investigation finds hidden catch revealing hatch for two Medium creatures. Transforms into mechanical lobster. AC 20, 200 HP, swim 30 ft. Ten levers control various functions.",
      "properties": [
        "Transforms into mechanical lobster",
        "Two Medium creatures fit inside",
        "AC 20 200 HP swim 30 ft",
        "Ten levers with various functions"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "E",
      "dmgTable2024": "E",
      "tags": [
        "vehicle",
        "mechanical",
        "underwater",
        "legendary"
      ]
    },
    {
      "id": "armor_of_invulnerability",
      "name": "Armor of Invulnerability",
      "rarity": "Legendary",
      "type": "Armor",
      "table": "E",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "250000 gp",
      "desc": "Resistance to nonmagical damage while wearing. Action: immune to nonmagical damage for 10 minutes once per day.",
      "properties": [
        "Resistance to nonmagical damage",
        "Immune to nonmagical damage 10 min once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "E",
      "dmgTable2024": "E",
      "tags": [
        "armor",
        "protection",
        "legendary",
        "resistance",
        "immunity"
      ]
    },
    {
      "id": "armor_plus1",
      "name": "Armor plus 1",
      "rarity": "Rare",
      "type": "Armor",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "10000 gp",
      "desc": "+1 bonus to AC while wearing.",
      "properties": [
        "+1 AC"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "armor",
        "AC",
        "defense"
      ]
    },
    {
      "id": "armor_plus2",
      "name": "Armor plus 2",
      "rarity": "Very Rare",
      "type": "Armor",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "40000 gp",
      "desc": "+2 bonus to AC while wearing.",
      "properties": [
        "+2 AC"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "armor",
        "AC",
        "defense"
      ]
    },
    {
      "id": "armor_plus3",
      "name": "Armor plus 3",
      "rarity": "Legendary",
      "type": "Armor",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "200000 gp",
      "desc": "+3 bonus to AC while wearing.",
      "properties": [
        "+3 AC"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "armor",
        "AC",
        "defense",
        "legendary"
      ]
    },
    {
      "id": "arrow_of_slaying",
      "name": "Arrow of Slaying",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "600 gp",
      "desc": "Targets specific creature type. Hit: target makes DC 17 Constitution save or takes extra 6d10 piercing damage, half on success. After dealing slaying damage becomes nonmagical arrow.",
      "properties": [
        "DC 17 Con save or 6d10 extra piercing",
        "Targets specific creature type",
        "Becomes nonmagical after slaying damage"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "ammunition",
        "slaying",
        "consumable"
      ]
    },
    {
      "id": "bag_of_devouring",
      "name": "Bag of Devouring",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "0 gp",
      "desc": "Cursed. Appears as Bag of Holding. Reaching inside requires DC 15 Dexterity or arm devoured to elbow. Objects placed inside devoured in 1d4 rounds.",
      "properties": [
        "Cursed appears as Bag of Holding",
        "DC 15 Dex to reach inside or lose arm",
        "Objects devoured in 1d4 rounds"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "cursed",
        "trap",
        "deceptive"
      ]
    },
    {
      "id": "bag_of_holding",
      "name": "Bag of Holding",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 15,
      "value": "4000 gp",
      "desc": "Holds 500 lbs and 64 cubic feet in extradimensional space. Weighs 15 lbs regardless of contents. Retrieve item as action.",
      "properties": [
        "Holds 500 lbs and 64 cubic feet",
        "Weighs 15 lbs regardless",
        "Extradimensional space"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "storage",
        "utility",
        "extradimensional"
      ]
    },
    {
      "id": "bag_of_tricks_gray",
      "name": "Bag of Tricks Gray",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "100 gp",
      "desc": "Gray cloth bag. 3 charges regain at dawn. Throw fuzzy object up to 20 ft as action. Transforms into creature: 1 Weasel 2 Giant Rat 3 Badger 4 Boar 5 Panther 6 Giant Badger 7 Dire Wolf 8 Giant Elk. Vanishes at dawn or 0 HP.",
      "properties": [
        "3 charges regain at dawn",
        "Summon beast from d8 table",
        "Creature vanishes at dawn or 0 HP"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "summoning",
        "utility",
        "beast"
      ]
    },
    {
      "id": "bag_of_tricks_rust",
      "name": "Bag of Tricks Rust",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "100 gp",
      "desc": "Rust colored cloth bag. 3 charges. Summons: 1 Rat 2 Owl 3 Mastiff 4 Goat 5 Giant Goat 6 Giant Boar 7 Lion 8 Brown Bear.",
      "properties": [
        "3 charges regain at dawn",
        "Summon beast from d8 table",
        "Creature vanishes at dawn or 0 HP"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "summoning",
        "utility",
        "beast"
      ]
    },
    {
      "id": "bag_of_tricks_tan",
      "name": "Bag of Tricks Tan",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "100 gp",
      "desc": "Tan cloth bag. 3 charges. Summons: 1 Jackal 2 Ape 3 Baboon 4 Axe Beak 5 Black Bear 6 Giant Weasel 7 Giant Hyena 8 Tiger.",
      "properties": [
        "3 charges regain at dawn",
        "Summon beast from d8 table",
        "Creature vanishes at dawn or 0 HP"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "summoning",
        "utility",
        "beast"
      ]
    },
    {
      "id": "belt_of_giant_strength_cloud",
      "name": "Belt of Cloud Giant Strength",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "200000 gp",
      "desc": "Strength score becomes 27. No effect if already 27 or higher.",
      "properties": [
        "Strength score becomes 27"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant",
        "legendary"
      ]
    },
    {
      "id": "belt_of_dwarvenkind",
      "name": "Belt of Dwarvenkind",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "30000 gp",
      "desc": "Constitution +2 max 20. Advantage on Persuasion with dwarves. 50% chance each dawn of growing a full beard.",
      "properties": [
        "+2 Constitution max 20",
        "Advantage on Persuasion with dwarves",
        "50% daily beard growth"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "constitution",
        "dwarf",
        "social"
      ]
    },
    {
      "id": "belt_of_giant_strength_fire",
      "name": "Belt of Fire Giant Strength",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "40000 gp",
      "desc": "Strength score becomes 25. No effect if already 25 or higher.",
      "properties": [
        "Strength score becomes 25"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant",
        "fire"
      ]
    },
    {
      "id": "belt_of_giant_strength_frost",
      "name": "Belt of Frost Giant Strength",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "40000 gp",
      "desc": "Strength score becomes 23. No effect if already 23 or higher. Associated with frost giants.",
      "properties": [
        "Strength score becomes 23"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant",
        "frost"
      ]
    },
    {
      "id": "belt_of_giant_strength_hill",
      "name": "Belt of Hill Giant Strength",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "12000 gp",
      "desc": "Strength score becomes 21. No effect if already 21 or higher.",
      "properties": [
        "Strength score becomes 21"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant"
      ]
    },
    {
      "id": "belt_of_giant_strength_stone",
      "name": "Belt of Stone Giant Strength",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "40000 gp",
      "desc": "Strength score becomes 23. No effect if already 23 or higher.",
      "properties": [
        "Strength score becomes 23"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant"
      ]
    },
    {
      "id": "belt_of_giant_strength_storm",
      "name": "Belt of Storm Giant Strength",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "C",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "200000 gp",
      "desc": "Strength score becomes 29. No effect if already 29 or higher.",
      "properties": [
        "Strength score becomes 29"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "C",
      "dmgTable2024": "C",
      "tags": [
        "ability score",
        "strength",
        "giant",
        "legendary"
      ]
    },
    {
      "id": "berserker_axe",
      "name": "Berserker Axe",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "Unknown",
      "desc": "+1 attack and damage. Max HP increases by 1 per character level. Cursed: cannot part with axe, disadvantage with other weapons unless no visible enemy within 60 ft. When damaged by hostile creature DC 15 Wisdom or go berserk attacking nearest creature.",
      "properties": [
        "+1 attack and damage",
        "+1 max HP per level",
        "Cursed cannot part with axe",
        "Disadvantage with other weapons near enemies",
        "DC 15 Wisdom when damaged or go berserk"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "axe",
        "cursed",
        "berserk",
        "combat"
      ]
    },
    {
      "id": "boots_of_elvenkind",
      "name": "Boots of Elvenkind",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "2500 gp",
      "desc": "Your steps make no sound regardless of surface. Advantage on Dexterity Stealth checks involving moving silently.",
      "properties": [
        "Steps make no sound",
        "Advantage on Stealth checks for silent movement"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "boots",
        "stealth",
        "elven",
        "movement"
      ]
    },
    {
      "id": "boots_of_levitation",
      "name": "Boots of Levitation",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "4000 gp",
      "desc": "Cast Levitate on yourself at will as action.",
      "properties": [
        "Cast Levitate on self at will"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "boots",
        "levitation",
        "movement",
        "flight"
      ]
    },
    {
      "id": "boots_of_speed",
      "name": "Boots of Speed",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "4000 gp",
      "desc": "Bonus action click heels: double walking speed and opportunity attacks against you have disadvantage. Click again to end. 10 minutes total use per long rest.",
      "properties": [
        "Double walking speed bonus action",
        "Opportunity attacks against you have disadvantage",
        "10 minutes per long rest"
      ],
      "charges": null,
      "recharge": "Long Rest",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "boots",
        "speed",
        "movement",
        "combat"
      ]
    },
    {
      "id": "boots_of_striding_and_springing",
      "name": "Boots of Striding and Springing",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "5000 gp",
      "desc": "Walking speed minimum 30 ft not reduced by encumbrance or heavy armor. Jump three times normal distance.",
      "properties": [
        "Walk speed min 30 ft",
        "Not reduced by encumbrance or heavy armor",
        "Triple jump distance"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "movement",
        "boots"
      ]
    },
    {
      "id": "boots_of_the_winterlands",
      "name": "Boots of the Winterlands",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "5000 gp",
      "desc": "Resistance to cold damage. Ignore difficult terrain from ice and snow. Tolerate -50F without protection or -100F with heavy clothes.",
      "properties": [
        "Resistance to cold damage",
        "Ignore ice and snow difficult terrain",
        "Survive -50F to -100F"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "cold",
        "protection",
        "boots",
        "environment"
      ]
    },
    {
      "id": "bracers_of_archery",
      "name": "Bracers of Archery",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "1500 gp",
      "desc": "Proficiency with longbow and shortbow. +2 damage rolls with longbow and shortbow.",
      "properties": [
        "Proficiency with longbow and shortbow",
        "+2 damage with longbow and shortbow"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "combat",
        "ranged",
        "archery"
      ]
    },
    {
      "id": "brooch_of_shielding",
      "name": "Brooch of Shielding",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1500 gp",
      "desc": "Resistance to force damage. Immunity to damage from Magic Missile spell.",
      "properties": [
        "Resistance to force damage",
        "Immunity to Magic Missile"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "protection",
        "force",
        "defense"
      ]
    },
    {
      "id": "broom_of_flying",
      "name": "Broom of Flying",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 3,
      "value": "8000 gp",
      "desc": "Stand astride and speak command word to fly. Speed 50 ft up to 200 lbs or 30 ft up to 400 lbs. Call from up to 1 mile away as bonus action.",
      "properties": [
        "Flying speed 50 ft capacity 200 lbs",
        "30 ft speed at 200-400 lbs",
        "Call from 1 mile away"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "flight",
        "transport",
        "movement"
      ]
    },
    {
      "id": "candle_of_invocation",
      "name": "Candle of Invocation",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Aligned to a specific deity and alignment. While burning within 30 ft: creatures of same alignment gain advantage on attack rolls, saves, and ability checks. Clerics and druids of same alignment can cast prepared spells without expending slots. Burns for 4 hours total then destroyed.",
      "properties": [
        "Aligned to specific deity and alignment",
        "Advantage on rolls for aligned creatures within 30 ft",
        "Free spell casting for aligned clerics and druids",
        "Burns 4 hours total then destroyed"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "candle",
        "divine",
        "light",
        "ritual",
        "powerful"
      ]
    },
    {
      "id": "cape_of_the_mountebank",
      "name": "Cape of the Mountebank",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "8000 gp",
      "desc": "Smells of brimstone. Cast Dimension Door as action 1 per day. Leave smoke cloud at origin and destination.",
      "properties": [
        "Cast Dimension Door 1 per day",
        "Smoke cloud at origin and destination"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "teleportation",
        "movement",
        "spell"
      ]
    },
    {
      "id": "carpet_of_flying_3x5",
      "name": "Carpet of Flying 3 by 5 feet",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 20,
      "value": "40000 gp",
      "desc": "Flying speed 60 ft. Capacity 200 lbs. Follows spoken commands within 30 ft.",
      "properties": [
        "Flying speed 60 ft",
        "Capacity 200 lbs",
        "Commands within 30 ft"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "flight",
        "transport",
        "movement"
      ]
    },
    {
      "id": "carpet_of_flying_4x6",
      "name": "Carpet of Flying 4 by 6 feet",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 30,
      "value": "60000 gp",
      "desc": "Flying speed 40 ft. Capacity 400 lbs.",
      "properties": [
        "Flying speed 40 ft",
        "Capacity 400 lbs"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "flight",
        "transport",
        "movement"
      ]
    },
    {
      "id": "carpet_of_flying_5x7",
      "name": "Carpet of Flying 5 by 7 feet",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 40,
      "value": "80000 gp",
      "desc": "Flying speed 30 ft. Capacity 600 lbs.",
      "properties": [
        "Flying speed 30 ft",
        "Capacity 600 lbs"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "flight",
        "transport",
        "movement"
      ]
    },
    {
      "id": "circlet_of_blasting",
      "name": "Circlet of Blasting",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1500 gp",
      "desc": "Cast Scorching Ray as action with plus 5 attack bonus. Resets at dawn.",
      "properties": [
        "Cast Scorching Ray 1 per day",
        "+5 spell attack bonus"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "combat",
        "fire",
        "spell"
      ]
    },
    {
      "id": "cloak_of_arachnida",
      "name": "Cloak of Arachnida",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "25000 gp",
      "desc": "Resistance to poison. Climbing speed equals walking speed. Walk on walls and ceilings hands-free. Immune to webs. Move through webs as difficult terrain. Cast Web DC 13 twice per day.",
      "properties": [
        "Resistance to poison",
        "Climbing speed equals walking speed",
        "Walk on walls and ceilings",
        "Immune to webs",
        "Cast Web DC 13 twice per day"
      ],
      "charges": 2,
      "recharge": "Dawn",
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "climbing",
        "spider",
        "movement",
        "combat"
      ]
    },
    {
      "id": "cloak_of_displacement",
      "name": "Cloak of Displacement",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "60000 gp",
      "desc": "Projects illusion making you appear elsewhere. All attackers have disadvantage on attack rolls against you. Suppressed until start of next turn when you take damage. Suppressed while incapacitated or restrained.",
      "properties": [
        "Attackers have disadvantage on attacks against you",
        "Suppressed when taking damage until next turn",
        "Suppressed when incapacitated or restrained"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "cloak",
        "defense",
        "illusion",
        "displacement",
        "protection"
      ]
    },
    {
      "id": "cloak_of_elvenkind",
      "name": "Cloak of Elvenkind",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "5000 gp",
      "desc": "Hood up: Perception checks to see you have disadvantage and you have advantage on Stealth checks to hide. Hood up or down requires action.",
      "properties": [
        "Hood up: Perception checks to see you have disadvantage",
        "Hood up: Advantage on Stealth checks to hide"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "cloak",
        "stealth",
        "elven",
        "camouflage"
      ]
    },
    {
      "id": "cloak_of_invisibility",
      "name": "Cloak of Invisibility",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "E",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "80000 gp",
      "desc": "Pull hood up as action to become invisible including worn and carried items. 2 hours total use per day in 1-minute increments. Recharges at dawn.",
      "properties": [
        "Invisible while hood up",
        "2 hours of use per day",
        "Recharges at dawn"
      ],
      "charges": null,
      "recharge": "Dawn",
      "dmgTable2014": "E",
      "dmgTable2024": "E",
      "tags": [
        "invisibility",
        "stealth",
        "legendary"
      ]
    },
    {
      "id": "cloak_of_protection",
      "name": "Cloak of Protection",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "3500 gp",
      "desc": "+1 bonus to AC and saving throws while wearing.",
      "properties": [
        "+1 AC",
        "+1 to all saving throws"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "protection",
        "defense",
        "AC",
        "saves"
      ]
    },
    {
      "id": "cloak_of_the_manta_ray",
      "name": "Cloak of the Manta Ray",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "B",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "6000 gp",
      "desc": "Hood up: breathe underwater and swimming speed 60 ft. Pulling hood up or down requires action.",
      "properties": [
        "Breathe underwater hood up",
        "Swimming speed 60 ft hood up"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "B",
      "dmgTable2024": "B",
      "tags": [
        "underwater",
        "movement",
        "swimming"
      ]
    },
    {
      "id": "crystal_ball_basic",
      "name": "Crystal Ball",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 7,
      "value": "50000 gp",
      "desc": "While touching cast Scrying save DC 17 once per day.",
      "properties": [
        "Cast Scrying DC 17 once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "divination",
        "scrying",
        "spell"
      ]
    },
    {
      "id": "crystal_ball_telepathy",
      "name": "Crystal Ball of Telepathy",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 7,
      "value": "100000 gp",
      "desc": "Cast Scrying. While scrying communicate telepathically with creatures within 30 ft of sensor and cast Suggestion DC 17 at will through sensor.",
      "properties": [
        "Cast Scrying",
        "Telepathy through sensor",
        "Cast Suggestion DC 17 at will through sensor"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "divination",
        "telepathy",
        "scrying",
        "legendary"
      ]
    },
    {
      "id": "crystal_ball_truesight",
      "name": "Crystal Ball of True Seeing",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "D",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 7,
      "value": "100000 gp",
      "desc": "Cast Scrying. While scrying have truesight with 120-ft radius centered on sensor.",
      "properties": [
        "Cast Scrying",
        "Truesight 120 ft through sensor"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "D",
      "dmgTable2024": "D",
      "tags": [
        "divination",
        "truesight",
        "scrying",
        "legendary"
      ]
    },
    {
      "id": "cubic_gate",
      "name": "Cubic Gate",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "E",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "150000 gp",
      "desc": "3-inch cube. Six sides keyed to different planes. Press a side as action to open a gate. Press twice to cast Plane Shift DC 17. 3 charges, regain 1d3 at dawn.",
      "properties": [
        "Six sides keyed to planes",
        "Open gates to other planes",
        "Cast Plane Shift DC 17",
        "3 charges regain 1d3 at dawn"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "E",
      "dmgTable2024": "E",
      "tags": [
        "planar",
        "gates",
        "legendary",
        "teleportation"
      ]
    },
    {
      "id": "deck_of_many_things",
      "name": "Deck of Many Things",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "E",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "13 or 22 ivory or vellum cards. Declare count before drawing then draw randomly. Each card takes effect immediately. Draw within 1 hour of previous draw. Cards: Balance, Comet, Donjon, Euryale, Fates, Flames, Fool, Gem, Idiot, Jester, Key, Knight, Moon, Rogue, Ruin, Skull, Star, Sun, Talons, Throne, Vizier, Void.",
      "properties": [
        "13 or 22 cards",
        "Declare count before drawing",
        "Immediate random effects",
        "1 hour between draws"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "E",
      "dmgTable2024": "E",
      "tags": [
        "legendary",
        "random",
        "chaos",
        "powerful"
      ]
    },
    {
      "id": "dust_of_disappearance",
      "name": "Dust of Disappearance",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "300 gp",
      "desc": "One use. Throw as action: you and creatures and objects within 10 feet become invisible for 2d4 minutes.",
      "properties": [
        "One use",
        "Invisibility 2d4 min in 10 ft radius"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "stealth",
        "consumable",
        "invisibility"
      ]
    },
    {
      "id": "dust_of_dryness",
      "name": "Dust of Dryness",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "120 gp",
      "desc": "1d6+4 pinches. Sprinkle on water to absorb a 15-ft cube into a marble pellet. Smash pellet to release water.",
      "properties": [
        "1d6+4 pinches",
        "Absorb 15-ft water cube per pinch",
        "Smash pellet to release"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "utility",
        "consumable",
        "water"
      ]
    },
    {
      "id": "dust_of_sneezing_and_choking",
      "name": "Dust of Sneezing and Choking",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "100 gp",
      "desc": "Appears as Dust of Disappearance. One use. DC 15 Constitution save or incapacitated 1 minute from sneezing within 30 feet.",
      "properties": [
        "One use",
        "DC 15 Con or incapacitated 1 min 30 ft",
        "Cursed appears as Dust of Disappearance"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "trap",
        "consumable",
        "deceptive",
        "cursed"
      ]
    },
    {
      "id": "elemental_gem",
      "name": "Elemental Gem",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "300 gp",
      "desc": "Break to summon elemental as Conjure Elemental. Blue sapphire: air. Yellow diamond: earth. Red corundum: fire. Emerald: water.",
      "properties": [
        "One use: summon elemental",
        "Gem color determines element type"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "summoning",
        "consumable",
        "elemental"
      ]
    },
    {
      "id": "eversmoking_bottle",
      "name": "Eversmoking Bottle",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "300 gp",
      "desc": "Remove stopper as action: thick smoke pours out 60-ft radius heavily obscured expanding 10 ft per minute up to 120 ft. Replace stopper to stop smoke.",
      "properties": [
        "Smoke cloud 60 ft radius heavily obscured",
        "Expands 10 ft per min to 120 ft max",
        "Replace stopper to stop"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "utility",
        "obscurement",
        "smoke"
      ]
    },
    {
      "id": "eye_of_vecna",
      "name": "Eye of Vecna",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "Must gouge out own eye and press artifact into socket to attune. Eye grafts to head. Alignment becomes neutral evil. Gain truesight. Cast Clairvoyance, Crown of Madness, Disintegrate, Dominate Monster, and Eyebite. Additional random properties.",
      "properties": [
        "Must remove own eye to attune",
        "Truesight",
        "Cast Clairvoyance Crown of Madness Disintegrate Dominate Monster Eyebite",
        "Alignment becomes neutral evil",
        "Random properties"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "artifact",
        "vecna",
        "body modification",
        "legendary",
        "evil",
        "powerful"
      ]
    },
    {
      "id": "eyes_of_charming",
      "name": "Eyes of Charming",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "3000 gp",
      "desc": "Crystal lenses over eyes. 3 charges: expend 1 as action to cast Charm Person DC 13 on humanoid within 30 ft. Regain all at dawn.",
      "properties": [
        "3 charges regain at dawn",
        "Cast Charm Person DC 13 within 30 ft"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "social",
        "charm",
        "spell"
      ]
    },
    {
      "id": "eyes_of_minute_seeing",
      "name": "Eyes of Minute Seeing",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "2500 gp",
      "desc": "See clearly within 1 foot. Advantage on Investigation checks relying on sight when examining objects or areas within 1 foot.",
      "properties": [
        "See clearly within 1 foot",
        "Advantage on Investigation close range"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "perception",
        "investigation"
      ]
    },
    {
      "id": "eyes_of_the_eagle",
      "name": "Eyes of the Eagle",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "A",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "2500 gp",
      "desc": "Advantage on Perception checks relying on sight. In clear visibility see fine details at extreme distances.",
      "properties": [
        "Advantage on Perception sight",
        "See details at extreme distances"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "perception",
        "vision"
      ]
    },
    {
      "id": "flame_tongue",
      "name": "Flame Tongue",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "5000 gp",
      "desc": "Bonus action to ignite blade: deals extra 2d6 fire damage on hits and sheds bright light 40 ft dim 40 ft. Bonus action or dropping or sheathing extinguishes.",
      "properties": [
        "+2d6 fire damage while ablaze",
        "Bright light 40 ft dim 40 ft",
        "Bonus action to activate or deactivate"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "fire",
        "combat",
        "light"
      ]
    },
    {
      "id": "frost_brand",
      "name": "Frost Brand",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "22000 gp",
      "desc": "Extra 1d6 cold damage on hit. Resistance to fire while holding. In freezing temperatures sheds bright light 10 ft dim 10 ft. When drawn extinguish nonmagical flames within 30 ft once per hour.",
      "properties": [
        "+1d6 cold damage on hit",
        "Resistance to fire damage",
        "Extinguish nonmagical flames 30 ft once per hour",
        "Light in freezing temperatures"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "cold",
        "combat",
        "fire resistance"
      ]
    },
    {
      "id": "gauntlets_of_ogre_power",
      "name": "Gauntlets of Ogre Power",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "8000 gp",
      "desc": "Strength score becomes 19. No effect if Strength is already 19 or higher.",
      "properties": [
        "Strength score becomes 19"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "gauntlets",
        "strength",
        "ability score",
        "enhancement"
      ]
    },
    {
      "id": "gem_of_seeing",
      "name": "Gem of Seeing",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "32000 gp",
      "desc": "3 charges regain 1d3 at dawn. Speak command word and expend 1 charge: truesight 120 ft for 10 minutes while peering through gem.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Truesight 120 ft for 10 min per charge"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "gem",
        "truesight",
        "vision",
        "detection"
      ]
    },
    {
      "id": "gloves_of_missile_snaring",
      "name": "Gloves of Missile Snaring",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "When ranged weapon attack hits you, reaction: reduce damage by 1d10 plus Dex modifier with free hand. If reduced to 0 you can catch the missile if small enough to hold.",
      "properties": [
        "Reaction: reduce ranged attack damage by 1d10 plus Dex",
        "Can catch missiles at 0 damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "gloves",
        "defense",
        "ranged",
        "reaction"
      ]
    },
    {
      "id": "gloves_of_swimming_and_climbing",
      "name": "Gloves of Swimming and Climbing",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "2000 gp",
      "desc": "Climbing and swimming cost no extra movement. Plus 5 bonus to Athletics checks to climb or swim.",
      "properties": [
        "Climbing costs no extra movement",
        "Swimming costs no extra movement",
        "+5 to Athletics checks to climb or swim"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "gloves",
        "swimming",
        "climbing",
        "movement",
        "athletics"
      ]
    },
    {
      "id": "hammer_of_thunderbolts",
      "name": "Hammer of Thunderbolts",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 10,
      "value": "Unknown",
      "desc": "+1 attack and damage. With Belt of Giant Strength and Gauntlets of Ogre Power: +4 attack and damage. Natural 20 vs giant: DC 17 Con save or die. 5 charges regain 1d4+1 at dawn: throw as ranged attack 20 ft or 60 ft for 5d6 plus 4 thunder in 30-ft radius DC 17 Str or stunned.",
      "properties": [
        "+1 attack and damage, +4 with belt and gauntlets",
        "Natural 20 vs giants: DC 17 Con or die",
        "5 charges: throw for 5d6+4 thunder 30 ft radius",
        "Requires Belt of Giant Strength and Gauntlets of Ogre Power"
      ],
      "charges": 5,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "hammer",
        "legendary",
        "giant",
        "thunder",
        "powerful"
      ]
    },
    {
      "id": "hand_of_vecna",
      "name": "Hand of Vecna",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "Must cut off own hand and press artifact against stump to attune. Hand grafts as replacement. Alignment becomes neutral evil. Cold immunity. Cast Finger of Death once per day. Dominate undead within 30 ft as bonus action.",
      "properties": [
        "Must cut off own hand to attune",
        "Becomes replacement hand",
        "Alignment becomes neutral evil",
        "Cold immunity",
        "Cast Finger of Death once per day",
        "Dominate undead within 30 ft bonus action"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "artifact",
        "vecna",
        "body modification",
        "legendary",
        "evil",
        "powerful"
      ]
    },
    {
      "id": "headband_of_intellect",
      "name": "Headband of Intellect",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "8000 gp",
      "desc": "Intelligence score becomes 19. No effect if Intelligence is already 19 or higher.",
      "properties": [
        "Intelligence score becomes 19"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "headband",
        "intelligence",
        "ability score",
        "enhancement"
      ]
    },
    {
      "id": "helm_of_brilliance",
      "name": "Helm of Brilliance",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 3,
      "value": "25000 gp",
      "desc": "Set with gems each usable once. Daylight from opal, Fireball DC 18 from fire opal, Prismatic Spray DC 18 from diamond, Wall of Fire DC 18 from ruby. Undead within 30 ft have disadvantage on attacks. Gem destroyed on use. Fire damage while wearing: DC 10 Dex or helm becomes inert. Sheds light based on gems remaining.",
      "properties": [
        "Gems each cast a spell once",
        "Fireball Daylight Prismatic Spray Wall of Fire",
        "Undead disadvantage on attacks within 30 ft",
        "Gems destroyed on use"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "helm",
        "fire",
        "light",
        "spellcasting",
        "radiant",
        "powerful"
      ]
    },
    {
      "id": "helm_of_comprehending_languages",
      "name": "Helm of Comprehending Languages",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 3,
      "value": "500 gp",
      "desc": "Cast Comprehend Languages at will as action while wearing.",
      "properties": [
        "Cast Comprehend Languages at will"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "helm",
        "languages",
        "utility",
        "communication"
      ]
    },
    {
      "id": "helm_of_telepathy",
      "name": "Helm of Telepathy",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 3,
      "value": "24000 gp",
      "desc": "Cast Detect Thoughts DC 13. While concentrating: bonus action to send and receive telepathic messages with focused creature. Cast Suggestion DC 13 on focused creature as action.",
      "properties": [
        "Cast Detect Thoughts DC 13",
        "Telepathic messaging with focused creature",
        "Cast Suggestion DC 13 on focused creature"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "helm",
        "telepathy",
        "detection",
        "mind",
        "spell"
      ]
    },
    {
      "id": "helm_of_teleportation",
      "name": "Helm of Teleportation",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 3,
      "value": "Unknown",
      "desc": "3 charges regain all at dawn. Expend 1 charge as action to cast Teleport from it.",
      "properties": [
        "3 charges regain all at dawn",
        "Cast Teleport per charge"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "helm",
        "teleportation",
        "movement",
        "spell"
      ]
    },
    {
      "id": "holy_avenger",
      "name": "Holy Avenger",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "165000 gp",
      "desc": "+3 attack and damage. Extra 2d10 radiant vs fiends and undead. 10-ft aura grants you and allies advantage on saves vs spells and magical effects. Aura extends to 30 ft at Paladin level 17. Paladin only.",
      "properties": [
        "+3 attack and damage",
        "+2d10 radiant vs fiends and undead",
        "Aura: advantage on magic saves 10 ft",
        "Aura 30 ft at Paladin 17",
        "Paladin attunement only"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "weapon",
        "paladin",
        "radiant",
        "legendary",
        "aura",
        "divine"
      ]
    },
    {
      "id": "ioun_stone_absorption",
      "name": "Ioun Stone of Absorption",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "50000 gp",
      "desc": "Pale lavender ellipsoid orbits head. Reaction: cancel a spell of 4th level or lower targeting only you. 20 total spell levels before burning out and becoming dull gray.",
      "properties": [
        "Cancel spells level 4 or lower as reaction",
        "20 total spell levels before burning out"
      ],
      "charges": 20,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "spell absorption",
        "defense",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_agility",
      "name": "Ioun Stone of Agility",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Deep red sphere orbits head. Dexterity score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Dexterity max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "dexterity",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_fortitude",
      "name": "Ioun Stone of Fortitude",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Pink rhomboid orbits head. Constitution score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Constitution max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "constitution",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_insight",
      "name": "Ioun Stone of Insight",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Incandescent blue sphere orbits head. Wisdom score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Wisdom max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "wisdom",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_intellect",
      "name": "Ioun Stone of Intellect",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Marbled scarlet and blue sphere orbits head. Intelligence score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Intelligence max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "intelligence",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_leadership",
      "name": "Ioun Stone of Leadership",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Marbled pink and green sphere orbits head. Charisma score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Charisma max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "charisma",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_mastery",
      "name": "Ioun Stone of Mastery",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "100000 gp",
      "desc": "Pale green prism orbits head. Proficiency bonus increases by 1.",
      "properties": [
        "+1 proficiency bonus"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "proficiency",
        "legendary",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_protection",
      "name": "Ioun Stone of Protection",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1200 gp",
      "desc": "Dusty rose prism orbits head. +1 bonus to AC.",
      "properties": [
        "+1 AC"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "AC",
        "protection",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_reserve",
      "name": "Ioun Stone of Reserve",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "2000 gp",
      "desc": "Vibrant purple prism orbits head. Stores up to 3 levels of spells. Any creature can cast spells of 1st through 3rd level into it by touching while casting.",
      "properties": [
        "Stores up to 3 spell levels",
        "Any caster can store spells by touch"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "spell storage",
        "orbiting",
        "arcane"
      ]
    },
    {
      "id": "ioun_stone_strength",
      "name": "Ioun Stone of Strength",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "30000 gp",
      "desc": "Pale blue rhomboid orbits head. Strength score increases by 2 to maximum of 20.",
      "properties": [
        "+2 Strength max 20"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "strength",
        "ability score",
        "orbiting"
      ]
    },
    {
      "id": "ioun_stone_sustenance",
      "name": "Ioun Stone of Sustenance",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Iridescent spindle orbits head. You do not need to eat or drink while it orbits.",
      "properties": [
        "No need to eat or drink"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ioun stone",
        "sustenance",
        "survival",
        "orbiting"
      ]
    },
    {
      "id": "iron_flask",
      "name": "Iron Flask",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "I",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "Action: speak command word targeting extraplanar creature within 60 ft. DC 17 Wisdom save or trapped in flask. Flask holds 1 creature at a time. Trapped creature does not age, eat, drink, or breathe. Previous captives have advantage on save. Release as action: creature serves you for 1 hour then free.",
      "properties": [
        "Trap extraplanar creatures DC 17 Wisdom",
        "Holds 1 creature indefinitely",
        "Previous captives have advantage",
        "Release: serves 1 hour then free"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "legendary",
        "trap",
        "extraplanar",
        "containment"
      ]
    },
    {
      "id": "javelin_of_lightning",
      "name": "Javelin of Lightning",
      "rarity": "Uncommon",
      "type": "Weapon",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "1500 gp",
      "desc": "Hurl and speak command word: 5-ft wide 120-ft lightning bolt. Creatures in line make DC 13 Dex save 4d6 lightning half on success. Hit target takes javelin damage plus 4d6 lightning. Lightning mode resets at dawn.",
      "properties": [
        "Throw as 120 ft lightning bolt 4d6 DC 13 Dex",
        "Hit target takes plus 4d6 lightning",
        "Lightning mode once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "lightning",
        "ranged",
        "combat"
      ]
    },
    {
      "id": "lantern_of_revealing",
      "name": "Lantern of Revealing",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "5000 gp",
      "desc": "Burns 6 hours per pint of oil. Bright light 30 ft dim 30 ft. Invisible creatures and objects are visible in bright light. Action to lower hood reducing to dim 5 ft.",
      "properties": [
        "Bright light 30 ft dim 30 ft",
        "Reveals invisible in bright light",
        "6 hours per pint of oil",
        "Can lower hood to dim 5 ft"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "lantern",
        "light",
        "detection",
        "invisible",
        "utility"
      ]
    },
    {
      "id": "luck_blade",
      "name": "Luck Blade",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "200000 gp",
      "desc": "+1 attack, damage, and saving throws. Luck: reroll one attack, check, or save once per day. Wish: 1d4-1 charges, cast Wish per charge. Loses Wish property at 0 charges.",
      "properties": [
        "+1 attack damage and saves",
        "Reroll one roll once per day",
        "1d4-1 Wish charges",
        "Loses Wish at 0 charges"
      ],
      "charges": null,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "weapon",
        "luck",
        "wish",
        "legendary",
        "saves"
      ]
    },
    {
      "id": "mace_of_disruption",
      "name": "Mace of Disruption",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "8000 gp",
      "desc": "Extra 2d6 radiant vs fiends and undead. If target has 25 or fewer HP after damage: DC 15 Wisdom save or destroyed. Fiend sent home, undead destroyed. Successful save: frightened until end of your next turn.",
      "properties": [
        "+2d6 radiant vs fiends and undead",
        "DC 15 Wisdom or destroyed at 25 HP or less",
        "Frightened on successful save"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "radiant",
        "undead",
        "fiend",
        "combat"
      ]
    },
    {
      "id": "mace_of_smiting",
      "name": "Mace of Smiting",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "5000 gp",
      "desc": "+1 attack and damage, +3 vs constructs. Natural 20: +2d6 bludgeoning, +4d6 vs constructs. If construct has 25 HP or fewer after crit it is destroyed.",
      "properties": [
        "+1 attack and damage, +3 vs constructs",
        "Crit: +2d6 bludgeoning or +4d6 vs constructs",
        "Destroys constructs at 25 HP or less on crit"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "bludgeoning",
        "construct",
        "combat"
      ]
    },
    {
      "id": "mace_of_terror",
      "name": "Mace of Terror",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "8000 gp",
      "desc": "3 charges: as action release wave of terror 30-ft radius. DC 15 Wisdom save or frightened 1 minute. Regain 1d3 at dawn.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Terror wave 30 ft DC 15 Wisdom frightened 1 min"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "fear",
        "terror",
        "combat"
      ]
    },
    {
      "id": "mantle_of_spell_resistance",
      "name": "Mantle of Spell Resistance",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "30000 gp",
      "desc": "Advantage on saving throws against spells while wearing.",
      "properties": [
        "Advantage on saves against spells"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "protection",
        "spell resistance",
        "defense",
        "saves"
      ]
    },
    {
      "id": "manual_of_bodily_health",
      "name": "Manual of Bodily Health",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Constitution score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Constitution by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "manual",
        "constitution",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "manual_of_gainful_exercise",
      "name": "Manual of Gainful Exercise",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Strength score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Strength by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "manual",
        "strength",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "manual_of_quickness_of_action",
      "name": "Manual of Quickness of Action",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Dexterity score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Dexterity by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "manual",
        "dexterity",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "medallion_of_thoughts",
      "name": "Medallion of Thoughts",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "3000 gp",
      "desc": "3 charges regain 1d3 at dawn. Expend 1 as action to cast Detect Thoughts DC 13.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Cast Detect Thoughts DC 13"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "medallion",
        "telepathy",
        "detection",
        "mind",
        "spell"
      ]
    },
    {
      "id": "mirror_of_life_trapping",
      "name": "Mirror of Life Trapping",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 50,
      "value": "18000 gp",
      "desc": "4-foot mirror. When activated, creatures that see their reflection make DC 15 Charisma save or trapped in one of 12 extradimensional cells. Creatures knowing mirror true nature auto-succeed. Release creature by speaking name as action. All released if mirror destroyed.",
      "properties": [
        "12 extradimensional cells",
        "DC 15 Charisma save or trapped",
        "Release by speaking creature name",
        "All released if mirror destroyed"
      ],
      "charges": 12,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "mirror",
        "trap",
        "extraplanar",
        "containment",
        "powerful"
      ]
    },
    {
      "id": "necklace_of_adaptation",
      "name": "Necklace of Adaptation",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1500 gp",
      "desc": "Breathe normally in any environment. Advantage on saves against harmful gases and vapors including Cloudkill, Stinking Cloud, inhaled poisons, and some dragon breath weapons.",
      "properties": [
        "Breathe in any environment",
        "Advantage on saves vs harmful gases"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "necklace",
        "breathing",
        "protection",
        "utility",
        "environment"
      ]
    },
    {
      "id": "necklace_of_fireballs",
      "name": "Necklace of Fireballs",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Has 1d6+3 beads. Detach and throw up to 60 ft as action: detonates as 3rd-level Fireball DC 15 save. Each extra bead thrown simultaneously raises spell level by 1.",
      "properties": [
        "1d6+3 beads",
        "Each bead equals 3rd-level Fireball DC 15",
        "Extra beads raise spell level",
        "Throw multiple at once"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "combat",
        "fire",
        "fireball",
        "consumable",
        "area"
      ]
    },
    {
      "id": "pearl_of_power",
      "name": "Pearl of Power",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Action speak command word: recover one expended spell slot of up to 3rd level. Once used cannot be used again until next dawn.",
      "properties": [
        "Recover spell slot up to 3rd level once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "pearl",
        "spellcasting",
        "recovery",
        "utility"
      ]
    },
    {
      "id": "periapt_of_health",
      "name": "Periapt of Health",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Immune to contracting diseases. Existing disease effects are suppressed while wearing.",
      "properties": [
        "Immune to contracting diseases",
        "Suppresses existing disease effects"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "protection",
        "disease",
        "utility"
      ]
    },
    {
      "id": "periapt_of_proof_against_poison",
      "name": "Periapt of Proof Against Poison",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Immune to poisoned condition and poison damage.",
      "properties": [
        "Immunity to poisoned condition",
        "Immunity to poison damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "protection",
        "poison",
        "immunity",
        "defense"
      ]
    },
    {
      "id": "periapt_of_wound_closure",
      "name": "Periapt of Wound Closure",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "Auto-stabilize when dying at start of your turn. Whenever you roll a Hit Die to regain HP double the result.",
      "properties": [
        "Auto-stabilize when dying",
        "Double HP from Hit Dice healing"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "periapt",
        "healing",
        "stability",
        "defense"
      ]
    },
    {
      "id": "pipes_of_haunting",
      "name": "Pipes of Haunting",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "12000 gp",
      "desc": "Requires wind instrument proficiency. 3 charges regain 1d3 at dawn. Play as action expending 1 charge: eerie tune, DC 15 Wisdom save or frightened 1 minute within 30 ft.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "DC 15 Wisdom or frightened 1 min within 30 ft",
        "Requires wind instrument proficiency"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "pipes",
        "music",
        "fear",
        "utility",
        "bard"
      ]
    },
    {
      "id": "pipes_of_the_sewers",
      "name": "Pipes of the Sewers",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "2000 gp",
      "desc": "Requires wind instrument proficiency. Ordinary and giant rats are indifferent to you. 3 charges regain 1d3+1 at dawn. Play then bonus action expend 1 to 3 charges: summon one swarm of rats per charge from nearby.",
      "properties": [
        "Rats are indifferent to you",
        "3 charges regain 1d3+1 at dawn",
        "Summon rat swarms 1 per charge",
        "Requires wind instrument proficiency"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "pipes",
        "music",
        "rats",
        "summoning",
        "utility"
      ]
    },
    {
      "id": "portable_hole",
      "name": "Portable Hole",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "8000 gp",
      "desc": "Fine black cloth folds to handkerchief size. Unfold on solid surface as action: creates 6-ft diameter 10-ft deep extradimensional hole. Air lasts 10 minutes for one Medium creature. Placing inside Bag of Holding creates planar rift destroying both.",
      "properties": [
        "6 ft diameter 10 ft deep extradimensional hole",
        "Air lasts 10 min for one Medium creature",
        "Folds to handkerchief size",
        "Placing in Bag of Holding creates planar rift"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "portable hole",
        "storage",
        "extradimensional",
        "utility"
      ]
    },
    {
      "id": "potion_animal_friendship",
      "name": "Potion of Animal Friendship",
      "rarity": "Uncommon",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "100 gp",
      "desc": "Cast Animal Friendship spell save DC 13 for 1 hour at will after drinking.",
      "properties": [
        "Cast Animal Friendship DC 13 for 1 hour"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "social",
        "consumable",
        "spell",
        "potion"
      ]
    },
    {
      "id": "potion_climbing",
      "name": "Potion of Climbing",
      "rarity": "Common",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "75 gp",
      "desc": "Gain climbing speed equal to walking speed for 1 hour and advantage on Athletics checks to climb.",
      "properties": [
        "Climbing speed = walk speed for 1 hour",
        "Advantage on Athletics climbing"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "movement",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_flying",
      "name": "Potion of Flying",
      "rarity": "Very Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "500 gp",
      "desc": "Flying speed equal to walking speed for 1 hour. Can hover. Fall if airborne when it expires without other means.",
      "properties": [
        "Flying speed = walking speed for 1 hour",
        "Can hover"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "flight",
        "consumable",
        "movement",
        "potion"
      ]
    },
    {
      "id": "potion_gaseous_form",
      "name": "Potion of Gaseous Form",
      "rarity": "Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "300 gp",
      "desc": "Gain Gaseous Form effect for 1 hour with no concentration required. Bonus action to end early.",
      "properties": [
        "Gaseous Form for 1 hour no concentration",
        "Bonus action to end early"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "transformation",
        "consumable",
        "movement",
        "potion"
      ]
    },
    {
      "id": "potion_greater_healing",
      "name": "Potion of Greater Healing",
      "rarity": "Uncommon",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "150 gp",
      "desc": "You regain 4d4+4 hit points when you drink this potion.",
      "properties": [
        "Heal 4d4+4 HP"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "healing",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_growth",
      "name": "Potion of Growth",
      "rarity": "Uncommon",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "270 gp",
      "desc": "Gain enlarge effect of Enlarge/Reduce for 1d4 hours with no concentration required.",
      "properties": [
        "Enlarge effect for 1d4 hours",
        "No concentration required"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "transformation",
        "consumable",
        "strength",
        "potion"
      ]
    },
    {
      "id": "potion_healing",
      "name": "Potion of Healing",
      "rarity": "Common",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "50 gp",
      "desc": "You regain 2d4+2 hit points when you drink this potion. The potion red liquid glimmers when agitated.",
      "properties": [
        "Heal 2d4+2 HP"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "healing",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_heroism",
      "name": "Potion of Heroism",
      "rarity": "Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "180 gp",
      "desc": "For 1 hour: gain 10 temporary HP and Bless effect with no concentration required.",
      "properties": [
        "10 temporary HP for 1 hour",
        "Bless effect for 1 hour no concentration"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "combat",
        "consumable",
        "buff",
        "potion"
      ]
    },
    {
      "id": "potion_invisibility",
      "name": "Potion of Invisibility",
      "rarity": "Very Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "180 gp",
      "desc": "Become invisible for 1 hour. Effect ends on attack or spell cast.",
      "properties": [
        "Invisible for 1 hour",
        "Ends on attack or spell cast"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "invisibility",
        "stealth",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_mind_reading",
      "name": "Potion of Mind Reading",
      "rarity": "Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "180 gp",
      "desc": "Gain Detect Thoughts effect save DC 13 for 1 minute.",
      "properties": [
        "Detect Thoughts DC 13 for 1 minute"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "telepathy",
        "consumable",
        "detection",
        "potion"
      ]
    },
    {
      "id": "potion_poison",
      "name": "Potion of Poison",
      "rarity": "Uncommon",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "100 gp",
      "desc": "Appears as beneficial potion. Drinking deals 3d6 poison damage and DC 13 Constitution save or be poisoned taking 3d6 poison at start of each turn until save succeeds.",
      "properties": [
        "3d6 poison damage",
        "DC 13 Con save or poisoned",
        "3d6 ongoing poison per turn",
        "Cursed appears as healing potion"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "poison",
        "consumable",
        "deceptive",
        "cursed",
        "potion"
      ]
    },
    {
      "id": "potion_speed",
      "name": "Potion of Speed",
      "rarity": "Very Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "400 gp",
      "desc": "Gain Haste effect for 1 minute with no concentration required.",
      "properties": [
        "Haste effect for 1 minute no concentration"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "speed",
        "combat",
        "consumable",
        "haste",
        "potion"
      ]
    },
    {
      "id": "potion_superior_healing",
      "name": "Potion of Superior Healing",
      "rarity": "Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "450 gp",
      "desc": "You regain 8d4+8 hit points when you drink this potion.",
      "properties": [
        "Heal 8d4+8 HP"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "healing",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_supreme_healing",
      "name": "Potion of Supreme Healing",
      "rarity": "Very Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "1350 gp",
      "desc": "You regain 10d4+20 hit points when you drink this potion.",
      "properties": [
        "Heal 10d4+20 HP"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "healing",
        "consumable",
        "potion"
      ]
    },
    {
      "id": "potion_vitality",
      "name": "Potion of Vitality",
      "rarity": "Very Rare",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "960 gp",
      "desc": "Remove exhaustion. Cure disease and poison. For 24 hours regain maximum HP from any Hit Die spent.",
      "properties": [
        "Remove exhaustion",
        "Cure disease and poison",
        "Maximum HP from Hit Dice for 24 hours"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "healing",
        "consumable",
        "recovery",
        "potion"
      ]
    },
    {
      "id": "potion_water_breathing",
      "name": "Potion of Water Breathing",
      "rarity": "Uncommon",
      "type": "Potion",
      "table": "A",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "180 gp",
      "desc": "Breathe underwater for 1 hour after drinking.",
      "properties": [
        "Breathe underwater for 1 hour"
      ],
      "charges": 1,
      "recharge": null,
      "dmgTable2014": "A",
      "dmgTable2024": "A",
      "tags": [
        "movement",
        "consumable",
        "underwater",
        "potion"
      ]
    },
    {
      "id": "restorative_ointment",
      "name": "Restorative Ointment",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "400 gp",
      "desc": "Glass jar with 1d4+1 doses. Swallow or apply to skin as action: regain 2d8+2 HP, cease being poisoned, and cure any disease.",
      "properties": [
        "1d4+1 doses",
        "Heal 2d8+2 HP per dose",
        "Cure poisoned condition",
        "Cure disease"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ointment",
        "healing",
        "consumable",
        "disease",
        "poison"
      ]
    },
    {
      "id": "ring_of_acid_resistance",
      "name": "Ring of Acid Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to acid damage.",
      "properties": [
        "Resistance to acid damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "acid",
        "protection"
      ]
    },
    {
      "id": "ring_of_animal_influence",
      "name": "Ring of Animal Influence",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "10000 gp",
      "desc": "3 charges regain 1d3 at dawn. Cast Animal Friendship DC 13, Fear vs beasts Int 3 or less DC 13, or Speak with Animals for 1 charge each.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Cast Animal Friendship DC 13",
        "Cast Fear vs beasts DC 13",
        "Cast Speak with Animals"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "animals",
        "social",
        "spell"
      ]
    },
    {
      "id": "ring_of_cold_resistance",
      "name": "Ring of Cold Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to cold damage.",
      "properties": [
        "Resistance to cold damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "cold",
        "protection"
      ]
    },
    {
      "id": "ring_of_evasion",
      "name": "Ring of Evasion",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "25000 gp",
      "desc": "3 charges regain 1d3 at dawn. Reaction: expend 1 charge to succeed on a failed Dexterity saving throw.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Reaction: succeed on failed Dexterity save"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "defense",
        "dexterity",
        "saves",
        "reaction"
      ]
    },
    {
      "id": "ring_of_feather_falling",
      "name": "Ring of Feather Falling",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "2000 gp",
      "desc": "Descend 60 ft per round when falling. Take no damage from falling.",
      "properties": [
        "Descend 60 ft per round when falling",
        "No falling damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "protection",
        "falling",
        "movement"
      ]
    },
    {
      "id": "ring_of_fire_resistance",
      "name": "Ring of Fire Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to fire damage.",
      "properties": [
        "Resistance to fire damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "fire",
        "protection"
      ]
    },
    {
      "id": "ring_of_force_resistance",
      "name": "Ring of Force Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to force damage.",
      "properties": [
        "Resistance to force damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "force",
        "protection"
      ]
    },
    {
      "id": "ring_of_free_action",
      "name": "Ring of Free Action",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "35000 gp",
      "desc": "Difficult terrain costs no extra movement. Magic cannot reduce your speed or impose paralyzed or restrained conditions.",
      "properties": [
        "Ignore difficult terrain",
        "Immune to magical speed reduction",
        "Immune to paralyzed and restrained from magic"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "movement",
        "freedom",
        "immunity"
      ]
    },
    {
      "id": "ring_of_invisibility",
      "name": "Ring of Invisibility",
      "rarity": "Legendary",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "50000 gp",
      "desc": "Action: turn invisible with worn and carried items. Remain invisible until ring removed, attack made, spell cast, or bonus action to end.",
      "properties": [
        "Turn invisible as action",
        "Invisible until attack spell remove or bonus action",
        "Bonus action to end"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "invisibility",
        "legendary",
        "stealth"
      ]
    },
    {
      "id": "ring_of_lightning_resistance",
      "name": "Ring of Lightning Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to lightning damage.",
      "properties": [
        "Resistance to lightning damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "lightning",
        "protection"
      ]
    },
    {
      "id": "ring_of_mind_shielding",
      "name": "Ring of Mind Shielding",
      "rarity": "Uncommon",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "16000 gp",
      "desc": "Immune to magic that reads thoughts, detects lies, reveals alignment, or reveals creature type. Control telepathic contact. Ring can be made invisible as action.",
      "properties": [
        "Immune to thought reading",
        "Immune to lie detection",
        "Immune to alignment detection",
        "Control telepathic contact",
        "Ring can become invisible"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "mental protection",
        "privacy",
        "utility"
      ]
    },
    {
      "id": "ring_of_necrotic_resistance",
      "name": "Ring of Necrotic Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to necrotic damage.",
      "properties": [
        "Resistance to necrotic damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "necrotic",
        "protection"
      ]
    },
    {
      "id": "ring_of_poison_resistance",
      "name": "Ring of Poison Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to poison damage.",
      "properties": [
        "Resistance to poison damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "poison",
        "protection"
      ]
    },
    {
      "id": "ring_of_protection",
      "name": "Ring of Protection",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "3500 gp",
      "desc": "+1 bonus to AC and saving throws while wearing.",
      "properties": [
        "+1 AC",
        "+1 to all saving throws"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "protection",
        "AC",
        "saves",
        "defense"
      ]
    },
    {
      "id": "ring_of_psychic_resistance",
      "name": "Ring of Psychic Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to psychic damage.",
      "properties": [
        "Resistance to psychic damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "psychic",
        "protection"
      ]
    },
    {
      "id": "ring_of_radiant_resistance",
      "name": "Ring of Radiant Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to radiant damage.",
      "properties": [
        "Resistance to radiant damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "radiant",
        "protection"
      ]
    },
    {
      "id": "ring_of_regeneration",
      "name": "Ring of Regeneration",
      "rarity": "Very Rare",
      "type": "Ring",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "50000 gp",
      "desc": "Regain 1d6 HP every 10 minutes if at 1 or more HP. Lost body parts regrow in 1d6+1 days if you maintain at least 1 HP throughout.",
      "properties": [
        "Regain 1d6 HP per 10 minutes",
        "Regrow lost body parts in 1d6+1 days"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "ring",
        "healing",
        "regeneration",
        "defense"
      ]
    },
    {
      "id": "ring_of_shooting_stars",
      "name": "Ring of Shooting Stars",
      "rarity": "Very Rare",
      "type": "Ring",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "50000 gp",
      "desc": "Cast Dancing Lights and Light at will in dim light or darkness. 6 charges regain 1d6 at dawn. Faerie Fire 1 charge DC 15. Ball Lightning 2 charges creates 1 to 4 lightning spheres. Shooting Stars 1 to 3 charges deals 4d6 lightning to up to 3 targets per charge.",
      "properties": [
        "Dancing Lights and Light at will in dim or dark",
        "6 charges regain 1d6 at dawn",
        "Faerie Fire 1 charge DC 15",
        "Ball Lightning 2 charges",
        "Shooting Stars 1 to 3 charges 4d6 lightning"
      ],
      "charges": 6,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "ring",
        "lightning",
        "light",
        "combat",
        "utility"
      ]
    },
    {
      "id": "ring_of_spell_storing",
      "name": "Ring of Spell Storing",
      "rarity": "Rare",
      "type": "Ring",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "24000 gp",
      "desc": "Stores up to 5 levels of spells total. Any creature can cast spells of 1st through 5th level into ring by touching it. Attuned wearer can cast stored spells using original caster spell DC and attack bonus.",
      "properties": [
        "Store up to 5 spell levels",
        "Any caster can store spells",
        "Wearer casts stored spells with original caster stats"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "ring",
        "spellcasting",
        "storage",
        "utility"
      ]
    },
    {
      "id": "ring_of_spell_turning",
      "name": "Ring of Spell Turning",
      "rarity": "Legendary",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "50000 gp",
      "desc": "Advantage on saves vs spells targeting only you. If you roll a natural 20 and the spell is 7th level or lower the spell is reflected back at the caster using their own spell save DC and attack bonus.",
      "properties": [
        "Advantage on saves vs spells targeting only you",
        "Natural 20: reflect spell back at caster 7th level or lower"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "spell resistance",
        "legendary",
        "reflection",
        "defense"
      ]
    },
    {
      "id": "ring_of_swimming",
      "name": "Ring of Swimming",
      "rarity": "Uncommon",
      "type": "Ring",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "3000 gp",
      "desc": "Swimming speed of 40 feet while wearing.",
      "properties": [
        "Swimming speed 40 ft"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "swimming",
        "movement",
        "underwater"
      ]
    },
    {
      "id": "ring_of_telekinesis",
      "name": "Ring of Telekinesis",
      "rarity": "Very Rare",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "45000 gp",
      "desc": "Cast Telekinesis at will but can only target objects not being worn or carried.",
      "properties": [
        "Cast Telekinesis at will",
        "Objects only not worn or carried"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "telekinesis",
        "utility",
        "powerful"
      ]
    },
    {
      "id": "ring_of_three_wishes",
      "name": "Ring of Three Wishes",
      "rarity": "Legendary",
      "type": "Ring",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "150000 gp",
      "desc": "3 charges no recharge. Expend 1 as action to cast Wish. Ring becomes nonmagical when last charge used.",
      "properties": [
        "3 charges no recharge",
        "Cast Wish per charge",
        "Becomes nonmagical when empty"
      ],
      "charges": 3,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "ring",
        "wish",
        "legendary",
        "powerful"
      ]
    },
    {
      "id": "ring_of_thunder_resistance",
      "name": "Ring of Thunder Resistance",
      "rarity": "Rare",
      "type": "Ring",
      "table": "G",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Resistance to thunder damage.",
      "properties": [
        "Resistance to thunder damage"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "ring",
        "resistance",
        "thunder",
        "protection"
      ]
    },
    {
      "id": "ring_of_warmth",
      "name": "Ring of Warmth",
      "rarity": "Uncommon",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1000 gp",
      "desc": "Resistance to cold damage. You and everything worn and carried are unharmed by temperatures as low as -50 degrees Fahrenheit.",
      "properties": [
        "Resistance to cold damage",
        "Protection from extreme cold to -50F"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "cold resistance",
        "protection",
        "environment"
      ]
    },
    {
      "id": "ring_of_water_walking",
      "name": "Ring of Water Walking",
      "rarity": "Uncommon",
      "type": "Ring",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1500 gp",
      "desc": "Stand on and move across any liquid surface as if it were solid ground.",
      "properties": [
        "Walk on any liquid surface"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "water walking",
        "movement",
        "utility"
      ]
    },
    {
      "id": "ring_of_x_ray_vision",
      "name": "Ring of X-Ray Vision",
      "rarity": "Rare",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "6000 gp",
      "desc": "Action speak command: x-ray vision 30-ft radius for 1 minute. Penetrates 1 ft stone, 1 inch metal, 3 ft wood or dirt. Each use after first requires DC 15 Constitution save or gain one level of exhaustion.",
      "properties": [
        "X-ray vision 30 ft for 1 minute",
        "Penetrates stone metal wood and dirt",
        "DC 15 Con save after first use or exhaustion"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "ring",
        "vision",
        "detection",
        "exploration"
      ]
    },
    {
      "id": "ring_of_the_ram",
      "name": "Ring of the Ram",
      "rarity": "Rare",
      "type": "Ring",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "5000 gp",
      "desc": "3 charges regain 1d3 at dawn. As action expend 1 to 3 charges: spectral ram head attacks creature within 60 ft with +7 to hit. Per charge: 2d10 force damage and push 5 ft.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Spectral ram attack +7 to hit",
        "2d10 force and push 5 ft per charge"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "ring",
        "force",
        "combat",
        "push"
      ]
    },
    {
      "id": "robe_of_eyes",
      "name": "Robe of Eyes",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "30000 gp",
      "desc": "See in all directions. Advantage on Perception relying on sight. Darkvision 120 ft. See invisible creatures and objects and into Ethereal Plane to 120 ft. Light spell blinds for 1 minute with no save.",
      "properties": [
        "See in all directions",
        "Advantage on Perception sight",
        "Darkvision 120 ft",
        "See invisible and into Ethereal Plane 120 ft",
        "Light spell blinds for 1 minute"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "robe",
        "vision",
        "perception",
        "truesight",
        "powerful"
      ]
    },
    {
      "id": "robe_of_scintillating_colors",
      "name": "Robe of Scintillating Colors",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "27000 gp",
      "desc": "3 charges regain 1d3 at dawn. Action expend 1 charge: shifting color pattern until end of next turn. Sheds bright light 30 ft dim 30 ft. Attackers have disadvantage. Creatures in bright light that see you make DC 15 Wisdom or stunned until effect ends.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Shifting colors: attackers have disadvantage",
        "Bright light 30 ft dim 30 ft",
        "DC 15 Wisdom or stunned in bright light"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "robe",
        "light",
        "defense",
        "stun",
        "distraction"
      ]
    },
    {
      "id": "robe_of_stars",
      "name": "Robe of Stars",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "200000 gp",
      "desc": "+1 to saving throws. 6 throwing stars sewn in as magic ranged weapons: 60 ft normal 180 ft long range, 4d6 radiant on hit, disappear after attack. While unconscious can travel to Astral Plane.",
      "properties": [
        "+1 to saving throws",
        "6 throwing stars 4d6 radiant",
        "Travel to Astral Plane while unconscious"
      ],
      "charges": 6,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "robe",
        "radiant",
        "saves",
        "combat",
        "stars"
      ]
    },
    {
      "id": "robe_of_the_archmagi",
      "name": "Robe of the Archmagi",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "250000 gp",
      "desc": "Unarmored AC equals 15 plus Dex modifier. Advantage on saves vs spells and magical effects. Spell save DC plus 2. Spell attack bonus plus 2. Sorcerer, warlock, or wizard only.",
      "properties": [
        "AC 15 plus Dex unarmored",
        "Advantage on saves vs spells and magic",
        "Spell save DC plus 2",
        "Spell attack bonus plus 2",
        "Sorcerer warlock or wizard only"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "wondrous",
        "arcane",
        "legendary",
        "spellcasting",
        "defense"
      ]
    },
    {
      "id": "rod_of_absorption",
      "name": "Rod of Absorption",
      "rarity": "Very Rare",
      "type": "Rod",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "50000 gp",
      "desc": "Reaction: absorb a spell targeting only you. Spell canceled, energy stored as spell levels. Up to 50 total levels lifetime. Stored levels can fuel your own spellcasting. Cannot absorb after 50 levels total.",
      "properties": [
        "Absorb spells targeting only you as reaction",
        "Store up to 50 spell levels lifetime",
        "Use stored levels for spellcasting"
      ],
      "charges": 50,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "rod",
        "spell absorption",
        "defense",
        "arcane"
      ]
    },
    {
      "id": "rod_of_alertness",
      "name": "Rod of Alertness",
      "rarity": "Very Rare",
      "type": "Rod",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "80000 gp",
      "desc": "Advantage on Perception and initiative. Cast Detect Evil and Good, Detect Magic, Detect Poison and Disease, or See Invisibility at will. Plant in ground: grows into tree overnight granting 30-ft protective aura of advantage on saves.",
      "properties": [
        "Advantage on Perception and initiative",
        "Cast detection spells at will",
        "Plant for protective aura tree"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "rod",
        "detection",
        "perception",
        "initiative",
        "aura"
      ]
    },
    {
      "id": "rod_of_lordly_might",
      "name": "Rod of Lordly Might",
      "rarity": "Legendary",
      "type": "Rod",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 2,
      "value": "Unknown",
      "desc": "+3 attack and damage as magic mace. Six buttons with various functions: Flame Tongue effect, paralysis DC 17 Strength, drain 2d4+2 HP, ladder up to 50 ft, battering ram dealing 2d10 bludgeoning, and detect certain creature types within 60 ft.",
      "properties": [
        "+3 attack and damage as mace",
        "Six button functions",
        "Flame Tongue effect",
        "Paralysis DC 17 Strength",
        "Drain 2d4+2 HP",
        "Extend as ladder up to 50 ft"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "rod",
        "legendary",
        "combat",
        "utility",
        "versatile"
      ]
    },
    {
      "id": "sentinel_shield",
      "name": "Sentinel Shield",
      "rarity": "Uncommon",
      "type": "Armor",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 6,
      "value": "5000 gp",
      "desc": "While holding: advantage on initiative rolls and Wisdom Perception checks.",
      "properties": [
        "Advantage on initiative",
        "Advantage on Perception checks"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "armor",
        "shield",
        "initiative",
        "perception"
      ]
    },
    {
      "id": "shield_plus1",
      "name": "Shield plus 1",
      "rarity": "Uncommon",
      "type": "Armor",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 6,
      "value": "1500 gp",
      "desc": "+1 bonus to AC in addition to the shield normal bonus.",
      "properties": [
        "+1 AC bonus"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "armor",
        "shield",
        "AC",
        "defense"
      ]
    },
    {
      "id": "shield_plus2",
      "name": "Shield plus 2",
      "rarity": "Rare",
      "type": "Armor",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 6,
      "value": "4000 gp",
      "desc": "+2 bonus to AC in addition to shield normal bonus.",
      "properties": [
        "+2 AC bonus"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "armor",
        "shield",
        "AC",
        "defense"
      ]
    },
    {
      "id": "shield_plus3",
      "name": "Shield plus 3",
      "rarity": "Very Rare",
      "type": "Armor",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 6,
      "value": "16000 gp",
      "desc": "+3 bonus to AC in addition to shield normal bonus.",
      "properties": [
        "+3 AC bonus"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "armor",
        "shield",
        "AC",
        "defense"
      ]
    },
    {
      "id": "slippers_of_spider_climbing",
      "name": "Slippers of Spider Climbing",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "F",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0.5,
      "value": "5000 gp",
      "desc": "Move up down and across vertical surfaces and upside down along ceilings hands-free. Climbing speed equals walking speed. Does not work on slippery surfaces.",
      "properties": [
        "Climb walls and ceilings hands-free",
        "Climbing speed equals walking speed",
        "Does not work on slippery surfaces"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "movement",
        "climbing",
        "spider"
      ]
    },
    {
      "id": "sphere_of_annihilation",
      "name": "Sphere of Annihilation",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "I",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "2-foot black sphere. Annihilates all non-artifact matter it touches or passes through. DC 25 Intelligence check to control movement. Two spheres meeting create a planar rift that destroys both.",
      "properties": [
        "Annihilates all non-artifact matter",
        "DC 25 Intelligence to control",
        "Two spheres create a planar rift"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "legendary",
        "destruction",
        "powerful",
        "dangerous"
      ]
    },
    {
      "id": "staff_of_power",
      "name": "Staff of Power",
      "rarity": "Very Rare",
      "type": "Staff",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "95000 gp",
      "desc": "+2 attack, damage as quarterstaff, AC, saves, and spell attack rolls. 20 charges regain 2d8+4 at dawn. Spells available: Magic Missile 1 charge, Ray of Enfeeblement 1, Levitate 2, Fireball DC 17 at 5, Hold Monster DC 17 at 5, Telekinesis 5, Wall of Force 5, Lightning Bolt DC 17 at 5, Cone of Cold DC 17 at 5, Globe of Invulnerability 6. Retributive Strike: break staff for 16d6 force in 30-ft radius DC 17 Dex half.",
      "properties": [
        "+2 attack damage AC saves and spell attacks",
        "20 charges regain 2d8+4 at dawn",
        "Multiple powerful spells available",
        "Retributive Strike 16d6 force 30 ft radius"
      ],
      "charges": 20,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "staff",
        "arcane",
        "combat",
        "spellcasting",
        "powerful"
      ]
    },
    {
      "id": "staff_of_striking",
      "name": "Staff of Striking",
      "rarity": "Very Rare",
      "type": "Staff",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "71960 gp",
      "desc": "+3 attack and damage as quarterstaff. 10 charges regain 1d6+4 at dawn. On melee hit expend 1 to 3 charges for +1d6 force damage per charge.",
      "properties": [
        "+3 attack and damage",
        "10 charges regain 1d6+4 at dawn",
        "+1d6 force per charge on hit max 3"
      ],
      "charges": 10,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "staff",
        "force",
        "combat",
        "melee"
      ]
    },
    {
      "id": "staff_of_swarming_insects",
      "name": "Staff of Swarming Insects",
      "rarity": "Rare",
      "type": "Staff",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "16000 gp",
      "desc": "10 charges regain 1d6+4 at dawn. Roll d20 on last charge: 1 destroys staff. Cast Giant Insect 4 charges or Insect Plague 5 charges using your spell save DC. Insect Cloud: 1 charge for harmless swarm 30-ft radius.",
      "properties": [
        "10 charges regain 1d6+4 at dawn",
        "Cast Giant Insect 4 charges",
        "Cast Insect Plague 5 charges",
        "Insect Cloud 30 ft radius 1 charge",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 10,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "staff",
        "insects",
        "nature",
        "druid",
        "combat"
      ]
    },
    {
      "id": "staff_of_thunder_and_lightning",
      "name": "Staff of Thunder and Lightning",
      "rarity": "Very Rare",
      "type": "Staff",
      "table": "H",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "50000 gp",
      "desc": "+2 attack and damage. Each property usable once per day: Lightning adds 2d6 on hit, Thunder stuns DC 17 Con on hit, Lightning Strike deals 9d6 in 5 by 120 ft line, Thunderclap deals 3d6 thunder 60-ft radius DC 17 Con or stunned, Thunder and Lightning combines both.",
      "properties": [
        "+2 attack and damage",
        "Lightning 2d6 on hit once per day",
        "Thunder stun DC 17 Con once per day",
        "Lightning Strike 9d6 line once per day",
        "Thunderclap 3d6 thunder 60 ft once per day"
      ],
      "charges": null,
      "recharge": "Dawn",
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "staff",
        "lightning",
        "thunder",
        "combat",
        "powerful"
      ]
    },
    {
      "id": "staff_of_the_magi",
      "name": "Staff of the Magi",
      "rarity": "Legendary",
      "type": "Staff",
      "table": "I",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "320000 gp",
      "desc": "+2 attack, damage, and spell attack rolls. Spell Absorption: advantage on saves vs spells; reaction to absorb spells targeting only you gaining charges equal to spell level, explodes if over 50. 50 charges regain 4d6+2 at dawn. Spells: Conjure Elemental 7, Dispel Magic 3, Fireball DC 17 at 7, Flaming Sphere DC 17 at 2, Ice Storm 4, Invisibility 2, Knock 2, Lightning Bolt DC 17 at 7, Passwall 5, Plane Shift DC 17 at 7, Telekinesis 5, Wall of Fire 4, Web DC 17 at 2. Retributive Strike: break for 17d6 force 30-ft radius DC 17 Dex for half. Sorcerer warlock or wizard only.",
      "properties": [
        "+2 attack damage and spell attacks",
        "Spell Absorption as reaction",
        "50 charges regain 4d6+2 at dawn",
        "Multiple powerful spells",
        "Retributive Strike 17d6 force 30 ft radius",
        "Sorcerer warlock or wizard only"
      ],
      "charges": 50,
      "recharge": "Dawn",
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "staff",
        "arcane",
        "legendary",
        "spellcasting",
        "powerful",
        "absorption"
      ]
    },
    {
      "id": "staff_of_the_python",
      "name": "Staff of the Python",
      "rarity": "Uncommon",
      "type": "Staff",
      "table": "F",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 4,
      "value": "6000 gp",
      "desc": "Throw within 10 ft and speak command word: becomes Giant Constrictor Snake under your control. Mental commands within 60 ft. Bonus action to revert. Destroyed if killed as snake.",
      "properties": [
        "Transform into Giant Constrictor Snake",
        "Mental commands within 60 ft",
        "Bonus action to revert",
        "Destroyed if killed as snake"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "staff",
        "summoning",
        "snake",
        "combat"
      ]
    },
    {
      "id": "stone_of_good_luck",
      "name": "Stone of Good Luck Luckstone",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "4200 gp",
      "desc": "While on your person you gain +1 to ability checks and saving throws.",
      "properties": [
        "+1 to ability checks",
        "+1 to saving throws"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "stone",
        "luck",
        "ability checks",
        "saves",
        "utility"
      ]
    },
    {
      "id": "sun_blade",
      "name": "Sun Blade",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "12000 gp",
      "desc": "Longsword hilt. Bonus action: blade of radiance springs out or disappears. While active: finesse property, +2 attack and damage, deals radiant instead of slashing. +1d8 radiant vs undead. Sheds sunlight bright 15 ft dim 15 ft. Proficient if proficient with shortswords or longswords.",
      "properties": [
        "+2 attack and damage",
        "Deals radiant instead of slashing",
        "Finesse property",
        "+1d8 radiant vs undead",
        "Sunlight bright 15 ft dim 15 ft",
        "Bonus action activate or deactivate"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "radiant",
        "undead",
        "light",
        "finesse",
        "sunlight"
      ]
    },
    {
      "id": "sword_of_answering",
      "name": "Sword of Answering",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "I",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "Unknown",
      "desc": "+3 attack and damage. When a creature damages you, use reaction to make one melee attack against it. Advantage on this attack. Damage from this attack ignores all immunities and resistances. Alignment specific attunement.",
      "properties": [
        "+3 attack and damage",
        "Reaction: attack creature that damaged you",
        "Advantage on reaction attack",
        "Ignore all immunities and resistances on reaction attack",
        "Alignment specific"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "weapon",
        "legendary",
        "reaction",
        "combat",
        "powerful"
      ]
    },
    {
      "id": "sword_of_life_stealing",
      "name": "Sword of Life Stealing",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "Unknown",
      "desc": "Natural 20 vs creature that is not a construct or undead: target takes extra 3d6 necrotic damage and you gain 3d6 temporary HP.",
      "properties": [
        "Natural 20: +3d6 necrotic not vs constructs or undead",
        "Natural 20: gain 3d6 temporary HP"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "necrotic",
        "life stealing",
        "combat",
        "critical"
      ]
    },
    {
      "id": "sword_of_sharpness",
      "name": "Sword of Sharpness",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "Unknown",
      "desc": "Maximize damage dice against objects on hit. Natural 20 vs creature: extra 4d6 slashing. Roll another d20 on a 20: sever one limb. Ignores resistance to slashing damage.",
      "properties": [
        "Maximize damage vs objects",
        "Natural 20: +4d6 slashing",
        "Double 20: sever limb",
        "Ignore slashing resistance"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "slashing",
        "critical",
        "limb",
        "powerful"
      ]
    },
    {
      "id": "sword_of_wounding",
      "name": "Sword of Wounding",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "Unknown",
      "desc": "HP lost to this weapon can only be recovered by rest not magic or regeneration. Once per turn on hit: wound target. At start of wounded creature turn it takes 1d4 necrotic per wound then makes DC 15 Constitution save to end all wounds on success.",
      "properties": [
        "Wounds cannot be magically healed only by rest",
        "1d4 necrotic per wound at start of target turn",
        "DC 15 Con save to end all wounds",
        "Wounds stack"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "weapon",
        "necrotic",
        "wound",
        "powerful",
        "persistent damage"
      ]
    },
    {
      "id": "talisman_of_pure_good",
      "name": "Talisman of Pure Good",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "I",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "150000 gp",
      "desc": "Non-good creatures take 6d6 radiant on touch, evil creatures take 8d6. Good clerics and paladins gain +2 spell attack rolls and can use as holy symbol. 7 charges: evil creature within 120 ft makes DC 20 Dex save or falls into flaming fissure and is destroyed. Destroyed on last charge. Good cleric or paladin only.",
      "properties": [
        "+2 spell attacks for good clerics and paladins",
        "7 charges destroy evil creatures DC 20 Dex",
        "Damages non-good on touch",
        "Good cleric or paladin only",
        "Destroyed on last charge"
      ],
      "charges": 7,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "talisman",
        "divine",
        "good",
        "legendary",
        "powerful"
      ]
    },
    {
      "id": "talisman_of_ultimate_evil",
      "name": "Talisman of Ultimate Evil",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "I",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "150000 gp",
      "desc": "Non-evil creatures take 6d6 necrotic on touch, good creatures take 8d6. Evil clerics and paladins gain +2 spell attack rolls and can use as holy symbol. 6 charges: destroy good creatures. Evil cleric or paladin only.",
      "properties": [
        "+2 spell attacks for evil clerics and paladins",
        "6 charges destroy good creatures",
        "Damages non-evil on touch",
        "Evil cleric or paladin only"
      ],
      "charges": 6,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "talisman",
        "evil",
        "legendary",
        "powerful",
        "necrotic"
      ]
    },
    {
      "id": "talisman_of_the_sphere",
      "name": "Talisman of the Sphere",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "Advantage on Intelligence checks to control a Sphere of Annihilation. Can move the sphere up to 10 ft in any direction as bonus action while within 60 ft.",
      "properties": [
        "Advantage on Intelligence checks to control Sphere of Annihilation",
        "Move sphere 10 ft as bonus action within 60 ft"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "talisman",
        "legendary",
        "sphere",
        "control"
      ]
    },
    {
      "id": "tome_of_clear_thought",
      "name": "Tome of Clear Thought",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Intelligence score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Intelligence by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "tome",
        "intelligence",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "tome_of_leadership_and_influence",
      "name": "Tome of Leadership and Influence",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Charisma score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Charisma by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "tome",
        "charisma",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "tome_of_understanding",
      "name": "Tome of Understanding",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 5,
      "value": "Unknown",
      "desc": "Study 48 hours over 6 days or fewer: Wisdom score and maximum each increase by 2. Loses magic then regains after 100 years.",
      "properties": [
        "Permanently increase Wisdom by 2",
        "48 hours study over 6 days or fewer",
        "Loses magic regains after 100 years"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "tome",
        "wisdom",
        "permanent",
        "ability score",
        "study"
      ]
    },
    {
      "id": "vorpal_sword",
      "name": "Vorpal Sword",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "I",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "200000 gp",
      "desc": "+3 attack and damage. Ignores resistance to slashing damage. Natural 20 vs creature with at least one head: cut off one head, creature dies unless it can survive without it.",
      "properties": [
        "+3 attack and damage",
        "Ignore slashing resistance",
        "Natural 20: decapitate and creature dies if cannot survive"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "I",
      "dmgTable2024": "I",
      "tags": [
        "weapon",
        "slashing",
        "legendary",
        "decapitation",
        "combat"
      ]
    },
    {
      "id": "wand_of_binding",
      "name": "Wand of Binding",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Hold Monster 5 charges DC 17. Hold Person 2 charges DC 17.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Hold Monster 5 charges DC 17",
        "Cast Hold Person 2 charges DC 17",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "control",
        "hold",
        "spell",
        "combat"
      ]
    },
    {
      "id": "wand_of_enemy_detection",
      "name": "Wand of Enemy Detection",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Action expend 1 charge: know direction of nearest hostile creature within 60 ft for 1 minute. Roll d20 on last charge: 1 destroys wand.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Know direction of nearest hostile within 60 ft for 1 min",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "detection",
        "enemy",
        "exploration",
        "utility"
      ]
    },
    {
      "id": "wand_of_fear",
      "name": "Wand of Fear",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Command 1 charge DC 15 flee or grovel. Cone of Fear 2 charges 60-ft cone DC 15 Wisdom or frightened 1 minute.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Command flee or grovel 1 charge DC 15",
        "Cone of Fear 60 ft 2 charges DC 15 Wisdom",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "fear",
        "control",
        "combat",
        "spell"
      ]
    },
    {
      "id": "wand_of_fireballs",
      "name": "Wand of Fireballs",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Cast Fireball DC 15: 1 charge equals 3rd level each extra charge raises spell level by 1.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Fireball DC 15 1 charge equals 3rd level",
        "Extra charges raise spell level",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "fire",
        "fireball",
        "combat",
        "area",
        "spell"
      ]
    },
    {
      "id": "wand_of_lightning_bolts",
      "name": "Wand of Lightning Bolts",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Cast Lightning Bolt DC 15: 1 charge equals 3rd level each extra charge raises spell level by 1.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Lightning Bolt DC 15 1 charge equals 3rd level",
        "Extra charges raise spell level",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "lightning",
        "combat",
        "area",
        "spell"
      ]
    },
    {
      "id": "wand_of_magic_detection",
      "name": "Wand of Magic Detection",
      "rarity": "Uncommon",
      "type": "Wand",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "1500 gp",
      "desc": "3 charges. Expend 1 as action to cast Detect Magic. Regain 1d3 at dawn.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Cast Detect Magic"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "wand",
        "detection",
        "magic",
        "divination"
      ]
    },
    {
      "id": "wand_of_magic_missiles",
      "name": "Wand of Magic Missiles",
      "rarity": "Uncommon",
      "type": "Wand",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "8000 gp",
      "desc": "7 charges. Cast Magic Missile: 1 charge equals 1st level each extra charge adds 1 level. Regain 1d6+1 at dawn. On last charge roll d20: 1 destroys wand.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Magic Missile 1 charge equals 1st level",
        "Destroyed on d20 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "wand",
        "combat",
        "force",
        "spell"
      ]
    },
    {
      "id": "wand_of_paralysis",
      "name": "Wand of Paralysis",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Action expend 1 charge: blue ray targets creature within 60 ft, DC 15 Constitution save or paralyzed 1 minute. Save again at end of each turn.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Paralyze target 60 ft DC 15 Constitution 1 minute",
        "Save each turn to end",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "paralysis",
        "control",
        "combat",
        "spell"
      ]
    },
    {
      "id": "wand_of_polymorph",
      "name": "Wand of Polymorph",
      "rarity": "Very Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Action expend 1 charge to cast Polymorph DC 15.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Polymorph DC 15",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "polymorph",
        "transformation",
        "control",
        "spell"
      ]
    },
    {
      "id": "wand_of_secrets",
      "name": "Wand of Secrets",
      "rarity": "Uncommon",
      "type": "Wand",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "1500 gp",
      "desc": "3 charges. Expend 1 as action: wand pulses and points at nearest secret door or trap within 30 ft. Regain 1d3 at dawn.",
      "properties": [
        "3 charges regain 1d3 at dawn",
        "Detect nearest secret door or trap within 30 ft"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "wand",
        "detection",
        "exploration",
        "traps"
      ]
    },
    {
      "id": "wand_of_web",
      "name": "Wand of Web",
      "rarity": "Uncommon",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Action expend 1 charge to cast Web DC 15.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Cast Web DC 15",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "web",
        "control",
        "combat",
        "spell"
      ]
    },
    {
      "id": "wand_of_wonder",
      "name": "Wand of Wonder",
      "rarity": "Rare",
      "type": "Wand",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "7 charges regain 1d6+1 at dawn. Roll d20 on last charge: 1 destroys wand. Action expend 1 charge target creature object or point within 120 ft then roll d100 for random effect. Spell save DC 15.",
      "properties": [
        "7 charges regain 1d6+1 at dawn",
        "Roll d100 for random effect within 120 ft",
        "Spell save DC 15",
        "Destroyed on 1 when last charge used"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wand",
        "random",
        "chaos",
        "utility",
        "powerful"
      ]
    },
    {
      "id": "weapon_of_warning",
      "name": "Weapon of Warning",
      "rarity": "Uncommon",
      "type": "Weapon",
      "table": "F",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "6000 gp",
      "desc": "Advantage on initiative. You and allies within 30 ft cannot be surprised except by nonmagical sleep. Awakens sleeping allies within 30 ft when combat begins.",
      "properties": [
        "Advantage on initiative",
        "Party cannot be surprised within 30 ft",
        "Awakens sleeping allies on combat start"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "weapon",
        "initiative",
        "defense",
        "warning"
      ]
    },
    {
      "id": "weapon_plus1",
      "name": "Weapon plus 1",
      "rarity": "Uncommon",
      "type": "Weapon",
      "table": "F",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "1000 gp",
      "desc": "+1 bonus to attack and damage rolls.",
      "properties": [
        "+1 to attack rolls",
        "+1 to damage rolls"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "weapon",
        "combat",
        "bonus"
      ]
    },
    {
      "id": "weapon_plus2",
      "name": "Weapon plus 2",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "G",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "4000 gp",
      "desc": "+2 bonus to attack and damage rolls.",
      "properties": [
        "+2 to attack rolls",
        "+2 to damage rolls"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "G",
      "dmgTable2024": "G",
      "tags": [
        "weapon",
        "combat",
        "bonus"
      ]
    },
    {
      "id": "weapon_plus3",
      "name": "Weapon plus 3",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "H",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": null,
      "value": "16000 gp",
      "desc": "+3 bonus to attack and damage rolls.",
      "properties": [
        "+3 to attack rolls",
        "+3 to damage rolls"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "H",
      "dmgTable2024": "H",
      "tags": [
        "weapon",
        "combat",
        "bonus"
      ]
    },
    {
      "id": "well_of_many_worlds",
      "name": "Well of Many Worlds",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "Unknown",
      "desc": "Fine black cloth folds to handkerchief size. Unfold on solid surface as action: creates 6-ft diameter two-way portal to another world or plane chosen by DM. Fold to close. Stays open until folded.",
      "properties": [
        "Creates 6 ft two-way planar portal",
        "DM decides destination each time",
        "Stays open until folded"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "legendary",
        "planar",
        "portal",
        "powerful",
        "travel"
      ]
    },
    {
      "id": "wind_fan",
      "name": "Wind Fan",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 0,
      "value": "1500 gp",
      "desc": "Cast Gust of Wind DC 13 as action. Using again before next dawn has cumulative 20 percent chance of not working and tearing into useless tatters.",
      "properties": [
        "Cast Gust of Wind DC 13",
        "20 percent cumulative fail chance on reuse before dawn"
      ],
      "charges": null,
      "recharge": null,
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "fan",
        "wind",
        "utility",
        "spell"
      ]
    },
    {
      "id": "winged_boots",
      "name": "Winged Boots",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "F",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "8000 gp",
      "desc": "Flying speed equals walking speed for up to 4 hours per day in 1 minute minimums. Regain 2 hours per 12 hours not in use. Descend 30 ft per round when expired.",
      "properties": [
        "Flying speed equals walking speed",
        "4 hours use per day",
        "Regain 2 hrs per 12 hrs unused"
      ],
      "charges": null,
      "recharge": "Per 12 hours unused",
      "dmgTable2014": "F",
      "dmgTable2024": "F",
      "tags": [
        "flight",
        "movement",
        "boots"
      ]
    },
    {
      "id": "wings_of_flying",
      "name": "Wings of Flying",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "DMG 2014",
      "sourceTag": "DMG14",
      "weight": 1,
      "value": "Unknown",
      "desc": "Action speak command word: feathered wings spread giving flying speed 60 ft. Last until command repeated, unconscious, or dead. Once wings appear cannot appear again until after a short or long rest.",
      "properties": [
        "Flying speed 60 ft",
        "Lasts until dismissed unconscious or dead",
        "Once per short or long rest"
      ],
      "charges": null,
      "recharge": "Short or Long Rest",
      "dmgTable2014": "Special",
      "dmgTable2024": "Special",
      "tags": [
        "wings",
        "flight",
        "movement",
        "combat"
      ]
    },
    {
      "id": "egw_acheron_blade",
      "name": "Acheron Blade",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": null,
      "value": "Unknown",
      "desc": "+1 attack and damage. 3 per day: +2d6 necrotic on hit. Advantage on Charisma checks with undead.",
      "properties": [
        "+1 attack and damage",
        "3 per day: +2d6 necrotic on hit",
        "Advantage on Charisma checks with undead"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "tags": [
        "weapon",
        "necrotic",
        "undead",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_aun_shen_lantern",
      "name": "Aun-Shen Lantern",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 1,
      "value": "Unknown",
      "desc": "Burns with purple flames. Bright light 15 ft dim 15 ft. Reveals invisible creatures and objects in bright light.",
      "properties": [
        "Bright light 15 ft dim 15 ft",
        "Reveals invisible in bright light"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "lantern",
        "light",
        "detection",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_breathing_bubble",
      "name": "Breathing Bubble",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 0,
      "value": "Unknown",
      "desc": "Jellyfish-like helmet. Breathe normally underwater and in airless environments.",
      "properties": [
        "Breathe normally underwater",
        "Breathe in airless environments"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "bubble",
        "underwater",
        "breathing",
        "wildemount",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_danoth_visor",
      "name": "Danoth Visor",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 1,
      "value": "Unknown",
      "desc": "Vestige of Divergence. Truesight 60 ft. Bonus action: examine object for construction magic and weak points. Legendary artifact.",
      "properties": [
        "Truesight 60 ft",
        "Bonus action: examine object for construction magic weaknesses",
        "Vestige of Divergence"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "goggles",
        "truesight",
        "legendary",
        "vestige",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_grovelthrash",
      "name": "Grovelthrash",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 4,
      "value": "Unknown",
      "desc": "Vestige of Divergence trident. +3 attack and damage. Grant Tough feat. Once per day: DC 18 Wisdom or grovel incapacitated until start of next turn.",
      "properties": [
        "+3 attack and damage",
        "Grant Tough feat",
        "Once per day: DC 18 Wisdom or grovel incapacitated",
        "Vestige of Divergence"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "weapon",
        "trident",
        "artifact",
        "vestige",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_infiltrators_key",
      "name": "Infiltrator Key",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 0,
      "value": "Unknown",
      "desc": "Vestige of Divergence mithral skeleton key. Cast Knock at will. Cast Passwall. Plus 1 to 3 AC based on awakening state.",
      "properties": [
        "Cast Knock at will",
        "Cast Passwall",
        "Plus 1 to 3 AC based on vestige state",
        "Vestige of Divergence"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "key",
        "locks",
        "movement",
        "legendary",
        "vestige",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "egw_luxon_beacon",
      "name": "Luxon Beacon",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Explorer's Guide to Wildemount",
      "sourceTag": "EGW",
      "weight": 5,
      "value": "Unknown",
      "desc": "Dodecahedron of pale blue crystal. If you die while attuned your soul seeks out a hollow one and is reborn. Used by Kryn Dynasty for consecution rebirth.",
      "properties": [
        "Soul seeks hollow one on death for rebirth",
        "Kryn Dynasty religion item"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "beacon",
        "resurrection",
        "legendary",
        "wildemount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_belt_of_the_brawler",
      "name": "Belt of the Brawler",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 1,
      "value": "Unknown",
      "desc": "Unarmed strikes deal 1d6 bludgeoning. Proficiency with unarmed strikes. Bonus action unarmed strike with Attack action. Unarmed strikes are magical.",
      "properties": [
        "Unarmed strikes deal 1d6 bludgeoning",
        "Proficiency with unarmed strikes",
        "Bonus action unarmed strike on Attack action",
        "Unarmed strikes magical"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "belt",
        "unarmed",
        "monk",
        "eberron"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_docent",
      "name": "Docent",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 0,
      "value": "Unknown",
      "desc": "Small metallic sphere bonding to warforged. Telepathic communication. Intelligence 16, knows languages. Proficiency in History and two other skills. Warforged only.",
      "properties": [
        "Bonds to warforged",
        "Telepathic communication",
        "Intelligence 16 knows languages",
        "Proficiency History and two other skills"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "docent",
        "warforged",
        "construct",
        "eberron",
        "intelligent item"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_dyrrn_tentacle_whip",
      "name": "Dyrrn Tentacle Whip",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 3,
      "value": "Unknown",
      "desc": "Replaces your arm. +2 attack and damage. Hit: bonus action grapple (DC = 8 plus proficiency plus Strength). Reach 15 ft. Cannot be removed while attuned.",
      "properties": [
        "+2 attack and damage",
        "Bonus action grapple on hit",
        "Reach 15 ft",
        "Replaces arm cannot be removed while attuned"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "whip",
        "tentacle",
        "eberron",
        "body modification"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_imbued_wood_focus",
      "name": "Imbued Wood Focus",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 1,
      "value": "Unknown",
      "desc": "Dragonmark-infused wood focus. Bonus damage based on wood type: fir cold, greatpine lightning, kiltara fire, livewood radiant, oak thunder.",
      "properties": [
        "Spellcasting focus",
        "Bonus damage based on wood type"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "focus",
        "wood",
        "spellcasting",
        "dragonmark",
        "eberron",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_orb_of_shielding",
      "name": "Orb of Shielding",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 1,
      "value": "Unknown",
      "desc": "Planar crystal orb. Spellcasting focus. Resistance to associated damage type based on material. Types include fire, radiant, cold, necrotic, lightning, thunder, force, psychic.",
      "properties": [
        "Spellcasting focus",
        "Resistance to associated damage type"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "orb",
        "arcane focus",
        "resistance",
        "planes",
        "eberron",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_prosthetic_limb",
      "name": "Prosthetic Limb",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic replacement limb. Detach or reattach as action. Cannot be removed against your will. Functions as natural limb.",
      "properties": [
        "Replace lost limb",
        "Detach or reattach as action",
        "Cannot be removed against your will"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "prosthetic",
        "limb",
        "utility",
        "eberron",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "erlw_wheel_of_wind_and_water",
      "name": "Wheel of Wind and Water",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Eberron: Rising from the Last War",
      "sourceTag": "ERLW",
      "weight": 10,
      "value": "Unknown",
      "desc": "Elemental vessel steering wheel. Control elemental vessel at full speed. Conjure wind to propel ship as action.",
      "properties": [
        "Control elemental vessel at full speed",
        "Conjure wind to propel ship"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "wheel",
        "ship",
        "elemental",
        "navigation",
        "eberron"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_ascendant_dragons_tome",
      "name": "Ascendant Dragon Tome",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 5,
      "value": "Unknown",
      "desc": "Dragon scale-covered book. +3 spell attack rolls and save DC. Spellcasting focus for wizard spells. Understand and speak Draconic. Wizard only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Spellcasting focus",
        "Understand and speak Draconic",
        "Wizard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tome",
        "wizard",
        "dragon",
        "legendary"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_bronze_griffon_figurine",
      "name": "Bronze Griffon Figurine",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 1,
      "value": "Unknown",
      "desc": "Transforms into real griffon for 6 hours. Obeys commands as mount. 5 day recharge after use.",
      "properties": [
        "Transforms into griffon 6 hours",
        "Obeys commands as mount",
        "5 day recharge"
      ],
      "charges": 1,
      "recharge": "5 days",
      "tags": [
        "figurine",
        "griffon",
        "mount",
        "summoning"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_dragon_slayer",
      "name": "Dragon Slayer",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": false,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": null,
      "value": "Unknown",
      "desc": "+1 attack and damage. When you hit a dragon takes extra 3d6 damage of weapon type.",
      "properties": [
        "+1 attack and damage",
        "+3d6 damage vs dragons"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "dragon slayer",
        "combat"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_dragonhide_belt",
      "name": "Dragonhide Belt",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 1,
      "value": "Unknown",
      "desc": "Belt made from dragon hide. +1 to saving throw DCs of ki features. Monk only.",
      "properties": [
        "+1 to ki feature saving throw DCs",
        "Monk only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "belt",
        "monk",
        "ki",
        "dragon"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_dragonlance",
      "name": "Dragonlance",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 6,
      "value": "Unknown",
      "desc": "+3 attack and damage. vs dragons: extra 3d6 force and DC 20 Strength or knocked prone. Cannot be dismounted while conscious on mount.",
      "properties": [
        "+3 attack and damage",
        "Extra 3d6 force vs dragons",
        "DC 20 Strength or prone vs dragons",
        "Cannot be dismounted on mount"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "lance",
        "dragon slayer",
        "legendary",
        "mount"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_flail_of_tiamat",
      "name": "Flail of Tiamat",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 3,
      "value": "Unknown",
      "desc": "Five-headed flail. +3 attack and damage. Deal any of 5 energy types on hit. Once per day: 60-ft cone 14d6 damage DC 18 Dexterity.",
      "properties": [
        "+3 attack and damage",
        "Choose energy type: acid cold fire lightning poison",
        "Once per day: 60-ft cone 14d6 damage DC 18"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "weapon",
        "flail",
        "tiamat",
        "legendary",
        "dragon"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_gold_canary_figurine",
      "name": "Gold Canary Figurine of Wondrous Power",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 0,
      "value": "Unknown",
      "desc": "Becomes adult or ancient gold dragon for 1 hour. Friendly and obeys commands. 1 week recharge after use.",
      "properties": [
        "Transforms into adult or ancient gold dragon 1 hour",
        "Obeys commands",
        "1 week recharge"
      ],
      "charges": 1,
      "recharge": "1 week",
      "tags": [
        "figurine",
        "gold dragon",
        "summoning",
        "legendary"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_scaled_ornament",
      "name": "Scaled Ornament",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 0,
      "value": "Unknown",
      "desc": "Advantage on Charisma checks with dragons. Understand and speak Draconic.",
      "properties": [
        "Advantage on Charisma checks with dragons",
        "Understand and speak Draconic"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "ornament",
        "dragon",
        "charisma",
        "language",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ftd_topaz_annihilator",
      "name": "Topaz Annihilator",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Fizban's Treasury of Dragons",
      "sourceTag": "FTD",
      "weight": 3,
      "value": "Unknown",
      "desc": "Ranged weapon firing topaz light beams. 8d6 necrotic on hit. Target at 0 HP: disintegrated. Once per day: 300 ft line 10d6 necrotic DC 18 Dexterity.",
      "properties": [
        "8d6 necrotic on hit",
        "0 HP: disintegrated",
        "Once per day: 300 ft line 10d6 necrotic DC 18 Dex"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "weapon",
        "necrotic",
        "dragon",
        "legendary"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_illusionists_bracers",
      "name": "Illusionist Bracers",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 1,
      "value": "Unknown",
      "desc": "When you cast a cantrip use bonus action to cast same cantrip again immediately.",
      "properties": [
        "Cast cantrip: bonus action cast same cantrip again"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "bracers",
        "cantrip",
        "wizard",
        "spellcasting",
        "ravnica"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_mizzium_apparatus",
      "name": "Mizzium Apparatus",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 3,
      "value": "Unknown",
      "desc": "Cast spells from any class list. Intelligence check DC 10 plus twice spell level. Fail: random spell of same level.",
      "properties": [
        "Cast spells from other class lists",
        "Int check DC 10 plus twice spell level",
        "Fail: random spell of same level"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "apparatus",
        "spellcasting",
        "arcane",
        "ravnica",
        "risky"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_peregrine_mask",
      "name": "Peregrine Mask",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 0,
      "value": "Unknown",
      "desc": "Flying speed 60 ft. When you make a melee attack bonus action: extra melee attack against different adjacent creature.",
      "properties": [
        "Flying speed 60 ft",
        "Bonus action: extra melee attack on different adjacent creature"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "mask",
        "flight",
        "combat",
        "ravnica"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_rakdos_riteknife",
      "name": "Rakdos Riteknife",
      "rarity": "Legendary",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 1,
      "value": "Unknown",
      "desc": "+1 attack and damage. Hit: DC 14 Constitution save or 2d10 necrotic unreduced. Stores up to 3 soul charges each giving +1 attack and damage. Expend charge: extra 1d10 necrotic.",
      "properties": [
        "+1 attack and damage",
        "DC 14 Con or 2d10 unreduced necrotic",
        "Up to 3 soul charges for +1 attack and damage each",
        "Expend charge: extra 1d10 necrotic"
      ],
      "charges": 3,
      "recharge": null,
      "tags": [
        "weapon",
        "dagger",
        "necrotic",
        "soul",
        "legendary",
        "ravnica"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_skyblinder_staff",
      "name": "Skyblinder Staff",
      "rarity": "Uncommon",
      "type": "Staff",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 4,
      "value": "Unknown",
      "desc": "+1 attack and damage. +1 spell attack rolls and save DC. Hit flying creature: DC 13 Dexterity or blinded until start of your next turn.",
      "properties": [
        "+1 attack and damage",
        "+1 spell attack rolls and save DC",
        "Hit flying creature: DC 13 Dex or blinded"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "staff",
        "blind",
        "flying",
        "combat",
        "ravnica"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "ggr_thought_harvester",
      "name": "Thought Harvester",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Guildmasters' Guide to Ravnica",
      "sourceTag": "GGR",
      "weight": 1,
      "value": "Unknown",
      "desc": "Cast Detect Thoughts without spell slot DC 15. Extract and store memories up to 7 days. View stored memories in orb.",
      "properties": [
        "Cast Detect Thoughts without slot DC 15",
        "Extract and store memories 7 days",
        "View stored memories"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "orb",
        "telepathy",
        "memory",
        "ravnica"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "hof_amulet_of_the_black_skull",
      "name": "Amulet of the Black Skull",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Heroes of Faerûn",
      "sourceTag": "HOF",
      "weight": 0,
      "value": "Unknown",
      "desc": "Cast Animate Dead without spell slot once per day. Animated undead gain +1 attack and damage.",
      "properties": [
        "Cast Animate Dead once per day without slot",
        "Animated undead gain +1 attack and damage"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "amulet",
        "necromancy",
        "undead",
        "faerûn"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "hof_black_sapphire_pendant",
      "name": "Black Sapphire Pendant",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Heroes of Faerûn",
      "sourceTag": "HOF",
      "weight": 0,
      "value": "Unknown",
      "desc": "Advantage on death saving throws. Auto-stabilize when dying. Once per day: drop to 1 HP instead of 0.",
      "properties": [
        "Advantage on death saving throws",
        "Auto-stabilize when dying",
        "Once per day: drop to 1 HP instead of 0"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "pendant",
        "death saves",
        "survival",
        "faerûn"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "hof_cloak_of_the_bat_hof",
      "name": "Cloak of the Bat (Faerûn)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Heroes of Faerûn",
      "sourceTag": "HOF",
      "weight": 1,
      "value": "Unknown",
      "desc": "In dim light or darkness bonus action: transform into bat for up to 1 hour. Retain mental scores. Can speak and cast spells without material components in bat form.",
      "properties": [
        "Transform into bat in dim light or darkness",
        "Retain mental stats in bat form",
        "Speak and cast without material components as bat"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "cloak",
        "bat",
        "transformation",
        "stealth",
        "faerûn"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "hof_mantle_of_nimoar",
      "name": "Mantle of Nimoar",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Heroes of Faerûn",
      "sourceTag": "HOF",
      "weight": 1,
      "value": "Unknown",
      "desc": "Legendary cloak of Nimoar the Mighty. +2 AC and saving throws. Advantage on Persuasion and Intimidation. Cast Heroism on self once per day.",
      "properties": [
        "+2 AC and saving throws",
        "Advantage on Persuasion and Intimidation",
        "Cast Heroism on self once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "mantle",
        "legendary",
        "AC",
        "saves",
        "faerûn"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "hof_ring_of_winter",
      "name": "Ring of Winter",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Heroes of Faerûn",
      "sourceTag": "HOF",
      "weight": 0,
      "value": "Unknown",
      "desc": "Immunity to cold damage. Cast Cone of Cold, Ice Storm, Wall of Ice at will. Corrupts alignment toward chaotic evil over time. Sought by Auril the Frostmaiden.",
      "properties": [
        "Immunity to cold damage",
        "Cast Cone of Cold Ice Storm Wall of Ice at will",
        "Corrupts alignment toward chaotic evil",
        "Sought by Auril"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "ring",
        "artifact",
        "cold",
        "ice",
        "legendary",
        "faerûn"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "mpmm_crystalline_chronicle",
      "name": "Crystalline Chronicle",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Mordenkainen Presents: Monsters of the Multiverse",
      "sourceTag": "MPMM",
      "weight": 3,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and save DC. Serves as spellbook. Once per day: prepare a spell not on your spell list. Wizard only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Serves as spellbook",
        "Once per day: prepare spell not on your list",
        "Wizard only"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "chronicle",
        "wizard",
        "spellcasting",
        "cross-class"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "mpmm_far_realm_stone",
      "name": "Far Realm Stone",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Mordenkainen Presents: Monsters of the Multiverse",
      "sourceTag": "MPMM",
      "weight": 0,
      "value": "Unknown",
      "desc": "Resistance to psychic damage. Once per day: stun creatures within 15 ft DC 14 Intelligence until end of next turn.",
      "properties": [
        "Resistance to psychic damage",
        "Once per day: stun creatures within 15 ft DC 14 Intelligence"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "stone",
        "psychic",
        "aberrant",
        "stun"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "mpmm_nature_spirit_staff",
      "name": "Nature Spirit Staff",
      "rarity": "Rare",
      "type": "Staff",
      "table": "Special",
      "attunement": true,
      "source": "Mordenkainen Presents: Monsters of the Multiverse",
      "sourceTag": "MPMM",
      "weight": 4,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and save DC. 10 charges regain 1d6+4 at dawn. Cast Animal Friendship 1, Barkskin 2, Speak with Animals 1, Speak with Plants 2, Spike Growth 2.",
      "properties": [
        "+1 spell attack rolls and save DC",
        "10 charges regain 1d6+4 at dawn",
        "Cast Animal Friendship Barkskin Speak with Animals Speak with Plants Spike Growth"
      ],
      "charges": 10,
      "recharge": "Dawn",
      "tags": [
        "staff",
        "nature",
        "druid",
        "ranger",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_astral_sextant",
      "name": "Astral Sextant",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 1,
      "value": "Unknown",
      "desc": "Know direction and distance to nearest portal or color pool. Advantage on navigation and cartography checks in Astral Sea.",
      "properties": [
        "Know direction to nearest portal",
        "Advantage on navigation checks in Astral Sea"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "sextant",
        "navigation",
        "astral",
        "spelljammer"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_necklace_of_stardust",
      "name": "Necklace of Stardust",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 0,
      "value": "Unknown",
      "desc": "Resistance to radiant damage. Action: shed bright light 30 ft dim 30 ft for 1 minute. Undead in bright light take 1d6 radiant at start of their turns.",
      "properties": [
        "Resistance to radiant damage",
        "Shed bright light 30 ft dim 30 ft for 1 minute",
        "Undead take 1d6 radiant in bright light"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "necklace",
        "radiant",
        "undead",
        "light",
        "spelljammer"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_ring_of_air_storage",
      "name": "Ring of Air Storage",
      "rarity": "Uncommon",
      "type": "Ring",
      "table": "Special",
      "attunement": true,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 0,
      "value": "Unknown",
      "desc": "1 hour of breathable air in airless environments. Recharge by spending 1 minute in breathable air.",
      "properties": [
        "1 hour of breathable air in airless environments",
        "Recharge 1 minute in breathable air"
      ],
      "charges": null,
      "recharge": "1 minute in breathable air",
      "tags": [
        "ring",
        "breathing",
        "space",
        "spelljammer"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_space_suit",
      "name": "Space Suit",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 15,
      "value": "Unknown",
      "desc": "Full body suit with glass helmet. Breathe normally in wildspace vacuum. Protected from temperature extremes. 24 hours of air supply.",
      "properties": [
        "Survive wildspace vacuum",
        "Breathe normally in airless environment",
        "Protected from temperature extremes",
        "24 hours air supply"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "suit",
        "space",
        "breathing",
        "spelljammer"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_spelljamming_helm",
      "name": "Spelljamming Helm",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 100,
      "value": "Unknown",
      "desc": "Ornate chair at heart of spelljammer ship. Attune to mentally pilot ship. Speed 4 hexes per day in wildspace or 1 mile per minute in Astral Sea. Cannot cast spells while piloting.",
      "properties": [
        "Pilot spelljammer ship mentally",
        "4 hexes per day wildspace or 1 mile per minute Astral Sea",
        "Cannot cast spells while piloting"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "helm",
        "ship",
        "spelljammer",
        "space travel"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "sja_wildspace_orrery",
      "name": "Wildspace Orrery",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Spelljammer: Adventures in Space",
      "sourceTag": "SJA",
      "weight": 5,
      "value": "Unknown",
      "desc": "Walnut-sized metal sphere. Action: open and name location to display model of that wildspace system showing planets moons and celestial bodies.",
      "properties": [
        "Action: display model of named wildspace system",
        "Shows planets moons and celestial bodies"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "orrery",
        "navigation",
        "space",
        "spelljammer"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_all_purpose_tool",
      "name": "All-Purpose Tool",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and save DC. Transform into any artisan tools as action. Artificer only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Transform into any artisan tools",
        "Artificer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tool",
        "artificer",
        "spellcasting",
        "utility"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_all_purpose_tool_rare",
      "name": "All-Purpose Tool (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and save DC. Transform into any artisan tools. Artificer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Transform into any artisan tools",
        "Artificer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tool",
        "artificer",
        "spellcasting",
        "utility"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_all_purpose_tool_very_rare",
      "name": "All-Purpose Tool (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and save DC. Transform into any artisan tools. Artificer only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Transform into any artisan tools",
        "Artificer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tool",
        "artificer",
        "spellcasting",
        "utility"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_astral_shard",
      "name": "Astral Shard",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Crystal from Astral Plane. +2 spell attack rolls and save DC. Bonus action: teleport to unoccupied space within 30 ft. Aberrant Mind or Clockwork Soul sorcerer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Bonus action: teleport 30 ft",
        "Aberrant Mind or Clockwork Soul sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "shard",
        "sorcerer",
        "spellcasting",
        "teleportation",
        "astral"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_baba_yagas_mortar_and_pestle",
      "name": "Baba Yaga Mortar and Pestle",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 20,
      "value": "Unknown",
      "desc": "Huge mortar functions as vehicle. Cast Teleport and Plane Shift without spell slots. Craft potions and poisons with advantage. Artifact level power.",
      "properties": [
        "Transport between planes",
        "Cast Teleport and Plane Shift at will",
        "Craft potions and poisons with advantage"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "artifact",
        "transport",
        "planar",
        "powerful"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_blood_spear",
      "name": "Blood Spear",
      "rarity": "Uncommon",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+2 attack and damage. Reduce creature to 0 HP: gain 2d6 temporary HP. Barbarian only.",
      "properties": [
        "+2 attack and damage",
        "Reduce creature to 0 HP: gain 2d6 temporary HP",
        "Barbarian only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "spear",
        "barbarian",
        "temporary HP"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_devotees_censer_tce",
      "name": "Devotee Censer (TCE)",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 2,
      "value": "Unknown",
      "desc": "Magic flail: +1 attack and damage, +1d8 radiant on hit. +1 spell attack rolls and save DC. Cleric or paladin only.",
      "properties": [
        "+1 attack and damage as flail",
        "+1d8 radiant damage",
        "+1 spell attack rolls and save DC",
        "Cleric or paladin only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "censer",
        "cleric",
        "paladin",
        "radiant",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_far_realm_shard",
      "name": "Far Realm Shard",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Aberrant crystal. +2 spell attack rolls and save DC. Cast 1st level or higher spell: one creature within 30 ft makes Charisma save (your spell save DC) or frightened 1 minute. Aberrant Mind sorcerer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Cast spell: frighten creature within 30 ft",
        "Aberrant Mind sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "shard",
        "sorcerer",
        "aberrant",
        "fear"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_feywild_shard",
      "name": "Feywild Shard",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Crystal from Feywild. +1 spell attack rolls and save DC. Using Metamagic: roll on Wild Magic table. Wild Magic sorcerer only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Trigger Wild Magic table when using Metamagic",
        "Wild Magic sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "shard",
        "sorcerer",
        "feywild",
        "wild magic"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_outer_essence_shard",
      "name": "Outer Essence Shard",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Crystal containing outer plane essence. +2 spell attack rolls and save DC. Enchantment and illusion spells gain alignment-based properties. Sorcerer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Enchantment and illusion spells gain alignment properties",
        "Sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "shard",
        "sorcerer",
        "alignment",
        "outer planes"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_illusionists_bracers_tce",
      "name": "Reveler Concertina",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and save DC. Bonus action: expend Bardic Inspiration for advantage on Charisma check. Bard only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Bonus action: expend Bardic Inspiration for Charisma advantage",
        "Bard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "concertina",
        "bard",
        "spellcasting",
        "charisma"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_shadowfell_shard",
      "name": "Shadowfell Shard",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Crystal from Shadowfell. +2 spell attack rolls and save DC. Using Metamagic: frighten one creature within 30 ft (your spell save DC Wisdom save). Shadow sorcerer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Metamagic: frighten creature within 30 ft",
        "Shadow sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "shard",
        "sorcerer",
        "shadowfell",
        "fear"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_tome_of_the_stilled_tongue",
      "name": "Tome of the Stilled Tongue",
      "rarity": "Legendary",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 5,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and save DC. Functions as spellbook. Once per day cast spell without verbal or somatic components. Wizard only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Functions as spellbook",
        "Cast without verbal or somatic once per day",
        "Wizard only"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tome",
        "wizard",
        "spellcasting",
        "legendary"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_vox_seeker",
      "name": "Vox Seeker",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Clockwork sparrow. Bonus action: animate for 5 minutes. Fly 60 ft per turn. Carry up to 1 pound. Follow verbal commands.",
      "properties": [
        "Bonus action animate for 5 minutes",
        "Fly 60 ft per turn carry 1 lb",
        "Follow verbal commands"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "clockwork",
        "artificer",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "tce_wand_of_orcus",
      "name": "Wand of Orcus",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Tasha's Cauldron of Everything",
      "sourceTag": "TCE",
      "weight": 2,
      "value": "Unknown",
      "desc": "Legendary weapon of demon lord Orcus. +3 attack and damage. +2d8 necrotic on hit. Critical hit: DC 18 Constitution or die. 7 charges regain 1d4+3 at dawn. Multiple powerful necromantic spells.",
      "properties": [
        "+3 attack and damage",
        "+2d8 necrotic on hit",
        "Critical: DC 18 Con or die",
        "7 charges regain 1d4+3 at dawn"
      ],
      "charges": 7,
      "recharge": "Dawn",
      "tags": [
        "artifact",
        "orcus",
        "necrotic",
        "legendary",
        "undead"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_acid",
      "name": "Absorbing Tattoo (Acid)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to acid damage. Reaction once per day: gain immunity to acid damage until start of next turn and regain HP equal to half the acid damage dealt.",
      "properties": [
        "Resistance to acid damage",
        "Reaction: absorb acid damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "acid",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_cold",
      "name": "Absorbing Tattoo (Cold)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to cold damage. Reaction once per day to absorb cold damage gaining immunity and healing.",
      "properties": [
        "Resistance to cold damage",
        "Reaction: absorb cold damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "cold",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_fire",
      "name": "Absorbing Tattoo (Fire)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to fire damage. Reaction once per day to absorb fire damage.",
      "properties": [
        "Resistance to fire damage",
        "Reaction: absorb fire damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "fire",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_force",
      "name": "Absorbing Tattoo (Force)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to force damage. Reaction once per day to absorb force damage.",
      "properties": [
        "Resistance to force damage",
        "Reaction: absorb force damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "force",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_lightning",
      "name": "Absorbing Tattoo (Lightning)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to lightning damage. Reaction once per day to absorb lightning damage.",
      "properties": [
        "Resistance to lightning damage",
        "Reaction: absorb lightning damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "lightning",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_necrotic",
      "name": "Absorbing Tattoo (Necrotic)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to necrotic damage. Reaction once per day to absorb necrotic damage.",
      "properties": [
        "Resistance to necrotic damage",
        "Reaction: absorb necrotic damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "necrotic",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_poison",
      "name": "Absorbing Tattoo (Poison)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to poison damage. Reaction once per day to absorb poison damage.",
      "properties": [
        "Resistance to poison damage",
        "Reaction: absorb poison damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "poison",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_psychic",
      "name": "Absorbing Tattoo (Psychic)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to psychic damage. Reaction once per day to absorb psychic damage.",
      "properties": [
        "Resistance to psychic damage",
        "Reaction: absorb psychic damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "psychic",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_radiant",
      "name": "Absorbing Tattoo (Radiant)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to radiant damage. Reaction once per day to absorb radiant damage.",
      "properties": [
        "Resistance to radiant damage",
        "Reaction: absorb radiant damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "radiant",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_absorbing_tattoo_thunder",
      "name": "Absorbing Tattoo (Thunder)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. Resistance to thunder damage. Reaction once per day to absorb thunder damage.",
      "properties": [
        "Resistance to thunder damage",
        "Reaction: absorb thunder damage once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "thunder",
        "resistance",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_amulet_of_the_devout",
      "name": "Amulet of the Devout",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and spell save DC. Cleric or paladin only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Cleric or paladin only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "amulet",
        "spellcasting",
        "cleric",
        "paladin"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_amulet_of_the_devout_rare",
      "name": "Amulet of the Devout (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and spell save DC. Cleric or paladin only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Cleric or paladin only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "amulet",
        "spellcasting",
        "cleric",
        "paladin"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_amulet_of_the_devout_very_rare",
      "name": "Amulet of the Devout (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and spell save DC. Cleric or paladin only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Cleric or paladin only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "amulet",
        "spellcasting",
        "cleric",
        "paladin"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_arcane_grimoire",
      "name": "Arcane Grimoire",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and spell save DC. Functions as spellbook. Wizard only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Functions as spellbook",
        "Wizard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "grimoire",
        "wizard",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_arcane_grimoire_rare",
      "name": "Arcane Grimoire (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and spell save DC. Functions as spellbook. Wizard only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Functions as spellbook",
        "Wizard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "grimoire",
        "wizard",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_arcane_grimoire_very_rare",
      "name": "Arcane Grimoire (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and spell save DC. Functions as spellbook. Wizard only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Functions as spellbook",
        "Wizard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "grimoire",
        "wizard",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_barrier_tattoo_rare",
      "name": "Barrier Tattoo (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. While unarmored AC = 15 + Dexterity modifier.",
      "properties": [
        "AC = 15 plus Dex modifier when unarmored"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tattoo",
        "AC",
        "defense",
        "unarmored"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_barrier_tattoo_uncommon",
      "name": "Barrier Tattoo (Uncommon)",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. While unarmored AC = 12 + Dexterity modifier.",
      "properties": [
        "AC = 12 plus Dex modifier when unarmored"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tattoo",
        "AC",
        "defense",
        "unarmored"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_barrier_tattoo_very_rare",
      "name": "Barrier Tattoo (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo. While unarmored AC = 18. Does not benefit from Dexterity.",
      "properties": [
        "AC = 18 when unarmored",
        "Does not benefit from Dexterity"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tattoo",
        "AC",
        "defense",
        "unarmored"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_bell_branch",
      "name": "Bell Branch",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "Feywild branch covered in silver bells. +2 spell attack rolls and save DC. Cast Detect Evil and Good and Detect Poison and Disease at will. Druid only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Cast Detect Evil and Good at will",
        "Cast Detect Poison and Disease at will",
        "Druid only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "branch",
        "druid",
        "feywild",
        "detection",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_bloodwell_vial",
      "name": "Bloodwell Vial",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Place drop of blood to attune. +1 spell attack rolls and save DC. Regain 5 extra HP per Hit Die rolled. Sorcerer only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "+5 HP per Hit Die rolled",
        "Sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "vial",
        "sorcerer",
        "spellcasting",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_bloodwell_vial_rare",
      "name": "Bloodwell Vial (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and save DC. Plus 5 HP per Hit Die rolled. Sorcerer only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "+5 HP per Hit Die rolled",
        "Sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "vial",
        "sorcerer",
        "spellcasting",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_bloodwell_vial_very_rare",
      "name": "Bloodwell Vial (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and save DC. Plus 5 HP per Hit Die rolled. Sorcerer only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "+5 HP per Hit Die rolled",
        "Sorcerer only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "vial",
        "sorcerer",
        "spellcasting",
        "healing"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_cauldron_of_rebirth",
      "name": "Cauldron of Rebirth",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 10,
      "value": "Unknown",
      "desc": "Use as spellcasting focus. Create Potion of Greater Healing once per day. Place dead humanoid inside and stir 1 hour: raise dead as Raise Dead spell once per 7 days. Druid or warlock only.",
      "properties": [
        "Use as spellcasting focus",
        "Create Potion of Greater Healing once per day",
        "Raise Dead once per 7 days",
        "Druid or warlock only"
      ],
      "charges": 1,
      "recharge": "7 days",
      "tags": [
        "cauldron",
        "resurrection",
        "healing",
        "druid",
        "warlock"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_coiling_grasp_tattoo",
      "name": "Coiling Grasp Tattoo",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Magic tattoo of vines. Action: DC 14 Strength save or creature within 15 ft is restrained for 1 minute. Creature can repeat save each turn. Once per day.",
      "properties": [
        "Action: restrain creature within 15 ft DC 14 Strength 1 minute",
        "Save each turn to end",
        "Once per day"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "restrain",
        "control",
        "combat"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_devotees_censer",
      "name": "Devotee Censer",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "Magic flail: +1 attack and damage, +1d8 radiant on hit. +1 spell attack rolls and save DC. Cleric or paladin only.",
      "properties": [
        "+1 attack and damage as flail",
        "+1d8 radiant damage on hit",
        "+1 spell attack rolls and save DC",
        "Cleric or paladin only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "censer",
        "weapon",
        "cleric",
        "paladin",
        "radiant",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_eldritch_claw_tattoo",
      "name": "Eldritch Claw Tattoo",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Unarmed strikes are magical. +1 attack and damage unarmed. Bonus action once per day: unarmed strikes gain 15 ft reach and deal 1d6 force and pull target 10 ft for 1 minute.",
      "properties": [
        "Unarmed strikes are magical",
        "+1 attack and damage unarmed",
        "Once per day: 15 ft reach 1d6 force pull target 10 ft for 1 minute"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "unarmed",
        "monk",
        "combat",
        "reach"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_ghost_step_tattoo",
      "name": "Ghost Step Tattoo",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Bonus action 3 times per day: incorporeal until end of turn. Move through creatures and objects. Take 1d10 force if ending turn in an object.",
      "properties": [
        "3 per day: incorporeal until end of turn as bonus action",
        "Move through creatures and objects",
        "1d10 force if ending turn in object"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "incorporeal",
        "movement",
        "stealth"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_illuminator_tattoo",
      "name": "Illuminator Tattoo",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Write with tattooed finger as ink pen. Action: shed bright light 5 ft dim 5 ft or extinguish.",
      "properties": [
        "Write with tattooed finger as ink pen",
        "Action: shed or extinguish light 5 ft radius"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tattoo",
        "light",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_lifewell_tattoo",
      "name": "Lifewell Tattoo",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Resistance to necrotic damage. Once per day: drop to 1 HP instead of 0.",
      "properties": [
        "Resistance to necrotic damage",
        "Once per day: drop to 1 HP instead of 0"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "necrotic",
        "resistance",
        "survival"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_masquerade_tattoo",
      "name": "Masquerade Tattoo",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Bonus action: change tattoo appearance to any image fitting within 6 inches. One color or black and white.",
      "properties": [
        "Bonus action: change tattoo to any image within 6 inches"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "tattoo",
        "disguise",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_moon_sickle",
      "name": "Moon Sickle",
      "rarity": "Uncommon",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+1 attack and damage. +1d4 radiant damage on hit. +1 spell attack rolls and save DC. Druid or ranger only.",
      "properties": [
        "+1 attack and damage",
        "+1d4 radiant damage on hit",
        "+1 spell attack rolls and save DC",
        "Druid or ranger only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "druid",
        "ranger",
        "radiant",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_moon_sickle_rare",
      "name": "Moon Sickle (Rare)",
      "rarity": "Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+2 attack and damage. +1d4 radiant damage on hit. +2 spell attack rolls and save DC. Druid or ranger only.",
      "properties": [
        "+2 attack and damage",
        "+1d4 radiant damage",
        "+2 spell attack rolls and save DC",
        "Druid or ranger only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "druid",
        "ranger",
        "radiant",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_moon_sickle_very_rare",
      "name": "Moon Sickle (Very Rare)",
      "rarity": "Very Rare",
      "type": "Weapon",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+3 attack and damage. +1d4 radiant damage on hit. +3 spell attack rolls and save DC. Druid or ranger only.",
      "properties": [
        "+3 attack and damage",
        "+1d4 radiant damage",
        "+3 spell attack rolls and save DC",
        "Druid or ranger only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "druid",
        "ranger",
        "radiant",
        "spellcasting"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_moon_touched_sword",
      "name": "Moon-Touched Sword",
      "rarity": "Common",
      "type": "Weapon",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": null,
      "value": "Unknown",
      "desc": "In darkness unsheathed blade sheds moonlight: bright light 15 ft dim 15 ft.",
      "properties": [
        "Sheds moonlight in darkness bright 15 ft dim 15 ft"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "weapon",
        "light",
        "moonlight",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_pipe_of_smoke_monsters",
      "name": "Pipe of Smoke Monsters",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "While smoking, bonus action: exhale smoke shaped as a creature fitting in 1-foot cube. Form lasts a few seconds.",
      "properties": [
        "Bonus action: exhale smoke shaped as creature",
        "Form fits in 1-foot cube and lasts seconds"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "pipe",
        "smoke",
        "illusion",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rhythm_makers_drum",
      "name": "Rhythm-Makers Drum",
      "rarity": "Uncommon",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and spell save DC. Bard only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Bard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "drum",
        "bard",
        "spellcasting",
        "instrument"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rhythm_makers_drum_rare",
      "name": "Rhythm-Makers Drum (Rare)",
      "rarity": "Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and spell save DC. Bard only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Bard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "drum",
        "bard",
        "spellcasting",
        "instrument"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rhythm_makers_drum_very_rare",
      "name": "Rhythm-Makers Drum (Very Rare)",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 3,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and spell save DC. Bard only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Bard only"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "drum",
        "bard",
        "spellcasting",
        "instrument"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rod_of_the_pact_keeper",
      "name": "Rod of the Pact Keeper",
      "rarity": "Uncommon",
      "type": "Rod",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+1 spell attack rolls and save DC. Regain one warlock spell slot as bonus action once per day. Warlock only.",
      "properties": [
        "+1 spell attack rolls",
        "+1 spell save DC",
        "Regain one warlock spell slot once per day",
        "Warlock only"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "rod",
        "warlock",
        "spellcasting",
        "spell recovery"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rod_of_the_pact_keeper_rare",
      "name": "Rod of the Pact Keeper (Rare)",
      "rarity": "Rare",
      "type": "Rod",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+2 spell attack rolls and save DC. Regain one warlock spell slot once per day. Warlock only.",
      "properties": [
        "+2 spell attack rolls",
        "+2 spell save DC",
        "Regain one warlock spell slot once per day",
        "Warlock only"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "rod",
        "warlock",
        "spellcasting",
        "spell recovery"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_rod_of_the_pact_keeper_very_rare",
      "name": "Rod of the Pact Keeper (Very Rare)",
      "rarity": "Very Rare",
      "type": "Rod",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 2,
      "value": "Unknown",
      "desc": "+3 spell attack rolls and save DC. Regain one warlock spell slot once per day. Warlock only.",
      "properties": [
        "+3 spell attack rolls",
        "+3 spell save DC",
        "Regain one warlock spell slot once per day",
        "Warlock only"
      ],
      "charges": 1,
      "recharge": "Dawn",
      "tags": [
        "rod",
        "warlock",
        "spellcasting",
        "spell recovery"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_shadowfell_brand_tattoo",
      "name": "Shadowfell Brand Tattoo",
      "rarity": "Very Rare",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Advantage on Stealth checks. Reaction 2 times per day: become invisible until start of next turn when hit by attack you can see within 30 ft.",
      "properties": [
        "Advantage on Stealth checks",
        "2 per day: invisible until start of next turn as reaction"
      ],
      "charges": 2,
      "recharge": "Dawn",
      "tags": [
        "tattoo",
        "shadowfell",
        "stealth",
        "invisibility",
        "reaction"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_spellwrought_tattoo",
      "name": "Spellwrought Tattoo",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "Contains one spell up to 5th level. Cast once then tattoo fades. Rarity based on spell level: cantrip or 1st Common, 2nd or 3rd Uncommon, 4th or 5th Rare.",
      "properties": [
        "Contains one spell",
        "Cast once then tattoo fades",
        "Rarity based on spell level"
      ],
      "charges": 1,
      "recharge": null,
      "tags": [
        "tattoo",
        "spell",
        "consumable"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_teeth_of_dahlver_nar",
      "name": "Teeth of Dahlver-Nar",
      "rarity": "Artifact",
      "type": "Artifact",
      "table": "Special",
      "attunement": true,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 0,
      "value": "Unknown",
      "desc": "12 ivory teeth each tied to a different class. Embed tooth in jaw and spend 10 minutes in ritual to gain class-specific benefit. Artifact level power.",
      "properties": [
        "12 teeth each tied to a class",
        "10 minute ritual per tooth for class benefit",
        "Artifact level power"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "artifact",
        "teeth",
        "multiclass",
        "powerful"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_veteran_cane",
      "name": "Veteran Cane",
      "rarity": "Common",
      "type": "Wondrous Item",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 1,
      "value": "Unknown",
      "desc": "Bonus action command word: transform between walking cane and ordinary longsword.",
      "properties": [
        "Bonus action: transform between cane and longsword"
      ],
      "charges": null,
      "recharge": null,
      "tags": [
        "cane",
        "weapon",
        "disguise",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_wand_of_conducting",
      "name": "Wand of Conducting",
      "rarity": "Common",
      "type": "Wand",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 1,
      "value": "Unknown",
      "desc": "3 charges regain all at dawn. Action expend 1 charge: create orchestral music audible 60 ft.",
      "properties": [
        "3 charges regain all at dawn",
        "Create orchestral music audible 60 ft"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "tags": [
        "wand",
        "music",
        "utility",
        "common",
        "bard"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    },
    {
      "id": "xge_wand_of_smiles",
      "name": "Wand of Smiles",
      "rarity": "Common",
      "type": "Wand",
      "table": "Special",
      "attunement": false,
      "source": "Xanathar's Guide to Everything",
      "sourceTag": "XGE",
      "weight": 1,
      "value": "Unknown",
      "desc": "3 charges regain all at dawn. Action expend 1: DC 10 Charisma save or creature within 30 ft forced to smile for 1 minute.",
      "properties": [
        "3 charges regain all at dawn",
        "DC 10 Charisma or forced smile 1 minute within 30 ft"
      ],
      "charges": 3,
      "recharge": "Dawn",
      "tags": [
        "wand",
        "charm",
        "utility",
        "common"
      ],
      "dmgTable2014": "Special",
      "dmgTable2024": "Special"
    }
  ]
};
