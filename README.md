# Kefaru Connect

Build a premium, production-quality, client-facing MARKETING / MEETING SCHEDULING DASHBOARD for Kefaru Tech.

IMPORTANT:

I have provided a reference UI PDF called "Group 20 1.pdf". Treat that PDF as the PRIMARY VISUAL DESIGN REFERENCE. I have provided two supporting images to build UI.

DO NOT redesign the interface from scratch.

DO NOT introduce a generic SaaS dashboard style.

DO NOT use a conventional admin dashboard/sidebar layout.

Recreate the same visual identity, spacing philosophy, color palette, typography hierarchy, card language, background treatment, icon style, rounded corners, and overall premium aesthetic from the reference PDF.

The purpose of this product is different from the reference website:

The reference is a marketing website.

The new product should be a CLIENT-FACING MARKETING DASHBOARD / MEETING BOOKING EXPERIENCE where a prospective client can:

1. Understand Kefaru Tech's services.

2. Explore how Kefaru can help their business.

3. Select the type of marketing/service discussion they want.

4. Select a date and available time.

5. Provide their contact/company information.

6. Schedule a meeting with the Kefaru marketing team.

7. Receive a clear confirmation after booking.

The experience should feel like an extension of the existing Kefaru Tech website — NOT like a completely different product.

==================================================

1. CORE DESIGN DIRECTION

==================================================

Reference UI:

- Use the supplied PDF as the source of truth.

- Preserve the same overall visual composition and design language.

- Use the same light mint / extremely pale green-white page background.

- Use dark navy / near-black typography.

- Use Kefaru's teal/green accent color for primary CTA buttons and important UI states.

- Use white cards with subtle borders and soft shadows.

- Use rounded corners consistently.

- Use subtle gradients only where they naturally match the reference.

- Maintain generous whitespace.

- Keep the interface clean, premium, modern and B2B-focused.

- Avoid excessive visual noise.

- Avoid purple/blue generic SaaS gradients.

- Avoid glassmorphism-heavy styling.

- Avoid a dark dashboard.

- Avoid standard Bootstrap-looking components.

- Avoid generic calendar templates.

The design should communicate:

"Premium B2B technology + trusted consulting + modern marketing + human assistance."

==================================================

2. NAVBAR

==================================================

Recreate the reference navbar structure.

Left:

- Kefaru Tech logo.

Navigation:

- Platform

- How it works

- Why Kefaru

- Contact

IMPORTANT:

REMOVE THE "Sign in" BUTTON COMPLETELY.

Instead, on the right side use a strong primary CTA:

"Book a Meeting"

Navbar requirements:

- Sticky/fixed while scrolling.

- Transparent/light appearance initially.

- Slightly elevated/blurred background after scrolling.

- Smooth transition.

- Mobile responsive navigation.

- Hamburger menu on smaller screens.

- Smooth animated menu opening.

- Active navigation state.

- Do not make the navbar look like an admin dashboard.

==================================================

3. HERO / DASHBOARD INTRO

==================================================

Create a hero section inspired directly by the reference PDF.

Use a headline with the same strong typographic character as the reference.

Suggested headline:

"Let's build what moves your business forward."

Supporting text:

"Connect with the Kefaru team to explore how our technology, marketing and digital solutions can help your business grow."

Primary CTA:

"Book a 20-minute meeting"

Secondary CTA:

"Explore our services"

On the right side create a premium visual area inspired by the reference's connected Salesforce ecosystem illustration.

Do NOT simply copy the exact illustration.

Create a new visual representing:

Client

   ↓

Kefaru Tech

   ↓

Marketing Team

   ↓

Strategy

   ↓

Growth

Use subtle connected lines, floating cards and small platform/service icons.

The visual should feel like the same design system as the PDF.

==================================================

4. MAIN DASHBOARD / MEETING BOOKING EXPERIENCE

==================================================

The most important section is the actual meeting scheduling interface.

Create a large premium white rounded container/card.

Title:

"Book a conversation with our team"

Subtitle:

"Choose a time that works for you. We'll use the session to understand your goals and show you where Kefaru can help."

Create a multi-step booking experience.

STEP 01 — SELECT SERVICE

Heading:

"What would you like to discuss?"

Cards:

1. Digital Marketing

   "Build visibility, engagement and qualified demand."

2. Website & Digital Experience

   "Create a modern digital experience for your customers."

3. Salesforce / CRM

   "Connect your sales, service and customer experience."

4. AI & Automation

   "Automate workflows and unlock smarter operations."

5. Custom Solution

   "Have something specific in mind? Let's discuss it."

Each card:

- White background

- Rounded corners

- Thin border

- Small icon

- Short description

