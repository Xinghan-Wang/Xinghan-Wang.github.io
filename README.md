# Xinghan Wang · Academic homepage

A single-page English academic homepage built with Astro, TypeScript and Tailwind CSS. The production page uses static HTML and CSS, system fonts and local artwork. It follows the visitor’s color scheme and reduced-motion preference.

## Open the homepage

Double-click `dist/index.html` in the delivered project for an immediate offline preview. For editing or testing new root-relative photo and PDF links, use the development server.

## Local development

Install Node.js 24.12 or newer in the 24.x line. From this directory:

```sh
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

Open the local URL printed in the terminal. Run `pnpm build` to regenerate `dist/`, then `pnpm preview` to serve that production build.

## Edit content

| Location | Purpose |
| --- | --- |
| `src/data/profile.ts` | Name, role, affiliation, biography, interests, contacts, projects, publications and last content update |
| `public/` | Profile photo, project thumbnails, CV and other downloadable files |
| `src/components/` | Reusable project and publication markup |
| `src/pages/index.astro` | Homepage layout and metadata |
| `src/styles/site.css` | Typography, responsive layout, light and dark colors |
| `.github/workflows/deploy.yml` | Build and deployment on pushes to main |

**Photo and CV.** Place files such as `portrait.jpg` and `cv.pdf` in `public/`. In the profile configuration, set `photo` to `portrait.jpg` and `cv` to `cv.pdf`. Use relative file names to keep double-click previews working. A blank photo shows your initials. A blank CV hides its link.

**Projects.** Copy an item in `projects`, then edit its title and description. Supply real URLs for `repository`, `paper` and `page` as they become available. Add verified implementation notes in `details`. Replace the illustrative mesh thumbnail with a project image and descriptive alt text, or omit `thumbnail` to use a text-only listing.

**Publications.** Add an object with `title`, `authors`, `venue`, `year` and optional `url` to `publications`. The component displays the section when this list contains an entry.

**Date.** Set `updated` to the date of the most recent content change. The copyright year updates on build.

## Deploy with GitHub Pages

1. Sign in as **Xinghan-Wang** and create an empty **public** repository named **Xinghan-Wang.github.io**. A public repository can use GitHub Pages on the free plan.
2. Under **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. From this project directory, run the following for the new, empty repository. Git will prompt for authentication if needed.

   ```sh
   git init -b main
   git add .
   git commit -m "Add academic homepage"
   git remote add origin https://github.com/Xinghan-Wang/Xinghan-Wang.github.io.git
   git push -u origin main
   ```

4. Open the **Actions** tab and select **Deploy academic homepage**. Once both jobs complete, open the published URL shown by the deploy job. The expected address is **https://xinghan-wang.github.io/**.
5. To update the site, commit and push new changes to `main`. The workflow installs the locked dependencies, builds the site and uploads only `dist/`. The repository keeps the source. For manual redeployment, choose **Run workflow** in Actions.

The user site uses the domain root. The workflow obtains the production origin from GitHub Pages and passes it to Astro for the canonical URL. [Astro deployment guide](https://docs.astro.build/en/guides/deploy/github/)

## Add a custom domain later

1. Verify ownership of the domain under your GitHub account’s **Settings → Pages**.
2. Enter the hostname under the repository’s **Settings → Pages → Custom domain** and save.
3. For a subdomain, add a DNS CNAME record pointing to `xinghan-wang.github.io`. For an apex domain, use the ALIAS, ANAME or address records documented in [GitHub’s custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
4. After DNS verification and certificate issuance, select **Enforce HTTPS**. Rerun the deployment workflow to rebuild the canonical URL using the new origin. A custom Actions deployment uses the Pages setting directly.

