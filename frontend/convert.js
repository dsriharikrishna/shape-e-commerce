
function srgb_to_oklch(r, g, b) {
    r = r/255.0; g = g/255.0; b = b/255.0;
    const f = (c) => c <= 0.04045 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4);
    r = f(r); g = f(g); b = f(b);
    let l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b;
    let m = 0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b;
    let s = 0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b;
    const cbrt = (x) => Math.cbrt(x);
    l = cbrt(l); m = cbrt(m); s = cbrt(s);
    const L = 0.2104542553*l + 0.7936177850*m - 0.0040720468*s;
    const M = 1.9779984951*l - 2.4285922050*m + 0.4505937099*s;
    const S = 0.0259040371*l + 0.7827717662*m - 0.8086757660*s;
    const C = Math.sqrt(M*M + S*S);
    let h = Math.atan2(S, M) * 180 / Math.PI;
    if (h < 0) h += 360;
    return `oklch(${L} ${C} ${h})`;
}

console.log('Navy:', srgb_to_oklch(16, 46, 80));
console.log('Orange:', srgb_to_oklch(231, 139, 72));
console.log('Red:', srgb_to_oklch(190, 61, 42));
console.log('Gold:', srgb_to_oklch(245, 196, 94));
console.log('LightNavy:', srgb_to_oklch(231, 234, 237));


