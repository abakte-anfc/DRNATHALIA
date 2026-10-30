import {test,expect} from '@playwright/test';
test('identidade, contatos exatos e agendamento por unidade',async({page})=>{
 await page.goto('/');await expect(page.locator('h1')).toHaveText('Cuidado com a saúde das suas mamas, da prevenção à reconstrução.');
 await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');await expect(page.locator('.languages')).toHaveCount(0);
 expect(await page.locator('#locais .unit-card a').evaluateAll(nodes=>nodes.map(n=>n.getAttribute('href')))).toEqual(['https://wa.me/557133528800','https://wa.me/557132035951','https://wa.me/557199861020']);
 for(const link of await page.getByRole('link',{name:'Agendar consulta',exact:true}).all())await expect(link).toHaveAttribute('href','#locais');
 await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content','noindex,nofollow');await expect(page.locator('video,form,.quote,.gallery-card')).toHaveCount(0);
 expect(await page.locator('a[href^="#"]').evaluateAll(nodes=>nodes.every(n=>document.getElementById(n.getAttribute('href')!.slice(1))))).toBe(true);
});
for(const width of [360,390,768,1440])test(`layout e acessibilidade básica ${width}`,async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewportSize({width,height:900});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.locator('summary').first().click();await expect(page.locator('details').first()).toHaveAttribute('open','');
 if(width<1000){await page.getByRole('button',{name:'Abrir menu'}).click();await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded','true');await page.keyboard.press('Escape');await expect(page.locator('.menu-toggle')).toBeFocused();await expect(page.locator('.menu-toggle')).toHaveAttribute('aria-expanded','false');}
 expect(errors).toEqual([]);await page.evaluate(()=>{(document.activeElement as HTMLElement)?.blur();window.scrollTo({top:0,behavior:'instant'})});await page.screenshot({path:`.qa/page-${width}.png`,fullPage:true});
});
test('conteúdo visível sem IntersectionObserver ou armazenamento',async({page})=>{await page.addInitScript(()=>{delete (window as any).IntersectionObserver;Object.defineProperty(window,'localStorage',{get(){throw Error('blocked')}})});await page.goto('/');await expect(page.locator('h1')).toBeVisible();await expect(page.locator('#sobre')).toBeVisible();});

test('entrada separada do hover e movimento reduzido sem animações',async({page})=>{
 await page.emulateMedia({reducedMotion:'no-preference'});await page.goto('/');const frames=await page.locator('.care-card').first().evaluate(el=>new Promise<ComputedKeyframe[]>(resolve=>{el.scrollIntoView({behavior:'instant'});let attempts=0;const sample=()=>{const frames=el.getAnimations().flatMap(a=>(a.effect as KeyframeEffect).getKeyframes());if(frames.length||attempts++>60)resolve(frames);else requestAnimationFrame(sample)};requestAnimationFrame(sample)}));
 expect(frames.some(frame=>'translate' in frame)).toBe(true);expect(frames.some(frame=>'transform' in frame)).toBe(false);
 await page.emulateMedia({reducedMotion:'reduce'});await page.reload();expect(await page.locator('.portrait-caption').evaluate(el=>getComputedStyle(el).animationName)).toBe('none');
});
