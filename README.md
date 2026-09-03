# Gerding Commercial Real Estate — website guide

This is the guide for **editing the website yourself**, without a developer.

Everything you can change lives in one folder: **`content/`**. You edit those
files right here on GitHub. When you save, the site rebuilds and goes live on
its own in about two minutes.

There's a short section for developers at the very bottom.

---

## The one thing to know first

**If a mistake makes the site fail to build, the live site does not break.**

It keeps showing the last version that worked. So you can't take the site down
by making a typo. Worst case, your change just doesn't appear, and you fix it
and save again.

---

## How to change a file

1. Click the file you want to change (for example `content/theme.json`).
2. Click the **pencil icon** in the top right.
3. Make your change.
4. Scroll down and click **Commit changes**.

That's it. Wait about two minutes and refresh the website.

### How to add a new file

1. Open the folder you want to add to (for example `content/listings`).
2. Click **Add file** → **Create new file**.
3. Type the file name, including `.json` at the end.
4. Paste in the content.
5. Click **Commit changes**.

### How to delete a file

Open the file, click the **trash icon**, then **Commit changes**.

---

## A few rules about these files

The files are JSON. It's picky about punctuation, but there are only three
rules:

**1. Text goes inside double quotes.**

```
"city": "Portland"
```

**2. Every line ends with a comma — except the last one in a block.**

```
"city": "Portland",
"units": 12,
"zoning": "RM2"        <-- no comma, it's last
```

**3. Numbers don't get quotes, text does.**

```
"units": 12            <-- a plain number
"askingPrice": "$2,400,000"    <-- text, because of the $ and commas
```

