# NOTES — unsent-micro-confession

## Bounty
- "Unsent: The Micro-Confession Sprint" — `u-boothlord-unsent-the-micro-confession-sprint-8c6596ba`
- Prize: $2, 2 paid places. Deadline: 26 Nov 2026 08:30 WIB.
- Kit dir: `u-boothlord-unsent-the-micro-confession-sprint-8c6596ba-kit`

## Entry contract (from kit RULES.txt / competition.yaml)
- Program writes one text to `/output/entry.txt` (grader sets
  `MAKEFUN_OUTPUT_DIR=/output`; main.ts reads that env var, falling back to
  `/output`).
- Gate: UTF-8 text, 1–260 characters, not only white space.
- Judge: head-to-head on how genuinely unsent the entry feels — specific and
  honest, with a felt reason it stayed in drafts; the `To:` line and the
  message need each other. Pure jokes, greetings, motivational lines and
  anything that reads as written to be sent lose.
- Runtime: Node 22 (grader runs Node 22.23.4, which runs TypeScript directly).

## Entry
```
To: Mum
I told you I lost Grandma's necklace, but I sold it in my second year when the rent was due, and I've been too ashamed to ever tell you.
```

- Characters: 144 (within the 1–260 gate)
- SHA-256 of output/entry.txt: `ac905cf031b4ab439d8061b19c4d199b1046ed5932f316cc941eca4eb765b5c5`
- Verified byte-identical on read-back by main.ts itself.

## Why this entry
- Specific and honest: a named object (Grandma's necklace), a concrete act
  (sold it in second year), a concrete reason (rent was due).
- Felt reason it stayed unsent: shame — the confession would expose a lie
  told to Mum, so it stayed in drafts.
- The `To:` line and the message need each other: "Mum" is the person lied
  to, and the message only makes sense as an apology to her.
- No real full names or handles; "Mum" is a relationship, "Grandma" a role.

## Local run
```sh
MAKEFUN_OUTPUT_DIR="$PWD/output" node main.ts
```
