import { test } from 'node:test';
import assert from 'node:assert/strict';
import { checkVersion } from '../src/app/version-check.ts';
test('límites de las cuatro ramas verificadas',()=>{
 for(const [minor,patch] of [[2,35],[3,36],[4,27],[5,12]]){
  assert.equal(checkVersion(`8.${minor}.${patch-1}`).kind,'warning');
  assert.equal(checkVersion(`8.${minor}.${patch}`).kind,'patched');
  assert.equal(checkVersion(`8.${minor}.${patch}-1`).kind,'patched');
 }
});
test('no certifica versiones desconocidas ni sufijos de proveedor',()=>{
 for(const v of ['8.6.0','9.0.0','8.5.12ubuntu1','','8.5','abc']) assert.equal(checkVersion(v).kind,'neutral');
 assert.equal(checkVersion('8.1.34').kind,'warning');
 assert.match(checkVersion('8.5.12').text,/no certifica seguridad/);
});
