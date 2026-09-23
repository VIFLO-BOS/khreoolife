# UI refinement tracker

Work through these stages in order, starting with font aesthetics. Check off an
item only when its stated work and verification are complete. Code/build checks
do not substitute for visual review.

## Scope and design constraints

- Preserve section order, composition, imagery, colors, content and unrelated code.
- Make targeted typography and responsive corrections; keep the existing 1320px
  content cap unless visual evidence supports changing it.
- Center selected mobile introductions as a group: eyebrow, heading, description
  and CTA. Keep forms and long reading content appropriately left-aligned.
- Keep the documented prototype backend/payment limitations outside this work.
- Record each stage's files, validation and outstanding limitations below.

## 1. Font aesthetics — implemented; visual review pending

- [x] F1: Load the eight supplied Gotham Pro files locally with explicit weights
  and italic styles; avoid downloading every weight eagerly.
- [x] F2: Repair undefined font variables and apply Gotham to body copy,
  navigation, buttons, fields, labels, tags and footer navigation headings.
- [x] F3: Preserve the existing browser-default serif display treatment for
  headings and existing display-font passages, without changing type sizes,
  tracking, line heights, spacing or breakpoints in this stage.
- [x] F4: Explicitly preserve the font of the text-built logos and decorative
  `ee` marks so the global body font cannot alter their shapes.
- [x] F5: Verify TypeScript, production compilation, emitted font weight/style
  rules, font assets and page font-variable wiring.
- [ ] F6: Visually review the pairing and font-induced wrapping on all seven
  routes, including navigation, forms and detail panels, at mobile and desktop
  widths. Record any adjustments for the appropriate subsequent stage.
- [ ] F7: Record the user's aesthetic feedback on the font pairing. The user
  authorized continuing to responsive work while visual review remains pending.

## 1a. Typography rhythm — implemented; visual review pending

- [x] T1: Define shared, unitless line-height roles for heroes, sections, cards,
  lead text, body copy, reading text, captions and controls.
- [x] T2: Apply roles across all seven routes and shared UI; remove accidental
  inherited heading leading and the fixed desktop pillar-heading line height.
- [x] T3: Match Mission/Vision heading scale, tracking and paragraph rhythm.
- [x] T4: Verify emitted CSS, source scope, type/build checks and local routes.
- [ ] T5: Visually verify wrapping, card/overlay fit, text zoom, font fallback
  and rhythm at the target widths. Do not mark complete from source checks.
- [ ] T6: Follow with equivalent-component spacing and reading-width refinements,
  then label sizing/weight review; preserve the existing composition.
- [ ] T7: Obtain aesthetic approval before selecting a specific display serif.
  Keep the current generic serif and separate logo styling in this batch.

## 2. Shared responsive foundations — implemented foundations; full review pending

- [x] R1: Correct unsupported hero/logo utilities, the missing `tiny`/`tablet`
  behavior and the hero `eyebro` typo using supported, intentional rules.
- [x] R2: Unify header-height breakpoints and dependent offsets.
- [x] R3: Apply mobile alignment to shared SectionHeading and PageHero text
  groups, including eyebrow positioning, copy widths and associated CTAs.
- [ ] R4: Review heading minimum sizes, line heights, small labels and text
  wrapping against the final fonts; preserve the desktop hierarchy.
- [ ] R5: Verify container gutters and overflow at breakpoint boundaries without
  using global overflow clipping to conceal layout defects.

## 3. Page-by-page fit and alignment — current stage

H1-H8 track implemented homepage corrections. H9 separately tracks their live
visual and interaction verification, which remains pending browser access.

- [x] H1: Home hero — viewport height, title wrapping and underline placement.
- [x] H2: Pillar slider — mobile alignment, fixed 64px heading line-height,
  changing slide heights, image-label fit and control placement.
- [x] H3: Life campaign — title alignment, tablet whitespace and mobile card-back
  text fit within the existing composition.
- [x] H4: Mission & Vision — fix percentage columns plus gap overflow; adjust
  mobile copy alignment and illustration spacing.
