# USAGE.md — Install Rams × NYCTA Design Core in your agent

Three ways to consume this repo, depending on your agent and your workflow.

---

## 0. Pick the install method

| Method | When | Effort |
|---|---|---|
| **One-shot** | You're asking the agent to design one thing right now. | 30 s |
| **Persistent (project-wide)** | You're shipping a project and want every session to use Rams × NYCTA. | 2 min |
| **Persistent (global)** | You want Rams × NYCTA in every project you ever open with this agent. | 2 min |

The method that works for **every** agent is the **`AGENTS.md` standard** (from [agents.md](https://agents.md)). One file, one location, every agent picks it up.

---

## 1. One-shot — any agent, any project

```bash
git clone https://github.com/Nonarkara/Rams-NYCTA-Design-Core.git design-core
cd <your-project>
```

Then tell your agent:

> "Read `design-core/AGENTS.md` and apply the Rams × NYCTA design system. Use `design-core/tokens.css` for color/typography."

The agent reads `AGENTS.md` for the spine, then `RAMS-DESIGN-DNA.md` and `RAMS-x-NYCTA-DNA.md` for depth as needed.

---

## 2. Persistent (project-wide) — every session loads it

Copy `AGENTS.md` (and optionally `tokens.css`) into your project root:

```bash
git clone https://github.com/Nonarkara/Rams-NYCTA-Design-Core.git /tmp/rams-dc
cp /tmp/rams-dc/AGENTS.md ./AGENTS.md
cp /tmp/rams-dc/tokens.css ./design-core.css
# Optional: add a .gitignore'd or vendored link to the full DNA docs
cp -r /tmp/rams-dc/RAMS-DESIGN-DNA.md ./design-core/
cp -r /tmp/rams-dc/RAMS-x-NYCTA-DNA.md ./design-core/
```

The agent will load `AGENTS.md` automatically on every session in this project.

---

## 3. Persistent (global) — Rams × NYCTA in every project forever

Use the per-agent patterns below. The global pattern keeps your project's root clean and makes Rams × NYCTA a "layer" your agent can opt in or out of per project.

---

## Per-agent install

### Claude Code

Claude Code auto-loads `CLAUDE.md` from the project root. Two options:

**Project-scoped:** symlink this repo's `CLAUDE.md` into your project:

```bash
git clone https://github.com/Nonarkara/Rams-NYCTA-Design-Core.git /tmp/rams-dc
ln -s /tmp/rams-dc/CLAUDE.md ./CLAUDE.md
ln -s /tmp/rams-dc/AGENTS.md ./AGENTS.md
```

**Global:** add Rams × NYCTA as a global agent instruction:

```bash
mkdir -p ~/.claude
cp /tmp/rams-dc/AGENTS.md ~/.claude/rams-nycta-design-core.md
# Then in your project, add to settings.json:
# { "globalInstructions": "~/.claude/rams-nycta-design-core.md" }
```

### Cursor

Cursor reads `AGENTS.md` from the project root (modern) or `.cursorrules` (legacy).

**Project-scoped:**
```bash
cp /tmp/rams-dc/AGENTS.md ./AGENTS.md
```

**Global (Settings → Rules for AI):** paste the contents of `AGENTS.md` into the Rules panel.

**Newer Rules format:** save to `.cursor/rules/rams-nycta.mdc`:
```bash
mkdir -p .cursor/rules
cp /tmp/rams-dc/AGENTS.md .cursor/rules/rams-nycta.mdc
```

### Cline

Cline reads `AGENTS.md` from the project root. Also supports `.clinerules` for legacy:
```bash
cp /tmp/rams-dc/AGENTS.md ./AGENTS.md
```

### Continue

Continue reads `AGENTS.md` from the project root, or you can paste into the system prompt in Settings:
```bash
cp /tmp/rams-dc/AGENTS.md ./AGENTS.md
```

### Aider

Aider reads `AGENTS.md` (via conventions) or you can pass it as `--read`:
```bash
aider --read /tmp/rams-dc/AGENTS.md --read /tmp/rams-dc/RAMS-DESIGN-DNA.md
# Or persist:
cp /tmp/rams-dc/AGENTS.md .aider.AGENTS.md
```

### Windsurf

Windsurf reads `.windsurfrules` from the project root, or `AGENTS.md` in newer versions:
```bash
cp /tmp/rams-dc/AGENTS.md ./AGENTS.md
# Legacy:
cp /tmp/rams-dc/AGENTS.md ./.windsurfrules
```

### GitHub Copilot / GPT-based agents

Paste `AGENTS.md` into the system prompt or the first message. Most web UIs (ChatGPT, Claude.ai) accept a "Custom Instructions" or "Project Knowledge" field — paste it there.

### Generic / custom agents

The agent reads `AGENTS.md` if it is at the project root, or you can include it in the system prompt:
```bash
# Embed in a system prompt:
cat /tmp/rams-dc/AGENTS.md >> system-prompt.txt
```

---

## 4. Verify the install

After installing, ask your agent:

> "Without referencing any project, what is the Rams × NYCTA colour decision tree?"

A correct install returns:

> "Is it IDENTITY → blue disc or trunk colour, enclosed. Is it DATA → red, bare. Is it DIRECTIONAL → greyscale triangle. None → no colour, grey + size."

If the agent instead says "I should use colour to liven it up," the install is broken — `AGENTS.md` is not being loaded.

---

## 5. Updating

```bash
cd /path/to/Rams-NYCTA-Design-Core
git pull
```

If you copied `AGENTS.md` into your project, re-copy after the pull.

If you symlinked, the symlink resolves on every load — no re-copy needed.

---

## 6. What is and is not licensed

This repo is **MIT-licensed for original work** authored by Dr Non — original software (`tokens.css`, `components.html`, `quick-start.html`), original writing (DNA docs, philosophy, recipes), original concept sheets, and the original hero illustration `docs/hero-banner.png`.

This repo is **not** an official Rams, Braun, Vitsœ, Unimark, NYCTA, or MTA product. It does not license third-party design documents, trademarks, typefaces, or identity systems. Using this interface toolkit does not give you rights in those source materials.

See `LICENSE` and `NOTICE.md` for the full boundary.

---

*Non Arkaraprasertkul · axiom.nonarkara.org · MIT License (original work only — see NOTICE.md).*
