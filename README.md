# PHP2SHELL

Web divulgativa en español sobre seguridad reciente de PHP. Angular + TypeScript, exclusivamente frontend, preparada para GitHub Pages. Corte editorial: **1 de noviembre de 2026**.

## Ejecutar en Windows, Linux o macOS

Instala Node.js 24 LTS (24.15 o superior dentro de la rama 24) y abre esta carpeta en VS Code:

```bash
npm ci
npm start
```

Abre la dirección que indique Angular CLI. Para comprobar y compilar:

```bash
npm test
npm run build
```

Los archivos estáticos se generan en `dist/php2shell/browser/`. No abras index.html mediante file://: necesita un servidor HTTP estático. No requiere PHP, MySQL ni backend.

## Publicar en GitHub Pages

1. Crea un repositorio y sube el **contenido de esta carpeta**, incluyendo `.github`, `package.json` y `package-lock.json`, a la raíz del repositorio. No subas node_modules ni dist.
2. Usa la rama `main`, o modifica el filtro del workflow si tu rama tiene otro nombre.
3. En GitHub abre **Settings → Pages → Build and deployment → Source → GitHub Actions**.
4. Haz un push a main o ejecuta manualmente el workflow **Deploy Angular to GitHub Pages** desde Actions.
5. Espera a que build y deploy terminen; el job de despliegue mostrará la URL.

El workflow obtiene `base_path` de configure-pages y lo pasa a `--base-href`, por lo que sirve tanto para repositorios de proyecto como para sitios en la raíz. No hay rutas SPA: la navegación utiliza anclas (#archivo, #versiones…), evitando problemas de 404 por refrescar rutas profundas. Para un dominio personalizado, configura primero ese dominio en Pages y vuelve a ejecutar el workflow.

Alternativa de build manual para un repositorio llamado php2shell:

```bash
npm run build -- --base-href /php2shell/
```

**Este proyecto se entrega preparado; no se ha publicado en tu cuenta de GitHub.**

## Qué incluye

- Diseño brutalista minimalista con lila, verde lima, negro y blanco cálido.
- Rejillas de tres, dos y una columna; adaptación a pantallas estrechas.
- Cronología del descubrimiento y explicación del incidente.
- Seis fichas editoriales con búsqueda, filtros y fuentes primarias.
- Procedimiento de comprobación para Twinteach (Angular + Laravel).
- Matriz de evidencias y límites de la detección de compromiso.
- Comparador local de versiones, con límites explícitos y tratamiento de versiones desconocidas.
- Checklist interactivo; el progreso se reinicia al recargar.
- Detalles nativos HTML, navegación por teclado, foco visible, enlace para saltar al contenido y preferencia de movimiento reducido.
- Sin fuentes remotas, cookies, analítica, API ni almacenamiento de datos del visitante.

## Archivos que editarás

| Archivo | Responsabilidad |
| --- | --- |
| src/app/advisories.ts | Datos y fuentes de los seis avisos |
| src/app/app.ts | Estado, filtros y checklist mediante signals |
| src/app/app.html | Estructura y contenido de la página |
| src/app/version-check.ts | Reglas editoriales del comparador |
| src/styles.css | Colores, composición y responsive |
| .github/workflows/pages.yml | Compilación y publicación en Pages |
| INVESTIGACION.md | Fuentes consultadas, criterios y mantenimiento |

La web no se actualiza sola. Al revisar avisos nuevos, modifica datos, comparador, matriz de versiones y fecha editorial de forma conjunta. No cambies solo la fecha.

## Verificación

Compilación de producción y pruebas de límites de las cuatro ramas, versiones antiguas, futuras y formatos no interpretables. Comprobación en navegador de renderizado de escritorio, filtros, búsqueda, comparador y avance de checklist. La vista móvil se implementa con media queries; no se ha realizado una prueba visual con un dispositivo móvil real ni una auditoría completa de accesibilidad. GitHub Actions no se ha ejecutado en un repositorio del usuario.

## Referencias de despliegue

- Angular: https://angular.dev/tools/cli/deployment
- Compatibilidad: https://angular.dev/reference/versions
- GitHub Pages: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## Requisitos de la tarea

Consulta `ENTREGA.md` para la correspondencia entre el enunciado y las secciones, y para actualizar un repositorio ya publicado.