- Hover animation

- Selected state using Kefaru teal accent

- Smooth transition

Allow one card to be selected.

==================================================

5. STEP 02 — CHOOSE MEETING TYPE

==================================================

Create compact meeting-type cards:

"20-minute Discovery Call"

"30-minute Strategy Session"

"45-minute Solution Discussion"

Default:

20-minute Discovery Call

Show:

- Duration

- Short description

- Appropriate icon

Selected card gets a subtle teal border/background treatment.

==================================================

6. STEP 03 — DATE & TIME

==================================================

Create a premium scheduling interface.

Left side:

Calendar.

Right side:

Available time slots.

Calendar requirements:

- Month navigation.

- Current month.

- Selected date.

- Disabled dates.

- Today indicator.

- Responsive layout.

- Keyboard accessible.

- Smooth transitions when changing months.

Time slots:

09:00 AM

09:30 AM

10:00 AM

10:30 AM

11:00 AM

11:30 AM

02:00 PM

02:30 PM

03:00 PM

03:30 PM

04:00 PM

04:30 PM

Do not hard-code the UX as a static visual only.

Create realistic interactive state management.

The selected date + time should remain visible in a booking summary.

Example:

"Your meeting"

20-minute Discovery Call

Tuesday, September 15

10:30 AM

Use the browser/client timezone automatically.

==================================================

7. STEP 04 — CLIENT INFORMATION

==================================================

After selecting date/time, show the client information form.

Fields:

First Name

Last Name

Work Email

Phone Number

Company

Job Title

Company Website

Dropdown:

"What are you currently using?"

Options:

- Salesforce

- HubSpot

- Microsoft Dynamics

- Other CRM

- Spreadsheets

- No CRM

- Other

Textarea:

"Anything specific you'd like us to cover?"

Optional field.

Use the same form styling language as the reference PDF:

- Rounded inputs

- Light backgrounds

- Clean labels

- Teal focus state

- Comfortable spacing

- Strong typography

==================================================

8. BOOKING SUMMARY

==================================================

Create a persistent booking summary card.

Show:

Kefaru Tech

20-minute Discovery Call

Date:

[Selected date]

Time:

[Selected time]

Timezone:

[Detected timezone]

Service:

[Selected service]

Button:

"Confirm Meeting"

Secondary:

"← Change time"

On desktop, this summary can remain sticky beside the booking flow.

On mobile, convert it into a collapsible summary panel.

==================================================

9. CONFIRMATION SCREEN

==================================================

After successful booking, show a beautiful success state.

Do NOT use a generic SaaS success page.

Use the same Kefaru visual identity.

Headline:

"You're all set."

Supporting text:

"Your meeting with the Kefaru team has been scheduled successfully."

Show:

✓ Meeting confirmed

Date

Time

Duration

Service

Meeting type

Buttons:

"Add to Google Calendar"

"Add to Outlook"

"Back to Kefaru"

Include a subtle animated confirmation illustration.

Possible visual:

- Kefaru rhino mascot

- Small calendar

- Checkmark

- Connected nodes

- Teal accent

- Soft floating elements

Animation should be elegant, not childish.

==================================================

10. SERVICES SECTION

==================================================

Create a section inspired by the "Four systems. One record." section from the PDF.

Instead of systems, use:

"Everything your growth journey needs. One conversation."

Create 4 premium service cards:

Digital Marketing

CRM & Salesforce

AI & Automation

Digital Experience

Each card should contain:

- Number

- Icon

- Title

- Short description

- Small animated arrow

Cards should connect visually through subtle animated lines.

Use the same visual rhythm as the PDF's four-system cards.

==================================================

11. WHY KEFARU SECTION

==================================================

Create a section inspired by the reference's "Before / With connected approach" comparison.

Heading:

"From scattered efforts to one clear growth strategy."

Create two comparison panels.

BEFORE KEFARU:

- Multiple agencies

- Disconnected campaigns

- Manual reporting

- Unclear ROI

- Too many tools

WITH KEFARU:

- One strategic partner

- Connected campaigns

- Clear reporting

- Data-driven decisions

- Measurable growth

Use:

- Light card for BEFORE

- Dark teal premium card for WITH KEFARU

This should visually echo the reference PDF.

==================================================

12. MASCOT

==================================================

IMPORTANT:

Use the provided Kefaru Tech rhino mascot asset if available.

The mascot should NOT be redesigned into a different character.

Preserve:

- Rhino appearance

- Dark navy suit

- Kefaru branding

- Professional B2B personality

- Friendly but premium expression

Use the mascot selectively:

- Hero visual

- Booking section illustration

- Confirmation state

- Possibly one supporting section