- [x] H5: Featured projects — mobile card heights, overlay copy and CTA alignment.
- [x] H6: Horizontal events — restore the original pinned sideways-scrolling
  design at the user's request; retain typography, header offsets and narrow
  card-width safeguards. The native-row replacement is withdrawn.
- [x] H7: Stories — tablet card widths, explicit heading sizing and mobile CTA.
- [x] H8: Home closing CTA — center the mobile text/action group.
- [ ] H9: Visually verify H1-H8 at phone, tablet and desktop widths; test all
  pillar slides, campaign card faces, event scrolling/arrows/keyboard use,
  short-screen sticky fit, text zoom, image crops and reduced motion.
- [x] A1: About implementation — correct inline pillar offsets below desktop;
  adjust hero strip, story, mission statements, pillar copy, team cards and
  closing CTA for mobile fit and alignment.
- [ ] A2: Visually verify About at phone, tablet and desktop widths, including
  hero/strip fit, pillar stacking, image crops, team-name wrapping, text zoom
  and short landscape windows. Implementation checks do not close this item.
- [ ] P1: Projects — review filters, filtered-grid balance, overlay copy and
  closing CTA; correct process-card border conflicts.
- [ ] E1: Events — reclaim mobile timeline text width, review metadata wrapping,
  empty state, hero aside and closing section.
- [ ] G1: Get Involved — align introductions, pathways and process steps; review
  form padding, tab placement, controls, validation and confirmation state.
- [ ] B1: Blog — review hero/editorial alignment, tablet and filtered card widths,
  mobile image space, decorative stickers and closing quotation.
- [ ] D1: Donate — verify the mobile image/text boundary, donation controls,
  support cards, statistics and closing introduction.
- [ ] S1: Shared header/footer — review logo/navigation fit, mobile menu wrapping,
  footer grouping and alignment at all target widths.
- [ ] S2: Project/event/article panels — review mobile padding, heading wrapping,
  metadata, impact cards, actions and close-button reachability.

## 4. Interaction and motion follow-up

- [ ] I1: Make campaign cards operable by touch and keyboard with clear controls.
- [ ] I2: Improve slider touch targets and review automatic advancement/pause.
- [x] I2a: Expand pillar controls to 44px targets while keeping the 4px visual
  progress bars; add visible keyboard focus and selected-state semantics.
- [ ] I3: Add appropriate menu/panel focus handling, Escape dismissal, background
  scroll handling and expanded/selected/dialog semantics.
- [ ] I4: Restore visible field focus states and verify keyboard operation.
- [ ] I5: Keep a visible static hero photograph under reduced motion; review
  JavaScript-driven transitions and scrolling under the same preference.
- [x] I5a: Keep the first home hero photograph visible under reduced motion.
  The restored events section skips smooth arrow scrolling for that preference;
  its scroll-linked motion still requires the I5 review.

## 5. Final regression verification

- [ ] Q1: Review all seven routes at 320, 360, 390, 430, 768, 1024, 1280, 1440,
  1920 and 2560px widths, plus breakpoint edges and short landscape heights.
- [ ] Q2: Exercise every filter, menu, panel, slider, application tab and feedback
  state; check scrolling, keyboard use, focus and text zoom.
- [ ] Q3: Verify font loading, readable copy, image cropping, no accidental
  horizontal overflow and reduced-motion presentation.
- [ ] Q4: Run final type/build checks and inspect the diff for unrelated changes.

## Implementation and verification log

- Initial tracker: based on the complete source audit (7 routes, 22 components).
  Live browser verification remains pending: the browser runtime reports no
  available session. No visual checks are marked complete.
- Font implementation: `app/fonts.ts`, `app/layout.tsx`, `app/globals.css` and
  `tailwind.config.ts` now define Gotham UI, existing serif display, and separate
  serif logo roles. Font-only assignments in the logo, footer, closing CTA,
  Mission & Vision and magazine components protect the text-built brand marks;
  footer navigation labels now use Gotham.
