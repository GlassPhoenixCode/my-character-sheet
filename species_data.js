// D&D 5e Species/Race Data — auto-extracted from player.html

var SPECIES_DB=[
// ══ PHB 2014 ════════════════════════════════════════════════════════════════
{name:"Dragonborn",src:0,size:"Medium",speed:30,abv:"STR +2, CHA +1",lore:"Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension.",traits:[
  {name:"Draconic Ancestry",desc:"Choose a dragon type (Black/Blue/Brass/Bronze/Copper/Gold/Green/Red/Silver/White). Your breath weapon and damage resistance are determined by this choice."},
  {name:"Breath Weapon",desc:"As an action, exhale destructive energy in a 15-ft cone (most types) or 5×30-ft line (lightning/cold). All creatures in area make DEX or CON save (DC = 8 + CON mod + PB) or take 2d6 damage (increases to 3d6 at 6th, 4d6 at 11th, 5d6 at 16th). Usable once per short/long rest."},
  {name:"Damage Resistance",desc:"Resistance to the damage type associated with your Draconic Ancestry."}
]},
{name:"Hill Dwarf",src:0,size:"Medium",speed:25,abv:"CON +2, WIS +1",lore:"Dwarves are known for their skill in warfare, their ability to endure hardship, and their dedication to craftsmanship.",traits:[
  {name:"Darkvision",desc:"60 ft. Can see in dim light as bright, darkness as dim."},
  {name:"Dwarven Resilience",desc:"Advantage on saves against poison; resistance to poison damage."},
  {name:"Dwarven Combat Training",desc:"Proficiency with battleaxe, handaxe, light hammer, and warhammer."},
  {name:"Tool Proficiency",desc:"Proficiency with one artisan's tool of your choice."},
  {name:"Stonecunning",desc:"Double proficiency bonus on History checks related to stonework."},
  {name:"Dwarven Toughness",desc:"HP maximum increases by 1, and increases by 1 again every time you gain a level."}
]},
{name:"Mountain Dwarf",src:0,size:"Medium",speed:25,abv:"CON +2, STR +2",lore:"Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Dwarven Resilience",desc:"Advantage on saves against poison; resistance to poison damage."},
  {name:"Dwarven Combat Training",desc:"Proficiency with battleaxe, handaxe, light hammer, and warhammer."},
  {name:"Tool Proficiency",desc:"Proficiency with one artisan's tool of your choice."},
  {name:"Stonecunning",desc:"Double proficiency bonus on History checks related to stonework."},
  {name:"Dwarven Armor Training",desc:"Proficiency with light and medium armor."}
]},
{name:"High Elf",src:0,size:"Medium",speed:30,abv:"DEX +2, INT +1",lore:"High elves value magic in all its forms and were the first to study it.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"Don't need sleep; meditate 4 hours for a long rest."},
  {name:"Elf Weapon Training",desc:"Proficiency with longsword, shortsword, shortbow, and longbow."},
  {name:"Cantrip",desc:"Know one cantrip of your choice from the Wizard spell list (INT spellcasting)."},
  {name:"Extra Language",desc:"Speak, read, and write one extra language."}
]},
{name:"Wood Elf",src:0,size:"Medium",speed:35,abv:"DEX +2, WIS +1",lore:"Wood elves' enhanced senses and intuitions let them make their home in the forest.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"Don't need sleep; meditate 4 hours for a long rest."},
  {name:"Elf Weapon Training",desc:"Proficiency with longsword, shortsword, shortbow, and longbow."},
  {name:"Fleet of Foot",desc:"Base walking speed increases to 35 ft."},
  {name:"Mask of the Wild",desc:"Can attempt to hide even when only lightly obscured by natural phenomena."}
]},
{name:"Drow (Dark Elf)",src:0,size:"Medium",speed:30,abv:"DEX +2, CHA +1",lore:"Descended from an ancient schism with other elves, the drow live in the Underdark.",traits:[
  {name:"Superior Darkvision",desc:"120 ft."},
  {name:"Sunlight Sensitivity",desc:"Disadvantage on attack rolls and Perception checks that rely on sight in direct sunlight."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"Don't need sleep; meditate 4 hours for a long rest."},
  {name:"Drow Magic",desc:"Know Dancing Lights cantrip. At 3rd level: Faerie Fire 1/long rest. At 5th: Darkness 1/long rest. CHA spellcasting."},
  {name:"Drow Weapon Training",desc:"Proficiency with rapiers, shortswords, and hand crossbows."}
]},
{name:"Lightfoot Halfling",src:0,size:"Small",speed:25,abv:"DEX +2, CHA +1",lore:"Lightfoot halflings are remarkably stealthy and naturally skilled at blending into a crowd.",traits:[
  {name:"Lucky",desc:"When you roll a 1 on a d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."},
  {name:"Brave",desc:"Advantage on saving throws against being Frightened."},
  {name:"Halfling Nimbleness",desc:"Can move through the space of any creature of a larger size."},
  {name:"Naturally Stealthy",desc:"Can attempt to hide even when obscured only by a creature one size larger than you."}
]},
{name:"Stout Halfling",src:0,size:"Small",speed:25,abv:"DEX +2, CON +1",lore:"Stout halflings are hardier than most halflings and have some resistance to poison.",traits:[
  {name:"Lucky",desc:"When you roll a 1 on a d20 for an attack roll, ability check, or saving throw, you can reroll the die."},
  {name:"Brave",desc:"Advantage on saving throws against being Frightened."},
  {name:"Halfling Nimbleness",desc:"Can move through the space of any creature of a larger size."},
  {name:"Stout Resilience",desc:"Advantage on saving throws against poison and resistance to poison damage."}
]},
{name:"Human",src:0,size:"Medium",speed:30,abv:"+1 to all ability scores",lore:"Humans are the most adaptable and ambitious people among the common races.",traits:[
  {name:"Ability Score Increase",desc:"+1 to each of your six ability scores."},
  {name:"Extra Language",desc:"Speak, read, and write one extra language of your choice."}
]},
{name:"Variant Human",src:0,size:"Medium",speed:30,abv:"+1 to two ability scores",lore:"Some humans are simply more naturally gifted than others.",traits:[
  {name:"Ability Score Increase",desc:"+1 to two different ability scores of your choice."},
  {name:"Skills",desc:"Proficiency in one skill of your choice."},
  {name:"Feat",desc:"One feat of your choice."}
]},
{name:"Forest Gnome",src:0,size:"Small",speed:25,abv:"INT +2, DEX +1",lore:"Forest gnomes have a natural knack for illusion and are skilled at avoiding notice.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Gnome Cunning",desc:"Advantage on all INT, WIS, and CHA saving throws against magic."},
  {name:"Natural Illusionist",desc:"Know the Minor Illusion cantrip (INT spellcasting)."},
  {name:"Speak with Small Beasts",desc:"Communicate simple ideas to Small or smaller beasts."}
]},
{name:"Rock Gnome",src:0,size:"Small",speed:25,abv:"INT +2, CON +1",lore:"Rock gnomes' love of invention and mechanical aptitude makes them valued inventors and tinkerers.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Gnome Cunning",desc:"Advantage on all INT, WIS, and CHA saving throws against magic."},
  {name:"Artificer's Lore",desc:"Double proficiency bonus on History checks related to magic items, alchemical objects, or technological devices."},
  {name:"Tinker",desc:"Proficiency with artisan's tools (tinker's tools). Construct tiny clockwork devices using tinker's tools (10 min, 10 gp components)."}
]},
{name:"Half-Elf",src:0,size:"Medium",speed:30,abv:"CHA +2, +1 to two other scores",lore:"Half-elves combine the curiosity and ambition of humans with the refined senses of the elves.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Skill Versatility",desc:"Proficiency in two skills of your choice."}
]},
{name:"Half-Orc",src:0,size:"Medium",speed:30,abv:"STR +2, CON +1",lore:"Half-orcs' orcish blood lends them a toughness and grit that can carry them to great deeds.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Menacing",desc:"Proficiency in Intimidation."},
  {name:"Relentless Endurance",desc:"When reduced to 0 HP but not killed outright, drop to 1 HP instead. Once per long rest."},
  {name:"Savage Attacks",desc:"On a critical hit with a melee weapon, roll one of the weapon's damage dice an extra time and add it to the extra damage."}
]},
{name:"Tiefling",src:0,size:"Medium",speed:30,abv:"INT +1, CHA +2",lore:"Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. But their infernal heritage has left a clear imprint.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Hellish Resistance",desc:"Resistance to fire damage."},
  {name:"Infernal Legacy",desc:"Know Thaumaturgy cantrip. At 3rd level: Hellish Rebuke 1/long rest (2nd-level). At 5th: Darkness 1/long rest. CHA spellcasting."}
]},
// ══ PHB 2024 ════════════════════════════════════════════════════════════════
{name:"Aasimar",src:1,size:"Medium or Small",speed:30,abv:"Flexible (+1/+1 or +2)",lore:"Aasimar are mortals who carry a spark of the Upper Planes within their souls. They can fan that spark to bring light, heal the wounded, and punish the wicked.",traits:[
  {name:"Celestial Resistance",desc:"Resistance to Necrotic and Radiant damage."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Healing Hands",desc:"As a Magic action, touch a creature and roll a number of d4s equal to your Proficiency Bonus. The creature regains HP equal to the total. Once per Long Rest."},
  {name:"Light Bearer",desc:"Know the Light cantrip (CHA spellcasting)."},
  {name:"Celestial Revelation",desc:"Starting at level 3, you can transform as a Bonus Action for 1 minute (1/Long Rest): Heavenly Wings (fly speed = walking speed), Inner Radiance (bright light 10 ft, dim 10 ft more; end-of-turn Radiant damage = PB to nearby enemies), or Necrotic Shroud (frighten nearby creatures, Necrotic damage on first hit each turn)."}
]},
{name:"Dragonborn",src:1,size:"Medium",speed:30,abv:"Flexible",lore:"The ancestors of dragonborn hatched from the eggs of chromatic and metallic dragons. One story holds that these eggs were blessed by the dragon gods Bahamut and Tiamat.",traits:[
  {name:"Draconic Ancestry",desc:"Choose a dragon type: Black (Acid), Blue (Lightning), Brass (Fire), Bronze (Lightning), Copper (Acid), Gold (Fire), Green (Poison), Red (Fire), Silver (Cold), White (Cold)."},
  {name:"Breath Weapon",desc:"When you take the Attack action, replace one attack with an exhalation of destructive energy (15-ft cone or 5×30-ft line). All creatures in the area make a DEX or CON save (DC = 8 + CON mod + PB) or take 1d10 damage (increases to 2d10 at 5th, 3d10 at 11th, 4d10 at 17th). Usable PB times per Long Rest."},
  {name:"Damage Resistance",desc:"Resistance to the damage type of your Draconic Ancestry."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Draconic Flight",desc:"Starting at 5th level, you can channel the magic in your blood to sprout spectral wings from your back as a Bonus Action, gaining a Fly Speed equal to your walking speed for 10 minutes. Once per Long Rest."}
]},
{name:"Dwarf",src:1,size:"Medium",speed:30,abv:"Flexible",lore:"Dwarves are robust people who originated as creations of Moradin, the god of creation. They established mighty kingdoms in mountains and hills and often live underground.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Dwarven Resilience",desc:"Advantage on saving throws against the Poisoned condition. Resistance to Poison damage."},
  {name:"Dwarven Toughness",desc:"HP maximum increases by 1, and increases by 1 again every time you gain a level."},
  {name:"Stonecunning",desc:"As a Bonus Action, gain Tremorsense with a range of 60 ft for 10 minutes. Must be on a stone surface or touching one. PB times per Long Rest."}
]},
{name:"Elf",src:1,size:"Medium",speed:30,abv:"Flexible",lore:"Created by the god Corellon, the first elves could change their forms at will. They lost this ability after being cursed for siding with Lolth during a divine conflict.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saving throws against the Charmed condition. Magic can't put you to sleep."},
  {name:"Keen Senses",desc:"Proficiency in Insight, Perception, or Survival (your choice)."},
  {name:"Trance",desc:"You don't need to sleep, and magic can't put you to sleep. You can finish a Long Rest in 4 hours if you spend those hours in a trancelike meditation, during which you retain consciousness."},
  {name:"Elven Lineage",desc:"Choose Drow, High Elf, or Wood Elf lineage. Drow: Superior Darkvision (120 ft), Dancing Lights cantrip, Faerie Fire at 3rd, Darkness at 5th. High Elf: Detect Magic as a ritual, Misty Step at 5th. Wood Elf: speeds +5 ft, Druidcraft cantrip, Longstrider at 3rd, Pass Without Trace at 5th."}
]},
{name:"Gnome",src:1,size:"Small",speed:30,abv:"Flexible",lore:"Gnomes are magical folk created by the god Garl Glittergold. They delight in discovery, invention, and practical jokes.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Gnomish Cunning",desc:"Advantage on INT, WIS, and CHA saving throws against magic."},
  {name:"Gnomish Lineage",desc:"Choose Forest Gnome (Minor Illusion cantrip; speak with beasts) or Rock Gnome (Mending and Prestidigitation cantrips; Tinker's Tools proficiency; construct Clockwork Toy, Fire Starter, or Music Box)."}
]},
{name:"Goliath",src:1,size:"Medium",speed:35,abv:"Flexible",lore:"Towering over most folk, goliaths are distant descendants of giants. Each goliath feels the pull of the titans, compelling them to test their strength.",traits:[
  {name:"Giant Ancestry",desc:"Choose one Giant Ancestor: Cloud (Misty Step 1/LR), Fire (Burning Hands 1/LR), Frost (Armor of Agathys 1/LR), Hill (Heroism 1/LR), Stone (Blur 1/LR), Storm (Thunderwave 1/LR). CON is your spellcasting ability."},
  {name:"Large Form",desc:"Starting at 5th level, you can change your size to Large as a Bonus Action (requires at least 10 ft space). Lasts 10 minutes or until you end it (Bonus Action). PB times per Long Rest."},
  {name:"Powerful Build",desc:"Count as one size larger when determining your carrying capacity and the weight you can push, drag, or lift."},
  {name:"Stone's Endurance",desc:"When you take damage, use your Reaction to roll 1d12 + CON mod and reduce the damage by that amount. PB times per Long Rest."}
]},
{name:"Halfling",src:1,size:"Small",speed:30,abv:"Flexible",lore:"Cherished and guided by the god Yondalla, halflings are a communal people who delight in the comforts of home.",traits:[
  {name:"Brave",desc:"Advantage on saving throws against the Frightened condition."},
  {name:"Halfling Nimbleness",desc:"You can move through the space of any creature of a size larger than yours, but you can't stop there."},
  {name:"Luck",desc:"When you roll a 1 on a d20 for a d20 Test, you can reroll, and you must use the new roll."},
  {name:"Naturally Stealthy",desc:"You can take the Hide action even when you are obscured only by a creature that is at least one size larger than you."}
]},
{name:"Human",src:1,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Found throughout the multiverse, humans are as varied as they are numerous, and they endeavor to achieve as much as they can in the years they have.",traits:[
  {name:"Resourceful",desc:"You gain Heroic Inspiration whenever you finish a Long Rest."},
  {name:"Skillful",desc:"You gain proficiency in one skill of your choice."},
  {name:"Versatile",desc:"You gain an Origin feat of your choice. Consult the feat list to see which feats have Origin as their category."}
]},
{name:"Orc",src:1,size:"Medium",speed:30,abv:"Flexible",lore:"Orcs trace their creation to Gruumsh, one of the most powerful gods. Gruumsh views orcs as his people and shapes them to be capable of surviving any environment.",traits:[
  {name:"Adrenaline Rush",desc:"You can take the Dash action as a Bonus Action. When you do, you gain a number of Temporary Hit Points equal to your Proficiency Bonus. PB times per Long Rest."},
  {name:"Darkvision",desc:"120 ft."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying capacity."},
  {name:"Relentless Endurance",desc:"When you are reduced to 0 HP but not killed outright, you can drop to 1 HP instead. Once per Long Rest."}
]},
{name:"Tiefling",src:1,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Tieflings are humans who carry the blood of a fiend in their veins. Their appearance reflects their fiendish heritage.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fiendish Legacy",desc:"Choose one of three legacies — Abyssal (Chaotic Evil fiend; Poison resistance; spells: Arms of Hadar → Hunger of Hadar), Chthonic (Neutral Evil fiend; Necrotic resistance; spells: False Life → Speak with Dead), or Infernal (Lawful Evil fiend; Fire resistance; spells: Hellish Rebuke → Darkness). Each grants spells usable 1/LR, CHA spellcasting."},
  {name:"Otherworldly Presence",desc:"Know the Thaumaturgy cantrip (CHA spellcasting)."}
]},
// ══ XANATHAR'S GUIDE ════════════════════════════════════════════════════════
{name:"Eladrin (XGE)",src:2,size:"Medium",speed:30,abv:"DEX +2, INT +1",lore:"Eladrin are elves native to the Feywild, a realm of beauty, unpredictable emotion, and boundless magic.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"4 hours of meditation = Long Rest."},
  {name:"Fey Step",desc:"As a Bonus Action, magically teleport up to 30 ft to an unoccupied space you can see. Once per Short/Long Rest. Each season grants a bonus effect (Autumn: Charm, Winter: Fear, Spring: push, Summer: fire damage)."}
]},
{name:"Sea Elf (XGE)",src:2,size:"Medium",speed:30,abv:"DEX +2, CON +1",lore:"Sea elves fell in love with the wild beauty of the ocean in the earliest days of the multiverse.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"4 hours of meditation = Long Rest."},
  {name:"Child of the Sea",desc:"Swim speed of 30 ft. Can breathe air and water."},
  {name:"Sea Elf Training",desc:"Proficiency with spears, tridents, light crossbows, and nets."},
  {name:"Friend of the Sea",desc:"Communicate simple ideas to beasts that have a swim speed."}
]},
{name:"Shadar-kai (XGE)",src:2,size:"Medium",speed:30,abv:"DEX +2, CON +1",lore:"Shadar-kai are elves who have been bound to the Shadowfell for so long that their very nature has been changed.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"4 hours of meditation = Long Rest."},
  {name:"Necrotic Resistance",desc:"Resistance to Necrotic damage."},
  {name:"Blessing of the Raven Queen",desc:"As a Bonus Action, teleport up to 30 ft to an unoccupied space you can see. Once per Short/Long Rest. At 3rd level, become incorporeal until end of next turn after teleporting (resistance to all damage)."}
]},
{name:"Aasimar (XGE)",src:2,size:"Medium",speed:30,abv:"CHA +2, +1 to one other",lore:"Aasimar bear within their souls the light of the heavens.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Celestial Resistance",desc:"Resistance to Necrotic and Radiant damage."},
  {name:"Healing Hands",desc:"As an action, touch a creature to restore HP equal to your level. Once per Long Rest."},
  {name:"Light Bearer",desc:"Know the Light cantrip."},
  {name:"Subrace",desc:"Choose Protector (Fly speed = walking at 3rd, Radiant damage aura), Scourge (Radiant damage aura, self-damage, no stealth), or Fallen (Necrotic aura frightens creatures, Necrotic damage on first hit)."}
]},
{name:"Firbolg (XGE)",src:2,size:"Medium",speed:30,abv:"WIS +2, STR +1",lore:"Firbolgs are forest-dwelling giants who live in deep forests and prefer to avoid contact with other races.",traits:[
  {name:"Firbolg Magic",desc:"Cast Detect Magic and Disguise Self (appear up to 3 ft shorter) once each per Short/Long Rest. WIS spellcasting."},
  {name:"Hidden Step",desc:"As a Bonus Action, turn Invisible until start of your next turn or until you attack, deal damage, or force a saving throw. Once per Short/Long Rest."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."},
  {name:"Speech of Beast and Leaf",desc:"Communicate simple ideas to beasts and plants. Advantage on CHA checks to influence them."}
]},
{name:"Kenku (XGE/VGM)",src:2,size:"Medium",speed:30,abv:"DEX +2, WIS +1",lore:"Kenku are feathered humanoids who haunt the dark alleys and forgotten sewers of the world, living as criminals.",traits:[
  {name:"Expert Forgery",desc:"Advantage on checks to create forgeries or duplicates of existing objects."},
  {name:"Kenku Training",desc:"Proficiency in two of: Acrobatics, Deception, Stealth, Sleight of Hand."},
  {name:"Mimicry",desc:"Can mimic sounds and voices heard; others can detect with Insight vs. your Deception DC."}
]},
{name:"Lizardfolk (XGE/VGM)",src:2,size:"Medium",speed:30,abv:"CON +2, WIS +1",lore:"Lizardfolk possess an alien and unfamiliar wisdom. Their reptilian minds are ill-suited to the concepts of emotion and empathy.",traits:[
  {name:"Bite",desc:"Natural weapon: 1d6 + STR modifier piercing damage. On hit, can apply grapple as Bonus Action."},
  {name:"Cunning Artisan",desc:"As part of a short rest, craft one of: shield, club, javelin, or 1d4+1 darts or blowgun needles from nearby materials."},
  {name:"Hold Breath",desc:"Hold breath for 15 minutes."},
  {name:"Hunter's Lore",desc:"Proficiency in two of: Animal Handling, Nature, Perception, Stealth, Survival."},
  {name:"Natural Armor",desc:"AC = 13 + DEX modifier when not wearing armor."},
  {name:"Hungry Jaws",desc:"As a Bonus Action, make a special bite attack. On hit, gain Temp HP equal to CON modifier. Once per Short/Long Rest."}
]},
{name:"Tabaxi (XGE/VGM)",src:2,size:"Medium",speed:30,abv:"DEX +2, CHA +1",lore:"Hailing from a strange and distant land, wandering tabaxi are catlike humanoids driven by curiosity to collect interesting artifacts, gather tales, and visit distant lands.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Feline Agility",desc:"Can double your speed until end of the turn. After using, must move 0 ft in a turn before using again."},
  {name:"Cat's Claws",desc:"Claws give climbing speed of 20 ft. Natural weapon: 1d4 + STR modifier slashing."},
  {name:"Cat's Talent",desc:"Proficiency in Perception and Stealth."}
]},
{name:"Triton (XGE/VGM)",src:2,size:"Medium",speed:30,abv:"STR +1, CON +1, CHA +1",lore:"Tritons guard the ocean depths, standing watch over sunken cities and patrolling the trenches of the deep ocean floor.",traits:[
  {name:"Amphibious",desc:"Can breathe air and water."},
  {name:"Control Air and Water",desc:"Know Fog Cloud. At 3rd level: Gust of Wind 1/LR. At 5th: Wall of Water 1/LR. CHA spellcasting."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Emissary of the Sea",desc:"Communicate simple ideas to beasts that can breathe water."},
  {name:"Guardians of the Depths",desc:"Adapted to cold, deep water. Ignore penalties from cold water environments."},
  {name:"Swim Speed",desc:"30 ft."}
]},
// ══ VOLO'S GUIDE TO MONSTERS ════════════════════════════════════════════════
{name:"Bugbear (VGM)",src:4,size:"Medium",speed:30,abv:"STR +2, DEX +1",lore:"Bugbears are crafty, patient hunters. Although they don't have the size of an ogre, they possess a natural cunning and stealth.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Long-Limbed",desc:"When you make a melee attack on your turn, your reach is 5 ft greater than normal."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."},
  {name:"Sneaky",desc:"Proficiency in Stealth."},
  {name:"Surprise Attack",desc:"If you surprise a creature and hit it with an attack on your first turn in combat, the attack deals an extra 2d6 damage. You can use this trait only once per combat."}
]},
{name:"Goblin (VGM)",src:4,size:"Small",speed:30,abv:"DEX +2, CON +1",lore:"Goblins occupy an uneasy place in a dangerous world, reckoned by many races to be little more than a nuisance.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fury of the Small",desc:"When you damage a creature with an attack or spell and the creature's size is larger than yours, you can cause the attack or spell to deal extra damage equal to your level. Once per Short/Long Rest."},
  {name:"Nimble Escape",desc:"Can take Disengage or Hide as a Bonus Action on each of your turns."}
]},
{name:"Hobgoblin (VGM)",src:4,size:"Medium",speed:30,abv:"CON +2, INT +1",lore:"War is the lifeblood of hobgoblins. Its customs and traditions are steeped in conflict.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Martial Training",desc:"Proficiency with two martial weapons of your choice and light armor."},
  {name:"Saving Face",desc:"If you miss an attack roll or fail an ability check or saving throw, you can gain a bonus to the roll equal to the number of allies you can see within 30 ft (max +5). Once per Short/Long Rest."}
]},
{name:"Kobold (VGM)",src:4,size:"Small",speed:30,abv:"DEX +2, CON -2",lore:"Kobolds are often dismissed as cowardly, foolish, and weak, but this assessment fails to capture just how dangerous a motivated kobold can be.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Grovel, Cower, and Beg",desc:"As an action, cower and beg to distract enemies: each enemy within 10 ft that can see you has Disadvantage on attacks against allies until end of your next turn. Once per Short/Long Rest."},
  {name:"Pack Tactics",desc:"Advantage on attack rolls against a creature if at least one of your allies is adjacent to the creature and the ally isn't Incapacitated."},
  {name:"Sunlight Sensitivity",desc:"Disadvantage on attack rolls and Perception checks relying on sight in direct sunlight."}
]},
{name:"Orc (VGM)",src:4,size:"Medium",speed:30,abv:"STR +2, CON +1, INT -2",lore:"Orcs revere Gruumsh, the one-eyed god of slaughter and storms.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Aggressive",desc:"As a Bonus Action, move up to your speed toward a hostile creature you can see."},
  {name:"Menacing",desc:"Proficiency in Intimidation."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."}
]},
{name:"Yuan-ti Pureblood (VGM)",src:4,size:"Medium",speed:30,abv:"INT +1, CHA +2",lore:"The yuan-ti are one of the most evil peoples of the world. Long ago they were humans, but they have used ancient rituals to transform themselves into serpentine forms.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Innate Spellcasting",desc:"Know Poison Spray cantrip. At 3rd: Animal Friendship (snakes only) at will. At 5th: Suggestion 1/LR. CHA spellcasting."},
  {name:"Magic Resistance",desc:"Advantage on saving throws against spells and other magical effects."},
  {name:"Poison Immunity",desc:"Immunity to poison damage and the Poisoned condition."}
]},
// ══ TASHA'S CAULDRON OF EVERYTHING ══════════════════════════════════════════
{name:"Custom Lineage (TCE)",src:3,size:"Medium or Small",speed:30,abv:"Flexible (+2 to one score)",lore:"Instead of choosing one of the game's races for your character at 1st level, you can use the following traits to represent your character's lineage, giving you full control over how your character's origin shaped their statistics.",traits:[
  {name:"Variable Trait",desc:"Choose: Darkvision (60 ft) OR proficiency in one skill of your choice."},
  {name:"Feat",desc:"One 1st-level feat of your choice."},
  {name:"Powerful Build (optional)",desc:"You can replace your Variable Trait with Powerful Build: count as one size larger for carrying capacity."}
]},
// Additional TCE species updates are captured via PHB24 entries above
{name:"Changeling (TCE)",src:3,size:"Medium or Small",speed:30,abv:"CHA +2, +1 to one other",lore:"Changelings are a humanoid race who are distantly descended from doppelgangers and share their ancestor's shapechanging ability.",traits:[
  {name:"Shapechanger",desc:"As an action, change your appearance: hair, eyes, skin, height, weight, facial features, and gender. Can appear as any humanoid with same basic body plan. Clothing and equipment don't change. Revert if incapacitated or dead."},
  {name:"Changeling Instincts",desc:"Proficiency in two of: Deception, Insight, Intimidation, Performance, Persuasion."}
]},
{name:"Kalashtar (TCE)",src:3,size:"Medium",speed:30,abv:"WIS +2, CHA +1",lore:"The kalashtar are a compound people: humans who merged with the spirits of a extraplanar race of dream-walkers called quori.",traits:[
  {name:"Dual Mind",desc:"Advantage on Wisdom saving throws."},
  {name:"Mental Discipline",desc:"Resistance to Psychic damage."},
  {name:"Mind Link",desc:"Speak telepathically to one creature you can see within 60 ft. They can respond if they choose. Can share vision."},
  {name:"Severed from Dreams",desc:"Can't be contacted telepathically unless you wish it. Quori can't possess you."},
  {name:"Psychic Glamour",desc:"Advantage on Charisma (Deception, Intimidation, Performance, or Persuasion) checks — choose one when you use this trait."}
]},
{name:"Shifter (TCE)",src:3,size:"Medium",speed:30,abv:"DEX +1, +1 to one other",lore:"Shifters are sometimes called 'weretouched,' as they are the descendants of humans and lycanthropes.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Shifting",desc:"As a Bonus Action, assume a more bestial appearance for 1 minute or until you end it (Bonus Action). Gain Temp HP = PB + CON modifier. While shifted, one Shifting Feature activates based on your subrace: Beasthide (+1 AC), Longtooth (bonus bite attack), Swiftstride (+10 ft speed, reaction to move when creature ends turn adjacent), or Wildhunt (can't be surprised, advantage on Perception)."}
]},
{name:"Warforged (TCE)",src:3,size:"Medium",speed:30,abv:"CON +2, +1 to one other",lore:"The warforged were built to fight in the Last War. The first warforged were mindless automatons, but House Cannith's master artificers devoted decades of work to making them self-aware.",traits:[
  {name:"Constructed Resilience",desc:"Advantage on saves against Poison. Resistance to Poison damage. Immune to disease. Don't need to eat, drink, or breathe. Don't need to sleep; meditate 6 hours (remain conscious) for a Long Rest."},
  {name:"Sentry's Rest",desc:"During a long rest, remain conscious and aware of surroundings."},
  {name:"Integrated Protection",desc:"Your armor can't be removed against your will. Choose one mode: Darkwood Core (light; +1 AC), Composite Plating (medium; +1 AC), Heavy Plating (heavy; +1 AC). Each takes 1 hour to integrate."},
  {name:"Specialized Design",desc:"Proficiency in one skill and one tool of your choice."}
]},
// ══ GUILDMASTERS' GUIDE TO RAVNICA (GGR) — src:5 ════════════════════════════
{name:"Centaur (GGR)",src:5,size:"Medium",speed:40,abv:"STR +2, WIS +1",lore:"Centaurs gallop throughout the sprawling city-world of Ravnica, their powerful builds allowing them to navigate even urban terrain at great speed.",traits:[
  {name:"Fey",desc:"Your creature type is Fey, rather than humanoid."},
  {name:"Charge",desc:"If you move at least 30 ft straight toward a target and hit with a melee attack, the target takes an extra 1d6 piercing damage. If the target is a creature, it must succeed on a DC (8+STR+PB) STR save or be knocked prone."},
  {name:"Hooves",desc:"Your hooves are natural melee weapons, dealing 1d4 + STR modifier bludgeoning damage."},
  {name:"Equine Build",desc:"Count as one size larger for carrying capacity. Climbing costs double movement."},
  {name:"Survivor",desc:"Proficiency in one of: Animal Handling, Medicine, Nature, or Survival."}
]},
{name:"Loxodon (GGR)",src:5,size:"Medium",speed:30,abv:"CON +2, WIS +1",lore:"The loxodons of Ravnica are elephant-like humanoids known for their patient wisdom and unshakeable resolve.",traits:[
  {name:"Powerful Build",desc:"Count as one size larger for carrying capacity."},
  {name:"Loxodon Serenity",desc:"Advantage on saves against being Charmed or Frightened."},
  {name:"Natural Armor",desc:"AC = 12 + CON modifier when not wearing armor."},
  {name:"Trunk",desc:"You can grasp things with your trunk, which has a reach of 5 ft. It can carry up to half your carrying capacity. You can use it to do the following: lift a Tiny object, open/close a door or container, pick up or set down a Tiny object, push a Tiny object."},
  {name:"Keen Smell",desc:"Advantage on Perception, History, and Investigation checks involving smell."}
]},
{name:"Minotaur (GGR)",src:5,size:"Medium",speed:30,abv:"STR +2, CON +1",lore:"Ravnican minotaurs are strong and headstrong, with a powerful gore attack and an unfailing sense of direction.",traits:[
  {name:"Horns",desc:"Natural melee weapon dealing 1d6 + STR modifier piercing damage. If you move at least 10 ft in a straight line before the attack, deal an extra 2d6 piercing damage."},
  {name:"Goring Rush",desc:"Immediately after taking the Dash action, you can make one melee attack with your horns as a Bonus Action."},
  {name:"Hammering Horns",desc:"Immediately after hitting a creature with a melee attack on your turn, attempt to push the target 10 ft away (STR save DC = 8+STR+PB). Fail means pushed; can't use this to push with your horns attack."},
  {name:"Imposing Presence",desc:"Proficiency in Intimidation or Persuasion."},
  {name:"Labyrinthine Recall",desc:"Always know which direction is north and can perfectly recall paths you've traveled."}
]},
{name:"Simic Hybrid (GGR)",src:5,size:"Medium",speed:30,abv:"CON +2, +1 to one other",lore:"The Simic Combine uses magic to fuse different life forms together. The Simic Hybrid is a humanoid that has been modified with animal traits.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Animal Enhancement",desc:"At 1st level, choose two of: Manta Glide (glide 60 ft/round, no fall damage), Nimble Climbing (climbing speed = walking), Underwater Adaptation (breathe water, swim speed = walking). At 5th level, add one more enhancement: Grappling Appendages (two tentacles for grapple, 1d6 bludgeoning), Carapace (+1 AC), Acid Spit (30 ft ranged, CON save or 2d10 acid + 5 ft slow; 1/short rest)."}
]},
{name:"Vedalken (GGR)",src:5,size:"Medium",speed:30,abv:"INT +2, WIS +1",lore:"Vedalken are methodical and analytical, approaching every task with painstaking thoroughness.",traits:[
  {name:"Tireless Precision",desc:"Proficiency in one of: Arcana, History, Investigation, Medicine, Performance, Sleight of Hand. Also proficiency in one tool. Treat a die roll of 9 or lower as a 10 on checks with the chosen skill."},
  {name:"Partially Amphibious",desc:"Hold breath for 1 hour. Can survive underwater for up to 4 hours."}
]},
// ══ EBERRON: RISING FROM THE LAST WAR (ERLW) — src:6 ═══════════════════════
{name:"Warforged (ERLW)",src:6,size:"Medium",speed:30,abv:"CON +2, +1 to one other",lore:"The warforged were built to serve as soldiers in the Last War. Although the Treaty of Thronehold ended the war, warforged continue to search for purpose in peacetime Khorvaire.",traits:[
  {name:"Constructed Resilience",desc:"Advantage on saves against Poison. Resistance to Poison damage. Immune to disease. Don't need to eat, drink, or breathe. Don't need to sleep; meditate 6 hours (remain conscious) for a Long Rest."},
  {name:"Sentry's Rest",desc:"During a long rest, remain conscious and aware of surroundings while in an inert state."},
  {name:"Integrated Protection",desc:"Gain +1 to AC. Your body has built-in defensive layers; can't wear armor but can integrate armor pieces over 1 hour: Darkwood Core (unarmored AC = 11+DEX), Composite Plating (AC = 13+DEX, disadvantage on Stealth), Heavy Plating (AC = 16, disadvantage on Stealth, STR 15+)."},
  {name:"Specialized Design",desc:"Proficiency in one skill and one tool of your choice."}
]},
{name:"Changeling (ERLW)",src:6,size:"Medium or Small",speed:30,abv:"CHA +2, +1 to one other",lore:"Changelings are subtle shapeshifters who can disguise their appearance at will. Many changelings live dual lives, keeping their true nature secret.",traits:[
  {name:"Shapechanger",desc:"As an action, change your appearance and voice. You determine the specifics of the changes (hair color, skin color, gender, height, weight, facial features, etc.). The change lasts until you use this trait again or until you die. You can't change your basic body structure."},
  {name:"Changeling Instincts",desc:"Proficiency in two of: Deception, Insight, Intimidation, Performance, Persuasion."}
]},
{name:"Kalashtar (ERLW)",src:6,size:"Medium",speed:30,abv:"WIS +2, CHA +1",lore:"The kalashtar are a compound people created from the union of humanity and renegade spirits from the plane of dreams, called the quori.",traits:[
  {name:"Dual Mind",desc:"Advantage on Wisdom saving throws."},
  {name:"Mental Discipline",desc:"Resistance to Psychic damage."},
  {name:"Mind Link",desc:"Speak telepathically to one creature you can see within 60 ft. The creature can respond if it chooses."},
  {name:"Severed from Dreams",desc:"You don't dream normally — quori can't possess you and you have advantage on saves against dream-based effects."},
  {name:"Psychic Glamour",desc:"Advantage on CHA (Deception, Intimidation, Performance, or Persuasion) checks — choose one when you take this trait."}
]},
{name:"Shifter (ERLW)",src:6,size:"Medium",speed:30,abv:"DEX +1, +1 to one other",lore:"Shifters are sometimes called the weretouched, as they are the descendants of humans and lycanthropes.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Shifting",desc:"As a Bonus Action, assume a more bestial appearance for 1 minute. Gain Temp HP = PB + CON modifier. Subrace determines your Shifting Feature: Beasthide (+1 AC), Longtooth (bonus bite attack 1d6+STR piercing), Swiftstride (+10 ft speed, reaction to move 10 ft when creature ends turn adjacent), or Wildhunt (can't be surprised, advantage on WIS-based Perception)."}
]},
// ══ EXPLORER'S GUIDE TO WILDEMOUNT (EGW) — src:7 ════════════════════════════
{name:"Pallid Elf (EGW)",src:7,size:"Medium",speed:30,abv:"DEX +2, WIS +1",lore:"The pallid elves are a mysterious subrace that emerged from the Pallid Grove. Their pale complexions and haunting eyes mark them as children of the Luxon.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Can't be put to sleep by magic."},
  {name:"Trance",desc:"4 hours of meditation = Long Rest."},
  {name:"Incisive Sense",desc:"Advantage on Investigation and Insight checks."},
  {name:"Blessing of the Moonweaver",desc:"Know Light cantrip. At 3rd level: Sleep 1/LR. At 5th: Invisibility (self only) 1/LR. WIS spellcasting."}
]},
{name:"Hollow One (EGW)",src:7,size:"Medium or Small",speed:30,abv:"None (any race)",lore:"A Hollow One is a humanoid who has died and returned, retaining their memories and identity — but something changed in the passage through death.",traits:[
  {name:"Ageless",desc:"You can't be aged magically. You also don't require food, drink, or air, though you can consume them if you want."},
  {name:"Cling to Life",desc:"When you make a death saving throw and roll a 1, it counts as rolling a 1, but you don't suffer the normal consequence of rolling a 1 on a death saving throw."},
  {name:"Revenance",desc:"You retain the racial traits of your original race. You also gain the Hollow One traits, meaning you are considered undead for the purpose of spells."},
  {name:"Unsettling Presence",desc:"As a Bonus Action, unsettle a creature within 15 ft of you. The creature has disadvantage on its next ability check, attack roll, or saving throw. Once per short/long rest."}
]},
{name:"Draconblood Dragonborn (EGW)",src:7,size:"Medium",speed:30,abv:"INT +2, CHA +1",lore:"The draconblood dragonborn of Wildemount are politically savvy and magically connected, serving as nobles and power brokers.",traits:[
  {name:"Draconic Ancestry",desc:"Choose a dragon type determining your breath weapon damage type."},
  {name:"Breath Weapon",desc:"As an action, exhale destructive energy (15-ft cone or 5×30-ft line). DC = 8+CON+PB. Damage: 2d6, scaling to 3d6 at 6th, 4d6 at 11th, 5d6 at 16th. Once per Short/Long Rest."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Forceful Presence",desc:"When you make a Persuasion or Intimidation check, you can use your breath weapon as part of the action, granting Advantage on that roll. Once per Short/Long Rest."}
]},
{name:"Ravenite Dragonborn (EGW)",src:7,size:"Medium",speed:30,abv:"STR +2, CON +1",lore:"The ravenite dragonborn are a clan of former slaves who fought for and won their freedom in the wastes of Xhorhas.",traits:[
  {name:"Draconic Ancestry",desc:"Choose a dragon type determining your breath weapon damage type."},
  {name:"Breath Weapon",desc:"As an action, exhale destructive energy (15-ft cone or 5×30-ft line). DC = 8+CON+PB. Damage: 2d6, scaling to 3d6 at 6th, 4d6 at 11th, 5d6 at 16th. Once per Short/Long Rest."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Vengeful Assault",desc:"When you take damage, you can use your Reaction to immediately make a melee weapon attack against the creature that damaged you. Once per Short/Long Rest."}
]},
// ══ FIZBAN'S TREASURY OF DRAGONS (FToD) — src:8 ════════════════════════════
{name:"Chromatic Dragonborn (FToD)",src:8,size:"Medium",speed:30,abv:"Flexible",lore:"Chromatic dragonborn carry the legacy of the destructive chromatic dragons — the dragons of Tiamat.",traits:[
  {name:"Chromatic Ancestry",desc:"Choose one: Black (Acid, 5×30 line), Blue (Lightning, 5×30 line), Green (Poison, 15-ft cone), Red (Fire, 15-ft cone), White (Cold, 15-ft cone)."},
  {name:"Breath Weapon",desc:"As an action, exhale destructive energy. DC = 8+CON+PB. Creatures in area take 1d10 damage (scales to 2d10 at 5th, 3d10 at 11th, 4d10 at 17th). PB uses per Long Rest."},
  {name:"Damage Resistance",desc:"Resistance to the damage type of your Chromatic Ancestry."},
  {name:"Chromatic Warding",desc:"Starting at 5th level, as an action make yourself immune to the damage type of your Chromatic Ancestry for 1 minute. Once per Long Rest."}
]},
{name:"Metallic Dragonborn (FToD)",src:8,size:"Medium",speed:30,abv:"Flexible",lore:"Metallic dragonborn descend from the noble metallic dragons — the dragons of Bahamut.",traits:[
  {name:"Metallic Ancestry",desc:"Choose one: Brass (Fire, 5×30 line), Bronze (Lightning, 5×30 line), Copper (Acid, 5×30 line), Gold (Fire, 15-ft cone), Silver (Cold, 15-ft cone)."},
  {name:"Breath Weapon",desc:"As an action, exhale destructive energy or a special breath (enervating — targets are incapacitated; repulsion — targets are pushed 20 ft and knocked prone). DC = 8+CON+PB. PB uses per Long Rest."},
  {name:"Damage Resistance",desc:"Resistance to the damage type of your Metallic Ancestry."},
  {name:"Metallic Breath Weapon",desc:"At 5th level, you gain a second, special breath: Enervating Breath (WIS save or incapacitated until start of your next turn) or Repulsion Breath (STR save or pushed 20 ft and knocked prone). Once per Long Rest."}
]},
{name:"Gem Dragonborn (FToD)",src:8,size:"Medium",speed:30,abv:"Flexible",lore:"Gem dragonborn carry the legacy of gem dragons — the psionic dragons who hold themselves apart from the conflict between Bahamut and Tiamat.",traits:[
  {name:"Gem Ancestry",desc:"Choose one: Amethyst (Force, 15-ft cone), Crystal (Radiant, 15-ft cone), Emerald (Psychic, 5×30 line), Sapphire (Thunder, 5×30 line), Topaz (Necrotic, 15-ft cone)."},
  {name:"Breath Weapon",desc:"As an action, exhale damaging energy. DC = 8+CON+PB. Damage: 1d10 scaling to 4d10 at 17th. PB uses per Long Rest."},
  {name:"Damage Resistance",desc:"Resistance to the damage type of your Gem Ancestry."},
  {name:"Psionic Mind",desc:"You can send telepathic messages (no response) to creatures within 30 ft that you can see, in any language you know."},
  {name:"Gem Flight",desc:"Starting at 5th level, as a Bonus Action sprout spectral wings and gain a Fly Speed equal to your Speed for 1 minute. Once per Long Rest."}
]},
// ══ MORDENKAINEN PRESENTS: MONSTERS OF THE MULTIVERSE (MotM) — src:9 ════════
{name:"Aarakocra (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Aarakocra soar through the Elemental Plane of Air. On the Material Plane, they are most often encountered in high, mountainous regions.",traits:[
  {name:"Flight",desc:"You have a Fly Speed of 30 ft. You can't use this Fly Speed if you're wearing medium or heavy armor."},
  {name:"Talons",desc:"Your talons are natural weapons dealing 1d6 + STR modifier slashing damage."},
  {name:"Wind Caller",desc:"Starting at 3rd level, you can cast Gust of Wind once per Long Rest (CON spellcasting)."}
]},
{name:"Aasimar (MotM)",src:9,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Whether descended from a celestial being or infused with holy power, aasimar walk mortal worlds to protect the innocent and further the cause of good.",traits:[
  {name:"Celestial Resistance",desc:"Resistance to Necrotic and Radiant damage."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Healing Hands",desc:"As a Magic action, touch a creature to restore HP equal to PB × d4. Once per Long Rest."},
  {name:"Light Bearer",desc:"Know the Light cantrip (CHA spellcasting)."},
  {name:"Celestial Revelation",desc:"Starting at 3rd level, transform as a Bonus Action for 1 minute (1/Long Rest): Heavenly Wings (Fly Speed = walking), Inner Radiance (Radiant damage aura = PB), or Necrotic Shroud (frighten all creatures within 10 ft, Necrotic damage on first hit each turn)."}
]},
{name:"Bugbear (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Bugbears are a people who were magically created by the goblinoid god Hruggek. They are stealthy hunters with unnaturally long arms.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed."},
  {name:"Long-Limbed",desc:"When you make a melee attack on your turn, your reach for it is 5 ft greater than normal."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."},
  {name:"Sneaky",desc:"Proficiency in Stealth. Once per turn, you can deal an extra 2d6 damage to a creature you hit with an attack if it's Surprised or if you have Advantage on the roll."},
  {name:"Surprise Attack",desc:"In the first round of combat, if you Surprise a creature and hit it, deal an extra 2d6 damage."}
]},
{name:"Centaur (MotM)",src:9,size:"Medium",speed:40,abv:"Flexible",lore:"Centaurs are powerful beings, the union of humanoid and horse. They are known for their wisdom, martial prowess, and love of the open plains.",traits:[
  {name:"Charge",desc:"If you move at least 30 ft straight toward a creature and then hit it with a melee attack, it takes an extra 1d6 damage and must succeed on a STR save (DC = 8+STR+PB) or be knocked Prone."},
  {name:"Equine Build",desc:"Count as one size larger for carrying. Climbing costs double movement."},
  {name:"Hooves",desc:"Natural melee weapons dealing 1d6 + STR modifier bludgeoning damage."},
  {name:"Natural Affinity",desc:"Proficiency in one of: Animal Handling, Medicine, Nature, Perception, or Survival."}
]},
{name:"Fairy (MotM)",src:9,size:"Small",speed:30,abv:"Flexible",lore:"Fairies are magical beings who originated in the Feywild. They are tiny winged folk of boundless curiosity and often capricious nature.",traits:[
  {name:"Fairy Magic",desc:"Know Druidcraft cantrip. At 3rd: Faerie Fire 1/LR. At 5th: Enlarge/Reduce 1/LR. INT, WIS, or CHA spellcasting (chosen at character creation)."},
  {name:"Flight",desc:"Fly Speed equal to your walking speed. Can't use in medium or heavy armor."},
  {name:"Fey",desc:"Your creature type is Fey rather than humanoid."}
]},
{name:"Firbolg (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Firbolgs are forest-dwelling giants who prefer peaceful lives away from civilization, acting as stewards of the natural world.",traits:[
  {name:"Firbolg Magic",desc:"Cast Detect Magic and Disguise Self (can appear 3 ft shorter) once each per Short/Long Rest. WIS spellcasting."},
  {name:"Hidden Step",desc:"As a Bonus Action, turn Invisible until start of your next turn. Once per Short/Long Rest."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."},
  {name:"Speech of Beast and Leaf",desc:"Communicate simple ideas to Beasts and Plants. Advantage on CHA checks to influence them."}
]},
{name:"Goblin (MotM)",src:9,size:"Small",speed:30,abv:"Flexible",lore:"Goblins are small, crafty humanoids who inhabit the edges of civilization. They are quick and clever, especially at ambushes.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed."},
  {name:"Fury of the Small",desc:"When you damage a creature with an attack or spell and it is larger than you, deal extra damage equal to your PB. PB times per Long Rest."},
  {name:"Nimble Escape",desc:"Take Disengage or Hide as a Bonus Action on each of your turns."}
]},
{name:"Harengon (MotM)",src:9,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Harengon are rabbit-people who originated in the Feywild. They are blessed with a little of the luck that runs through the Feywild.",traits:[
  {name:"Hare-Trigger",desc:"Add your PB to your Initiative rolls."},
  {name:"Leporine Senses",desc:"Proficiency in Perception."},
  {name:"Lucky Footwork",desc:"When you fail a DEX saving throw, use your Reaction to roll 1d4 and add it to the save, potentially turning the failure into a success. Once per Short/Long Rest."},
  {name:"Rabbit Hop",desc:"As a Bonus Action, jump a number of feet equal to 5 × your PB, without provoking Opportunity Attacks. PB times per Long Rest."}
]},
{name:"Hobgoblin (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Hobgoblins are the militaristic and imperious cousins of goblins. They are defined by their martial discipline and their devotion to the laws of the Blood War.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed."},
  {name:"Fey Gift",desc:"Choose one benefit: Hospitality (Advantage on CHA checks to socialize), Passage (Advantage on Initiative), or Spite (Advantage on the first attack against a creature that has damaged you since your last turn)."},
  {name:"Fortune from the Many",desc:"When you miss an attack roll or fail an ability check or saving throw, gain a bonus equal to the number of allies within 30 ft (max +3). Once per Short/Long Rest."}
]},
{name:"Kenku (MotM)",src:9,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Kenku are feathered folk cursed by a long-forgotten god. They lack the ability to speak in their own voices, so they mimic sounds and voices they have heard.",traits:[
  {name:"Expert Duplication",desc:"When you copy writing or art, you have Advantage on checks to determine if it's a forgery."},
  {name:"Kenku Recall",desc:"Advantage on any ability check using a skill you're proficient in, but only when you have Inspiration. Add your PB to a skill check where you don't have proficiency (once per Short/Long Rest)."},
  {name:"Mimicry",desc:"You can mimic sounds and voices you have heard. A listener who suspects the mimicry can make an Insight check contested by your Deception."}
]},
{name:"Kobold (MotM)",src:9,size:"Small",speed:30,abv:"Flexible",lore:"Kobolds are small reptilian folk who have shed the Sunlight Sensitivity of their VGM counterparts. They retain their Pack Tactics but have new options.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Draconic Cry",desc:"As a Bonus Action, let out a cry. Until the start of your next turn, you and all allies within 10 ft have Advantage on attack rolls against enemies within 10 ft. PB times per Long Rest."},
  {name:"Kobold Legacy",desc:"Choose one: Craftiness (Proficiency in one of Arcana, Deception, Medicine, Sleight of Hand, or Survival), Defiance (Advantage on saves vs. Frightened), or Draconic Sorcery (Know one sorcerer cantrip)."}
]},
{name:"Lizardfolk (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Lizardfolk are cold and calculating, viewing other creatures through the lens of predator and prey. They are more at home in swamps and jungles than in cities.",traits:[
  {name:"Bite",desc:"Natural weapon dealing 1d6 + STR modifier piercing damage."},
  {name:"Cunning Artisan",desc:"As part of a Short Rest, craft one item from natural materials: club, javelin, shield, shortbow, darts (1d4+1)."},
  {name:"Hold Breath",desc:"Hold breath for up to 15 minutes."},
  {name:"Hungry Jaws",desc:"In lieu of a regular attack, make a bite attack. On a hit, gain Temp HP = PB. PB times per Long Rest."},
  {name:"Natural Armor",desc:"AC = 13 + DEX modifier when not wearing armor."},
  {name:"Swimming",desc:"Swim Speed equal to your walking speed."}
]},
{name:"Minotaur (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Minotaurs are powerfully built, bull-headed folk whose ancestors were transformed by the magic of Baphomet, the demon lord of beasts.",traits:[
  {name:"Horns",desc:"Natural melee weapons dealing 1d6 + STR modifier piercing damage. If you move 10+ ft straight before the attack and hit, deal an extra 2d6 piercing damage."},
  {name:"Goring Rush",desc:"Immediately after using your Dash action, make one attack with your Horns as a Bonus Action."},
  {name:"Hammering Horns",desc:"Immediately after hitting a creature with a melee attack as part of the Attack action, attempt to shove it (STR save DC = 8+STR+PB). On a failure, it's pushed up to 10 ft away. Can't use this with your Horns attack."},
  {name:"Labyrinthine Recall",desc:"Advantage on checks to navigate mazes and can perfectly recall paths you've traveled."}
]},
{name:"Orc (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Orcs are the children of Gruumsh, one of the mightiest gods. They combine ferocity with a savage joy of battle that makes them fearsome warriors.",traits:[
  {name:"Adrenaline Rush",desc:"Take the Dash action as a Bonus Action. Gain Temp HP = PB. PB times per Long Rest."},
  {name:"Darkvision",desc:"120 ft."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying."},
  {name:"Relentless Endurance",desc:"When you are reduced to 0 HP but not killed, drop to 1 HP instead. Once per Long Rest."}
]},
{name:"Satyr (MotM)",src:9,size:"Medium",speed:35,abv:"Flexible",lore:"Satyrs are found throughout the planes, but are most common in the Feywild. They love music, wine, revelry, and other pleasures.",traits:[
  {name:"Fey",desc:"Your creature type is Fey."},
  {name:"Magic Resistance",desc:"Advantage on saving throws against spells and other magical effects."},
  {name:"Mirthful Leaps",desc:"Whenever you make a long or high jump, roll 1d8 and add the number to the number of feet you jump."},
  {name:"Reveler",desc:"Proficiency in Performance and Persuasion. Instrument proficiency (choose one)."}
]},
{name:"Tabaxi (MotM)",src:9,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Tabaxi are feline humanoids from distant lands. Curiosity and an irresistible drive to collect strange artifacts and hear unusual stories motivate most tabaxi.",traits:[
  {name:"Cat's Claws",desc:"Climb Speed = 20 ft. Natural weapon dealing 1d6 + STR modifier slashing damage."},
  {name:"Cat's Talent",desc:"Proficiency in Perception and Stealth."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Feline Agility",desc:"When you move on your turn, you can double your speed until the end of the turn. After using this trait, your speed is 0 until end of your next turn (or until you move 0 ft in a turn)."}
]},
{name:"Triton (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Tritons guard the ocean depths, standing watch over sunken cities and waging war on creatures of the deep.",traits:[
  {name:"Amphibious",desc:"Breathe air and water."},
  {name:"Child of the Sea",desc:"Swim Speed = 30 ft. Communicate simple ideas to Beasts with a Swim Speed."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Emissary of the Sea",desc:"Communicate simple ideas to any creature with a Swim Speed."},
  {name:"Guardian of the Depths",desc:"Resistance to Cold damage. Ignore penalties from frigid water environments."},
  {name:"Innate Spellcasting",desc:"Know Fog Cloud. At 3rd: Gust of Wind 1/LR. At 5th: Wall of Water 1/LR. CHA spellcasting."}
]},
{name:"Yuan-ti (MotM)",src:9,size:"Medium",speed:30,abv:"Flexible",lore:"Yuan-ti are the serpent people of southern jungles. Though they were originally human, they have been transformed through ancient rituals into something far more sinister.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Magic Resistance",desc:"Advantage on saving throws against spells and other magical effects."},
  {name:"Poison Resilience",desc:"Advantage on saves vs. Poison. Resistance to Poison damage."},
  {name:"Serpentine Spellcasting",desc:"Know Poison Spray. At 3rd: Animal Friendship (on snakes) at will. At 5th: Suggestion 1/LR. CHA spellcasting."}
]},
// ══ SPELLJAMMER: ADVENTURES IN SPACE (SJA) — src:10 ════════════════════════
{name:"Astral Elf (SJA)",src:10,size:"Medium",speed:30,abv:"Flexible",lore:"Astral elves live in the Astral Sea amid timeless silver voids. Their centuries-long contemplative lives give them a powerful connection to magic.",traits:[
  {name:"Astral Fire",desc:"Know one of: Dancing Lights, Light, or Sacred Flame cantrip (INT, WIS, or CHA spellcasting, chosen at character creation)."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Fey Ancestry",desc:"Advantage on saves vs. Charmed. Magic can't put you to sleep."},
  {name:"Keen Senses",desc:"Proficiency in Perception."},
  {name:"Radiant Soul",desc:"When you succeed on a death saving throw, you can use a Reaction to regain HP = PB + WIS modifier."},
  {name:"Starlight Step",desc:"As a Bonus Action, teleport to an unoccupied space you can see within 30 ft. PB times per Long Rest."},
  {name:"Trance",desc:"4 hours of meditation = Long Rest."}
]},
{name:"Autognome (SJA)",src:10,size:"Small",speed:30,abv:"Flexible",lore:"Autognomes are clockwork constructs built by rock gnomes. They can become adventurers when freed from service, seeking purpose in the wider multiverse.",traits:[
  {name:"Armored Casing",desc:"You are encased in thin metal or other durable materials. While not wearing armor, your base AC = 13 + DEX modifier."},
  {name:"Built for Success",desc:"Add d4 to one attack roll, ability check, or saving throw per Short/Long Rest."},
  {name:"Healing Machine",desc:"When the Mending spell is cast on you, you can spend one Hit Die (roll it + CON modifier) and regain that many HP."},
  {name:"Mechanical Nature",desc:"Resistance to Poison. Immunity to disease. Advantage on saves vs. Paralyzed and Poisoned. Don't need to eat, drink, or breathe. Don't need to sleep, but must recharge 6 hours for a Long Rest."},
  {name:"Sentry's Rest",desc:"Remain conscious during Long Rest."},
  {name:"Specialized Design",desc:"Proficiency in one skill and one tool of your choice."}
]},
{name:"Giff (SJA)",src:10,size:"Medium",speed:30,abv:"Flexible",lore:"Giff are muscular, hippopotamus-headed humanoids who are renowned across the multiverse as soldiers, mercenaries, and bodyguards.",traits:[
  {name:"Astral Spark",desc:"When you fail an ability check, you can roll 1d4 and add it to the check, possibly turning the failure into success. Once per Short/Long Rest."},
  {name:"Firearms Mastery",desc:"Proficiency with all firearms. Ignore the Loading property of firearms. Before a ranged attack with a firearm: take -5 to hit for +10 damage."},
  {name:"Hippogriff Build",desc:"Powerful Build: count as one size larger for carrying. Advantage on STR checks and saves."},
  {name:"Swim Speed",desc:"30 ft."}
]},
{name:"Hadozee (SJA)",src:10,size:"Medium",speed:30,abv:"Flexible",lore:"Hadozee are ape-like beings with flaps of skin between their limbs that allow them to glide through the air.",traits:[
  {name:"Dexterous Feet",desc:"As a Bonus Action, use your feet to pick up or hold an object you can't also be holding with your hands, or to make an unarmed strike."},
  {name:"Glide",desc:"When you fall and aren't Incapacitated, you can use Reaction to glide: fall 60 ft per round and move 60 ft horizontally. Land upright, taking no fall damage."},
  {name:"Hadozee Resilience",desc:"PB times per Long Rest, when you would take damage, reduce it by 1d6 + PB."}
]},
{name:"Plasmoid (SJA)",src:10,size:"Medium or Small",speed:30,abv:"Flexible",lore:"Plasmoids are amorphous beings of living ooze who can reshape their bodies at will, squeezing into unusual spaces.",traits:[
  {name:"Amorphous",desc:"You can squeeze through a space as narrow as 1 inch wide, provided you don't carry equipment too large to fit through."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Ooze Nature",desc:"Don't need to sleep. Meditate 4 hours for a Long Rest, remaining conscious."},
  {name:"Resilient",desc:"Advantage on saves vs. the Poisoned condition. Resistance to Poison damage."},
  {name:"Shape Self",desc:"As an action, reshape your body: extend a pseudopod (5 ft, hold a light weapon or grapple), form an eye stalk, modify your facial features to mimic a creature you've seen."}
]},
{name:"Thri-kreen (SJA)",src:10,size:"Medium",speed:30,abv:"Flexible",lore:"Thri-kreen are insectoid beings with four arms, two compound eyes, and chitinous carapaces. They are the dominant species of some desert worlds.",traits:[
  {name:"Chameleon Carapace",desc:"While not wearing armor, AC = 13 + DEX. As an action, change skin color to match surroundings: Advantage on Stealth checks until you move or take action."},
  {name:"Darkvision",desc:"60 ft."},
  {name:"Secondary Arms",desc:"Your lower pair of arms can hold objects, wield light weapons, or interact with objects — but can't be used for attacks more than once per turn."},
  {name:"Sleepless",desc:"You don't sleep. Instead, you remain semiconscious, and you can't be put to sleep by magic."},
  {name:"Telepathy",desc:"Speak telepathically to any creature within 30 ft that you can see. It can respond (if it wishes). You can't use this telepathy with creatures that are immune to being Charmed."}
]},
// ══ BIGBY PRESENTS: GLORY OF THE GIANTS (BGG) — src:11 ════════════════════
{name:"Goliath (BGG)",src:11,size:"Medium",speed:35,abv:"Flexible",lore:"Descended from the titans who shaped the world, goliaths stand apart from other humanoids in their towering builds and their drive to push beyond mortal limits.",traits:[
  {name:"Giant Ancestry",desc:"Choose one Giant Ancestor: Cloud Giant (Misty Step 1/LR), Fire Giant (Burning Hands 1/LR, fire resist), Frost Giant (Armor of Agathys 1/LR, cold resist), Hill Giant (Heroism 1/LR, +HP = PB), Stone Giant (Blur 1/LR, earth sense), Storm Giant (Thunderwave 1/LR, lightning resist). CON is your spellcasting ability for the chosen spell."},
  {name:"Large Form",desc:"Starting at 5th level, expand to Large size as a Bonus Action for 10 minutes. Reach increases to 10 ft, and heavy weapons deal +1d4 damage. PB times per Long Rest."},
  {name:"Powerful Build",desc:"Count as one size larger for carrying capacity."},
  {name:"Stone's Endurance",desc:"Reaction when you take damage: roll 1d12 + CON modifier and reduce damage by that amount. PB times per Long Rest."}
]},
// ══ HEROES OF FAERÛN (HoF) — src:12 ════════════════════════════════════════
{name:"Deep Gnome (HoF)",src:12,size:"Small",speed:30,abv:"INT +2, DEX +1 (or flexible in 2024 rules)",lore:"Deep gnomes — also called svirfneblin — are the silent, cunning cousins of surface gnomes who have adapted to life in the Underdark.",traits:[
  {name:"Darkvision",desc:"120 ft."},
  {name:"Gnome Cunning",desc:"Advantage on INT, WIS, and CHA saving throws against magic."},
  {name:"Stone Camouflage",desc:"Advantage on Stealth checks to hide in rocky terrain."},
  {name:"Gift of the Svirfneblin",desc:"Starting at 3rd level: cast Blindness/Deafness 1/LR. At 5th: Blur (self only) 1/LR. INT spellcasting."},
  {name:"Svirfneblin Magic",desc:"Know Nondetection as a ritual, cast on yourself only, without material components."}
]},
{name:"Duergar (HoF)",src:12,size:"Medium",speed:25,abv:"CON +2, STR +1",lore:"Duergar are gray dwarves who have been hardened by centuries of slavery in the Underdark. They are bitter, suspicious, and ruthlessly disciplined.",traits:[
  {name:"Superior Darkvision",desc:"120 ft."},
  {name:"Duergar Resilience",desc:"Advantage on saves against Poison, Illusions, and against being Paralyzed or Stunned."},
  {name:"Duergar Magic",desc:"At 3rd level: Enlarge/Reduce (self, Enlarge only) 1/LR. At 5th: Invisibility (self only) 1/LR. INT spellcasting."},
  {name:"Sunlight Sensitivity",desc:"Disadvantage on attack rolls and Perception checks relying on sight in direct sunlight."},
  {name:"Dwarven Combat Training",desc:"Proficiency with battleaxe, handaxe, light hammer, and warhammer."}
]},
{name:"Aasimar (HoF/variant)",src:12,size:"Medium",speed:30,abv:"CHA +2, WIS +1",lore:"The aasimar of Faerûn bear within their souls a divine spark granted by the gods of the Outer Planes. Many serve as champions of good, though some fall to darker paths.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Celestial Resistance",desc:"Resistance to Necrotic and Radiant damage."},
  {name:"Healing Hands",desc:"As an action, touch a creature and restore HP equal to your level. Once per Long Rest."},
  {name:"Light Bearer",desc:"Know the Light cantrip."},
  {name:"Radiant Soul (Protector)",desc:"Starting at 3rd level, wings sprout from your back for 1 minute (Bonus Action). Gain Fly Speed = walking speed. Once per Long Rest. Additional Radiant damage = level on first attack each turn while transformed."}
]},
{name:"Tiefling Variants (HoF)",src:12,size:"Medium",speed:30,abv:"CHA +2, INT +1",lore:"The tieflings of Faerûn include not only the standard Asmodeus-touched bloodline, but also rarer bloodlines tied to other archdevils and demon lords.",traits:[
  {name:"Darkvision",desc:"60 ft."},
  {name:"Hellish Resistance",desc:"Resistance to Fire damage."},
  {name:"Feral or Legacy Spellcasting",desc:"By bloodline, choose one: Asmodeus (Thaumaturgy, Hellish Rebuke, Darkness), Baalzebul (Thaumaturgy, Ray of Sickness, Crown of Madness), Dispater (Thaumaturgy, Disguise Self, Detect Thoughts), Fierna (Friends, Charm Person, Suggestion), Glasya (Minor Illusion, Disguise Self, Invisibility), Levistus (Ray of Frost, Armor of Agathys, Darkness), Mammon (Mage Hand, Tenser's Floating Disk, Arcane Lock), Mephistopheles (Mage Hand, Burning Hands, Flame Blade), Zariel (Thaumaturgy, Searing Smite, Branding Smite). CHA spellcasting."}
]}
];
