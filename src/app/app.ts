import { Component, computed, signal } from '@angular/core';
import { ADVISORIES } from './advisories';
import { checkVersion } from './version-check';
@Component({selector:'app-root', templateUrl:'./app.html'})
export class App {
 readonly advisories=ADVISORIES;
 readonly query=signal(''); readonly category=signal('Todas');
 readonly categories=['Todas','Core','Sesiones','Windows','Streams'];
 readonly filtered=computed(()=>this.advisories.filter(a=>(this.category()==='Todas'||a.type===this.category()) && `${a.id} ${a.title} ${a.summary}`.toLocaleLowerCase('es').includes(this.query().toLocaleLowerCase('es'))));
 readonly version=signal(''); readonly result=computed(()=>checkVersion(this.version()));
 readonly checked=signal<number[]>([]);
 readonly tasks=['Inventariar PHP en servidores, contenedores, tareas y productos integrados.','Actualizar el runtime y sus paquetes desde el proveedor oficial.','Reiniciar los servicios o sustituir los contenedores para renovar todos los workers.','Comprobar el PHP servido por la web, además de la versión CLI.','Revisar el aviso de sesiones y, en Windows, la revisión del paquete Brotli.','Probar la aplicación y revisar registros; documentar la versión desplegada.'];
 toggle(i:number){this.checked.update(v=>v.includes(i)?v.filter(n=>n!==i):[...v,i]);}
}