If you break one of these, the site build fails and the old version stays
live. See [If something goes wrong](#if-something-goes-wrong).

---

## Turning the site on and off

`content/settings.json` controls whether visitors see the real site or a
"Coming Soon" page.

```json
{
  "enabled": true
}
```

- `true` — the real website
- `false` — the "Coming Soon" holding page

---

## Active listings (properties for sale)

Each property for sale is **one file** in `content/listings/`.

If that folder is empty, the Properties page automatically says
"None currently available." You don't have to do anything to make that happen.

### Naming the file

Start the name with the date you listed it, then a short name:

```
2026-09-14-raleigh-heights.json
```

- Use `YYYY-MM-DD` for the date, then a dash, then a short name.
- Use only lowercase letters, numbers and dashes. **No spaces.**
- The newest date shows up first on the site.

### The file name is the web address

The file name does double duty: it also becomes that listing's address on the
website. Drop the `.json` and put `/listings/` in front:

```
file:  content/listings/2026-09-14-raleigh-heights.json

page:  gerdingcre.com/listings/2026-09-14-raleigh-heights/
```

Two things follow from that:

- **There is no field to fill in for the address.** You'll notice the example
  below has no `"slug"` or `"url"` line. It doesn't need one — the file name is
  the only thing that sets the address. Adding such a line does nothing.
- **Renaming the file changes the address.** If you've already emailed someone
  a link to a listing, renaming the file breaks that link. Leave the name alone
  once it's live.

### Copy this to create a listing

Change the values, keep the field names exactly as they are.

```json
{
  "name": "Raleigh Heights",
  "status": "active",
  "neighborhood": "Raleigh Hills",
  "city": "Portland",
  "propertyType": "Multifamily · For Sale",
  "units": 17,
  "askingPrice": "$2,740,000",
  "yearBuilt": "1974 & 1978",
  "buildingSize": "14,200 sf",
  "lotSize": "22,000 sf",
  "zoning": "RM2",
  "capRate": "5.4%",
  "currentNoi": "$148,000",
  "pricePerUnit": "$161,221",
  "grm": "14.8",
  "description": [
    "First paragraph about the property. Write it the way you'd describe the building to a buyer.",
    "Second paragraph. Add as many as you like — each one in quotes, separated by a comma.",
    "Last paragraph gets no comma after it."
  ],
  "unitMix": [
    { "type": "1BR/1BA", "units": 9, "avgSqFt": "620", "currentRent": "$1,150", "marketRent": "$1,300" },
    { "type": "2BR/1BA", "units": 8, "avgSqFt": "850", "currentRent": "$1,475", "marketRent": "$1,625" }
  ],
  "legalDisclaimer": "Information deemed reliable but not guaranteed. Buyer to verify all data. This offering is subject to prior sale, price change, or withdrawal without notice. Contact Tyler Gerding for current offering memorandum.",
  "images": {
    "hero": "/images/listings/raleigh-heights-hero.jpg",
    "gallery": [
      "/images/listings/raleigh-heights-1.jpg",
      "/images/listings/raleigh-heights-2.jpg"
    ]
  }
}
```

### What the fields mean

| Field | What to put |
| --- | --- |
| `name` | The property name shown as the heading |
| `status` | `"active"` or `"pending"`. Use `"pending"` once it's under contract |
| `neighborhood` / `city` | Shown together, like "Raleigh Hills, Portland" |
| `propertyType` | A short line under the name, e.g. `"Multifamily · For Sale"` |
| `units` | A plain number, no quotes |
| `askingPrice` | In quotes, with the `$` |
| `capRate`, `currentNoi`, `grm`, `pricePerUnit` | Shown in the financial box. Put `"—"` if you'd rather not publish one |
| `description` | A list of paragraphs, each in quotes |
| `unitMix` | One line per unit type. Delete or add lines as needed |
| `images` | See [Photos](#photos) below. Leave `"hero": ""` and `"gallery": []` if you have none yet |

### When a property sells

Two steps:

1. **Delete** the file from `content/listings/`.
2. **Add** it to `content/closed/` using the sold format below if wanted.

---

## Sold properties

These are the cards under "Recently closed" on the homepage and on the
Properties page. Each one is **one file** in `content/closed/`.

### Naming the file

Start the name with a two-digit number, then a short name:

```
01-raleigh-heights.json
02-garden-court.json
```

**The numbers control the order.** `01` shows first. To move a card, rename it
with a different number. To add a new sale at the front, name it `00-…`.

The homepage shows the first six. That limit is `"limit": 6` inside
`content/home.json`, under `recentlyClosed`. The Properties page shows all of
them.

### Copy this to create a sold property

```json
{
  "name": "Raleigh Heights",
  "location": "Portland, Oregon",
  "propertyType": "Multifamily · Portland",
  "yearBuilt": "1974 & 1978",
  "units": 17,
  "pricePerUnit": "$161,221",
  "repType": "Buyer & Seller rep",
  "image": "/images/closed/raleigh-heights.jpg"
}
```

### What the fields mean

| Field | What to put |
| --- | --- |
| `name` | The property name |
| `location` | City and state, e.g. `"Newberg, Oregon"` |
| `propertyType` | The small gold line above the name |
| `yearBuilt` | In quotes. Can be a range: `"1974 & 1978"` |
| `units` | A plain number, no quotes |
| `pricePerUnit` | In quotes, with the `$` |
| `repType` | Who you represented. Keep it short — it sits on the photo. Use `"Seller rep"`, `"Buyer rep"`, or `"Buyer & Seller rep"` |
| `image` | One photo. See [Photos](#photos) |

---

## Photos

### Where they go

| Photos of | Upload to |
| --- | --- |
| Active listings | `public/images/listings/` |
| Sold properties | `public/images/closed/` |

To upload: open the folder, click **Add file** → **Upload files**, drag your
photos in, then **Commit changes**.

### Naming photos

Lowercase letters, numbers and dashes only. **No spaces, no capitals.**

- Good: `raleigh-heights-hero.jpg`
- Bad: `Raleigh Heights Hero.jpg`

### Pointing to a photo in a file

Write the path starting with `/images/` — **leave off the word `public`**:

```json
"image": "/images/closed/raleigh-heights.jpg"
```

If the photo doesn't appear, it's almost always because the file name in the
JSON doesn't match the uploaded file exactly. Capital letters count.

### Photo size

Before uploading, resize photos to about **1,000 pixels wide**. Straight off a
camera or phone they're often 10–20x bigger than the site needs, which makes
pages slow to load. Aim for under 250 KB per photo.

---

## Colors

All the colors are in **`content/theme.json`**, under `"colors"`.

Each one tells you what it affects:

```json
"gold": {
  "value": "#C4A96A",
  "usedFor": "The accent. All the small uppercase labels above section
              headings, the short divider rules beneath them, the quote
              marks on pull-quotes, and the underline on whichever nav
              link you're currently on."
}
```

**Only change `value`.** Leave `usedFor` alone — it's the note explaining what
the color does.

A color is a `#` followed by six characters. If you don't have one, pick a
color at [htmlcolorcodes.com](https://htmlcolorcodes.com/) and copy the hex
code it gives you.

Read the `usedFor` note before changing a color — `darkGreen` in particular
appears nearly everywhere, so changing it changes the look of the whole site.

The see-through shades (faded text on the dark green bands, the thin dividing
lines) are worked out automatically from these colors. You don't need to
adjust them.

---

## Fonts

Also in **`content/theme.json`**, under `"fonts"`.

```json
"fonts": {
  "headings": {
    "value": "cormorant",
    "options": "cormorant | ebGaramond | playfair | lora",
    "usedFor": "Every heading on the site: the homepage headline, ..."
  },
  "bodyText": {
    "value": "jost",
    "options": "jost | inter | workSans | dmSans",
    "usedFor": "Everything that isn't a heading: paragraphs, ..."
  }
}
```

Change `value` to any one of the names listed in `options`.

**Copy the name exactly** — `playfair`, not `Playfair` or `Playfair Display`.
If you get it wrong the build fails and tells you the correct options, and the
live site stays as it was.

Want a font that isn't in the list? A developer can add it in a couple of
minutes — the fonts have to be built into the site so they load fast.

---

## Page wording

| File | What it controls |
| --- | --- |
| `content/site.json` | Your name, phone, email, LinkedIn, the menu, the footer |
| `content/home.json` | All the homepage sections |
| `content/about.json` | The About page |
| `content/markets.json` | The Markets page and its three market write-ups |
| `content/contact.json` | The Contact page and the form's dropdown choices |
| `content/properties.json` | Headings and intro text on the Properties page |
| `content/listings-page.json` | The `/listings` page |

You're editing the words between the quote marks. Leave the field names on the
left alone.

Two things you'll see in this text:

- `<br />` forces a line break.
- `<em>` and `</em>` wrap words that should be *italic*.

```json
"headlineHtml": "Some decisions<br /><em>span generations.</em>"
```

---

## If something goes wrong

If your change doesn't show up after a few minutes, the build probably failed.
The live site is fine — it's still showing the previous version.

To see what happened, open the **Netlify** dashboard for the site and click
**Deploys**. The most recent one will be red, and clicking it shows the reason
at the bottom of the log.

The usual causes, in order of likelihood:

1. **A missing or extra comma.** Every line needs a comma except the last one
   in its block.
2. **A missing quote mark.** Text needs one at each end.
3. **A font name that isn't in the options list.**
4. **A photo path that doesn't match the uploaded file.** This one doesn't fail
   the build — the photo just doesn't show up.

If you get stuck, the quickest fix is to undo your change: open the file's
**History**, find the version before your edit, and restore it.

---

## For developers

Next.js with static export (`output: "export"`), Tailwind v4, deployed on
Netlify. No server or database — every page is pre-rendered at build time.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site written to /out
npm run lint
```

**Content pipeline.** JSON in `content/` is imported and cast to the interfaces
in `src/lib/types.ts` via `src/lib/content.ts`. Note that these are `as`
assertions, so they document the shape rather than validate it — a malformed
value fails at render or shows up blank, not at type-check.

Per-file collections (`content/listings/`, `content/closed/`) are read at build
time by `src/lib/content-dir.ts`, which injects each file's basename as `slug`
and sorts by filename — descending for listings (date-prefixed, newest first),
ascending for closed (number-prefixed). **A `slug` field inside those JSON
files is ignored**; the filename always wins.

**Theme.** `content/theme.json` is the only source of colors and typefaces.
`src/lib/theme-css.ts` turns its `colors` into a `:root` block injected by
`src/app/layout.tsx`, emitting both the hex and its RGB channels so
`globals.css` can derive translucent shades with `rgb(var(--x-rgb) / a)`.
`globals.css` contains no color values and no typeface names — that's an
invariant worth keeping.

Selectable fonts live in `src/lib/fonts.ts`. `next/font` is statically
analysed, so each family needs a literal name, its own module-scope const, and
a fully literal options object — hence the repetition. Every family publishes
to the same CSS variable (`--font-headings` / `--font-body`), so selection is
only a question of which className reaches `<html>`. `preload` is off on all of
them deliberately: `next/font` preloads every family it instantiates, which
pushed ~500KB of unused fonts at every visitor.

**Empty listings.** `output: "export"` rejects a dynamic route that yields zero
params, so `src/app/listings/[slug]/page.tsx` emits one inert slug when
`content/listings/` is empty, and `npm run build` deletes the resulting page.
`netlify.toml` therefore runs `npm run build`, not `next build`.

**Forms.** Netlify Forms. `src/components/forms/NetlifyFormsHidden.tsx` holds
static copies so the Netlify build can detect them; submissions land in the
Netlify dashboard under **Forms**.

### Known rough edges

- Listing URLs include the date prefix (`/listings/2026-09-14-raleigh-heights/`)
  because the slug is the filename. Decoupling them means adding an explicit
  slug field and a separate sort key.
- `content/listings-page.json` still holds four placeholder past transactions,
  and `/listings` isn't linked from the nav.
- Font sizes and spacing are hardcoded throughout `globals.css`; only colors and
  typefaces are tokenized.
