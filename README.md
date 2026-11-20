# Jacob Folmer Damsgård — portfolio

Dansksproget, statisk portfolio bygget med HTML, CSS og JavaScript. Siderne er opdelt som i referenceportfolioen: About, CV, Experience og Education. Der kræves ingen build eller pakkeinstallation.

## Tilpas About-teksten

Redigér `about-content.js` for at ændre introduktion, kontaktoplysninger, kompetencer eller sprog. Layout og tekst er adskilt, så almindelige tekstændringer ikke kræver, at du redigerer `index.html` eller `styles.css`.

## Lokal visning

Åbn `index.html` i en browser. Ved browserbegrænsninger kan mappen serveres lokalt, eksempelvis via VS Code Live Server. Undersiderne ligger i `cv/`, `experience/` og `education/`.

## Gem CV som PDF

Åbn CV-fanen og vælg **Gem som PDF**. I browserens udskriftsvindue vælger du **Gem som PDF** som printer/destination.

## GitHub Pages

1. Opret et GitHub-repository til hjemmesiden, og læg hele portfolio-mappen i repositoryets rod. Behold undermapperne `cv/`, `experience/` og `education/` samt billedet `cv billede.png`.
2. Åbn repositoryets **Settings → Pages**.
3. Vælg **Deploy from a branch**, vælg `main` og mappen `/(root)`, og gem.
4. GitHub viser sidens offentlige adresse under Pages-indstillingerne.

Kontaktoplysningerne på siden er beregnet til offentlig visning. About-tekst og kompetencelister redigeres i `about-content.js`.