- F1-F5 validation: `npm.cmd run build` and `npm.cmd run typecheck` passed.
  Inspected production output: all eight local WOFF assets exist, their explicit
  weights/styles and `font-display: swap` are emitted, all seven routes attach
  the font variable on `html`, and none eagerly preload all faces. Generated CSS
  has no references to the old undefined font variables. Diff inspection confirms
  no type-size, spacing, breakpoint, content or interaction changes.
- F6-F7 remain open. The font pairing is implemented and technically verified;
  rendered appearance, wrapping and user aesthetic review are still pending.
- Live preview verification: all seven routes, the production stylesheet and all
  eight Gotham WOFF assets returned HTTP 200 at `http://127.0.0.1:3000`. Checked
  the served pages for the root font-variable class and confirmed the served CSS
  contains Gotham with no references to the old undefined font variables.
  Browser rendering is still unverified; these HTTP checks do not close F6.
- Shared responsive batch R1-R3: repaired unsupported home-hero spacing,
  underline and small-screen text utilities; restored its eyebrow styling;
  replaced the undefined logo breakpoint with the existing below-desktop
  breakpoint. Home title reduction applies at 360px and below; the logo uses
  its smaller size below 1024px.
- Header and sticky offsets now reference `--nav-height`, which changes from
  76px to 68px below exactly 768px. This includes the header, mega-menu,
  shared hero padding, horizontal events and three filter bars. Existing
  desktop offset values are preserved.
- Shared SectionHeading and PageHero now center mobile text/eyebrow groups;
  hero asides center their content and actions. Mobile heading scales are
  34-42px for section introductions and 38-52px for shared page heroes, with
  balanced wrapping and mobile-specific line heights. Desktop heading sizes
  and column arrangements remain intact. This covers the shared-scale part
  of R4; route-specific type fit and small labels still need review.
- R1-R3 verification: production build (including TypeScript checks) passed;
  all 15 targeted utility rules are present in emitted CSS at the intended
  breakpoints. Searches found no remaining audited unsupported hero/logo
  classes or duplicated numeric sticky offsets. All seven routes and the
  updated stylesheet returned HTTP 200 from the refreshed local preview;
  shared-heading/hero markup is present on the expected routes. Diff check
  passed. Browser rendering remains unavailable, so R4/R5 and visual QA stay
  open; checked R1-R3 items represent implementation and compiler/HTTP checks.
- Homepage H1-H8 implementation: the mobile hero uses `100svh` as a minimum
  and can grow with its copy; its heading now scales continuously from 38-46px.
  Homepage introductory headings, descriptions and CTAs center below 768px.
  Pillar headings use proportional line-height when stacked, with reserved
  mobile copy space to reduce slide shifts; gallery labels can wrap within
  their image tiles.
- Campaign cards stack below 1024px with a 560px cap. Both faces participate in
  the same grid cell so the back's copy can establish the card height. Moved
  flip-card base styles into the components layer so responsive position and
  height utilities actually override them. Desktop staggered composition stays.
- Mission & Vision now divides the space remaining after its gap using 42/58
  fractional tracks. The mobile illustration no longer reserves a fixed 430px
  block. The featured card's mobile overlay is in normal flow so it can grow
  with text; story cards use two columns on tablets and one on phones. Their
  desktop heading stays 20px, now expressed without a redundant clamp.
- Events now use native horizontal scrolling with snap points, capped card
  widths and arrow controls on phones, short desktop windows and reduced
  motion. On desktop the original scroll-linked effect activates only when
  the measured content fits beneath the header. The counter/progress and
  control limits follow the active mode. Instructional copy was adjusted to
  describe arrow navigation in both modes; project/event content is unchanged.
