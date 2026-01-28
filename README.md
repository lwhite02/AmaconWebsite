
```
iControlWebsite
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ master
│  │     └─ remotes
│  │        └─ origin
│  │           └─ master
│  ├─ 
│  ├─ ORIG_HEAD
│  └─ refs
│     ├─ heads
│     │  └─ master
│     ├─ remotes
│     │  └─ origin
│     │     └─ master
│     └─ tags
├─ .github
│  └─ workflows
│     └─ DeployToS3.yaml
├─ .gitignore
├─ .prettierrc
├─ app
│  ├─ about
│  │  └─ page.tsx
│  ├─ blog
│  │  └─ page.tsx
│  ├─ blog-details
│  │  └─ page.tsx
│  ├─ blog-sidebar
│  │  └─ page.tsx
│  ├─ contact
│  │  └─ page.tsx
│  ├─ error
│  │  └─ page.tsx
│  ├─ experience
│  │  ├─ general
│  │  │  └─ page.tsx
│  │  ├─ international
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ head.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ providers.tsx
│  ├─ services
│  │  ├─ assetmanagement
│  │  │  └─ page.tsx
│  │  ├─ construction
│  │  │  └─ page.tsx
│  │  ├─ drawing
│  │  │  └─ page.tsx
│  │  ├─ infrastructure
│  │  │  └─ page.tsx
│  │  ├─ powerAndEnergy
│  │  │  └─ page.tsx
│  │  └─ qualityandfactory
│  │     └─ page.tsx
│  ├─ signin
│  │  └─ page.tsx
│  └─ signup
│     └─ page.tsx
├─ components
│  ├─ About
│  │  ├─ AboutSectionOne.tsx
│  │  └─ AboutSectionTwo.tsx
│  ├─ Blog
│  │  ├─ blogData.tsx
│  │  ├─ index.tsx
│  │  ├─ RelatedPost.tsx
│  │  ├─ SharePost.tsx
│  │  ├─ SingleBlog.tsx
│  │  └─ TagButton.tsx
│  ├─ Brands
│  │  └─ index.tsx
│  ├─ Common
│  │  ├─ Breadcrumb.tsx
│  │  ├─ ScrollUp.tsx
│  │  └─ SectionTitle.tsx
│  ├─ Contact
│  │  ├─ index.tsx
│  │  └─ NewsLatterBox.tsx
│  ├─ Features
│  │  ├─ featuresData.tsx
│  │  ├─ index.tsx
│  │  └─ SingleFeature.tsx
│  ├─ Footer
│  │  └─ index.tsx
│  ├─ Header
│  │  ├─ index.tsx
│  │  ├─ menuData.tsx
│  │  └─ ThemeToggler.tsx
│  ├─ Hero
│  │  └─ index.tsx
│  ├─ markers
│  │  └─ mapWithMarkers.tsx
│  ├─ Pricing
│  │  ├─ index.tsx
│  │  ├─ OfferList.tsx
│  │  └─ PricingBox.tsx
│  ├─ ScrollToTop
│  │  └─ index.tsx
│  ├─ Testimonials
│  │  ├─ index.tsx
│  │  └─ SingleTestimonial.tsx
│  └─ Video
│     └─ index.tsx
├─ jsconfig.json
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pnpm-lock.yaml
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  ├─ images
│  │  ├─ 404.svg
│  │  ├─ about
│  │  │  ├─ about-image-2.svg
│  │  │  ├─ about-image.svg
│  │  │  ├─ about1.jpeg
│  │  │  ├─ aboutusimage.webp
│  │  │  ├─ aboutusimage2.webp
│  │  │  └─ powerAndEnergy.jpg
│  │  ├─ blog
│  │  │  ├─ author-01.png
│  │  │  ├─ author-02.png
│  │  │  ├─ author-03.png
│  │  │  ├─ blog-01.jpg
│  │  │  ├─ blog-02.jpg
│  │  │  ├─ blog-03.jpg
│  │  │  ├─ blog-details-01.jpg
│  │  │  ├─ blog-details-02.jpg
│  │  │  ├─ post-01.jpg
│  │  │  ├─ post-02.jpg
│  │  │  └─ post-03.jpg
│  │  ├─ brands
│  │  │  ├─ abblogo.png
│  │  │  ├─ ABB_logo.svg
│  │  │  ├─ angloamericanlogo.svg
│  │  │  ├─ anglologo.png
│  │  │  ├─ ecommerce-html.svg
│  │  │  ├─ graygrids.svg
│  │  │  ├─ lineicons.svg
│  │  │  ├─ tailadmin.svg
│  │  │  ├─ tailgrids.svg
│  │  │  ├─ tnblogo.png
│  │  │  └─ uideck.svg
│  │  ├─ favicon-96x96.png
│  │  ├─ favicon.ico
│  │  ├─ favicon.png
│  │  ├─ favicon2.ico
│  │  ├─ favicondfdf.ico
│  │  ├─ faviconvv.ico
│  │  ├─ hero
│  │  │  ├─ herobg.jpg
│  │  │  ├─ herobg.webp
│  │  │  ├─ herobg2.jpg
│  │  │  ├─ herobg3.jpeg
│  │  │  ├─ iControlCover.jpeg
│  │  │  ├─ iControlCover3.jpg
│  │  │  ├─ shape-01.svg
│  │  │  └─ shape-02.svg
│  │  ├─ logo
│  │  │  ├─ iControlLogo.png
│  │  │  ├─ logo-2.svg
│  │  │  └─ logo.svg
│  │  ├─ offers
│  │  │  └─ whatweoffer.webp
│  │  ├─ services
│  │  │  ├─ abouthero.jpg
│  │  │  ├─ contactushero.webp
│  │  │  ├─ serviceAsset.webp
│  │  │  ├─ serviceAsset2.webp
│  │  │  ├─ serviceAsset3.webp
│  │  │  ├─ serviceConstruction.webp
│  │  │  ├─ serviceConstruction2.webp
│  │  │  ├─ serviceConstruction3.webp
│  │  │  ├─ serviceDrawing.webp
│  │  │  ├─ serviceDrawing2.webp
│  │  │  ├─ serviceEnergy.webp
│  │  │  ├─ serviceFactory.webp
│  │  │  ├─ serviceFactory2.webp
│  │  │  ├─ serviceFactory3.webp
│  │  │  ├─ serviceInfrastructure.webp
│  │  │  ├─ serviceInfrastructure2.webp
│  │  │  ├─ serviceInfrastructure3.webp
│  │  │  └─ serviceInfrastructure4.webp
│  │  ├─ testimonials
│  │  │  ├─ auth-01.png
│  │  │  ├─ auth-02.png
│  │  │  ├─ auth-03.png
│  │  │  ├─ author-01.png
│  │  │  ├─ author-02.png
│  │  │  └─ author-03.png
│  │  └─ video
│  │     ├─ shape.svg
│  │     └─ video.jpg
│  ├─ next.svg
│  ├─ thirteen.svg
│  └─ vercel.svg
├─ styles
│  └─ index.css
├─ tailwind.config.js
├─ tsconfig.json
├─ types
│  ├─ blog.ts
│  ├─ brand.ts
│  ├─ feature.ts
│  ├─ menu.ts
│  └─ testimonial.ts
├─ yarn.lock
└─ _static
   ├─ 404.html
   ├─ favicon.ico
   ├─ images
   │  ├─ 404.svg
   │  ├─ about
   │  │  ├─ about-image-2.svg
   │  │  ├─ about-image.svg
   │  │  ├─ about1.jpeg
   │  │  ├─ aboutusimage.webp
   │  │  ├─ aboutusimage2.webp
   │  │  └─ powerAndEnergy.jpg
   │  ├─ blog
   │  │  ├─ author-01.png
   │  │  ├─ author-02.png
   │  │  ├─ author-03.png
   │  │  ├─ blog-01.jpg
   │  │  ├─ blog-02.jpg
   │  │  ├─ blog-03.jpg
   │  │  ├─ blog-details-01.jpg
   │  │  ├─ blog-details-02.jpg
   │  │  ├─ post-01.jpg
   │  │  ├─ post-02.jpg
   │  │  └─ post-03.jpg
   │  ├─ brands
   │  │  ├─ abblogo.png
   │  │  ├─ ABB_logo.svg
   │  │  ├─ angloamericanlogo.svg
   │  │  ├─ anglologo.png
   │  │  ├─ ecommerce-html.svg
   │  │  ├─ graygrids.svg
   │  │  ├─ lineicons.svg
   │  │  ├─ tailadmin.svg
   │  │  ├─ tailgrids.svg
   │  │  ├─ tnblogo.png
   │  │  └─ uideck.svg
   │  ├─ favicon-96x96.png
   │  ├─ favicon.ico
   │  ├─ favicon.png
   │  ├─ favicon2.ico
   │  ├─ favicondfdf.ico
   │  ├─ faviconvv.ico
   │  ├─ hero
   │  │  ├─ herobg.jpg
   │  │  ├─ herobg.webp
   │  │  ├─ herobg2.jpg
   │  │  ├─ herobg3.jpeg
   │  │  ├─ iControlCover.jpeg
   │  │  ├─ iControlCover3.jpg
   │  │  ├─ shape-01.svg
   │  │  └─ shape-02.svg
   │  ├─ logo
   │  │  ├─ iControlLogo.png
   │  │  ├─ logo-2.svg
   │  │  └─ logo.svg
   │  ├─ offers
   │  │  └─ whatweoffer.webp
   │  ├─ services
   │  │  ├─ abouthero.jpg
   │  │  ├─ contactushero.webp
   │  │  ├─ serviceAsset.webp
   │  │  ├─ serviceAsset2.webp
   │  │  ├─ serviceAsset3.webp
   │  │  ├─ serviceConstruction.webp
   │  │  ├─ serviceConstruction2.webp
   │  │  ├─ serviceConstruction3.webp
   │  │  ├─ serviceDrawing.webp
   │  │  ├─ serviceDrawing2.webp
   │  │  ├─ serviceEnergy.webp
   │  │  ├─ serviceFactory.webp
   │  │  ├─ serviceFactory2.webp
   │  │  ├─ serviceFactory3.webp
   │  │  ├─ serviceInfrastructure.webp
   │  │  ├─ serviceInfrastructure2.webp
   │  │  ├─ serviceInfrastructure3.webp
   │  │  └─ serviceInfrastructure4.webp
   │  ├─ testimonials
   │  │  ├─ auth-01.png
   │  │  ├─ auth-02.png
   │  │  ├─ auth-03.png
   │  │  ├─ author-01.png
   │  │  ├─ author-02.png
   │  │  └─ author-03.png
   │  └─ video
   │     ├─ shape.svg
   │     └─ video.jpg
   ├─ next.svg
   ├─ thirteen.svg
   ├─ vercel.svg
   └─ _next
      ├─ 3OSWgYXBXcpW7VTWgEMO3
      └─ static
         ├─ 3OSWgYXBXcpW7VTWgEMO3
         │  ├─ _buildManifest.js
         │  └─ _ssgManifest.js
         ├─ chunks
         │  ├─ 17-4e8fdc7dead168ed.js
         │  ├─ 237.f8f859df3423bdad.js
         │  ├─ 30-23e9d8dc43492eb0.js
         │  ├─ 90-d35c7c5fc769884b.js
         │  ├─ app
         │  │  ├─ about
         │  │  │  └─ page-0b082495269c0bcf.js
         │  │  ├─ blog
         │  │  │  └─ page-84dcd9cd24594ca7.js
         │  │  ├─ blog-details
         │  │  │  └─ page-d14dea95e9dac908.js
         │  │  ├─ blog-sidebar
         │  │  │  └─ page-1ca4d09c0d7a99a3.js
         │  │  ├─ contact
         │  │  │  └─ page-60923284fb1973a0.js
         │  │  ├─ error
         │  │  │  └─ page-561b4489a06e4c4c.js
         │  │  ├─ experience
         │  │  │  ├─ general
         │  │  │  │  └─ page-955ea71fa5145416.js
         │  │  │  ├─ international
         │  │  │  │  └─ page-48dae4a195640cd4.js
         │  │  │  └─ page-d2ba519022f58f7a.js
         │  │  ├─ head-fbf0b755a1944d43.js
         │  │  ├─ layout-4f3224c4a826ed6f.js
         │  │  ├─ page-dc1013fc9815614a.js
         │  │  ├─ services
         │  │  │  ├─ assetmanagement
         │  │  │  │  └─ page-47dc5616e88df3d4.js
         │  │  │  ├─ construction
         │  │  │  │  └─ page-6372c565750d5f2b.js
         │  │  │  ├─ drawing
         │  │  │  │  └─ page-3c169f20025f42fd.js
         │  │  │  ├─ infrastructure
         │  │  │  │  └─ page-c71a5b10d08cfd01.js
         │  │  │  ├─ powerAndEnergy
         │  │  │  │  └─ page-298f1bee418b5e25.js
         │  │  │  └─ qualityandfactory
         │  │  │     └─ page-6ec3f0bbdee63a3b.js
         │  │  ├─ signin
         │  │  │  └─ page-11b62675b0befb4c.js
         │  │  └─ signup
         │  │     └─ page-bdfcc904b6344610.js
         │  ├─ main-app-286e0a67bdd09e7d.js
         │  ├─ main-e9ff11a58bf7a0ec.js
         │  ├─ pages
         │  │  ├─ _app-5841ab2cb3aa228d.js
         │  │  └─ _error-91a854d9c9cfa29b.js
         │  ├─ polyfills-c67a75d1b6f99dc8.js
         │  └─ webpack-7c45e5dbe581679d.js
         ├─ css
         │  ├─ 608d72148fe8be57.css
         │  └─ 9e4e7bc950932811.css
         └─ media
            ├─ 05a31a2ca4975f99.woff2
            ├─ 513657b02c5c193f.woff2
            ├─ 51ed15f9841b9f9d.woff2
            ├─ c9a5bc6a7c948fb0.p.woff2
            ├─ d6b16ce4a6175f26.woff2
            ├─ ec159349637c90ad.woff2
            └─ fd4db3eb5472fc27.woff2

```