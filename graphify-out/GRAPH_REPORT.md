# Graph Report - lean-signal-relay  (2026-10-23)

## Corpus Check
- 1 semantic source files; AST status: extracted. Exclusions and reuse evidence: build-audit.json.

## Summary
- 26 nodes · 23 edges · 7 communities (3 shown, 4 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token usage: per-project usage unavailable (native Codex semantic extraction).

## Graph Freshness
- Built from commit: `f866d173`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- route.js
- repository
- Vercel Edge Function /api/signal
- bugs
- dependencies
- scripts

## God Nodes (most connected - your core abstractions)
1. `repository` - 3 edges
2. `bugs` - 2 edges
3. `scripts` - 2 edges
4. `Vercel Edge Function /api/signal` - 2 edges
5. `runtime` - 1 edges
6. `author` - 1 edges
7. `url` - 1 edges
8. `next` - 1 edges
9. `homepage` - 1 edges
10. `keywords` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (7 total, 4 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.20
Nodes (9): author, description, homepage, keywords, license, main, name, version (+1 more)

### Community 2 - "repository"
Cohesion: 0.67
Nodes (3): repository, type, url

### Community 3 - "Vercel Edge Function /api/signal"
Cohesion: 0.67
Nodes (3): Lean trading signal relay, Vercel Edge Function /api/signal, Cloudflare Worker

## Knowledge Gaps
- **3 isolated node(s):** `next`, `Lean trading signal relay`, `Cloudflare Worker`
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 19 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `repository` connect `repository` to `package.json`?**
  _High betweenness centrality (0.110) - this node is a cross-community bridge._
- **What connects `next`, `Lean trading signal relay`, `Cloudflare Worker` to the rest of the system?**
  _3 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Why does `bugs` connect `bugs` to `package.json`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.057) - this node is a cross-community bridge._