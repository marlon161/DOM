let user = [
    [100,	'anna0',	'white00',	'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	'orange01',	'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	'yellow02',	'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	'blue03',	'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	'red04',	'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	'green05',	'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	'purple06',	'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com',	    6645936156],
]

let caja_texto = document.getElementById("titulo");
let boton_siguiente = document.getElementById("boton2");
let boton_anterior = document.getElementById("boton");
let boton_ver = document.getElementById("boton_ver")

let root = document.getElementById("root");
let usuario = 0;
caja_texto.innerHTML = user[usuario][1];

function siguiente(){
    if(usuario <= 5){
        usuario++;
        caja_texto.innerHTML = user[usuario][1];
    }
}
function anterior(){
    if(usuario >= 1){
        usuario--;
        caja_texto.innerHTML = user[usuario][1];
    }
}

boton_siguiente.addEventListener('click', siguiente);
boton_anterior.addEventListener('click', anterior);

// ---------------DOM del root----------------

import { user_ob } from "./user.js";
function ver(){
    root.innerHTML = '<ul id="lista_usuarios">' + 
                        '<li>' + user_ob[usuario].id + '</li>' + 
                        '<li>' + user_ob[usuario].nickname + '</li>' + 
                        '<li>' + user_ob[usuario].name + '</li>' + 
                        '<li>' + user_ob[usuario].address + '</li>' + 
                        '<li>' + user_ob[usuario].email + '</li>' + 
                        '<li>' + user_ob[usuario].phone + '</li>' + 
                    '</ul>';
}
boton_ver.addEventListener('click', ver)