Do not overuse it.

The mascot should feel like a premium brand character rather than a cartoon.

If the actual mascot asset is not available to the implementation, create a temporary image placeholder component named:

KefaruMascot

so the supplied mascot asset can easily be dropped into /public/assets later.

DO NOT use an unrelated stock rhino image.

==================================================

13. IMAGES / VISUAL ASSETS

==================================================

Create/use these visual assets:

1. Kefaru rhino mascot

2. Connected-platform hero illustration

3. Meeting confirmation illustration

4. Service icons

5. Calendar/meeting visual elements

Preferred implementation:

- Use supplied brand assets wherever available.

- Use SVG icons where appropriate.

- Use Lucide icons for interface icons if the exact reference icons are unavailable.

- Do NOT use random emoji as UI icons.

- Do NOT use inconsistent icon libraries.

- Keep all icons visually consistent.

For the hero connected-system illustration, prefer an SVG/CSS-built illustration instead of a generic stock image.

==================================================

14. ANIMATION SYSTEM

==================================================

The dashboard must be HIGHLY ANIMATED but still premium.

Use advanced, meaningful animations.

Preferred technology:

- Framer Motion / Motion for React.

Animations to implement:

PAGE LOAD:

- Logo fades/slides in.

- Navbar items stagger in.

- Hero text reveals smoothly.

- Hero illustration elements appear sequentially.

- Connected lines animate subtly.

SCROLL:

- Sections reveal using fade + translate.

- Cards stagger into view.

- Floating visual elements move slightly with parallax.

- Avoid excessive parallax.

HOVER:

- Cards lift slightly.

- Border transitions.

- Icons animate subtly.

- Arrow moves horizontally.

- Buttons have micro-interactions.

BOOKING:

- Step transitions use smooth horizontal/vertical motion.

- Selected service card animates.

- Calendar date selection has a smooth indicator transition.

- Time-slot selection has a subtle spring animation.

- Booking summary updates smoothly.

CONFIRMATION:

- Checkmark draws/animates.

- Success card scales/fades in.

- Mascot gently enters.

- Small decorative elements float.

IMPORTANT:

Animations must NEVER slow down usability.

Use:

- opacity

- transform

- scale

- spring transitions

- staggered children

- layout animations

- subtle hover states

Avoid:

- excessive spinning

- flashing

- huge movements

- distracting infinite animations

- animation on every single text element

Respect:

prefers-reduced-motion.

==================================================

15. RESPONSIVENESS

==================================================

The application MUST be fully responsive.

Desktop:

1440px

1280px

1024px

Tablet:

768px

834px

912px

Mobile:

390px

393px

414px

430px

The UI must look intentionally designed at every breakpoint.

Do NOT simply shrink the desktop design.

Mobile requirements:

- Mobile navbar.

- Full-width CTA.

- Stacked cards.

- Calendar optimized for mobile.

- Horizontally scrollable or grid-based time slots.

- Sticky bottom booking CTA where appropriate.

- Booking summary becomes collapsible.

- Forms use one-column layout.

- No horizontal overflow.

- Touch-friendly controls.

- Minimum comfortable tap targets.

==================================================

16. PAGE STRUCTURE

==================================================

Create these sections/routes:

/

Landing + booking dashboard

/booking

Dedicated multi-step booking experience

/services

Services overview

/confirmation

Booking confirmation

If a separate route is unnecessary, use a single-page application with smooth state transitions.

==================================================

17. DESIGN TOKENS

==================================================

Create centralized CSS variables/design tokens.

Example structure:

--background

--surface

--surface-soft

--text-primary

--text-secondary

--accent

--accent-dark

--border

--success

Do not randomly choose colors.

Extract the visual palette as closely as possible from the supplied PDF.

The background should remain extremely light and slightly mint-toned.

Primary text:

Dark navy / near-black.

Primary CTA:

Kefaru teal.

Secondary surfaces:

White / very pale mint.

==================================================

18. TYPOGRAPHY

==================================================

The typography is one of the most important parts of the reference design.

Use a modern geometric/sans-serif font with:

- strong bold display headings

- clean medium body text

- tight heading line-height

- generous section spacing

Large headings should have the same bold visual impact as the PDF.

Example hierarchy:

Hero:

Very large, bold, tight line-height.

Section title:

Large bold.

Card title:

Medium/bold.

Body:

Readable, slightly muted.

Small eyebrow:

Uppercase

Letter spacing

Teal accent

Do not use serif fonts.

==================================================

19. REFERENCE UI DETAILS TO PRESERVE

==================================================

From the provided PDF, preserve these visual characteristics:

- Very light mint background.

- Dark bold heading typography.

- Teal accent.