- Homepage validation: production build (including TypeScript) and diff checks
  passed. Thirteen checks exercised the event-strip helper's fit decisions,
  reduced motion, boundary targets, progress/counters and width calculations.
  Fourteen responsive utilities were checked in emitted CSS, including the
  flip-card cascade order and reduced-motion hero visibility. All seven routes
  and the refreshed homepage stylesheet returned HTTP 200 at the local preview.
  These are compiler, logic and HTTP checks; H9 and the broader browser QA
  remain open. Automatic slider pause and campaign touch/keyboard interaction
  are still tracked under I1/I2.
- About A1 implementation: only `app/about/page.tsx` changed in this batch.
  Pillar offsets are now custom properties consumed by desktop-only sticky
  rules; there is no inline `top` to displace relative cards below 1024px.
  Stacked pillar images use a 16:10 frame and cards grow with their copy.
- About's mobile hero, story, mission statements, pillars, team details and
  closing CTA now center their text groups. Heading scales match the shared
  mobile hierarchy; team initials panels scale from 240-320px on phones.
  The yellow hero strip becomes a two-column grid in normal document flow
  below 768px, allowing its labels to wrap without covering the introduction.
  Desktop typography, column arrangements and sticky offsets are preserved.
- About source comparison confirms unchanged copy, image sources, links and
  section/component order. Browser discovery still returns no available session;
  A2 and the broader visual QA remain open.
- About technical validation completed: production build including TypeScript,
  eleven emitted responsive CSS checks, diff check and HTTP 200 on all seven
  routes passed. The refreshed About page serves the new pillar-offset markup.
- Approved typography T1-T3: added unitless Tailwind leading roles: hero 1.04,
  section 1.1, card 1.2, lead 1.6, body 1.7, reading 1.75, caption 1.5 and
  control 1.4. Applied explicit roles to headings, paragraphs, captions and
  controls across the seven routes, navigation, forms and detail panels.
  Textareas use body leading; inputs/selects use control leading. Display-title
  defaults to section leading; explicit role utilities override size defaults.
- Mission/Vision now share the same 24-36px desktop heading scale, existing
  24-30px mobile scale, tracking and body leading. Pillar headings now use
  proportional card leading at desktop as well as smaller widths. Logo lettering,
  Gotham/serif assignments, colors, imagery, component order and behavior remain.
  Text block heights intentionally change with their new line heights; rendered
  card/overlay fit remains a required follow-up, not a completed visual claim.
- T4 validation: production build including TypeScript passed; seven permanent
  regression tests pass via `npm.cmd run test:typography` after the build.
  Tests cover heading/paragraph role coverage, dynamic button classes, matching
  Mission/Vision styles, pillar/article roles, emitted values, utility cascade
  and preserved logo/font treatment. Compared 31 TSX files against this batch's
  baseline: only class assignments changed, with no content or logic changes.
  All seven preview routes and the refreshed stylesheet returned HTTP 200 and
  include the expected roles. Diff check passed. Browser discovery still returns
  no session; T5, page visual checks and full regression QA remain unchecked.
- Next refinement T6: equivalent-component text spacing/reading widths, then
  label readability and weights. A specific serif requires separate aesthetic
  approval (T7); no replacement display font was introduced.
- User preference — Latest Events: restored the original pinned horizontal
  scroll, active-card lift/scale/fade, 255px event photography, arrow navigation,
  scroll-linked progress bar and original introductory copy. Removed the native
  row/height-based switching and its now-unused `lib/event-strip.ts` helper.
  This supersedes the earlier H6 replacement described above. Kept the approved
  typography roles, mobile introduction alignment, shared header-height offset,
  metadata wrapping and a viewport cap that prevents 320px cards exceeding a
  narrower phone container. No unrelated section was reverted. Short-screen fit
  and reduced-motion treatment remain explicit visual/interaction follow-ups.
- Restoration verification: production build including TypeScript passed, along
  with both event-design source-contract tests and all seven typography tests.
  Confirmed the card-width safeguard in emitted CSS and passed the diff check.
  All seven local preview routes returned HTTP 200; the homepage serves the
  restored scrolling instruction, image height and retained typography roles.
  These checks do not replace rendered scroll/interaction verification (H9).
