# climate_paraguay — ClimaTec PY

Sitio estático con las clasificaciones climáticas del Paraguay (Köppen-Geiger, Thornthwaite y zonas de vida de
Holdridge), calculadas píxel a píxel (~1 km) a partir de las normales 1991–2020 de CHELSA V2.1.
Idiomas: español (predeterminado), português y english (`?lang=es|pt|en`).

Inspirado en [ClimaTec Data — climas_brasil](https://fcoliveira-utfpr.github.io/climas_brasil/).

## Estructura

| Ruta | Contenido |
|---|---|
| `index.html` | Inicio, pestañas *Mapas* (iframes) y *Atlas* |
| `mapa.html?sistema=koppen\|thornthwaite\|holdridge` | Mapa interactivo: clasificación por píxel + distritos, climograma y CSV por distrito |
| `assets/i18n.js` | Textos de la interfaz en es/pt/en |
| `assets/comum.js` | Menú y utilidades |
| `dados/` | Datos generados por `codigo/gerar_site.py` (no editar a mano) |
| `atlas/{es,pt,en}/` + `atlas/atlas.json` | Figuras del Atlas, generadas por `codigo/gerar_atlas.py` |

## Regenerar los datos

```bash
cd codigo
../.venv/bin/python gerar_site.py
../.venv/bin/python gerar_atlas.py
```

## Probar localmente

```bash
cd climatec_py && python3 -m http.server 8000   # http://localhost:8000
```
(Las páginas usan `fetch`, por lo que no funcionan abriendo el archivo directamente con `file://`.)