- Rounded white content cards.

- Soft shadows.

- Fine borders.

- Small uppercase eyebrow labels.

- Large editorial-style headings.

- Connected-node visual language.

- Four-card system layout.

- Dark teal comparison panel.

- Premium form card.

- Strong CTA buttons.

- Kefaru rhino mascot.

- Generous whitespace.

- Clean B2B technology aesthetic.

The reference's visual structure includes:

hero → problem → connected systems → comparison → lead form → footer.

Adapt this structure into:

hero → services → why Kefaru → booking → confirmation/CTA.

==================================================

20. FOOTER

==================================================

Create a footer visually consistent with the PDF.

Dark teal background.

Include:

Kefaru Tech logo

Company information

Platform

How it connects

Why Kefaru

Book a meeting

Contact

Do not include Sign in anywhere.

Include:

© Kefaru Tech

Privacy Policy

Terms

==================================================

21. ACCESSIBILITY

==================================================

Implement:

- Semantic HTML.

- Proper labels.

- Keyboard navigation.

- Focus states.

- ARIA labels where necessary.

- Accessible calendar.

- Accessible modal/dialog behavior.

- Sufficient contrast.

- Reduced motion support.

- Form validation messages.

==================================================

22. FUNCTIONALITY

==================================================

This must feel like a real product, not a static mockup.

Implement:

- Service selection.

- Meeting type selection.

- Date selection.

- Time selection.

- Form validation.

- Booking summary.

- Step navigation.

- Back/next controls.

- Loading state.

- Success state.

- Error state.

- Responsive behavior.

For the initial frontend version, create a realistic mock scheduling data layer.

Structure the code so that a real backend/calendar integration can later be connected.

Create clear service functions such as:

getAvailableDates()

getAvailableTimes(date)

createBooking(data)

Do NOT hard-wire booking logic directly into UI components.

==================================================

23. FUTURE CALENDAR INTEGRATION READY

==================================================

Architect the application so it can later connect to:

- Google Calendar

- Microsoft Outlook Calendar

- Calendly-like availability

- Backend API

- Email confirmation service

Do not implement fake backend integrations pretending they are real.

Clearly isolate mock data from UI.

==================================================

24. COMPONENT ARCHITECTURE

==================================================

Use reusable components:

Navbar

Hero

ConnectedSystemsVisual

ServiceCard

ServicesSection

WhyKefaruSection

BookingWizard

BookingProgress

ServiceSelector

MeetingTypeSelector

Calendar

TimeSlotGrid

BookingSummary

ClientDetailsForm

ConfirmationScreen

Footer

Button

Input

Select

Textarea

Modal

Toast

Keep components modular.

Avoid one massive component.

==================================================

25. CODE QUALITY

==================================================

Use:

- React

- TypeScript

- Tailwind CSS

- Framer Motion / Motion

- Lucide icons

Follow clean component architecture.

Use strong TypeScript types.

Avoid:

- duplicated code

- unnecessary dependencies

- inline styling everywhere

- magic numbers

- inaccessible controls

Keep data separate from presentation.

==================================================

26. IMPORTANT VISUAL QUALITY RULE

==================================================

The final result should look like a premium agency/product website designed by a professional UI/UX team.

It should NOT look AI-generated.

Do not add:

- unnecessary gradients

- excessive glassmorphism

- random dashboard widgets

- generic statistics

- fake charts

- generic SaaS sidebar

- random illustrations

- emoji

- unnecessary badges

- excessive rounded pills

- purple gradient backgrounds

The design should remain close to the provided Kefaru Tech reference.

==================================================

27. FINAL ACCEPTANCE CRITERIA

==================================================

Before considering the implementation complete, verify:

✓ Same overall visual language as supplied PDF

✓ Same light mint background family

✓ Same dark typography family

✓ Same teal accent family

✓ Same premium card treatment

✓ Same general spacing philosophy

✓ Same connected-system visual language

✓ Kefaru mascot used appropriately

✓ Sign in completely removed

✓ Book a Meeting CTA added

✓ Fully functional booking flow

✓ Service selection

✓ Meeting type selection

✓ Calendar

✓ Time slots

✓ Client form

✓ Booking summary

✓ Confirmation page

✓ Responsive desktop/tablet/mobile

✓ Advanced but tasteful animations

✓ Reduced-motion support

✓ Accessible forms

✓ Keyboard navigation

✓ Modular React architecture

✓ Mock scheduling layer ready for backend integration

✓ No horizontal overflow

✓ No generic admin-dashboard styling

MOST IMPORTANT:

The supplied PDF is the visual source of truth.

