const eef = prompt('Eef');
let resistencia = prompt('Valor R');
const desfase = prompt('valor F');

let resultadoI = prompt('¿Necesitas saber I?');
if (resultadoI == "no") {
    alert('oka')
    var intensidad = 0;
}else{
    intensidad = (eef / resistencia);
}
document.write(' i =' , intensidad);

let resultadoXL = prompt('¿querés saber XL?');
if (resultadoXL == 'no') {
    alert('okey');
    var reactanciaInductiva = 0;
}else {
    var capacitor = prompt('cuánto vale el capacitor?');
    reactanciaInductiva = (2 * Math.PI * desfase * capacitor);
}
document.write(' XL =', reactanciaInductiva);

let resultadoZ = prompt('¿Querés saber Z en RL?');
if (resultadoZ == 'no') {
    alert('okey');
    var zRL = 0;
}else {
    zRL = Math.sqrt(resistencia**2 + reactanciaInductiva**2);
}
document.write(' zRL =', zRL)

let resultadoPhi = prompt('¿Querés saber Phi en RL?')
if (resultadoPhi == 'no') {
    alert('okey')
    var phiRL = 0;
}else {
    phiRL = Math.tan(reactanciaInductiva / resistencia);
    phiRL = Math.abs(phiRL)
}
document.write(' phiRL=', phiRL)

let resultadoIRL = prompt('¿Querés saber I en RL?')
if (resultadoIRL == 'no') {
    alert('okey')
    var iRL = 0;
}else{
    iRL = eef / zRL;
}
document.write('     I RL=', iRL)