import {test} from 'node:test';
import assert from 'node:assert/strict';
import {resolveLanguage,whatsappUrl,localized,sectionVisible} from '../src/language.mjs';
test('manual, browser, enabled languages and default',()=>{
 assert.equal(resolveLanguage('es',['pt-BR'],['pt','es'],'pt'),'es');
 assert.equal(resolveLanguage('es',['fr'],['pt'],'pt'),'pt');
 assert.equal(resolveLanguage(null,['en','pt-BR'],['es','pt'],'es'),'pt');
 assert.equal(resolveLanguage(null,['fr'],['pt','es'],'pt'),'pt');
});
test('missing translation falls back to default then any available text',()=>{
 assert.equal(localized({pt:'Texto'},'es','pt'),'Texto');
 assert.equal(localized({es:'Texto'},'pt','pt'),'Texto');
 assert.equal(localized({},'es','pt'),'');
});
test('no fictional contact, configured number and localized message',()=>{
 assert.equal(whatsappUrl('','Olá'),null);
 assert.equal(whatsappUrl('123','Olá'),null);
 const url=new URL(whatsappUrl('+55 (11) 98765-4321','Olá, avaliação?'));
 assert.equal(url.pathname,'/5511987654321');assert.equal(url.searchParams.get('text'),'Olá, avaliação?');
});
test('disabled and empty sections have no rendered target',()=>{
 assert.equal(sectionVisible(false,[1]),false);assert.equal(sectionVisible(true,[]),false);
 assert.equal(sectionVisible(true,[1]),true);
});