The new functionality should feel like a natural evolution of that exact Kefaru Tech design system.Build a premium, production-quality, client-facing MARKETING / MEETING SCHEDULING DASHBOARD for Kefaru Tech.

IMPORTANT:

I have provided a reference UI PDF called "Group 20 1.pdf". Treat that PDF as the PRIMARY VISUAL DESIGN REFERENCE.

DO NOT redesign the interface from scratch.

DO NOT introduce a generic SaaS dashboard style.

DO NOT use a conventional admin dashboard/sidebar layout.

Recreate the same visual identity, spacing philosophy, color palette, typography hierarchy, card language, background treatment, icon style, rounded corners, and overall premium aesthetic from the reference PDF.

The purpose of this product is different from the reference website:

The reference is a marketing website.

The new product should be a CLIENT-FACING MARKETING DASHBOARD / MEETING BOOKING EXPERIENCE where a prospective client can:

1. Understand Kefaru Tech's services.

2. Explore how Kefaru can help their business.

3. Select the type of marketing/service discussion they want.

4. Select a date and available time.

5. Provide their contact/company information.

6. Schedule a meeting with the Kefaru marketing team.

7. Receive a clear confirmation after booking.

The experience should feel like an extension of the existing Kefaru Tech website — NOT like a completely different product.

==================================================

1. CORE DESIGN DIRECTION

==================================================

Reference UI:

- Use the supplied PDF as the source of truth.

- Preserve the same overall visual composition and design language.

- Use the same light mint / extremely pale green-white page background.

- Use dark navy / near-black typography.

- Use Kefaru's teal/green accent color for primary CTA buttons and important UI states.

- Use white cards with subtle borders and soft shadows.

- Use rounded corners consistently.

- Use subtle gradients only where they naturally match the reference.

- Maintain generous whitespace.

- Keep the interface clean, premium, modern and B2B-focused.

- Avoid excessive visual noise.

- Avoid purple/blue generic SaaS gradients.

- Avoid glassmorphism-heavy styling.

- Avoid a dark dashboard.

- Avoid standard Bootstrap-looking components.

- Avoid generic calendar templates.

The design should communicate:

"Premium B2B technology + trusted consulting + modern marketing + human assistance."

==================================================

2. NAVBAR

==================================================

Recreate the reference navbar structure.

Left:

- Kefaru Tech logo.

Navigation:

- Platform

- How it works

- Why Kefaru

- Contact

IMPORTANT:

REMOVE THE "Sign in" BUTTON COMPLETELY.

Instead, on the right side use a strong primary CTA:

"Book a Meeting"

Navbar requirements:

- Sticky/fixed while scrolling.

- Transparent/light appearance initially.

- Slightly elevated/blurred background after scrolling.

- Smooth transition.

- Mobile responsive navigation.

- Hamburger menu on smaller screens.

- Smooth animated menu opening.

- Active navigation state.

- Do not make the navbar look like an admin dashboard.

==================================================

3. HERO / DASHBOARD INTRO

==================================================

Create a hero section inspired directly by the reference PDF.

Use a headline with the same strong typographic character as the reference.

Suggested headline:

"Let's build what moves your business forward."

Supporting text:

"Connect with the Kefaru team to explore how our technology, marketing and digital solutions can help your business grow."

Primary CTA:

"Book a 20-minute meeting"

Secondary CTA:

"Explore our services"

On the right side create a premium visual area inspired by the reference's connected Salesforce ecosystem illustration.

Do NOT simply copy the exact illustration.

Create a new visual representing:

Client

   ↓

Kefaru Tech

   ↓

Marketing Team

   ↓

Strategy

   ↓

Growth

Use subtle connected lines, floating cards and small platform/service icons.

The visual should feel like the same design system as the PDF.

==================================================

4. MAIN DASHBOARD / MEETING BOOKING EXPERIENCE

==================================================

The most important section is the actual meeting scheduling interface.

Create a large premium white rounded container/card.

Title:

"Book a conversation with our team"

Subtitle:

"Choose a time that works for you. We'll use the session to understand your goals and show you where Kefaru can help."

Create a multi-step booking experience.

STEP 01 — SELECT SERVICE

Heading:

"What would you like to discuss?"

Cards:

1. Digital Marketing

   "Build visibility, engagement and qualified demand."

2. Website & Digital Experience

   "Create a modern digital experience for your customers."

3. Salesforce / CRM

   "Connect your sales, service and customer experience."

4. AI & Automation

   "Automate workflows and unlock smarter operations."

5. Custom Solution

   "Have something specific in mind? Let's discuss it."

Each card:

- White background

- Rounded corners

- Thin border

- Small icon

- Short description

- Hover animation

- Selected state using Kefaru teal accent

- Smooth transition

