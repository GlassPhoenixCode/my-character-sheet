// ═══════════════════════════════════════════════════════════════════════════
// CHARACTER BUILDER — D&D 5e/5.5e Life-Path Card Builder
// Integrates with player.html data files (spells_data.js, species_data.js, etc.)
// ═══════════════════════════════════════════════════════════════════════════

(function(){
'use strict';

// ── CSS INJECTION ──────────────────────────────────────────────────────────
var BUILDER_CSS = `
/* ── BUILDER PANEL ─────────────────────────────────────────────────── */
#pnl-builder { padding: 0; background: var(--bg); }

.bldr-wrap {
  min-height: 100%;
  background:
    radial-gradient(ellipse at 20% 10%, rgba(201,168,76,0.07) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 90%, rgba(100,60,180,0.07) 0%, transparent 50%),
    var(--bg);
  padding: 16px 12px 100px;
}

/* ── BUILDER HEADER ─────────────────────────────────────────────────── */
.bldr-header {
  text-align: center;
  padding: 18px 0 8px;
  position: relative;
}
.bldr-title {
  font-family: var(--ff);
  font-size: 22px;
  color: var(--gold2);
  letter-spacing: 0.08em;
  text-shadow: 0 0 20px rgba(201,168,76,0.4);
}
.bldr-subtitle {
  font-size: 11px;
  color: var(--text3);
  margin-top: 3px;
  letter-spacing: 0.05em;
}
.bldr-rune-line {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0 0;
  opacity: 0.5;
}
.bldr-rune-line::before, .bldr-rune-line::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--gold3), transparent);
}
.bldr-rune-line span { font-size: 14px; color: var(--gold3); }

/* ── MODE TOGGLE ────────────────────────────────────────────────────── */
.bldr-mode-bar {
  display: flex;
  gap: 6px;
  justify-content: center;
  margin: 12px 0 8px;
}
.bldr-mode-btn {
  padding: 6px 16px;
  border-radius: 20px;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text2);
  font-size: 11px;
  font-family: var(--fu);
  cursor: pointer;
  transition: all 0.2s;
}
.bldr-mode-btn.active {
  background: var(--gold3);
  border-color: var(--gold);
  color: var(--gold2);
}

/* ── RULESET TOGGLE ─────────────────────────────────────────────────── */
.bldr-ruleset-bar {
  display: flex;
  gap: 0;
  justify-content: center;
  margin: 0 0 14px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
}
.bldr-ruleset-btn {
  flex: 1;
  padding: 7px 10px;
  border: none;
  background: var(--bg2);
  color: var(--text3);
  font-family: var(--ff);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.03em;
}
.bldr-ruleset-btn.active {
  background: linear-gradient(135deg, var(--gold3), rgba(120,80,20,0.8));
  color: var(--gold2);
}

/* ── PROGRESS BAR ───────────────────────────────────────────────────── */
.bldr-progress {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 14px;
  padding: 8px 12px;
  background: var(--bg2);
  border-radius: 8px;
  border: 1px solid var(--border);
}
.bldr-progress-bar {
  flex: 1;
  height: 4px;
  background: var(--bg3);
  border-radius: 2px;
  overflow: hidden;
}
.bldr-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--gold3), var(--gold));
  border-radius: 2px;
  transition: width 0.4s ease;
}
.bldr-progress-text {
  font-size: 10px;
  color: var(--text3);
  white-space: nowrap;
  font-family: var(--fu);
}

/* ── CARD GRID ──────────────────────────────────────────────────────── */
.bldr-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
/* Quick-build: show all expanded */
.bldr-cards.quick-mode .bldr-card-inner {
  transform: rotateY(180deg) !important;
}
.bldr-cards.quick-mode .bldr-card { height: auto !important; }

/* ── CARD ───────────────────────────────────────────────────────────── */
.bldr-card {
  perspective: 1200px;
  min-height: 90px;
  cursor: pointer;
}
.bldr-card.locked { opacity: 0.5; cursor: not-allowed; }
.bldr-card.active { cursor: default; }
.bldr-card.complete { cursor: pointer; }

.bldr-card-inner {
  position: relative;
  width: 100%;
  transform-style: preserve-3d;
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 12px;
}
.bldr-card-inner.flipped { transform: rotateY(180deg); }

/* CARD FACE BACK (sealed) */
.bldr-card-back {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  background: linear-gradient(135deg, var(--bg3) 0%, var(--panel) 100%);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 70px;
  position: relative;
  overflow: hidden;
}
.bldr-card-back::before {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 8px,
    rgba(201,168,76,0.025) 8px,
    rgba(201,168,76,0.025) 9px
  );
  border-radius: 12px;
}
.bldr-card.active .bldr-card-back,
.bldr-card.complete .bldr-card-back {
  border-color: var(--gold3);
  box-shadow: 0 0 0 1px rgba(201,168,76,0.15), 0 4px 20px rgba(0,0,0,0.3);
}
.bldr-card.needs-review .bldr-card-back {
  border-color: var(--red);
}

.bldr-card-icon {
  font-size: 28px;
  flex-shrink: 0;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.5));
  transition: transform 0.3s;
}
.bldr-card:hover:not(.locked) .bldr-card-icon { transform: scale(1.1) rotate(-5deg); }

.bldr-card-meta { flex: 1; min-width: 0; }
.bldr-card-title {
  font-family: var(--ff);
  font-size: 15px;
  color: var(--gold2);
  letter-spacing: 0.04em;
}
.bldr-card-subtitle {
  font-size: 10px;
  color: var(--text3);
  margin-top: 2px;
  font-style: italic;
}
.bldr-card-summary {
  font-size: 11px;
  color: var(--text2);
  margin-top: 4px;
  font-family: var(--fu);
}

.bldr-card-status {
  flex-shrink: 0;
  font-size: 18px;
}

/* CARD FACE FRONT (open/form) */
.bldr-card-front {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transform: rotateY(180deg);
  background: var(--panel);
  border: 1px solid var(--gold3);
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(201,168,76,0.1), 0 8px 32px rgba(0,0,0,0.4);
  overflow: hidden;
}
.bldr-card-front-header {
  background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(120,80,20,0.3));
  border-bottom: 1px solid var(--gold3);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.bldr-card-front-title {
  font-family: var(--ff);
  font-size: 16px;
  color: var(--gold2);
  flex: 1;
}
.bldr-card-front-close {
  background: none;
  border: 1px solid var(--border);
  color: var(--text3);
  border-radius: 6px;
  width: 28px;
  height: 28px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.bldr-card-front-close:hover { border-color: var(--red); color: var(--red2); }
.bldr-card-front-body { padding: 14px 16px; }
.bldr-card-front-footer {
  padding: 10px 16px;
  border-top: 1px solid var(--border);
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

/* ── FORM ELEMENTS ──────────────────────────────────────────────────── */
.bldr-field { margin-bottom: 12px; }
.bldr-label {
  font-size: 10px;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 4px;
  font-family: var(--fu);
}
.bldr-input, .bldr-select, .bldr-textarea {
  width: 100%;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text);
  font-family: var(--fu);
  font-size: 13px;
  padding: 7px 10px;
  box-sizing: border-box;
  transition: border-color 0.2s;
}
.bldr-input:focus, .bldr-select:focus, .bldr-textarea:focus {
  outline: none;
  border-color: var(--gold3);
}
.bldr-select { cursor: pointer; }
.bldr-textarea { resize: vertical; min-height: 60px; }

/* ── CHOICE GRID (species/class/background) ─────────────────────────── */
.bldr-choice-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  max-height: 320px;
  overflow-y: auto;
  padding-right: 2px;
}
.bldr-choice-grid::-webkit-scrollbar { width: 4px; }
.bldr-choice-grid::-webkit-scrollbar-track { background: var(--bg3); }
.bldr-choice-grid::-webkit-scrollbar-thumb { background: var(--border2); border-radius: 2px; }

.bldr-choice-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 9px 10px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}
.bldr-choice-card:hover { border-color: var(--gold3); background: var(--bg3); }
.bldr-choice-card.selected {
  border-color: var(--gold);
  background: rgba(201,168,76,0.1);
  box-shadow: 0 0 12px rgba(201,168,76,0.15);
}
.bldr-choice-name {
  font-family: var(--ff);
  font-size: 13px;
  color: var(--gold2);
}
.bldr-choice-tag {
  font-size: 9px;
  color: var(--text3);
  font-family: var(--fu);
  margin-top: 2px;
}
.bldr-choice-detail {
  font-size: 10px;
  color: var(--text2);
  margin-top: 3px;
  line-height: 1.4;
}

/* ── CLASS CARDS (larger, with role info) ───────────────────────────── */
.bldr-class-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 7px;
  max-height: 340px;
  overflow-y: auto;
}
.bldr-class-card {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;
}
.bldr-class-card:hover { border-color: var(--gold3); }
.bldr-class-card.selected {
  border-color: var(--gold);
  background: rgba(201,168,76,0.08);
}
.bldr-class-header {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 5px;
}
.bldr-class-icon { font-size: 18px; }
.bldr-class-name {
  font-family: var(--ff);
  font-size: 13px;
  color: var(--gold2);
  flex: 1;
}
.bldr-class-hd {
  font-size: 10px;
  color: var(--text3);
  background: var(--bg3);
  padding: 1px 5px;
  border-radius: 3px;
}
.bldr-class-role {
  font-size: 9px;
  color: var(--text3);
  font-family: var(--fu);
}
.bldr-class-tags {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-top: 4px;
}
.bldr-class-tag {
  font-size: 8px;
  padding: 1px 5px;
  border-radius: 3px;
  font-family: var(--fu);
}
.bldr-tag-spell { background: rgba(142,68,173,0.3); color: #c39bd3; }
.bldr-tag-martial { background: rgba(192,57,43,0.3); color: #e59a8c; }
.bldr-tag-support { background: rgba(39,174,96,0.3); color: #7dcea0; }
.bldr-tag-beginner { background: rgba(41,128,185,0.3); color: #85c1e9; }
.bldr-tag-expert { background: rgba(243,156,18,0.3); color: #f8c471; }

/* ── ABILITY SCORE SECTION ──────────────────────────────────────────── */
.bldr-ability-method {
  display: flex;
  gap: 5px;
  margin-bottom: 12px;
}
.bldr-method-btn {
  flex: 1;
  padding: 5px 4px;
  font-size: 10px;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text3);
  border-radius: 5px;
  cursor: pointer;
  font-family: var(--fu);
  transition: all 0.2s;
  text-align: center;
}
.bldr-method-btn.active { border-color: var(--gold); color: var(--gold2); background: rgba(201,168,76,0.1); }

.bldr-ability-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  margin-bottom: 10px;
}
.bldr-ability-box {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 6px;
  text-align: center;
  position: relative;
}
.bldr-ability-label {
  font-size: 9px;
  color: var(--text3);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: var(--fu);
}
.bldr-ability-score {
  font-family: var(--ff);
  font-size: 22px;
  color: var(--gold2);
  line-height: 1;
  margin: 2px 0;
}
.bldr-ability-mod {
  font-size: 11px;
  color: var(--text2);
  font-family: var(--fu);
}
.bldr-ability-bonus {
  font-size: 9px;
  color: var(--green2);
  position: absolute;
  top: 4px;
  right: 5px;
}
.bldr-ability-input {
  width: 100%;
  background: none;
  border: none;
  text-align: center;
  font-family: var(--ff);
  font-size: 22px;
  color: var(--gold2);
  padding: 0;
}
.bldr-ability-input:focus { outline: none; }

/* ── POINT BUY ──────────────────────────────────────────────────────── */
.bldr-pb-points {
  text-align: center;
  font-family: var(--ff);
  font-size: 15px;
  color: var(--gold2);
  margin-bottom: 10px;
}
.bldr-pb-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 4px;
}
.bldr-pb-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid var(--border);
  background: var(--bg3);
  color: var(--text2);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  line-height: 1;
}
.bldr-pb-btn:hover { border-color: var(--gold); color: var(--gold2); }

/* ── SKILL SECTION ──────────────────────────────────────────────────── */
.bldr-skill-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  max-height: 260px;
  overflow-y: auto;
}
.bldr-skill-row {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 6px;
  border-radius: 5px;
  font-size: 11px;
  font-family: var(--fu);
  transition: background 0.15s;
}
.bldr-skill-row:hover { background: var(--bg3); }
.bldr-skill-row.locked { opacity: 0.5; }
.bldr-skill-row.prof { color: var(--green2); }
.bldr-skill-cb { cursor: pointer; accent-color: var(--gold); }
.bldr-skill-name { flex: 1; color: var(--text2); }
.bldr-skill-ab { font-size: 9px; color: var(--text3); }

/* ── SPELL SECTION ──────────────────────────────────────────────────── */
.bldr-spell-filters {
  display: flex;
  gap: 5px;
  margin-bottom: 8px;
  flex-wrap: wrap;
}
.bldr-spell-filter {
  padding: 3px 9px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text3);
  font-size: 10px;
  cursor: pointer;
  font-family: var(--fu);
  transition: all 0.2s;
}
.bldr-spell-filter.active { border-color: var(--purple); color: var(--purple2); background: rgba(142,68,173,0.15); }

.bldr-spell-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-height: 280px;
  overflow-y: auto;
}
.bldr-spell-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 8px;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: var(--fu);
}
.bldr-spell-row:hover { border-color: var(--purple); }
.bldr-spell-row.selected { border-color: var(--purple); background: rgba(142,68,173,0.1); color: var(--purple2); }
.bldr-spell-level {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--bg3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: var(--text3);
  flex-shrink: 0;
}
.bldr-spell-name { flex: 1; color: var(--text2); }
.bldr-spell-school { font-size: 9px; color: var(--text3); }

/* ── STORY THREADS ──────────────────────────────────────────────────── */
.bldr-story-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 0;
  cursor: pointer;
  color: var(--text3);
  font-size: 11px;
  font-family: var(--fu);
  border-top: 1px solid var(--border);
  margin-top: 10px;
  user-select: none;
}
.bldr-story-toggle:hover { color: var(--gold2); }
.bldr-story-toggle-arrow { transition: transform 0.2s; }
.bldr-story-toggle.open .bldr-story-toggle-arrow { transform: rotate(90deg); }
.bldr-story-body {
  display: none;
  padding-top: 8px;
  gap: 8px;
  flex-direction: column;
}
.bldr-story-body.open { display: flex; }
.bldr-story-prompt {
  font-size: 10px;
  color: var(--text3);
  font-style: italic;
  margin-bottom: 2px;
}

/* ── CHARACTER VISUAL ───────────────────────────────────────────────── */
.bldr-char-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 14px 0;
  gap: 6px;
}
.bldr-char-frame {
  width: 100px;
  height: 120px;
  border: 2px solid var(--gold3);
  border-radius: 50% 50% 40% 40% / 60% 60% 40% 40%;
  background: var(--bg3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 48px;
  position: relative;
  box-shadow: 0 0 20px rgba(201,168,76,0.1), inset 0 0 30px rgba(0,0,0,0.3);
  transition: all 0.4s;
  overflow: hidden;
}
.bldr-char-frame::before {
  content: '';
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  background: radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.08), transparent 70%);
}
.bldr-char-aura {
  position: absolute;
  inset: -8px;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.5s;
  pointer-events: none;
}
.bldr-char-frame.has-class .bldr-char-aura { opacity: 1; }
.bldr-char-name {
  font-family: var(--ff);
  font-size: 13px;
  color: var(--gold2);
  letter-spacing: 0.05em;
}
.bldr-char-tags {
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
}
.bldr-char-tag {
  font-size: 9px;
  padding: 2px 7px;
  border-radius: 10px;
  background: var(--bg3);
  border: 1px solid var(--border);
  color: var(--text3);
  font-family: var(--fu);
}

/* ── BUTTONS ────────────────────────────────────────────────────────── */
.bldr-btn {
  padding: 7px 16px;
  border-radius: 6px;
  border: 1px solid var(--gold3);
  background: linear-gradient(135deg, rgba(201,168,76,0.2), rgba(120,80,20,0.3));
  color: var(--gold2);
  font-family: var(--ff);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.04em;
}
.bldr-btn:hover { background: linear-gradient(135deg, rgba(201,168,76,0.3), rgba(120,80,20,0.4)); }
.bldr-btn.can {
  background: var(--bg3);
  border-color: var(--border);
  color: var(--text3);
}
.bldr-btn.can:hover { border-color: var(--red); color: var(--red2); }
.bldr-btn.primary {
  background: linear-gradient(135deg, var(--gold3), rgba(160,100,20,0.9));
  border-color: var(--gold2);
}
.bldr-btn.create {
  width: 100%;
  padding: 12px;
  font-size: 15px;
  background: linear-gradient(135deg, rgba(201,168,76,0.3), rgba(120,80,20,0.5));
  border: 2px solid var(--gold);
  box-shadow: 0 0 20px rgba(201,168,76,0.2);
}
.bldr-btn.create:hover { box-shadow: 0 0 30px rgba(201,168,76,0.35); }

/* ── REVIEW CARD ────────────────────────────────────────────────────── */
.bldr-review-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.bldr-review-section {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px;
}
.bldr-review-section-title {
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gold3);
  font-family: var(--fu);
  margin-bottom: 6px;
  border-bottom: 1px solid var(--border);
  padding-bottom: 4px;
}
.bldr-review-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 11px;
  padding: 2px 0;
}
.bldr-review-key { color: var(--text3); font-family: var(--fu); }
.bldr-review-val { color: var(--text); font-family: var(--ff); }

/* ── DRAFT BANNER ───────────────────────────────────────────────────── */
.bldr-draft-bar {
  background: rgba(201,168,76,0.1);
  border: 1px solid var(--gold3);
  border-radius: 8px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 10px;
  font-size: 11px;
  color: var(--gold2);
}
.bldr-draft-bar button {
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid var(--gold3);
  background: none;
  color: var(--gold);
  cursor: pointer;
}

/* ── INFO TOOLTIP ───────────────────────────────────────────────────── */
.bldr-info-box {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-left: 3px solid var(--gold3);
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 11px;
  color: var(--text2);
  font-family: var(--fu);
  line-height: 1.5;
  margin-top: 8px;
}
.bldr-info-box strong { color: var(--gold2); font-family: var(--ff); }

/* ── ANIMATIONS ─────────────────────────────────────────────────────── */
@keyframes bldr-glow-pulse {
  0%, 100% { box-shadow: 0 0 12px rgba(201,168,76,0.15); }
  50% { box-shadow: 0 0 24px rgba(201,168,76,0.3); }
}
.bldr-card.active .bldr-card-front { animation: bldr-glow-pulse 3s ease-in-out infinite; }

@keyframes bldr-card-appear {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.bldr-card { animation: bldr-card-appear 0.3s ease both; }

/* ── SEARCH IN CARD ─────────────────────────────────────────────────── */
.bldr-search {
  margin-bottom: 8px;
  position: relative;
}
.bldr-search-input {
  width: 100%;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 20px;
  color: var(--text);
  font-family: var(--fu);
  font-size: 12px;
  padding: 6px 12px 6px 30px;
  box-sizing: border-box;
}
.bldr-search-input:focus { outline: none; border-color: var(--gold3); }
.bldr-search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text3);
  font-size: 13px;
  pointer-events: none;
}

/* ── SUBCLASS CHOOSER ───────────────────────────────────────────────── */
.bldr-subclass-note {
  font-size: 10px;
  color: var(--text3);
  font-style: italic;
  margin-bottom: 8px;
  text-align: center;
}

/* ── LEVEL SELECTOR ─────────────────────────────────────────────────── */
.bldr-level-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}
.bldr-level-label { font-size: 12px; color: var(--text2); font-family: var(--fu); flex: 1; }
.bldr-level-select {
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--gold2);
  font-family: var(--ff);
  font-size: 14px;
  padding: 5px 10px;
  cursor: pointer;
  width: 70px;
}

/* ── SECTION DIVIDER ────────────────────────────────────────────────── */
.bldr-divider {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
  color: var(--text3);
  font-size: 10px;
  font-family: var(--fu);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.bldr-divider::before, .bldr-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* ── HP DISPLAY ─────────────────────────────────────────────────────── */
.bldr-stat-row {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.bldr-stat-box {
  flex: 1;
  background: var(--bg2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px;
  text-align: center;
}
.bldr-stat-val { font-family: var(--ff); font-size: 20px; color: var(--gold2); }
.bldr-stat-label { font-size: 9px; color: var(--text3); font-family: var(--fu); margin-top: 2px; }

/* Quick mode */
.bldr-cards.quick-mode .bldr-card-back { display: none; }
.bldr-cards.quick-mode .bldr-card-inner {
  transform: none !important;
  position: static;
}
.bldr-cards.quick-mode .bldr-card-front {
  transform: none;
  backface-visibility: visible;
  -webkit-backface-visibility: visible;
  display: block;
}
.bldr-cards.quick-mode .bldr-card { min-height: auto; }
`;

// ── INJECT CSS ─────────────────────────────────────────────────────────────
(function injectCSS(){
  var style = document.createElement('style');
  style.textContent = BUILDER_CSS;
  document.head.appendChild(style);
})();

// ── CONSTANTS ──────────────────────────────────────────────────────────────
var CLASS_ICONS = {
  Barbarian:'⚔️', Bard:'🎵', Cleric:'✨', Druid:'🌿', Fighter:'🛡️',
  Monk:'👊', Paladin:'⚜️', Ranger:'🏹', Rogue:'🗡️', Sorcerer:'🔮',
  Warlock:'💀', Wizard:'📚', Artificer:'⚙️', 'Blood Hunter':'🩸'
};
var CLASS_ROLES = {
  Barbarian:{role:'Melee damage',tags:['martial','beginner'],ability:'Strength'},
  Bard:{role:'Support & utility',tags:['spell','support','expert'],ability:'Charisma'},
  Cleric:{role:'Healing & divine',tags:['spell','support'],ability:'Wisdom'},
  Druid:{role:'Nature & wildshape',tags:['spell','support','expert'],ability:'Wisdom'},
  Fighter:{role:'Versatile combatant',tags:['martial','beginner'],ability:'Str or Dex'},
  Monk:{role:'Agile melee',tags:['martial'],ability:'Dex & Wisdom'},
  Paladin:{role:'Divine warrior',tags:['martial','spell'],ability:'Str & Charisma'},
  Ranger:{role:'Scout & hunter',tags:['martial','spell'],ability:'Dex & Wisdom'},
  Rogue:{role:'Stealth & skill',tags:['martial','beginner'],ability:'Dexterity'},
  Sorcerer:{role:'Innate magic',tags:['spell'],ability:'Charisma'},
  Warlock:{role:'Pact magic',tags:['spell','expert'],ability:'Charisma'},
  Wizard:{role:'Arcane mastery',tags:['spell','expert'],ability:'Intelligence'},
  Artificer:{role:'Magic & crafting',tags:['spell','martial','expert'],ability:'Intelligence'},
  'Blood Hunter':{role:'Hunter of darkness',tags:['martial','expert'],ability:'Strength'}
};
var CLASS_SPELLCASTERS = ['Bard','Cleric','Druid','Paladin','Ranger','Sorcerer','Warlock','Wizard','Artificer'];
var CLASS_HALF_CASTERS = ['Paladin','Ranger','Artificer'];
var STANDARD_ARRAY = [15,14,13,12,10,8];
var POINT_BUY_COSTS = {8:0,9:1,10:2,11:3,12:4,13:5,14:7,15:9};
var POINT_BUY_MAX = 27;
var ABILITIES = ['strength','dexterity','constitution','intelligence','wisdom','charisma'];
var ABILITY_ABBR = {strength:'STR',dexterity:'DEX',constitution:'CON',intelligence:'INT',wisdom:'WIS',charisma:'CHA'};
var SKILLS_DATA = [
  {name:'Acrobatics',ab:'dexterity'},{name:'Animal Handling',ab:'wisdom'},
  {name:'Arcana',ab:'intelligence'},{name:'Athletics',ab:'strength'},
  {name:'Deception',ab:'charisma'},{name:'History',ab:'intelligence'},
  {name:'Insight',ab:'wisdom'},{name:'Intimidation',ab:'charisma'},
  {name:'Investigation',ab:'intelligence'},{name:'Medicine',ab:'wisdom'},
  {name:'Nature',ab:'intelligence'},{name:'Perception',ab:'wisdom'},
  {name:'Performance',ab:'charisma'},{name:'Persuasion',ab:'charisma'},
  {name:'Religion',ab:'intelligence'},{name:'Sleight of Hand',ab:'dexterity'},
  {name:'Stealth',ab:'dexterity'},{name:'Survival',ab:'wisdom'}
];
var CLASS_SKILL_OPTIONS = {
  Barbarian:{count:2,from:['Animal Handling','Athletics','Intimidation','Nature','Perception','Survival']},
  Bard:{count:3,from:'any'},
  Cleric:{count:2,from:['History','Insight','Medicine','Persuasion','Religion']},
  Druid:{count:2,from:['Arcana','Animal Handling','Insight','Medicine','Nature','Perception','Religion','Survival']},
  Fighter:{count:2,from:['Acrobatics','Animal Handling','Athletics','History','Insight','Intimidation','Perception','Survival']},
  Monk:{count:2,from:['Acrobatics','Athletics','History','Insight','Religion','Stealth']},
  Paladin:{count:2,from:['Athletics','Insight','Intimidation','Medicine','Persuasion','Religion']},
  Ranger:{count:3,from:['Animal Handling','Athletics','Insight','Investigation','Nature','Perception','Stealth','Survival']},
  Rogue:{count:4,from:['Acrobatics','Athletics','Deception','Insight','Intimidation','Investigation','Perception','Performance','Persuasion','Sleight of Hand','Stealth']},
  Sorcerer:{count:2,from:['Arcana','Deception','Insight','Intimidation','Persuasion','Religion']},
  Warlock:{count:2,from:['Arcana','Deception','History','Intimidation','Investigation','Nature','Religion']},
  Wizard:{count:2,from:['Arcana','History','Insight','Investigation','Medicine','Religion']},
  Artificer:{count:2,from:['Arcana','History','Investigation','Medicine','Nature','Perception','Sleight of Hand']},
  'Blood Hunter':{count:3,from:['Arcana','Athletics','Deception','History','Insight','Investigation','Perception','Stealth','Survival']}
};
var CLASS_SAVES = {
  Barbarian:['strength','constitution'],
  Bard:['dexterity','charisma'],
  Cleric:['wisdom','charisma'],
  Druid:['intelligence','wisdom'],
  Fighter:['strength','constitution'],
  Monk:['strength','dexterity'],
  Paladin:['wisdom','charisma'],
  Ranger:['strength','dexterity'],
  Rogue:['dexterity','intelligence'],
  Sorcerer:['constitution','charisma'],
  Warlock:['wisdom','charisma'],
  Wizard:['intelligence','wisdom'],
  Artificer:['constitution','intelligence'],
  'Blood Hunter':['dexterity','intelligence']
};

// ── BUILDER STATE ──────────────────────────────────────────────────────────
var BS = {
  mode: 'guided',      // 'guided' | 'quick'
  ruleset: '2014',
  activeCard: null,
  draft: {
    name: '',
    ruleset: '2014',
    species: null,
    background: null,
    cls: null,
    subclass: null,
    level: 1,
    abilityMethod: 'standard',
    abilities: {strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8},
    abilityAssignments: {},  // for standard array: {strength: 15, ...}
    pointBuySpend: 0,
    skills: [],
    spells: [],
    cantrips: [],
    equipment: [],
    story: {},
    portrait: null
  }
};

// ── CARD DEFINITIONS ───────────────────────────────────────────────────────
function getCards(){
  var d = BS.draft;
  var cards = [
    {
      id:'name',
      icon:'📜',
      title:'Name Your Hero',
      subtitle:'Every legend begins with a name',
      required:true,
      summary: d.name || '',
      alwaysAvailable: true
    },
    {
      id:'species',
      icon:'🧬',
      title:'Birth & Species',
      subtitle:'Who were you when your story began?',
      required:true,
      summary: d.species ? d.species.name : '',
      alwaysAvailable: true
    },
    {
      id:'background',
      icon:'📖',
      title:'Background',
      subtitle:'What shaped you before adventure called?',
      required:true,
      summary: d.background ? d.background.name : '',
      alwaysAvailable: true
    },
    {
      id:'class',
      icon:'⚔️',
      title:'Class & Calling',
      subtitle:'What path of power do you walk?',
      required:true,
      summary: d.cls ? (d.cls + (d.subclass ? ' — '+d.subclass : '') + ' (Lv.'+d.level+')') : '',
      alwaysAvailable: true
    },
    {
      id:'abilities',
      icon:'💪',
      title:'Ability Scores',
      subtitle:'The measure of body, mind, and spirit',
      required:true,
      summary: d.cls ? abilitySummary() : '',
      alwaysAvailable: !!d.cls
    },
    {
      id:'skills',
      icon:'🎯',
      title:'Skills & Proficiencies',
      subtitle:'What have you mastered?',
      required:true,
      summary: d.skills.length ? d.skills.slice(0,3).join(', ')+(d.skills.length>3?'...':'') : '',
      alwaysAvailable: !!d.cls
    },
    {
      id:'spells',
      icon:'✨',
      title:'Spells & Magic',
      subtitle:'The arcane arts at your command',
      required: CLASS_SPELLCASTERS.indexOf(d.cls) >= 0,
      hidden: !d.cls || CLASS_SPELLCASTERS.indexOf(d.cls) < 0,
      summary: d.spells.length || d.cantrips.length ? (d.cantrips.length+' cantrips, '+d.spells.length+' spells') : '',
      alwaysAvailable: !!d.cls && CLASS_SPELLCASTERS.indexOf(d.cls) >= 0
    },
    {
      id:'review',
      icon:'🏆',
      title:'Final Review',
      subtitle:'Your legend is ready to begin',
      required:true,
      summary: 'Review & create',
      alwaysAvailable: isReadyForReview()
    }
  ];
  return cards.filter(function(c){ return !c.hidden; });
}

function abilitySummary(){
  var d = BS.draft;
  var parts = ABILITIES.map(function(ab){
    return ABILITY_ABBR[ab]+':'+getEffectiveScore(ab);
  });
  return parts.slice(0,3).join(' ')+' ...';
}

function isReadyForReview(){
  var d = BS.draft;
  return d.name && d.species && d.background && d.cls;
}

function getCardStatus(card){
  var d = BS.draft;
  if(card.id==='name') return d.name ? 'complete' : 'available';
  if(card.id==='species') return d.species ? 'complete' : 'available';
  if(card.id==='background') return d.background ? 'complete' : 'available';
  if(card.id==='class') return d.cls ? 'complete' : 'available';
  if(card.id==='abilities') return (d.cls && abilitiesSet()) ? 'complete' : (d.cls?'available':'locked');
  if(card.id==='skills') return (d.cls && d.skills.length>0) ? 'complete' : (d.cls?'available':'locked');
  if(card.id==='spells') return (d.spells.length||d.cantrips.length) ? 'complete' : 'available';
  if(card.id==='review') return isReadyForReview() ? 'available' : 'locked';
  return 'available';
}

function abilitiesSet(){
  return ABILITIES.every(function(ab){ return BS.draft.abilities[ab] >= 1; });
}

function statusIcon(status){
  if(status==='complete') return '<span style="color:var(--green2)">✓</span>';
  if(status==='locked') return '<span style="color:var(--text3)">🔒</span>';
  if(status==='needs-review') return '<span style="color:var(--red)">⚠</span>';
  return '<span style="color:var(--gold3)">◇</span>';
}

// ── MAIN RENDER ────────────────────────────────────────────────────────────
function renderBuilder(){
  var pnl = document.getElementById('pnl-builder');
  if(!pnl) return;

  var cards = getCards();
  var complete = cards.filter(function(c){ return getCardStatus(c)==='complete'; }).length;
  var required = cards.filter(function(c){ return c.required; }).length;
  var pct = Math.round((complete/required)*100);

  var hasDraft = BS.draft.name || BS.draft.species || BS.draft.cls;

  var html = '<div class="bldr-wrap">';

  // Header
  html += '<div class="bldr-header">';
  html += '<div class="bldr-title">⚔ Character Forge ⚔</div>';
  html += '<div class="bldr-subtitle">Shape your legend, one chapter at a time</div>';
  html += '<div class="bldr-rune-line"><span>✦</span></div>';
  html += '</div>';

  // Mode toggle
  html += '<div class="bldr-mode-bar">';
  html += '<button class="bldr-mode-btn'+(BS.mode==='guided'?' active':'')+'" onclick="bldrSetMode(\'guided\')">🃏 Guided Cards</button>';
  html += '<button class="bldr-mode-btn'+(BS.mode==='quick'?' active':'')+'" onclick="bldrSetMode(\'quick\')">⚡ Quick Build</button>';
  html += '</div>';

  // Ruleset toggle
  html += '<div class="bldr-ruleset-bar">';
  html += '<button class="bldr-ruleset-btn'+(BS.draft.ruleset==='2014'?' active':'')+'" onclick="bldrSetRuleset(\'2014\')">2014 Rules</button>';
  html += '<button class="bldr-ruleset-btn'+(BS.draft.ruleset==='2024'?' active':'')+'" onclick="bldrSetRuleset(\'2024\')">2024 Rules</button>';
  html += '</div>';

  // Draft bar
  if(hasDraft){
    html += '<div class="bldr-draft-bar">';
    html += '<span>📝 Draft in progress</span>';
    html += '<div style="display:flex;gap:5px">';
    html += '<button onclick="bldrSaveDraft()">Save</button>';
    html += '<button onclick="bldrClearDraft()" style="color:var(--red2);border-color:var(--red)">Clear</button>';
    html += '</div>';
    html += '</div>';
  }

  // Progress
  html += '<div class="bldr-progress">';
  html += '<span style="font-size:12px">📜</span>';
  html += '<div class="bldr-progress-bar"><div class="bldr-progress-fill" style="width:'+pct+'%"></div></div>';
  html += '<div class="bldr-progress-text">'+complete+' / '+required+' stages</div>';
  html += '</div>';

  // Character visual (if any choices made)
  if(BS.draft.name || BS.draft.species || BS.draft.cls){
    html += renderCharVisual();
  }

  // Cards
  html += '<div class="bldr-cards'+(BS.mode==='quick'?' quick-mode':'')+'\" id="bldr-card-list">';
  cards.forEach(function(card, idx){
    html += renderCard(card, idx);
  });
  html += '</div>';

  html += '</div>';
  pnl.innerHTML = html;

  // Restore active card flip state
  if(BS.activeCard && BS.mode==='guided'){
    var inner = document.getElementById('bldr-inner-'+BS.activeCard);
    if(inner) inner.classList.add('flipped');
  }
}

// ── CARD RENDERER ──────────────────────────────────────────────────────────
function renderCard(card, idx){
  var status = getCardStatus(card);
  var isLocked = status === 'locked';
  var isComplete = status === 'complete';
  var isActive = BS.activeCard === card.id;

  var delay = (idx * 0.05).toFixed(2);
  var cardClass = 'bldr-card';
  if(isLocked) cardClass += ' locked';
  else if(isActive) cardClass += ' active';
  else if(isComplete) cardClass += ' complete';
  if(status==='needs-review') cardClass += ' needs-review';

  var html = '<div class="'+cardClass+'" style="animation-delay:'+delay+'s">';
  html += '<div class="bldr-card-inner" id="bldr-inner-'+card.id+'">';

  // BACK FACE
  html += '<div class="bldr-card-back"';
  if(!isLocked){ html += ' onclick="bldrToggleCard(\''+card.id+'\')"'; }
  html += '>';
  html += '<div class="bldr-card-icon">'+card.icon+'</div>';
  html += '<div class="bldr-card-meta">';
  html += '<div class="bldr-card-title">'+card.title+'</div>';
  html += '<div class="bldr-card-subtitle">'+card.subtitle+'</div>';
  if(card.summary){ html += '<div class="bldr-card-summary">'+escHtml(card.summary)+'</div>'; }
  html += '</div>';
  html += '<div class="bldr-card-status">'+statusIcon(status)+'</div>';
  html += '</div>';

  // FRONT FACE
  html += '<div class="bldr-card-front">';
  html += '<div class="bldr-card-front-header">';
  html += '<span style="font-size:18px">'+card.icon+'</span>';
  html += '<div class="bldr-card-front-title">'+card.title+'</div>';
  html += '<button class="bldr-card-front-close" onclick="bldrToggleCard(\''+card.id+'\')" title="Close">✕</button>';
  html += '</div>';
  html += '<div class="bldr-card-front-body" id="bldr-body-'+card.id+'">';
  html += renderCardBody(card);
  html += '</div>';
  html += '</div>';

  html += '</div></div>';
  return html;
}

// ── CARD BODY RENDERERS ────────────────────────────────────────────────────
function renderCardBody(card){
  if(card.id==='name') return renderNameCard();
  if(card.id==='species') return renderSpeciesCard();
  if(card.id==='background') return renderBackgroundCard();
  if(card.id==='class') return renderClassCard();
  if(card.id==='abilities') return renderAbilitiesCard();
  if(card.id==='skills') return renderSkillsCard();
  if(card.id==='spells') return renderSpellsCard();
  if(card.id==='review') return renderReviewCard();
  return '<div style="color:var(--text3);font-size:12px;padding:10px">Coming soon...</div>';
}

// NAME CARD
function renderNameCard(){
  var d = BS.draft;
  var html = '';
  html += '<div class="bldr-field">';
  html += '<div class="bldr-label">Character Name</div>';
  html += '<input class="bldr-input" id="bldr-name" value="'+escHtml(d.name)+'" placeholder="Enter your character\'s name..." oninput="BS.draft.name=this.value;bldrRefreshSummary(\'name\')" />';
  html += '</div>';

  // Pronouns / presentation (optional)
  html += '<div class="bldr-field">';
  html += '<div class="bldr-label">Pronouns / Presentation <span style="color:var(--text3)">(optional)</span></div>';
  html += '<select class="bldr-select" id="bldr-pronouns" onchange="BS.draft.pronouns=this.value">';
  html += '<option value="">Unspecified</option>';
  html += '<option value="he/him"'+(d.pronouns==='he/him'?' selected':'')+'>He / Him</option>';
  html += '<option value="she/her"'+(d.pronouns==='she/her'?' selected':'')+'>She / Her</option>';
  html += '<option value="they/them"'+(d.pronouns==='they/them'?' selected':'')+'>They / Them</option>';
  html += '<option value="other">Other / Custom</option>';
  html += '</select>';
  html += '</div>';

  // Age
  html += '<div class="bldr-field">';
  html += '<div class="bldr-label">Age <span style="color:var(--text3)">(optional)</span></div>';
  html += '<input class="bldr-input" id="bldr-age" value="'+(d.age||'')+'" placeholder="How many winters..." type="number" min="1" style="width:100px" oninput="BS.draft.age=this.value" />';
  html += '</div>';

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:8px;justify-content:flex-end">';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'name\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// SPECIES CARD
function renderSpeciesCard(){
  var d = BS.draft;
  var edition = d.ruleset;
  // Get species from the loaded data
  var allSpecies = (typeof SPECIES_DB !== 'undefined') ? SPECIES_DB : [];
  var filtered = allSpecies.filter(function(s){
    if(edition==='2024') return s.src===1 || (s.srcVer&&s.srcVer==='2024');
    return !s.src || s.src===0 || s.src===2||s.src===3||s.src===4; // PHB14, VGM, etc.
  });

  // Also use species.json data if available
  var jsonSpecies = (typeof window.BUILDER_SPECIES !== 'undefined') ? window.BUILDER_SPECIES : [];
  if(jsonSpecies.length && filtered.length===0){
    filtered = jsonSpecies.filter(function(s){
      return s.edition === edition;
    });
  }

  // Fallback: use embedded species list
  if(filtered.length===0){ filtered = getFallbackSpecies(edition); }

  var html = '<div class="bldr-search">';
  html += '<span class="bldr-search-icon">🔍</span>';
  html += '<input class="bldr-search-input" placeholder="Search species..." oninput="bldrFilterSpecies(this.value)" id="bldr-sp-search" />';
  html += '</div>';

  html += '<div class="bldr-choice-grid" id="bldr-species-grid">';
  filtered.forEach(function(s){
    var sname = s.name || s.n || '?';
    var selected = d.species && d.species.name === sname;
    var spd = s.speed || 30;
    var abv = s.abv || s.abilityBonusText || '';
    html += '<div class="bldr-choice-card'+(selected?' selected':'')+'" onclick="bldrSelectSpecies(\''+escHtml(sname)+'\')">';
    html += '<div class="bldr-choice-name">'+escHtml(sname)+'</div>';
    if(abv){ html += '<div class="bldr-choice-tag">'+escHtml(abv)+'</div>'; }
    html += '<div class="bldr-choice-tag">Speed: '+spd+'ft</div>';
    html += '</div>';
  });
  html += '</div>';

  // Selected info box
  if(d.species){
    html += '<div class="bldr-info-box" id="bldr-species-info">';
    html += '<strong>'+escHtml(d.species.name)+'</strong><br>';
    var traits = d.species.traits || [];
    if(traits.length){
      html += traits.slice(0,3).map(function(t){ return '• '+(t.name||''); }).join('<br>');
      if(traits.length>3) html += '<br><span style="color:var(--text3)">+'+( traits.length-3)+' more traits</span>';
    }
    html += '</div>';
  }

  // Story thread
  html += renderStoryToggle('species',[
    {key:'homeland',label:'Where were you born or raised?'},
    {key:'community',label:'Describe your people\'s culture or community.'},
    {key:'unusual',label:'Was anything unusual about your birth or upbringing?'}
  ]);

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'species\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'species\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// BACKGROUND CARD
function renderBackgroundCard(){
  var d = BS.draft;
  var edition = d.ruleset;
  var allBgs = (typeof BACKGROUNDS !== 'undefined') ? BACKGROUNDS : [];
  var filtered = allBgs.filter(function(b){
    if(edition==='2024') return b.src===1;
    return b.src===0||b.src===undefined||b.src===2||b.src===3;
  });
  if(filtered.length===0){ filtered = getFallbackBackgrounds(edition); }

  var html = '<div class="bldr-search">';
  html += '<span class="bldr-search-icon">🔍</span>';
  html += '<input class="bldr-search-input" placeholder="Search backgrounds..." oninput="bldrFilterBackgrounds(this.value)" id="bldr-bg-search" />';
  html += '</div>';

  html += '<div class="bldr-choice-grid" id="bldr-bg-grid">';
  filtered.forEach(function(b){
    var bname = b.name || '?';
    var selected = d.background && d.background.name===bname;
    var skills = b.skills ? b.skills.join(', ') : (b.proficiency||'');
    html += '<div class="bldr-choice-card'+(selected?' selected':'')+'" onclick="bldrSelectBackground(\''+escHtml(bname)+'\')">';
    html += '<div class="bldr-choice-name">'+escHtml(bname)+'</div>';
    if(skills){ html += '<div class="bldr-choice-tag">'+escHtml(skills)+'</div>'; }
    html += '</div>';
  });
  html += '</div>';

  if(d.background){
    html += '<div class="bldr-info-box">';
    html += '<strong>'+escHtml(d.background.name)+'</strong> ';
    if(d.background.feature){ html += '— <em>'+escHtml(d.background.feature)+'</em>'; }
    if(d.background.skills&&d.background.skills.length){
      html += '<br>Skills: '+escHtml(d.background.skills.join(', '));
    }
    html += '</div>';
  }

  html += renderStoryToggle('background',[
    {key:'before_life',label:'What did you do before adventuring?'},
    {key:'key_event',label:'What was the defining event of your background?'},
    {key:'left_behind',label:'What did you leave behind when you became an adventurer?'}
  ]);

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'background\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'background\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// CLASS CARD
function renderClassCard(){
  var d = BS.draft;
  var classNames = Object.keys(CLASS_ICONS);

  var html = '';

  // Level selector
  html += '<div class="bldr-level-row">';
  html += '<div class="bldr-level-label">Starting Level</div>';
  html += '<select class="bldr-level-select" id="bldr-level" onchange="BS.draft.level=parseInt(this.value)">';
  for(var lv=1;lv<=20;lv++){
    html += '<option value="'+lv+'"'+(d.level===lv?' selected':'')+'>'+lv+'</option>';
  }
  html += '</select>';
  html += '</div>';

  html += '<div class="bldr-class-grid" id="bldr-class-grid">';
  classNames.forEach(function(cls){
    var selected = d.cls===cls;
    var role = CLASS_ROLES[cls]||{role:'',tags:[],ability:''};
    html += '<div class="bldr-class-card'+(selected?' selected':'')+'" onclick="bldrSelectClass(\''+cls+'\')">';
    html += '<div class="bldr-class-header">';
    html += '<span class="bldr-class-icon">'+CLASS_ICONS[cls]+'</span>';
    html += '<span class="bldr-class-name">'+cls+'</span>';
    // Get hit die from classes data
    html += '<span class="bldr-class-hd">d'+getClassHD(cls)+'</span>';
    html += '</div>';
    html += '<div class="bldr-class-role">'+role.role+'</div>';
    html += '<div class="bldr-class-role" style="color:var(--gold3);font-size:9px">Key: '+role.ability+'</div>';
    html += '<div class="bldr-class-tags">';
    (role.tags||[]).forEach(function(tag){
      html += '<span class="bldr-class-tag bldr-tag-'+tag+'">'+tag+'</span>';
    });
    html += '</div>';
    html += '</div>';
  });
  html += '</div>';

  // Subclass chooser (if class is picked and level qualifies)
  if(d.cls){
    var scLevel = getSubclassLevel(d.cls);
    if(d.level >= scLevel){
      html += '<div class="bldr-divider">Choose Subclass</div>';
      html += '<div class="bldr-subclass-note">Subclasses become available at level '+scLevel+' for '+d.cls+'.</div>';
      var subclasses = getSubclassesForClass(d.cls, d.ruleset);
      html += '<div class="bldr-choice-grid">';
      subclasses.forEach(function(sc){
        var scName = typeof sc==='string'?sc:(sc.name||sc);
        var selected = d.subclass===scName;
        html += '<div class="bldr-choice-card'+(selected?' selected':'')+'" onclick="bldrSelectSubclass(\''+escHtml(scName)+'\')">';
        html += '<div class="bldr-choice-name">'+escHtml(scName)+'</div>';
        html += '</div>';
      });
      html += '</div>';
    } else {
      html += '<div class="bldr-info-box" style="margin-top:8px">'+
        '<strong>Subclass</strong> — Available at level '+scLevel+'. Choose a subclass when your character reaches that level.</div>';
    }
  }

  html += renderStoryToggle('class',[
    {key:'calling',label:'Why did you become this class?'},
    {key:'training',label:'Was your training formal, self-taught, or accidental?'},
    {key:'first_adventure',label:'What pushed you toward adventure?'}
  ]);

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'class\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'class\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// ABILITIES CARD
function renderAbilitiesCard(){
  var d = BS.draft;
  var method = d.abilityMethod || 'standard';

  var html = '';

  // Method selector
  html += '<div class="bldr-ability-method">';
  ['standard','pointbuy','manual','rolled'].forEach(function(m){
    var labels = {standard:'Standard Array',pointbuy:'Point Buy',manual:'Manual Entry',rolled:'Rolled'};
    html += '<button class="bldr-method-btn'+(method===m?' active':'')+'" onclick="bldrSetAbilityMethod(\''+m+'\')">'+labels[m]+'</button>';
  });
  html += '</div>';

  if(method==='standard'){
    html += '<div style="font-size:10px;color:var(--text3);margin-bottom:8px;font-family:var(--fu)">Assign these values: 15, 14, 13, 12, 10, 8 — one per ability</div>';
    html += '<div class="bldr-ability-grid">';
    ABILITIES.forEach(function(ab){
      var score = getEffectiveScore(ab);
      var mod = Math.floor((score-10)/2);
      var bonus = getSpeciesBonus(ab);
      html += '<div class="bldr-ability-box">';
      html += '<div class="bldr-ability-label">'+ABILITY_ABBR[ab]+'</div>';
      if(bonus>0){ html += '<div class="bldr-ability-bonus">+'+bonus+'</div>'; }
      html += '<select class="bldr-ability-input" style="font-size:18px;background:none;border:none;width:100%;cursor:pointer;color:var(--gold2)" onchange="bldrSetAbility(\''+ab+'\',parseInt(this.value))">';
      STANDARD_ARRAY.forEach(function(v){
        html += '<option value="'+v+'"'+(d.abilities[ab]===v?' selected':'')+'>'+v+'</option>';
      });
      html += '</select>';
      html += '<div class="bldr-ability-mod">'+(mod>=0?'+':'')+mod+'</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  else if(method==='pointbuy'){
    var spent = calcPointBuySpent();
    var remaining = POINT_BUY_MAX - spent;
    html += '<div class="bldr-pb-points">Points remaining: <span style="color:'+(remaining<0?'var(--red)':'var(--gold2)')+'">'+remaining+'</span> / '+POINT_BUY_MAX+'</div>';
    html += '<div class="bldr-ability-grid">';
    ABILITIES.forEach(function(ab){
      var score = d.abilities[ab];
      var mod = Math.floor((score-10)/2);
      var bonus = getSpeciesBonus(ab);
      html += '<div class="bldr-ability-box">';
      html += '<div class="bldr-ability-label">'+ABILITY_ABBR[ab]+'</div>';
      if(bonus>0){ html += '<div class="bldr-ability-bonus">+'+bonus+'</div>'; }
      html += '<div class="bldr-pb-controls">';
      html += '<button class="bldr-pb-btn" onclick="bldrPBAdjust(\''+ab+'\',-1)">−</button>';
      html += '<span class="bldr-ability-score">'+score+'</span>';
      html += '<button class="bldr-pb-btn" onclick="bldrPBAdjust(\''+ab+'\',1)">+</button>';
      html += '</div>';
      html += '<div class="bldr-ability-mod">'+(mod>=0?'+':'')+mod+'</div>';
      html += '</div>';
    });
    html += '</div>';
  }
  else {
    // Manual or rolled
    html += '<div style="font-size:10px;color:var(--text3);margin-bottom:8px;font-family:var(--fu)">';
    if(method==='rolled') html += 'Roll 4d6 drop lowest for each score, then enter below.';
    else html += 'Enter your ability scores directly.';
    html += '</div>';
    html += '<div class="bldr-ability-grid">';
    ABILITIES.forEach(function(ab){
      var score = d.abilities[ab];
      var mod = Math.floor((score-10)/2);
      var bonus = getSpeciesBonus(ab);
      html += '<div class="bldr-ability-box">';
      html += '<div class="bldr-ability-label">'+ABILITY_ABBR[ab]+'</div>';
      if(bonus>0){ html += '<div class="bldr-ability-bonus">+'+bonus+'</div>'; }
      html += '<input class="bldr-ability-input" type="number" min="3" max="20" value="'+score+'" onchange="bldrSetAbility(\''+ab+'\',parseInt(this.value)||8)" />';
      html += '<div class="bldr-ability-mod">'+(mod>=0?'+':'')+mod+'</div>';
      html += '</div>';
    });
    html += '</div>';
    if(method==='rolled'){
      html += '<div style="text-align:center;margin-top:6px">';
      html += '<button class="bldr-btn" onclick="bldrRollStats()" style="font-size:11px">🎲 Roll All Stats</button>';
      html += '</div>';
    }
  }

  // Show derived stats
  html += '<div class="bldr-divider">Derived Stats</div>';
  html += '<div class="bldr-stat-row">';
  var conScore = getEffectiveScore('constitution');
  var conMod = Math.floor((conScore-10)/2);
  var hd = getClassHD(d.cls);
  var hp = hd + conMod + ((d.level-1) * (Math.ceil(hd/2)+1+conMod));
  var pb = getProfBonus(d.level);
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">'+Math.max(1,hp)+'</div><div class="bldr-stat-label">Hit Points</div></div>';
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">+'+pb+'</div><div class="bldr-stat-label">Prof Bonus</div></div>';
  var dexMod = Math.floor((getEffectiveScore('dexterity')-10)/2);
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">'+(dexMod>=0?'+':'')+dexMod+'</div><div class="bldr-stat-label">Initiative</div></div>';
  html += '</div>';

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'abilities\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'abilities\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// SKILLS CARD
function renderSkillsCard(){
  var d = BS.draft;
  var clsSkills = CLASS_SKILL_OPTIONS[d.cls] || {count:2,from:'any'};
  var fromList = clsSkills.from==='any' ? SKILLS_DATA.map(function(s){return s.name;}) : clsSkills.from;
  var maxPick = clsSkills.count;
  var bgSkills = d.background ? (d.background.skills||[]) : [];
  var currentPicked = d.skills.filter(function(s){ return fromList.indexOf(s)>=0; });

  var html = '';
  html += '<div style="font-size:11px;color:var(--text2);margin-bottom:8px;font-family:var(--fu)">';
  html += 'Choose <strong style="color:var(--gold2)">'+maxPick+'</strong> skill proficiences from your class.';
  if(bgSkills.length){ html += ' Background grants: <strong style="color:var(--green2)">'+bgSkills.join(', ')+'</strong>.'; }
  html += '</div>';

  html += '<div class="bldr-skill-grid">';
  SKILLS_DATA.forEach(function(skill){
    var fromClass = fromList.indexOf(skill.name)>=0;
    var fromBg = bgSkills.indexOf(skill.name)>=0;
    var checked = d.skills.indexOf(skill.name)>=0;
    var disabled = !fromClass && !fromBg;
    var isBg = fromBg;

    html += '<label class="bldr-skill-row'+(checked?' prof':'')+(disabled?' locked':'')+'">';
    if(!disabled){
      html += '<input type="checkbox" class="bldr-skill-cb"'+(checked?' checked':'')+(isBg?' disabled':'')+' onchange="bldrToggleSkill(\''+skill.name+'\','+maxPick+')" />';
    } else {
      html += '<span style="width:14px;display:inline-block;color:var(--border2)">—</span>';
    }
    html += '<span class="bldr-skill-name">'+skill.name+(isBg?' ⊕':''+(fromClass?'':' <span style="color:var(--border2)">(class)</span>'))+'</span>';
    html += '<span class="bldr-skill-ab">'+ABILITY_ABBR[skill.ab]+'</span>';
    html += '</label>';
  });
  html += '</div>';
  html += '<div style="font-size:10px;color:var(--text3);margin-top:6px;font-family:var(--fu)">⊕ = granted by background (auto-selected)</div>';

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'skills\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'skills\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// SPELLS CARD
function renderSpellsCard(){
  var d = BS.draft;
  var cls = d.cls;
  var edition = d.ruleset;
  var allSpells = (typeof SP !== 'undefined') ? SP : [];

  // Filter spells for this class
  // SP is the SPELL_DATABASE array - format: [name,level,school,castTime,range,components,duration,conc,ritual,classes[],desc,upcast,edition]
  // classes[] uses CLASS_NAMES indices: 0=Bard,1=Cleric,2=Druid,3=Fighter,4=Monk,5=Paladin,6=Ranger,7=Rogue,8=Sorcerer,9=Warlock,10=Wizard,11=Artificer
  var CLS_IDX = {Bard:0,Cleric:1,Druid:2,Fighter:3,Monk:4,Paladin:5,Ranger:6,Rogue:7,Sorcerer:8,Warlock:9,Wizard:10,Artificer:11};
  var clsIdx = CLS_IDX[cls];

  var classSpells = [];
  if(allSpells.length && clsIdx !== undefined){
    classSpells = allSpells.filter(function(s){
      if(!Array.isArray(s)) return false;
      var classes = s[9];
      return Array.isArray(classes) && classes.indexOf(clsIdx)>=0;
    }).map(function(s){
      return {name:s[0],level:s[1],school:typeof s[2]==='number'?(['Abj','Con','Div','Enc','Evo','Ill','Nec','Trans'][s[2]]||s[2]):s[2]};
    });
  }

  // Fallback to some basic spells if not loaded
  if(!classSpells.length){ classSpells = getFallbackSpells(cls); }

  var maxLevel = getMaxSpellLevel(cls, d.level);
  var cantripCount = getCantripCount(cls, d.level);
  var spellsKnown = getSpellsKnown(cls, d.level);

  var cantrips = classSpells.filter(function(s){ return s.level===0; });
  var spells = classSpells.filter(function(s){ return s.level>=1 && s.level<=maxLevel; });

  var selCantrips = d.cantrips||[];
  var selSpells = d.spells||[];

  var html = '';
  html += '<div class="bldr-stat-row">';
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">'+selCantrips.length+'/'+cantripCount+'</div><div class="bldr-stat-label">Cantrips</div></div>';
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">'+selSpells.length+(spellsKnown>0?'/'+spellsKnown:'')+'</div><div class="bldr-stat-label">Spells</div></div>';
  html += '<div class="bldr-stat-box"><div class="bldr-stat-val">'+(maxLevel||0)+'</div><div class="bldr-stat-label">Max Level</div></div>';
  html += '</div>';

  // Cantrips section
  if(cantrips.length){
    html += '<div class="bldr-divider">Cantrips (choose '+cantripCount+')</div>';
    html += '<div class="bldr-spell-list" style="max-height:150px">';
    cantrips.slice(0,30).forEach(function(s){
      var sel = selCantrips.indexOf(s.name)>=0;
      html += '<div class="bldr-spell-row'+(sel?' selected':'')+'" onclick="bldrToggleCantrip(\''+escHtml(s.name)+'\','+cantripCount+')">';
      html += '<div class="bldr-spell-level" style="background:rgba(201,168,76,0.2);color:var(--gold3)">C</div>';
      html += '<span class="bldr-spell-name">'+escHtml(s.name)+'</span>';
      html += '<span class="bldr-spell-school">'+s.school+'</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  // Leveled spells
  if(spells.length && maxLevel > 0){
    html += '<div class="bldr-divider">Spells'+(spellsKnown>0?' (choose '+spellsKnown+')':' (Prepared)')+'</div>';

    // Level filter
    html += '<div class="bldr-spell-filters" id="bldr-spell-lvl-filters">';
    html += '<button class="bldr-spell-filter active" onclick="bldrSpellFilter(0,this)">All</button>';
    for(var l=1;l<=maxLevel;l++){
      html += '<button class="bldr-spell-filter" onclick="bldrSpellFilter('+l+',this)">Lv '+l+'</button>';
    }
    html += '</div>';

    html += '<div class="bldr-spell-list" id="bldr-spell-list">';
    spells.slice(0,60).forEach(function(s){
      var sel = selSpells.indexOf(s.name)>=0;
      html += '<div class="bldr-spell-row'+(sel?' selected':'')+'" data-level="'+s.level+'" onclick="bldrToggleSpell(\''+escHtml(s.name)+'\','+(spellsKnown||999)+')">';
      html += '<div class="bldr-spell-level">'+s.level+'</div>';
      html += '<span class="bldr-spell-name">'+escHtml(s.name)+'</span>';
      html += '<span class="bldr-spell-school">'+s.school+'</span>';
      html += '</div>';
    });
    html += '</div>';
  }

  html += '<div class="bldr-card-front-footer" style="border:none;padding:0;margin-top:10px;justify-content:flex-end">';
  html += '<button class="bldr-btn can" onclick="bldrToggleCard(\'spells\')">Cancel</button>';
  html += '<button class="bldr-btn primary" onclick="bldrSaveCard(\'spells\')">Seal this Chapter →</button>';
  html += '</div>';
  return html;
}

// REVIEW CARD
function renderReviewCard(){
  var d = BS.draft;
  var html = '';

  // Character visual summary
  html += renderCharVisual();

  // Stats grid
  html += '<div class="bldr-review-grid">';

  // Identity
  html += '<div class="bldr-review-section">';
  html += '<div class="bldr-review-section-title">Identity</div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Name</span><span class="bldr-review-val">'+escHtml(d.name||'—')+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Species</span><span class="bldr-review-val">'+escHtml((d.species&&d.species.name)||'—')+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Background</span><span class="bldr-review-val">'+escHtml((d.background&&d.background.name)||'—')+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Alignment</span><span class="bldr-review-val">'+escHtml(d.alignment||'—')+'</span></div>';
  html += '</div>';

  // Class & combat
  html += '<div class="bldr-review-section">';
  html += '<div class="bldr-review-section-title">Class</div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Class</span><span class="bldr-review-val">'+escHtml(d.cls||'—')+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Subclass</span><span class="bldr-review-val">'+escHtml(d.subclass||'—')+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Level</span><span class="bldr-review-val">'+d.level+'</span></div>';
  html += '<div class="bldr-review-row"><span class="bldr-review-key">Hit Die</span><span class="bldr-review-val">d'+getClassHD(d.cls)+'</span></div>';
  html += '</div>';

  // Abilities
  html += '<div class="bldr-review-section">';
  html += '<div class="bldr-review-section-title">Ability Scores</div>';
  ABILITIES.forEach(function(ab){
    var score = getEffectiveScore(ab);
    var mod = Math.floor((score-10)/2);
    html += '<div class="bldr-review-row"><span class="bldr-review-key">'+ABILITY_ABBR[ab]+'</span><span class="bldr-review-val">'+score+' ('+(mod>=0?'+':'')+mod+')</span></div>';
  });
  html += '</div>';

  // Skills
  html += '<div class="bldr-review-section">';
  html += '<div class="bldr-review-section-title">Skills & Saves</div>';
  if(d.skills.length){
    html += d.skills.map(function(s){ return '<div class="bldr-review-row"><span class="bldr-review-key">'+s+'</span><span class="bldr-review-val" style="color:var(--green2)">✓</span></div>'; }).join('');
  }
  var saves = CLASS_SAVES[d.cls]||[];
  if(saves.length){
    html += '<div style="color:var(--text3);font-size:9px;margin-top:4px;font-family:var(--fu)">Saving throws: '+saves.map(function(s){return ABILITY_ABBR[s];}).join(', ')+'</div>';
  }
  html += '</div>';

  html += '</div>'; // end review grid

  // Alignment chooser (final touches)
  html += '<div class="bldr-divider">Final Touches</div>';
  html += '<div class="bldr-field">';
  html += '<div class="bldr-label">Alignment <span style="color:var(--text3)">(optional)</span></div>';
  html += '<select class="bldr-select" onchange="BS.draft.alignment=this.value">';
  ['','Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','True Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil'].forEach(function(a){
    html += '<option value="'+a+'"'+(d.alignment===a?' selected':'')+'>'+( a||'— Choose —')+'</option>';
  });
  html += '</select>';
  html += '</div>';

  html += '<div class="bldr-field">';
  html += '<div class="bldr-label">Backstory Note <span style="color:var(--text3)">(optional)</span></div>';
  html += '<textarea class="bldr-textarea" placeholder="A few words about your character\'s past..." onchange="BS.draft.backstory=this.value">'+escHtml(d.backstory||'')+'</textarea>';
  html += '</div>';

  // Create button
  html += '<div style="margin-top:14px">';
  if(isReadyForReview()){
    html += '<button class="bldr-btn create" onclick="bldrCreateCharacter()">⚔ Forge This Legend ⚔</button>';
  } else {
    html += '<div class="bldr-info-box" style="text-align:center">Complete Name, Species, Background, and Class before creating your character.</div>';
  }
  html += '</div>';

  return html;
}

// ── CHARACTER VISUAL ───────────────────────────────────────────────────────
function renderCharVisual(){
  var d = BS.draft;
  var icon = d.cls ? (CLASS_ICONS[d.cls]||'🧙') : (d.species?'🧬':'⚔️');
  var auraColor = getClassAuraColor(d.cls);
  var tags = [];
  if(d.species) tags.push(d.species.name);
  if(d.cls) tags.push(d.cls+' '+d.level);
  if(d.ruleset) tags.push(d.ruleset+' Rules');

  var html = '<div class="bldr-char-visual">';
  html += '<div class="bldr-char-frame'+(d.cls?' has-class':'')+'" style="border-color:'+auraColor+'">';
  if(d.cls){ html += '<div class="bldr-char-aura" style="background:radial-gradient(ellipse,'+auraColor+'22,transparent 70%)"></div>'; }
  html += icon;
  html += '</div>';
  html += '<div class="bldr-char-name">'+escHtml(d.name||'Unnamed Hero')+'</div>';
  if(tags.length){
    html += '<div class="bldr-char-tags">';
    tags.forEach(function(t){ html += '<span class="bldr-char-tag">'+escHtml(t)+'</span>'; });
    html += '</div>';
  }
  html += '</div>';
  return html;
}

// ── STORY THREAD RENDERER ──────────────────────────────────────────────────
function renderStoryToggle(cardId, prompts){
  var d = BS.draft;
  var storyKey = 'story_open_'+cardId;
  var isOpen = BS[storyKey];
  var html = '';
  html += '<div class="bldr-story-toggle'+(isOpen?' open':'')+'" onclick="bldrToggleStory(\''+cardId+'\')">';
  html += '<span class="bldr-story-toggle-arrow">▶</span>';
  html += '<span>📖 Story Threads</span> <span style="color:var(--text3);font-size:9px">(optional)</span>';
  html += '</div>';
  html += '<div class="bldr-story-body'+(isOpen?' open':'')+'" id="bldr-story-'+cardId+'">';
  prompts.forEach(function(p){
    var val = (d.story&&d.story[p.key])||'';
    html += '<div class="bldr-field">';
    html += '<div class="bldr-story-prompt">'+p.label+'</div>';
    html += '<textarea class="bldr-textarea" style="min-height:45px" placeholder="Write freely or leave blank..." oninput="bldrStoryInput(\''+cardId+'\',\''+p.key+'\',this.value)">'+escHtml(val)+'</textarea>';
    html += '</div>';
  });
  html += '</div>';
  return html;
}

// ── EVENT HANDLERS ─────────────────────────────────────────────────────────
function bldrToggleCard(id){
  if(BS.mode==='quick') return; // in quick mode, all open
  if(BS.activeCard===id){
    // Close
    var inner = document.getElementById('bldr-inner-'+id);
    if(inner) inner.classList.remove('flipped');
    BS.activeCard = null;
  } else {
    // Close current
    if(BS.activeCard){
      var prev = document.getElementById('bldr-inner-'+BS.activeCard);
      if(prev) prev.classList.remove('flipped');
    }
    // Open new
    BS.activeCard = id;
    var inner2 = document.getElementById('bldr-inner-'+id);
    if(inner2){
      // Refresh body content first
      var body = document.getElementById('bldr-body-'+id);
      if(body){
        var cards = getCards();
        var card = cards.find(function(c){ return c.id===id; });
        if(card) body.innerHTML = renderCardBody(card);
      }
      setTimeout(function(){ inner2.classList.add('flipped'); }, 10);
    }
  }
}

function bldrSetMode(mode){
  BS.mode = mode;
  if(mode==='guided') BS.activeCard = null;
  renderBuilder();
}

function bldrSetRuleset(r){
  BS.draft.ruleset = r;
  BS.draft.species = null; // reset species (different options)
  BS.draft.background = null;
  BS.activeCard = null;
  renderBuilder();
}

function bldrSelectSpecies(name){
  var allSpecies = (typeof SPECIES_DB !== 'undefined') ? SPECIES_DB : [];
  var sp = allSpecies.find(function(s){ return s.name===name; });
  if(!sp) sp = {name:name,traits:[]};
  BS.draft.species = {
    name: sp.name,
    traits: sp.traits||[],
    speed: sp.speed||30,
    size: sp.size||'M',
    abv: sp.abv||''
  };
  // Refresh body
  var body = document.getElementById('bldr-body-species');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='species';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSelectBackground(name){
  var allBgs = (typeof BACKGROUNDS !== 'undefined') ? BACKGROUNDS : [];
  var bg = allBgs.find(function(b){ return b.name===name; });
  if(!bg) bg = {name:name};
  BS.draft.background = {
    name: bg.name,
    skills: bg.skills||[],
    tools: bg.tools||[],
    feature: (bg.traits&&bg.traits[0]&&bg.traits[0].name)||'',
    equipment: bg.equipment||''
  };
  // Auto-add background skills
  var bgSkills = BS.draft.background.skills;
  bgSkills.forEach(function(s){
    if(BS.draft.skills.indexOf(s)<0) BS.draft.skills.push(s);
  });
  // Refresh
  var body = document.getElementById('bldr-body-background');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='background';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSelectClass(cls){
  var prevCls = BS.draft.cls;
  BS.draft.cls = cls;
  BS.draft.subclass = null;
  // Reset skills if class changed
  if(prevCls !== cls){
    var bgSkills = BS.draft.background ? (BS.draft.background.skills||[]) : [];
    BS.draft.skills = bgSkills.slice();
  }
  // Refresh body
  var body = document.getElementById('bldr-body-class');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='class';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSelectSubclass(name){
  BS.draft.subclass = name;
  var body = document.getElementById('bldr-body-class');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='class';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSetAbilityMethod(m){
  BS.draft.abilityMethod = m;
  if(m==='standard'){
    BS.draft.abilities = {strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8};
  }
  var body = document.getElementById('bldr-body-abilities');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='abilities';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSetAbility(ab, val){
  if(!val||isNaN(val)) return;
  BS.draft.abilities[ab] = Math.max(3,Math.min(20,val));
  var body = document.getElementById('bldr-body-abilities');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='abilities';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrPBAdjust(ab, delta){
  var cur = BS.draft.abilities[ab]||8;
  var next = cur + delta;
  if(next < 8 || next > 15) return;
  var spent = calcPointBuySpent();
  var cost = (POINT_BUY_COSTS[next]||0) - (POINT_BUY_COSTS[cur]||0);
  if(spent + cost > POINT_BUY_MAX) return;
  BS.draft.abilities[ab] = next;
  var body = document.getElementById('bldr-body-abilities');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='abilities';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrRollStats(){
  function roll4d6(){
    var rolls = [1,2,3,4].map(function(){ return Math.floor(Math.random()*6)+1; });
    rolls.sort(function(a,b){return a-b;});
    return rolls[1]+rolls[2]+rolls[3];
  }
  ABILITIES.forEach(function(ab){ BS.draft.abilities[ab] = roll4d6(); });
  var body = document.getElementById('bldr-body-abilities');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='abilities';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrToggleSkill(name, max){
  var skills = BS.draft.skills;
  var idx = skills.indexOf(name);
  var bgSkills = BS.draft.background ? (BS.draft.background.skills||[]) : [];
  var classSkills = CLASS_SKILL_OPTIONS[BS.draft.cls]||{count:2,from:'any'};
  var fromList = classSkills.from==='any' ? SKILLS_DATA.map(function(s){return s.name;}) : classSkills.from;
  var classPicked = skills.filter(function(s){ return fromList.indexOf(s)>=0 && bgSkills.indexOf(s)<0; });

  if(idx >= 0){
    if(bgSkills.indexOf(name)>=0) return; // can't deselect bg skills
    skills.splice(idx,1);
  } else {
    if(fromList.indexOf(name)>=0 && classPicked.length >= max) return; // at max
    skills.push(name);
  }
  // Re-render the skills body
  var body = document.getElementById('bldr-body-skills');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='skills';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrToggleCantrip(name, max){
  var arr = BS.draft.cantrips;
  var idx = arr.indexOf(name);
  if(idx>=0){ arr.splice(idx,1); }
  else if(arr.length < max){ arr.push(name); }
  var body = document.getElementById('bldr-body-spells');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='spells';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrToggleSpell(name, max){
  var arr = BS.draft.spells;
  var idx = arr.indexOf(name);
  if(idx>=0){ arr.splice(idx,1); }
  else if(arr.length < max){ arr.push(name); }
  var body = document.getElementById('bldr-body-spells');
  if(body){
    var cards = getCards();
    var card = cards.find(function(c){return c.id==='spells';});
    if(card) body.innerHTML = renderCardBody(card);
  }
}

function bldrSpellFilter(level, btn){
  document.querySelectorAll('#bldr-spell-lvl-filters .bldr-spell-filter').forEach(function(b){ b.classList.remove('active'); });
  btn.classList.add('active');
  document.querySelectorAll('#bldr-spell-list .bldr-spell-row').forEach(function(row){
    var rl = parseInt(row.dataset.level)||0;
    row.style.display = (level===0 || rl===level) ? '' : 'none';
  });
}

function bldrFilterSpecies(q){
  document.querySelectorAll('#bldr-species-grid .bldr-choice-card').forEach(function(card){
    var name = card.querySelector('.bldr-choice-name').textContent.toLowerCase();
    card.style.display = (!q || name.indexOf(q.toLowerCase())>=0) ? '' : 'none';
  });
}

function bldrFilterBackgrounds(q){
  document.querySelectorAll('#bldr-bg-grid .bldr-choice-card').forEach(function(card){
    var name = card.querySelector('.bldr-choice-name').textContent.toLowerCase();
    card.style.display = (!q || name.indexOf(q.toLowerCase())>=0) ? '' : 'none';
  });
}

function bldrToggleStory(cardId){
  var key = 'story_open_'+cardId;
  BS[key] = !BS[key];
  var body = document.getElementById('bldr-story-'+cardId);
  var toggle = body ? body.previousElementSibling : null;
  if(body) body.classList.toggle('open', BS[key]);
  if(toggle) toggle.classList.toggle('open', BS[key]);
}

function bldrStoryInput(cardId, key, val){
  if(!BS.draft.story) BS.draft.story = {};
  BS.draft.story[key] = val;
}

function bldrRefreshSummary(cardId){
  // Just update the summary text on card back without full re-render
  // (full re-render would close the card)
  renderBuilder(); // simplest approach for now
}

// SAVE CARD
function bldrSaveCard(id){
  if(id==='name' && !BS.draft.name.trim()){
    showToastMsg('Enter a name for your character.');
    return;
  }
  if(id==='species' && !BS.draft.species){
    showToastMsg('Choose a species before sealing this chapter.');
    return;
  }
  if(id==='background' && !BS.draft.background){
    showToastMsg('Choose a background before sealing this chapter.');
    return;
  }
  if(id==='class' && !BS.draft.cls){
    showToastMsg('Choose a class before sealing this chapter.');
    return;
  }
  // Close card and re-render
  BS.activeCard = null;
  bldrSaveDraft();
  renderBuilder();
}

// SAVE / LOAD DRAFT
function bldrSaveDraft(){
  try { localStorage.setItem('dnd_builder_draft', JSON.stringify(BS.draft)); } catch(e){}
}

function bldrLoadDraft(){
  try {
    var saved = localStorage.getItem('dnd_builder_draft');
    if(saved){ BS.draft = Object.assign(BS.draft, JSON.parse(saved)); }
  } catch(e){}
}

function bldrClearDraft(){
  if(!confirm('Clear your character builder draft?')) return;
  BS.draft = {name:'',ruleset:'2014',species:null,background:null,cls:null,subclass:null,
    level:1,abilityMethod:'standard',abilities:{strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8},
    skills:[],spells:[],cantrips:[],equipment:[],story:{},portrait:null};
  BS.activeCard = null;
  try { localStorage.removeItem('dnd_builder_draft'); } catch(e){}
  renderBuilder();
}

// ── CREATE CHARACTER ───────────────────────────────────────────────────────
function bldrCreateCharacter(){
  var d = BS.draft;
  if(!d.name||!d.species||!d.background||!d.cls){
    showToastMsg('Complete all required stages first.');
    return;
  }

  // Build character object matching the player.html char structure
  var pb = getProfBonus(d.level);
  var hd = getClassHD(d.cls);
  var conMod = Math.floor((getEffectiveScore('constitution')-10)/2);
  var maxHp = hd + conMod + ((d.level-1) * (Math.ceil(hd/2)+1+conMod));

  var saves = CLASS_SAVES[d.cls]||[];
  var saveProfs = {};
  ABILITIES.forEach(function(ab){ saveProfs[ab] = saves.indexOf(ab)>=0; });

  var char = {
    id: 'c_'+(Date.now()),
    name: d.name,
    lv: d.level,
    cls: d.cls,
    subclass: d.subclass||'',
    race: (d.species&&d.species.name)||'',
    bg: (d.background&&d.background.name)||'',
    ruleset: d.ruleset||'2014',
    alignment: d.alignment||'',
    ab: {
      strength: getEffectiveScore('strength'),
      dexterity: getEffectiveScore('dexterity'),
      constitution: getEffectiveScore('constitution'),
      intelligence: getEffectiveScore('intelligence'),
      wisdom: getEffectiveScore('wisdom'),
      charisma: getEffectiveScore('charisma')
    },
    saves: saveProfs,
    skills: d.skills||[],
    hp: { max: Math.max(1,maxHp), cur: Math.max(1,maxHp), temp: 0 },
    hd: { max: d.level, cur: d.level, type: hd },
    spd: (d.species&&d.species.speed)||30,
    spells: d.spells||[],
    cantrips: d.cantrips||[],
    notes: d.backstory||'',
    story: d.story||{},
    xp: 0,
    pronouns: d.pronouns||'',
    age: d.age||''
  };

  // Add to the existing character roster if saveS and S are available
  if(typeof S !== 'undefined' && typeof saveS === 'function'){
    if(!S.chars) S.chars = [];
    S.chars.push(char);
    if(!S.activeId) S.activeId = char.id;
    saveS();
    // Navigate to sheet
    if(typeof go === 'function'){
      go('roster');
      if(typeof renderRoster === 'function') renderRoster();
    }
    showToastMsg('⚔ '+char.name+' has been forged!');
    // Clear draft
    bldrClearDraftSilent();
  } else {
    // Fallback: export JSON
    var blob = new Blob([JSON.stringify(char,null,2)], {type:'application/json'});
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = (char.name||'character').replace(/\s/g,'_')+'.json';
    a.click();
    showToastMsg('Character exported as JSON.');
  }
}

function bldrClearDraftSilent(){
  BS.draft = {name:'',ruleset:'2014',species:null,background:null,cls:null,subclass:null,
    level:1,abilityMethod:'standard',abilities:{strength:15,dexterity:14,constitution:13,intelligence:12,wisdom:10,charisma:8},
    skills:[],spells:[],cantrips:[],equipment:[],story:{},portrait:null};
  BS.activeCard = null;
  try { localStorage.removeItem('dnd_builder_draft'); } catch(e){}
}

// ── HELPER FUNCTIONS ───────────────────────────────────────────────────────
function escHtml(s){
  if(!s) return '';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showToastMsg(msg){
  if(typeof showToast === 'function') showToast(msg);
  else {
    var t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:var(--panel);color:var(--gold2);padding:8px 16px;border-radius:8px;border:1px solid var(--gold3);font-family:var(--ff);font-size:13px;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,0.4)';
    document.body.appendChild(t);
    setTimeout(function(){ t.remove(); }, 2500);
  }
}

function getClassHD(cls){
  if(!cls) return 8;
  var hds = {Barbarian:12,Fighter:10,Paladin:10,Ranger:10,Bard:8,Cleric:8,Druid:8,
    Monk:8,Rogue:8,Warlock:8,Artificer:8,'Blood Hunter':10,Sorcerer:6,Wizard:6};
  return hds[cls]||8;
}

function getSubclassLevel(cls){
  var levels = {Barbarian:3,Bard:3,Cleric:1,Druid:2,Fighter:3,Monk:3,Paladin:3,
    Ranger:3,Rogue:3,Sorcerer:3,Warlock:3,Wizard:2,Artificer:3,'Blood Hunter':3};
  // 2024 moves most to level 3
  return levels[cls]||3;
}

function getSubclassesForClass(cls, edition){
  // Try from loaded SUBCLASSES var
  if(typeof SUBCLASSES !== 'undefined' && SUBCLASSES[cls]){
    return SUBCLASSES[cls].map(function(sc){ return sc.name||sc; });
  }
  // Fallback lists
  var fallback2014 = {
    Barbarian:['Path of the Berserker','Path of the Totem Warrior'],
    Bard:['College of Lore','College of Valor'],
    Cleric:['Life Domain','Light Domain','War Domain','Trickery Domain','Knowledge Domain','Nature Domain','Tempest Domain'],
    Druid:['Circle of the Land','Circle of the Moon'],
    Fighter:['Champion','Battle Master','Eldritch Knight'],
    Monk:['Way of the Open Hand','Way of Shadow','Way of the Four Elements'],
    Paladin:['Oath of Devotion','Oath of the Ancients','Oath of Vengeance'],
    Ranger:['Hunter','Beast Master'],
    Rogue:['Thief','Assassin','Arcane Trickster'],
    Sorcerer:['Draconic Bloodline','Wild Magic'],
    Warlock:['The Archfey','The Fiend','The Great Old One'],
    Wizard:['School of Abjuration','School of Conjuration','School of Divination','School of Enchantment','School of Evocation','School of Illusion','School of Necromancy','School of Transmutation'],
    Artificer:['Alchemist','Armorer','Artillerist','Battle Smith']
  };
  var fallback2024 = {
    Barbarian:['Path of the Berserker','Path of the Wild Heart','Path of the World Tree','Path of the Zealot'],
    Bard:['College of Dance','College of Glamour','College of Lore','College of Valor','College of Swords'],
    Cleric:['Life Domain','Light Domain','War Domain','Trickery Domain','Knowledge Domain','Nature Domain','Tempest Domain','Death Domain','Forge Domain','Grave Domain','Order Domain','Peace Domain','Twilight Domain'],
    Druid:['Circle of the Land','Circle of the Moon','Circle of the Sea','Circle of Stars','Circle of Wildfire'],
    Fighter:['Battle Master','Champion','Eldritch Knight','Psi Warrior'],
    Monk:['Warrior of the Hand','Warrior of the Elements','Warrior of Mercy','Warrior of Shadow'],
    Paladin:['Oath of Devotion','Oath of the Ancients','Oath of Vengeance','Oath of Glory'],
    Ranger:['Beast Master','Gloom Stalker','Hunter','Fey Wanderer'],
    Rogue:['Arcane Trickster','Assassin','Soulknife','Thief'],
    Sorcerer:['Aberrant Mind','Clockwork Soul','Draconic Bloodline','Wild Magic'],
    Warlock:['The Archfey','The Celestial','The Fiend','The Great Old One','The Undead'],
    Wizard:['Abjurer','Diviner','Evoker','Illusionist'],
    Artificer:['Alchemist','Armorer','Artillerist','Battle Smith']
  };
  var table = (edition==='2024') ? fallback2024 : fallback2014;
  return table[cls]||[];
}

function getEffectiveScore(ab){
  var base = BS.draft.abilities[ab]||8;
  var bonus = getSpeciesBonus(ab);
  return base + bonus;
}

function getSpeciesBonus(ab){
  // 2024 rules: no fixed bonuses (choose where to put them)
  if(BS.draft.ruleset==='2024') return 0;
  var sp = BS.draft.species;
  if(!sp||!sp.abv) return 0;
  // Parse "STR +2, CHA +1" style
  var bonus = 0;
  var abbrMap = {STR:'strength',DEX:'dexterity',CON:'constitution',INT:'intelligence',WIS:'wisdom',CHA:'charisma'};
  (sp.abv||'').split(',').forEach(function(part){
    var m = part.trim().match(/^([A-Z]+)\s*([+-]\d+)$/);
    if(m && abbrMap[m[1]]===ab){ bonus += parseInt(m[2]); }
  });
  return bonus;
}

function calcPointBuySpent(){
  var spent = 0;
  ABILITIES.forEach(function(ab){
    spent += POINT_BUY_COSTS[BS.draft.abilities[ab]]||0;
  });
  return spent;
}

function getProfBonus(level){
  return Math.ceil(level/4)+1;
}

function getMaxSpellLevel(cls, level){
  if(!cls || CLASS_SPELLCASTERS.indexOf(cls)<0) return 0;
  if(CLASS_HALF_CASTERS.indexOf(cls)>=0){
    // Half casters get spells at level 2
    if(level<2) return 0;
    var halfLevel = Math.floor(level/2);
    return Math.min(5, Math.ceil(halfLevel/2));
  }
  // Full casters
  var table = [0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,9,9];
  return table[Math.min(level,20)]||0;
}

function getCantripCount(cls, level){
  if(!cls||CLASS_SPELLCASTERS.indexOf(cls)<0) return 0;
  if(cls==='Artificer') return level<2?0:level<10?2:3;
  if(cls==='Paladin'||cls==='Ranger') return 0; // 2014
  var tables = {
    Bard:[0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    Cleric:[0,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5],
    Druid:[0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    Sorcerer:[0,4,4,4,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6],
    Warlock:[0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4],
    Wizard:[0,3,3,3,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5]
  };
  var t = tables[cls]||[0,2,2,2,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4];
  return t[Math.min(level,20)]||2;
}

function getSpellsKnown(cls, level){
  // Returns 0 for prepared casters (Cleric, Druid, Wizard, Paladin)
  if(['Cleric','Druid','Wizard','Paladin'].indexOf(cls)>=0) return 0;
  if(cls==='Artificer') return 0; // prepared
  var tables = {
    Bard:[0,4,5,6,7,8,9,10,11,12,14,15,15,16,18,19,19,20,22,22,22],
    Ranger:[0,0,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11],
    Sorcerer:[0,2,3,4,5,6,7,8,9,10,11,12,12,13,13,14,14,15,15,15,15],
    Warlock:[0,2,3,4,5,6,7,8,9,10,10,11,11,12,12,13,13,14,14,15,15]
  };
  return (tables[cls]||[])[Math.min(level,20)]||0;
}

function getClassAuraColor(cls){
  var colors = {
    Barbarian:'#e74c3c',Bard:'#e91e8c',Cleric:'#f8d56b',Druid:'#27ae60',
    Fighter:'#95a5a6',Monk:'#2ecc71',Paladin:'#f0d080',Ranger:'#52b788',
    Rogue:'#7f8c8d',Sorcerer:'#c39bd3',Warlock:'#6c3483',Wizard:'#3498db',
    Artificer:'#e67e22','Blood Hunter':'#c0392b'
  };
  return colors[cls]||'#c9a84c';
}

// ── FALLBACK DATA (if external files not loaded) ───────────────────────────
function getFallbackSpecies(edition){
  if(edition==='2024') return [
    {name:'Human',src:1,speed:30,abv:''},
    {name:'Elf',src:1,speed:30,abv:''},
    {name:'Dwarf',src:1,speed:30,abv:''},
    {name:'Halfling',src:1,speed:30,abv:''},
    {name:'Gnome',src:1,speed:30,abv:''},
    {name:'Tiefling',src:1,speed:30,abv:''},
    {name:'Dragonborn',src:1,speed:30,abv:''},
    {name:'Orc',src:1,speed:30,abv:''},
    {name:'Aasimar',src:1,speed:30,abv:''}
  ];
  return [
    {name:'Human',src:0,speed:30,abv:'All +1'},{name:'Hill Dwarf',src:0,speed:25,abv:'CON +2, WIS +1'},
    {name:'Mountain Dwarf',src:0,speed:25,abv:'CON +2, STR +2'},{name:'High Elf',src:0,speed:30,abv:'DEX +2, INT +1'},
    {name:'Wood Elf',src:0,speed:35,abv:'DEX +2, WIS +1'},{name:'Drow',src:0,speed:30,abv:'DEX +2, CHA +1'},
    {name:'Lightfoot Halfling',src:0,speed:25,abv:'DEX +2, CHA +1'},{name:'Stout Halfling',src:0,speed:25,abv:'DEX +2, CON +1'},
    {name:'Rock Gnome',src:0,speed:25,abv:'INT +2, CON +1'},{name:'Forest Gnome',src:0,speed:25,abv:'INT +2, DEX +1'},
    {name:'Half-Elf',src:0,speed:30,abv:'CHA +2, +1 to two others'},{name:'Half-Orc',src:0,speed:30,abv:'STR +2, CON +1'},
    {name:'Tiefling',src:0,speed:30,abv:'INT +1, CHA +2'},{name:'Dragonborn',src:0,speed:30,abv:'STR +2, CHA +1'},
    {name:'Variant Human',src:0,speed:30,abv:'+1 to two abilities'}
  ];
}

function getFallbackBackgrounds(edition){
  if(edition==='2024') return [
    {name:'Acolyte',src:1,skills:['Insight','Religion']},
    {name:'Artisan',src:1,skills:['Investigation','Persuasion']},
    {name:'Charlatan',src:1,skills:['Deception','Sleight of Hand']},
    {name:'Criminal',src:1,skills:['Sleight of Hand','Stealth']},
    {name:'Entertainer',src:1,skills:['Acrobatics','Performance']},
    {name:'Farmer',src:1,skills:['Animal Handling','Nature']},
    {name:'Guard',src:1,skills:['Athletics','Perception']},
    {name:'Guide',src:1,skills:['Stealth','Survival']},
    {name:'Hermit',src:1,skills:['Medicine','Religion']},
    {name:'Merchant',src:1,skills:['Animal Handling','Persuasion']},
    {name:'Noble',src:1,skills:['History','Persuasion']},
    {name:'Sage',src:1,skills:['Arcana','History']},
    {name:'Sailor',src:1,skills:['Athletics','Perception']},
    {name:'Scribe',src:1,skills:['Investigation','Perception']},
    {name:'Soldier',src:1,skills:['Athletics','Intimidation']},
    {name:'Wayfarer',src:1,skills:['Insight','Stealth']}
  ];
  return [
    {name:'Acolyte',src:0,skills:['Insight','Religion']},
    {name:'Charlatan',src:0,skills:['Deception','Sleight of Hand']},
    {name:'Criminal',src:0,skills:['Deception','Stealth']},
    {name:'Entertainer',src:0,skills:['Acrobatics','Performance']},
    {name:'Folk Hero',src:0,skills:['Animal Handling','Survival']},
    {name:'Guild Artisan',src:0,skills:['Insight','Persuasion']},
    {name:'Hermit',src:0,skills:['Medicine','Religion']},
    {name:'Noble',src:0,skills:['History','Persuasion']},
    {name:'Outlander',src:0,skills:['Athletics','Survival']},
    {name:'Sage',src:0,skills:['Arcana','History']},
    {name:'Sailor',src:0,skills:['Athletics','Perception']},
    {name:'Soldier',src:0,skills:['Athletics','Intimidation']},
    {name:'Urchin',src:0,skills:['Sleight of Hand','Stealth']}
  ];
}

function getFallbackSpells(cls){
  // Return empty — the real data comes from spells_data.js (SP variable)
  return [];
}

// ── TAB HOOK REGISTRATION ──────────────────────────────────────────────────
// Called by player.html's runTabHooks when 'builder' tab is opened
function onBuilderTabOpen(){
  bldrLoadDraft();
  renderBuilder();
}

// Register with player.html hook system
if(typeof window !== 'undefined'){
  window.onBuilderTabOpen = onBuilderTabOpen;
  // Expose all public functions needed by inline onclick handlers
  window.bldrToggleCard = bldrToggleCard;
  window.bldrSetMode = bldrSetMode;
  window.bldrSetRuleset = bldrSetRuleset;
  window.bldrSelectSpecies = bldrSelectSpecies;
  window.bldrSelectBackground = bldrSelectBackground;
  window.bldrSelectClass = bldrSelectClass;
  window.bldrSelectSubclass = bldrSelectSubclass;
  window.bldrSaveCard = bldrSaveCard;
  window.bldrSaveDraft = bldrSaveDraft;
  window.bldrClearDraft = bldrClearDraft;
  window.bldrSetAbilityMethod = bldrSetAbilityMethod;
  window.bldrSetAbility = bldrSetAbility;
  window.bldrPBAdjust = bldrPBAdjust;
  window.bldrRollStats = bldrRollStats;
  window.bldrToggleSkill = bldrToggleSkill;
  window.bldrToggleCantrip = bldrToggleCantrip;
  window.bldrToggleSpell = bldrToggleSpell;
  window.bldrSpellFilter = bldrSpellFilter;
  window.bldrFilterSpecies = bldrFilterSpecies;
  window.bldrFilterBackgrounds = bldrFilterBackgrounds;
  window.bldrToggleStory = bldrToggleStory;
  window.bldrStoryInput = bldrStoryInput;
  window.bldrRefreshSummary = bldrRefreshSummary;
  window.bldrCreateCharacter = bldrCreateCharacter;
  window.BS = BS;
}

})(); // end IIFE
