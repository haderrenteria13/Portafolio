function sumar()
{
var caja1 = Number(document.getElementById('caja-1').value)
var caja2 = Number(document.getElementById('caja-2').value)
var resultado = caja1 + caja2;
document.getElementById('resultado').value = resultado;
}

function multiplicar()
{
var caja3 = Number(document.getElementById('caja-3').value)
var caja4 = Number(document.getElementById('caja-4').value)
var resultado = caja3 * caja4;
document.getElementById('resultado').value = resultado;
}