Allow one card to be selected.

==================================================

5. STEP 02 — CHOOSE MEETING TYPE

==================================================

Create compact meeting-type cards:

"20-minute Discovery Call"

"30-minute Strategy Session"

"45-minute Solution Discussion"

Default:

20-minute Discovery Call

Show:

- Duration

- Short description

- Appropriate icon

Selected card gets a subtle teal border/background treatment.

==================================================

6. STEP 03 — DATE & TIME

==================================================

Create a premium scheduling interface.

Left side:

Calendar.

Right side:

Available time slots.

Calendar requirements:

- Month navigation.

- Current month.

- Selected date.

- Disabled dates.

- Today indicator.

- Responsive layout.

- Keyboard accessible.

- Smooth transitions when changing months.

Time slots:

09:00 AM

09:30 AM

10:00 AM

10:30 AM

11:00 AM

11:30 AM

02:00 PM

02:30 PM

03:00 PM

03:30 PM

04:00 PM

04:30 PM

Do not hard-code the UX as a static visual only.

Create realistic interactive state management.

The selected date + time should remain visible in a booking summary.

Example:

"Your meeting"

20-minute Discovery Call

Tuesday, September 15

10:30 AM

Use the browser/client timezone automatically.

==================================================

7. STEP 04 — CLIENT INFORMATION

==================================================

After selecting date/time, show the client information form.

Fields:

First Name

Last Name

Work Email

Phone Number

Company

Job Title

Company Website

Dropdown:

"What are you currently using?"

Options:

- Salesforce

- HubSpot

- Microsoft Dynamics

- Other CRM

- Spreadsheets

- No CRM

- Other

Textarea:

"Anything specific you'd like us to cover?"

Optional field.

Use the same form styling language as the reference PDF:

- Rounded inputs

- Light backgrounds

- Clean labels

- Teal focus state

- Comfortable spacing

- Strong typography

==================================================

8. BOOKING SUMMARY

==================================================

Create a persistent booking summary card.

Show:

Kefaru Tech

20-minute Discovery Call

Date:

[Selected date]

Time:

[Selected time]

Timezone:

[Detected timezone]

Service:

[Selected service]

Button:

"Confirm Meeting"

Secondary:

"← Change time"

On desktop, this summary can remain sticky beside the booking flow.

On mobile, convert it into a collapsible summary panel.

==================================================

9. CONFIRMATION SCREEN

==================================================

After successful booking, show a beautiful success state.

Do NOT use a generic SaaS success page.

Use the same Kefaru visual identity.

Headline:

"You're all set."

Supporting text:

"Your meeting with the Kefaru team has been scheduled successfully."

Show:

✓ Meeting confirmed

Date

Time

Duration

Service

Meeting type

Buttons:

"Add to Google Calendar"

"Add to Outlook"

"Back to Kefaru"

Include a subtle animated confirmation illustration.

Possible visual:

- Kefaru rhino mascot

- Small calendar

- Checkmark

- Connected nodes

- Teal accent

- Soft floating elements

Animation should be elegant, not childish.

==================================================

10. SERVICES SECTION

==================================================

Create a section inspired by the "Four systems. One record." section from the PDF.

Instead of systems, use:

"Everything your growth journey needs. One conversation."

Create 4 premium service cards:

Digital Marketing

CRM & Salesforce

AI & Automation

Digital Experience

Each card should contain:

- Number

- Icon

- Title

- Short description

- Small animated arrow

Cards should connect visually through subtle animated lines.

Use the same visual rhythm as the PDF's four-system cards.

==================================================

11. WHY KEFARU SECTION

==================================================

Create a section inspired by the reference's "Before / With connected approach" comparison.

Heading:

"From scattered efforts to one clear growth strategy."

Create two comparison panels.

BEFORE KEFARU:

- Multiple agencies

- Disconnected campaigns

- Manual reporting

- Unclear ROI

- Too many tools

WITH KEFARU:

- One strategic partner

- Connected campaigns

- Clear reporting

- Data-driven decisions

- Measurable growth

Use:

- Light card for BEFORE

- Dark teal premium card for WITH KEFARU

This should visually echo the reference PDF.

==================================================

12. MASCOT

==================================================

IMPORTANT:

Use the provided Kefaru Tech rhino mascot asset if available.

The mascot should NOT be redesigned into a different character.

Preserve:

- Rhino appearance

- Dark navy suit

- Kefaru branding

- Professional B2B personality

- Friendly but premium expression

Use the mascot selectively:

- Hero visual

- Booking section illustration

- Confirmation state

- Possibly one supporting section

Do not overuse it.

The mascot should feel like a premium brand character rather than a cartoon.

