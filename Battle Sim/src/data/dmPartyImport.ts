import { v4 as uuid } from 'uuid'
import { PlayerTemplates } from './data'
import { Creature } from '../model/model'
import { ActionSlots, Class, ClassesList } from '../model/enums'

type DmPartyEntry = {
  playerData?: Record<string, any>,
  dmData?: Record<string, any>,
}

const SaveClass: Record<string, string[]> = {
  artificer: ['con', 'int'],
  barbarian: ['str', 'con'],
  bard: ['dex', 'cha'],
  cleric: ['wis', 'cha'],
  druid: ['int', 'wis'],
  fighter: ['str', 'con'],
  monk: ['str', 'dex'],
  paladin: ['wis', 'cha'],
  ranger: ['str', 'dex'],
  rogue: ['dex', 'int'],
  sorcerer: ['con', 'cha'],
  warlock: ['wis', 'cha'],
  wizard: ['int', 'wis'],
}

const ClassAliases: Record<string, Class> = {
  artificer: 'artificer',
  barbarian: 'barbarian',
  bard: 'bard',
  cleric: 'cleric',
  druid: 'druid',
  fighter: 'fighter',
  monk: 'monk',
  paladin: 'paladin',
  ranger: 'ranger',
  rogue: 'rogue',
  sorcerer: 'sorcerer',
  warlock: 'warlock',
  wizard: 'wizard',
}

export function readDmPartyFromLocalStorage(): Creature[] {
  if (typeof localStorage === 'undefined') return []

  try {
    return dmPartyEntriesToCreatures(JSON.parse(localStorage.getItem('dnd_dm_party') || '[]'))
  } catch (error) {
    console.warn('Could not import DM party into Battle Sim', error)
    return []
  }
}

export function dmPartyEntriesToCreatures(rawEntries: unknown): Creature[] {
  if (!Array.isArray(rawEntries)) return []

  return rawEntries
    .map(entry => dmPartyEntryToCreature(entry as DmPartyEntry))
    .filter((creature): creature is Creature => !!creature)
}

function dmPartyEntryToCreature(entry: DmPartyEntry): Creature | null {
  const playerData = entry && entry.playerData ? entry.playerData : entry as Record<string, any>
  if (!playerData || typeof playerData !== 'object') return null

  const level = clampNumber(getNumber(playerData, ['level', 'lv'], 1), 1, 20)
  const classType = getClassType(playerData)
  const name = getString(playerData, ['name', 'n', 'characterName'], 'Unnamed Hero')
  const portrait = getString(playerData, ['portrait', 'img', 'image', 'avatar', 'token'], '')
  const hp = getHp(playerData, entry.dmData)
  const ac = getNumber(playerData, ['ac', 'armorClass'], 10)
  const saveBonus = averageSaveBonus(playerData, classType, level)

  if (!classType) {
    return {
      id: uuid(),
      mode: 'custom',
      name,
      portrait: portrait || undefined,
      count: 1,
      hp,
      AC: ac,
      saveBonus,
      actions: [{
        id: uuid(),
        type: 'atk',
        name: getString(playerData, ['weaponName'], 'Main Attack'),
        actionSlot: ActionSlots.Action,
        freq: 'at will',
        condition: 'default',
        targets: 1,
        target: 'enemy with least HP',
        toHit: getNumber(playerData, ['weaponAttack', 'attackBonus'], proficiencyBonus(level) + abilityMod(getAbilities(playerData).str)),
        dpr: getString(playerData, ['weaponDamage'], '1d8+3'),
      }],
    }
  }

  const creature = PlayerTemplates[classType](level, defaultOptionsForClass(classType) as any)
  creature.id = uuid()
  creature.name = name
  creature.portrait = portrait || undefined
  creature.count = 1
  creature.hp = hp
  creature.AC = ac
  creature.saveBonus = saveBonus
  creature.class = {
    type: classType,
    level,
    options: defaultOptionsForClass(classType) as any,
  }
  return creature
}

function getClassType(playerData: Record<string, any>): Class | null {
  const classes = playerData.classes || playerData.classLevels
  const raw = Array.isArray(classes) && classes[0]
    ? classes[0].name || classes[0].className || classes[0].cls
    : getString(playerData, ['className', 'class', 'cls'], '')
  const normalized = String(raw).trim().toLowerCase().replace(/[^a-z]/g, '')

  if (ClassAliases[normalized]) return ClassAliases[normalized]
  return ClassesList.find(className => normalized.includes(className)) || null
}

function defaultOptionsForClass(classType: Class) {
  if (['barbarian', 'fighter', 'paladin'].includes(classType)) return { gwm: false, weaponBonus: 0 }
  if (['ranger', 'rogue'].includes(classType)) return { ss: false, weaponBonus: 0 }
  return {}
}

function getHp(playerData: Record<string, any>, dmData?: Record<string, any>): number {
  const hp = playerData.hp || {}
  return getNumber(
    { ...playerData, ...hp, trackedHp: dmData && dmData.trackedHp },
    ['trackedHp', 'cur', 'current', 'currentHp', 'max', 'maxHp', 'hpMax'],
    10
  )
}

function averageSaveBonus(playerData: Record<string, any>, classType: Class | null, level: number): number {
  const abilities = getAbilities(playerData)
  const saves = ['str', 'dex', 'con', 'int', 'wis', 'cha']
    .map(ability => abilityMod(abilities[ability]) + (hasSaveProficiency(playerData, classType, ability) ? proficiencyBonus(level) : 0))
  return Math.round(saves.reduce((sum, value) => sum + value, 0) / saves.length)
}

function hasSaveProficiency(playerData: Record<string, any>, classType: Class | null, ability: string): boolean {
  const rawSaves = playerData.saveProf || playerData.savesProf || playerData.saves || []
  if (Array.isArray(rawSaves)) {
    return rawSaves.map(save => String(save).toLowerCase().slice(0, 3)).includes(ability)
  }
  return !!classType && SaveClass[classType].includes(ability)
}

function getAbilities(playerData: Record<string, any>): Record<string, number> {
  const abilities = playerData.abilities || playerData.ab || {}
  return {
    str: getNumber(abilities, ['str', 'strength'], 10),
    dex: getNumber(abilities, ['dex', 'dexterity'], 10),
    con: getNumber(abilities, ['con', 'constitution'], 10),
    int: getNumber(abilities, ['int', 'intelligence'], 10),
    wis: getNumber(abilities, ['wis', 'wisdom'], 10),
    cha: getNumber(abilities, ['cha', 'charisma'], 10),
  }
}

function proficiencyBonus(level: number): number {
  return Math.ceil(level / 4) + 1
}

function abilityMod(score: number): number {
  return Math.floor((score - 10) / 2)
}

function getString(obj: Record<string, any>, keys: string[], fallback: string): string {
  const value = getValue(obj, keys)
  return value === undefined ? fallback : String(value)
}

function getNumber(obj: Record<string, any>, keys: string[], fallback: number): number {
  const value = Number(getValue(obj, keys))
  return Number.isFinite(value) ? value : fallback
}

function getValue(obj: Record<string, any>, keys: string[]) {
  for (const key of keys) {
    if (obj && obj[key] !== undefined && obj[key] !== null && obj[key] !== '') return obj[key]
  }
  return undefined
}

function clampNumber(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}
