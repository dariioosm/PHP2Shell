export function checkVersion(input: string): {kind: string; text: string} {
 const match = /^(\d+)\.(\d+)\.(\d+)(?:-(\d+))?$/.exec(input.trim());
 if (!match) return {kind:'neutral', text:'Introduce una versión completa, por ejemplo 8.4.27 o 8.5.12-1. No se interpretan sufijos de distribución.'};
 const major=Number(match[1]), minor=Number(match[2]), patch=Number(match[3]);
 if (major<8 || (major===8 && minor<2)) return {kind:'warning',text:'Rama fuera del soporte upstream. Migra a una rama soportada o verifica los backports con tu proveedor.'};
 if (major!==8 || minor>5) return {kind:'neutral',text:'Versión fuera del conjunto verificado (PHP 8.2–8.5). Consulta el aviso de tu rama; no inferimos su seguridad.'};
 const fixed: Record<number,number>={2:35,3:36,4:27,5:12};
 return patch<fixed[minor] ? {kind:'warning',text:`Anterior a 8.${minor}.${fixed[minor]}: revisa CVE-2026-109618 y CVE-2026-109619. Si usas paquetes con backports, consulta el aviso del proveedor.`} : {kind:'patched',text:'Alcanza el mínimo upstream para las dos CVE críticas del 21 de octubre. Esto no certifica seguridad: revisa sesiones, el paquete Windows/Brotli y avisos posteriores.'};
}