If the actual mascot asset is not available to the implementation, create a temporary image placeholder component named:

KefaruMascot

so the supplied mascot asset can easily be dropped into /public/assets later.

DO NOT use an unrelated stock rhino image.

==================================================

13. IMAGES / VISUAL ASSETS

==================================================

Create/use these visual assets:

1. Kefaru rhino mascot

2. Connected-platform hero illustration

3. Meeting confirmation illustration

4. Service icons

5. Calendar/meeting visual elements

Preferred implementation:

- Use supplied brand assets wherever available.

- Use SVG icons where appropriate.

- Use Lucide icons for interface icons if the exact reference icons are unavailable.

- Do NOT use random emoji as UI icons.

- Do NOT use inconsistent icon libraries.

- Keep all icons visually consistent.

For the hero connected-system illustration, prefer an SVG/CSS-built illustration instead of a generic stock image.

==================================================

14. ANIMATION SYSTEM

==================================================

The dashboard must be HIGHLY ANIMATED but still premium.

Use advanced, meaningful animations.

Preferred technology:

- Framer Motion / Motion for React.

Animations to implement:

PAGE LOAD:

- Logo fades/slides in.

- Navbar items stagger in.

- Hero text reveals smoothly.

- Hero illustration elements appear sequentially.

- Connected lines animate subtly.

SCROLL:

- Sections reveal using fade + translate.

- Cards stagger into view.

- Floating visual elements move slightly with parallax.

- Avoid excessive parallax.

HOVER:

- Cards lift slightly.

- Border transitions.

- Icons animate subtly.

- Arrow moves horizontally.

- Buttons have micro-interactions.

BOOKING:

- Step transitions use smooth horizontal/vertical motion.

- Selected service card animates.

- Calendar date selection has a smooth indicator transition.

- Time-slot selection has a subtle spring animation.

- Booking summary updates smoothly.

CONFIRMATION:

- Checkmark draws/animates.

- Success card scales/fades in.

- Mascot gently enters.

- Small decorative elements float.

IMPORTANT:

Animations must NEVER slow down usability.

Use:

- opacity

- transform

- scale

- spring transitions

- staggered children

- layout animations

- subtle hover states

Avoid:

- excessive spinning

- flashing

- huge movements

- distracting infinite animations

- animation on every single text element

Respect:

prefers-reduced-motion.

==================================================

15. RESPONSIVENESS

==================================================

The application MUST be fully responsive.

Desktop:

1440px

1280px

1024px

Tablet:

768px

834px

912px

Mobile:

390px

393px

414px

430px

The UI must look intentionally designed at every breakpoint.

Do NOT simply shrink the desktop design.

Mobile requirements:

- Mobile navbar.

- Full-width CTA.

- Stacked cards.

- Calendar optimized for mobile.

- Horizontally scrollable or grid-based time slots.

- Sticky bottom booking CTA where appropriate.

- Booking summary becomes collapsible.

- Forms use one-column layout.

- No horizontal overflow.

- Touch-friendly controls.

- Minimum comfortable tap targets.

==================================================

16. PAGE STRUCTURE

==================================================

Create these sections/routes:

/

Landing + booking dashboard

/booking

Dedicated multi-step booking experience

/services

Services overview

/confirmation

Booking confirmation

If a separate route is unnecessary, use a single-page application with smooth state transitions.

==================================================

17. DESIGN TOKENS

==================================================

Create centralized CSS variables/design tokens.

Example structure:

--background

--surface

--surface-soft

--text-primary

--text-secondary

--accent

--accent-dark

--border

--success

Do not randomly choose colors.

Extract the visual palette as closely as possible from the supplied PDF.

The background should remain extremely light and slightly mint-toned.

Primary text:

Dark navy / near-black.

Primary CTA:

Kefaru teal.

Secondary surfaces:

White / very pale mint.

==================================================

18. TYPOGRAPHY

==================================================

The typography is one of the most important parts of the reference design.

Use a modern geometric/sans-serif font with:

- strong bold display headings

- clean medium body text

- tight heading line-height

- generous section spacing

Large headings should have the same bold visual impact as the PDF.

Example hierarchy:

Hero:

Very large, bold, tight line-height.

Section title:

Large bold.

Card title:

Medium/bold.

Body:

Readable, slightly muted.

Small eyebrow:

Uppercase

Letter spacing

Teal accent

Do not use serif fonts.

==================================================

19. REFERENCE UI DETAILS TO PRESERVE

==================================================

From the provided PDF, preserve these visual characteristics:

- Very light mint background.

- Dark bold heading typography.

- Teal accent.

- Rounded white content cards.

- Soft shadows.

- Fine borders.

