<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep visual content and artwork metadata in shared content modules so homepage previews and galleries stay synchronized as new client material arrives.
- Artwork visibility is data-driven: each artwork in `src/content/site.ts` has `published` (shown on the site) and `featured` (homepage, only if published); pages filter with `isPublished`/`isFeatured` and never delete hidden works, so they can be re-enabled by flipping a flag.
- Retired pages (desen-fractal, terapie-craniosacrala, explorari, blog) keep their route files for reuse but stay unlinked, carry a robots noindex meta, and are excluded from the GitHub Pages prerender list; the public structure is defined by `nav` in `src/content/site.ts`.
- Picturi and Expoziții use nested nav children in `nav`; series pages share `ArtworkSeriesPage`, exhibitions share `ExhibitionCategoryPage`; old /galerie and /proiecte-artistice redirect.
