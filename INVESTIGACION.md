# Investigación y decisiones editoriales — PHP2SHELL

Fecha de consulta: **1 de noviembre de 2026**. Alcance: vulnerabilidades del runtime PHP y dependencias relevantes publicadas en septiembre y octubre de 2026. Selección divulgativa; no es un inventario exhaustivo de todas las CVE de PHP.

## Resultado y alcance

La investigación identifica dos avisos críticos del núcleo publicados el 21 de octubre, una comunicación posterior sobre sesiones y una reconstrucción de paquetes Windows por Brotli. Se añaden dos avisos de septiembre para explicar que el impacto no siempre consiste en ejecución de código: también puede haber filtración de credenciales o denegación de servicio.

Las seis fichas, sus condiciones, medidas y enlaces originales se encuentran en `src/app/advisories.ts`. Se mantienen en un único lugar para poder reutilizarlas y evitar divergencias entre el contenido y los filtros.

## Registro de fuentes consultadas

| Fuente primaria | Qué se contrastó | Uso editorial |
| --- | --- | --- |
| [PHP, archivo 2026](https://www.php.net/archive/2026.php) | Publicaciones del 20, 21, 23 y 26 de octubre; paquetes y recomendaciones | Cronología y seguimiento |
| [PHP, changelog](https://www.php.net/ChangeLog-8.php) | Referencias de correcciones por rama | Contraste de versiones |
| [PHP, versiones soportadas](https://www.php.net/supported-versions.php) | Diferencia entre soporte activo, seguridad y fin de vida | Tratamiento de ramas antiguas |
| [PHP-src, OOM](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w) | Impacto, SAPI, parches y CVSS | Ficha CVE-2026-109618 |
| [PHP-src, estado global](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp) | Reutilización de workers, sesiones y configuración | Ficha CVE-2026-109619 |
| [PHP-src, streams](https://github.com/php/php-src/security/advisories/GHSA-fpwc-w8rq-cr92) | Credenciales en redirecciones y CVSS | Ficha CVE-2026-91766 |
| [PHP-src, rutas Windows](https://github.com/php/php-src/security/advisories/GHSA-9f67-6fw4-hpfp) | Nombres de dispositivo y denegación de servicio | Ficha CVE-2026-17545 |
| [CERT-EU 2026-018](https://cert.europa.eu/publications/security-advisories/2026-018/) | Recomendaciones operativas y actualización del 23 de octubre | Contraste independiente |
| [NCSC, aviso PHP](https://www.ncsc.gov.uk/news/critical-security-issue-affecting-php) | Inventario de activos, proveedores y respuesta | Plan de actuación |
| [Angular, despliegue](https://angular.dev/tools/cli/deployment) | Build estático y base href | Compatibilidad con Pages |
| [Angular, versiones](https://angular.dev/reference/versions) | Node y TypeScript compatibles | Entorno de desarrollo |
| [GitHub, workflows Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) | Configuración, artefacto y permisos | CI/CD |

Se realizaron búsquedas generales y dirigidas por CVE, y se abrieron los avisos originales para contrastar las condiciones. Los resultados de buscadores se utilizaron para descubrir fuentes; el contenido de las fichas se fundamenta en los documentos oficiales abiertos. No se incorporaron afirmaciones técnicas basadas exclusivamente en titulares de prensa.

## Qué se distingue y por qué

**Aviso, changelog y paquete no son lo mismo.** Se conserva la fecha de publicación de cada aviso. El changelog puede usar una fecha distinta: no se fuerza a que ambos coincidan. La revisión -1 de Windows debe comprobarse en el paquete; no se deduce únicamente de `php -v`.

**Severidad y explotabilidad son conceptos distintos.** No se presenta una puntuación como probabilidad de ataque. Se indica la versión de CVSS cuando existe y se evita inventar una para los avisos informativos. La ficha de OOM conserva la diferencia entre explotación demostrada en mod_php y susceptibilidad de FPM descrita por el investigador. La otra ficha recoge que determinadas rutas de sesiones sí tienen validación con FPM.

**Actualizar una aplicación no actualiza su runtime.** El plan invita a inventariar servicios, contenedores y productos que incorporan PHP. En línea con NCSC, se priorizan sistemas expuestos y se mantienen las actualizaciones de proveedores bajo seguimiento. Si existen indicios de compromiso, instalar un parche no basta para concluir que el entorno está limpio.

**Una versión upstream no resuelve la evaluación de un paquete de distribución.** Algunos proveedores aplican backports. El comparador devuelve un resultado limitado a dos CVE y nunca una etiqueta de “servidor seguro”. Las ramas desconocidas reciben una respuesta no concluyente.

**Mitigación y parche no son equivalentes.** CERT-EU recomienda actualizar y contempla aislar recursos expuestos cuando no sea posible corregirlos. En la web no se ofrece un botón que aplique cambios de configuración: las decisiones operativas necesitan contexto. Las fichas enlazan la documentación completa.

## Arquitectura editorial y frontend

El visitante recorre cinco preguntas: qué ha ocurrido, qué condiciones lo hacen relevante, qué versión revisar, cómo organizar una respuesta y dónde comprobar la fuente original. La búsqueda por identificador y los filtros por componente facilitan consultar un aviso concreto.

El morado identifica el tema y las zonas de contexto; el verde resalta interacción y trabajo pendiente. No se utiliza verde en el comparador como certificado de seguridad. Bordes, etiquetas y textos aportan significado adicional al color. Se usan controles nativos cuando ayudan al teclado y al lector de pantalla.

Angular se ejecuta en el navegador. Las búsquedas y comparaciones no hacen solicitudes a servidores externos. GitHub Pages solo sirve archivos estáticos; la investigación sobre PHP no requiere ejecutar PHP en el hosting. No se muestran formularios que prometan analizar una URL real.

## Procedimiento de actualización del contenido

1. Revisar PHP.net y los avisos de PHP-src. Consultar los avisos del proveedor del paquete cuando corresponda.
2. Registrar qué documento se ha revisado y su fecha. No confundir la última fecha de consulta con la fecha de descubrimiento.
3. Actualizar la ficha: identificador, impacto, condiciones, solución, puntuación con versión y fuente.
4. Revisar las reglas del comparador y los casos límite de las pruebas si cambia la matriz de correcciones.
5. Comprobar texto, enlaces, filtros, pantalla estrecha, teclado y build antes del siguiente despliegue.
6. Cambiar la fecha editorial solo al terminar la revisión. Conservar un historial en Git.

## Límites pendientes

La selección no cubre todas las vulnerabilidades históricas ni certifica un producto de terceros. Las fechas y recomendaciones pueden quedar desactualizadas tras el corte editorial. Queda pendiente la publicación en el repositorio real del usuario, la ejecución allí de GitHub Actions y una prueba visual móvil. No se ha efectuado una auditoría de accesibilidad ni una evaluación de seguridad de infraestructuras reales.