- Small uppercase eyebrow labels.

- Large editorial-style headings.

- Connected-node visual language.

- Four-card system layout.

- Dark teal comparison panel.

- Premium form card.

- Strong CTA buttons.

- Kefaru rhino mascot.

- Generous whitespace.

- Clean B2B technology aesthetic.

The reference's visual structure includes:

hero → problem → connected systems → comparison → lead form → footer.

Adapt this structure into:

hero → services → why Kefaru → booking → confirmation/CTA.

==================================================

20. FOOTER

==================================================

Create a footer visually consistent with the PDF.

Dark teal background.

Include:

Kefaru Tech logo

Company information

Platform

How it connects

Why Kefaru

Book a meeting

Contact

Do not include Sign in anywhere.

Include:

© Kefaru Tech

Privacy Policy

Terms

==================================================

21. ACCESSIBILITY

==================================================

Implement:

- Semantic HTML.

- Proper labels.

- Keyboard navigation.

- Focus states.

- ARIA labels where necessary.

- Accessible calendar.

- Accessible modal/dialog behavior.

- Sufficient contrast.

- Reduced motion support.

- Form validation messages.

==================================================

22. FUNCTIONALITY

==================================================

This must feel like a real product, not a static mockup.

Implement:

- Service selection.

- Meeting type selection.

- Date selection.

- Time selection.

- Form validation.

- Booking summary.

- Step navigation.

- Back/next controls.

- Loading state.

- Success state.

- Error state.

- Responsive behavior.

For the initial frontend version, create a realistic mock scheduling data layer.

Structure the code so that a real backend/calendar integration can later be connected.

Create clear service functions such as:

getAvailableDates()

getAvailableTimes(date)

createBooking(data)

Do NOT hard-wire booking logic directly into UI components.

==================================================

23. FUTURE CALENDAR INTEGRATION READY

==================================================

Architect the application so it can later connect to:

- Google Calendar

- Microsoft Outlook Calendar

- Calendly-like availability

- Backend API

- Email confirmation service

Do not implement fake backend integrations pretending they are real.

Clearly isolate mock data from UI.

==================================================

24. COMPONENT ARCHITECTURE

==================================================

Use reusable components:

Navbar

Hero

ConnectedSystemsVisual

ServiceCard

ServicesSection

WhyKefaruSection

BookingWizard

BookingProgress

ServiceSelector

MeetingTypeSelector

Calendar

TimeSlotGrid

BookingSummary

ClientDetailsForm

ConfirmationScreen

Footer

Button

Input

Select

Textarea

Modal

Toast

Keep components modular.

Avoid one massive component.

==================================================

25. CODE QUALITY

==================================================

Use:

- React

- TypeScript

- Tailwind CSS

- Framer Motion / Motion

- Lucide icons

Follow clean component architecture.

Use strong TypeScript types.

Avoid:

- duplicated code

- unnecessary dependencies

- inline styling everywhere

- magic numbers

- inaccessible controls

Keep data separate from presentation.

==================================================

26. IMPORTANT VISUAL QUALITY RULE

==================================================

The final result should look like a premium agency/product website designed by a professional UI/UX team.

It should NOT look AI-generated.

Do not add:

- unnecessary gradients

- excessive glassmorphism

- random dashboard widgets

- generic statistics

- fake charts

- generic SaaS sidebar

- random illustrations

- emoji

- unnecessary badges

- excessive rounded pills

- purple gradient backgrounds

The design should remain close to the provided Kefaru Tech reference.

==================================================

27. FINAL ACCEPTANCE CRITERIA

==================================================

Before considering the implementation complete, verify:

✓ Same overall visual language as supplied PDF

✓ Same light mint background family

✓ Same dark typography family

✓ Same teal accent family

✓ Same premium card treatment

✓ Same general spacing philosophy

✓ Same connected-system visual language

✓ Kefaru mascot used appropriately

✓ Sign in completely removed

✓ Book a Meeting CTA added

✓ Fully functional booking flow

✓ Service selection

✓ Meeting type selection

✓ Calendar

✓ Time slots

✓ Client form

✓ Booking summary

✓ Confirmation page

✓ Responsive desktop/tablet/mobile

✓ Advanced but tasteful animations

✓ Reduced-motion support

✓ Accessible forms

✓ Keyboard navigation

✓ Modular React architecture

✓ Mock scheduling layer ready for backend integration

✓ No horizontal overflow

✓ No generic admin-dashboard styling

MOST IMPORTANT:

The supplied PDF is the visual source of truth.

The new functionality should feel like a natural evolution of that exact Kefaru Tech design system.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7ee89859-ef73-4434-947b-45db32b7f0e7).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
