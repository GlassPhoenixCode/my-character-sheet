# DM App Data Files

Each JSON file in this folder is loaded by `DM_DATA_MANIFEST` in `dm.html`. During the transition, missing files are allowed; the app logs a warning and uses inline fallback data when available.

## `spells.json`

Expected to contain the spell database as a JSON array. For the first extraction pass, keep the existing row-oriented spell format compatible with `SPELL_SCHEMA`, where each spell is an array with name, level, school, casting time, range, components, duration, flags, class list, description, upcast text, and edition fields.

## `monsters.json`

Expected to contain the bestiary as a JSON array. Each entry should represent one creature record compatible with the current `BESTIARY_DATA` objects, including identifiers, display name, challenge rating, combat stats, traits, actions, source metadata, and any DM-facing notes already used by the app.

## `magic_items.json`

Expected to contain magic item data. The loader accepts either the current full database object with an `items` array or a plain array of item records; the app normalizes either shape back into the existing magic item browser structure.

## `equipment.json`

Expected to contain mundane equipment, weapons, armor, packs, services, and related price or rules metadata as JSON. The exact schema will be finalized when equipment is extracted, but this file should remain a single parseable JSON value, preferably an object grouped by equipment category.

## `subclasses.json`

Expected to contain class and subclass reference data as JSON. The future schema should preserve class names, subclass names, levels, feature summaries, source metadata, and any lookup keys needed by character or encounter helpers.

## `conditions.json`

Expected to contain condition reference data as JSON. The future schema should preserve condition names, rules text, quick summaries, tags, edition/source metadata, and display ordering for combat and rules panels.

## `rules.json`

Expected to contain rules compendium data as JSON. The future schema should preserve rule IDs, group IDs, titles, editions, categories, aliases, tags, summaries, body text, SRD text, table-use notes, related rule links, and verification/source metadata.

## `quests.json`

Expected to contain quest and objective card seed data as a JSON array. Quests created in the app are persisted to localStorage under `dm_quests`; this file is the static baseline loaded by `DM_DATA_MANIFEST`.

Each quest entry should use this schema:

```json
{
  "id": "string — uuid or slug",
  "title": "string",
  "status": "rumor/active/stalled/completed/failed",
  "type": "main/side/faction/personal",
  "description": "string — DM-facing full truth",
  "player_summary": "string or null — what players know",
  "giver": "string or null — NPC name",
  "location": "string or null",
  "linked_note_ids": ["array of note IDs"],
  "linked_npc_names": ["array"],
  "linked_location_names": ["array"],
  "clues": [{"text": "string", "discovered": true}],
  "objectives": [{"text": "string", "complete": false}],
  "rewards": "string or null",
  "session_added": "string or null — in-world date",
  "session_resolved": "string or null",
  "tags": ["array"],
  "dm_notes": "string or null"
}
```
