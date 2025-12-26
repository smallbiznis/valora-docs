# Valora Docs

Valora Docs is the official documentation site for the Valora billing and usage engine. It is built for engineers integrating subscriptions, usage-based pricing, and ledger-backed invoicing into production systems.

## Docs philosophy
- Treat documentation as infrastructure: precise, minimal, and auditable.
- Prefer clear API and data model explanations over marketing copy.
- Optimize for long-form reading and day-two operations.
- Keep Cloud and OSS paths aligned unless they diverge.

## Structure
- `docs/` contains all documentation content (no blog).
- `sidebars.ts` defines the navigation order and hierarchy.
- `src/css/docs-tokens.css` defines local design tokens.
- `src/css/theme-docs.css` maps tokens to Docusaurus theme variables.

## Local development
```bash
pnpm install
pnpm start
```

## Build
```bash
pnpm build
```
