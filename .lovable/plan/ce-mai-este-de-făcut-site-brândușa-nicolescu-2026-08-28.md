# Ce mai este de făcut — site Brândușa Nicolescu

Site-ul are structura principală funcțională: homepage, despre, desen fractal, terapie craniosacrală, galerie și contact. Design-ul editorial, animațiile de reveal, linia continuă și identitatea vizuală de bază sunt implementate.

## 1. Conținut real de la tine

Aceste elemente nu pot fi inventate și așteaptă materialul tău:

- **Imagini pentru toate placeholder-ele** — lucrări de desen fractal, picturi, detalii, proces, studio, portrete, imagini pentru terapie craniosacrală.
- **Textul celor 5 mărturii** — în `src/content/site.ts` există doar atribuirile (vârstă/profil), nu și citatele.
- **Biografia reală** de pe pagina `/despre`.
- **Descrierea terapiei craniosacrale** și detaliile practice (ce se întâmplă într-o ședință, durată, loc, programare, frecvență).
- **Textul suplimentar despre abordarea ta** pe pagina `/desen-fractal`.

## 2. Funcționalități încă lipsă din brief-ul inițial

- **Comutator RO / EN în header** — logica există (`useLang`), dar nu există buton în interfață. Paginile au conținut doar în română; pentru EN trebuie traduse textele din `src/content/site.ts`.
- **Pagină de Jurnal (`/journal`)** — menționată în brief, încă necreată.
- **Pagină detaliu lucrare (`/work/$slug` sau `/lucrare/$slug`)** — brief-ul prevedea o arhivă de lucrări cu pagină individuală pentru fiecare. Acum există doar `/galerie` cu lightbox. Trebuie decis dacă păstrăm galeria simplă sau adăugăm și paginile de detaliu.

## 3. Finisaje și calitate

- **Pagina 404 și ecranul de eroare** — în `src/routes/__root.tsx` folosesc încă stilul generic shadcn și text în engleză; trebuie adaptate la design-ul editorial românesc.
- **Meta `author`** — încă are placeholder `[NUME ARTIST]` în `__root.tsx`.
- **Verificare vizuală** pe desktop și mobil pentru toate rutele, inclusiv meniul hamburger.
- **Build și validare** — rulare `build` pentru a prinde eventuale erori de tip sau import.

## Propunere de ordine

1. Trimite-mi imaginile și textele reale (mărturii, bio, terapie) — le integrez în locurile rezervate.
2. Decidem împreună: păstrăm `/galerie` simplă sau adăugăm `/lucrare/$slug`? Adăugăm `/journal`?
3. Adaug comutatorul RO/EN și completez traducerile pentru conținutul static.
4. Refac 404/eroare și corectez meta author.
5. Verificare finală pe toate viewport-urile și publicare.
