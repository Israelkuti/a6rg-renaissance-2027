# African Renaissance 2027 – AU6RG event website

A responsive Next.js landing page for the African Renaissance 2027 event.

## Run locally

1. Install Node.js 20 or later.
2. In this folder run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. Run `npm run build` before deployment.

## Deploy to Vercel (recommended)

1. Create a GitHub repository, e.g. `a6rg-renaissance-2027`.
2. Upload/push the contents of this folder to the repository (the `package.json` must be at the repository root).
3. Sign in to Vercel with GitHub and choose **Add New → Project**.
4. Import the repository. Vercel should detect Next.js automatically. Keep the default build command `next build` and output settings.
5. Deploy. Vercel will provide a temporary `*.vercel.app` URL.
6. In Vercel → Project → Settings → Domains, add the approved event domain/subdomain and follow Vercel's DNS instructions at the domain registrar.

## Before public launch – replace the draft content

- Confirm the official event title and whether it should be “African Renaissance 2027”, “A6RG Renaissance 2027”, or another approved name.
- Add the confirmed event date(s), start/end times and timezone.
- Replace the programme placeholders with the approved agenda.
- Add approved speaker names, biographies and headshots.
- Confirm ticket categories, prices, registration workflow and payment provider. The current form is an email-based enquiry only; it does **not** store registrations or collect payment.
- Confirm that `events@au6rg.org` is the correct registration inbox.
- Replace the typographic mark with the official approved AU6RG/A6RG logo when supplied.
- Confirm permission to use venue photographs. Current venue photographs are loaded from Pearl Banquet Hall's public gallery and are labelled as venue imagery, not event photographs.
- Add the approved previous-event gallery and event-specific photography when supplied.

## Images and brand

The page uses the official organisation website for mission context and Pearl Banquet Hall's public gallery for venue imagery. A stylised text mark is used temporarily; it is not represented as the official AU6RG logo. The hero and statement background use remote Unsplash image URLs; replace with licensed event/organisation imagery for production if desired.

## Registration integration

The current form opens the visitor's default email application with their details addressed to `events@au6rg.org`. For a production registration process, connect a registration platform or API (for example, an approved ticketing provider or a secure backend) and add privacy/consent language before collecting personal data. Payment should only be enabled after the organiser confirms ticket prices, currency, refund terms and merchant account.
