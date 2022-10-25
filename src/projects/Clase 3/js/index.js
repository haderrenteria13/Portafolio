function inicial()
{
    document.getElementById('formulario').style.display="none" 
    document.getElementById('telefono').style.display="none"
    document.getElementById('correo').style.display="none"  
}

function empleado()
{
    document.getElementById('formulario').style.display="block" 
    document.getElementById('telefono').style.display="block"
    document.getElementById('correo').style.display="block"
}

function cliente()
{
    document.getElementById('formulario').style.display="block"
    document.getElementById('telefono').style.display="none"
    document.getElementById('correo').style.display="none"
}