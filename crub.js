let provincias2020 = ['Lima','Piura','Loreto','Junín','Arequipa','Callao','Lambayeque','Cusco','La Libertad','Áncash','Tumbes','Ica','Madre de Dios','San Martín'];
let poblacion2020 = [9485405,1856809,883510,1246038,1382730,994494,1197260,1205527,1778080,1083519,224863,850765,141070,813381];
let infectados2020 = [322,19,16,10,9,8,7,6,5,4,3,2,2,1,1];
let lista=document.getElementById("lista");

class Provincias {
    constructor(provincias,poblacion,infectados){
        this.provincias = provincias;
        this.poblacion = poblacion;
        this.infectados = infectados;
    }
    redataInfe(new_infectados){
         this.infectados=new_infectados;
         return this.infectados;
    }
}
//Llenado de datos iniciales
let provinciasT=[];
for(let i=0;i<provincias2020.length;i++){
    provinciasT[i]= new Provincias(provincias2020[i],poblacion2020[i],infectados2020[i]);
}
function Final(i){
    var provincia = document.getElementById("inputU").value;
    var poblacion = document.getElementById("inputPobU").value;
    var infectado = document.getElementById("inputInfU").value;
    if(provincia.length==0 || infectado.length==0 || poblacion.length==0){
        //window.alert("Datos Incompletos");
        ReadD();
        // Si le das aceptar no se actualiza nada de esa forma tbm sales del cambio
    }
    else{
        if(provinciasT.find(item => item.provincias==provincia) && provinciasT[i].provincias!=provincia){
            alert(provincia+" se encuentra en la lista eliga otro")
        }
        else{
            provinciasT[i].provincias=provincia;  
            provinciasT[i].poblacion=poblacion;
            provinciasT[i].infectados=infectado;
            ReadD();
        }
        }
}
/*
function data(provincias, poblacion, infectado){
    document.write("<table><tr>");
    let provinciaWP = "<th>"+provincias+"</th>";
    document.write(provinciaWP);
    provinciaWP = "<th>"+poblacion+"</th>";
    document.write(provinciaWP);
    provinciaWP = "<th>"+infectado+"</th>";
    document.write(provinciaWP);
    document.write("</tr></table>";
}
*/
//CRUD
function CreatP(){
    var provincia = document.getElementById("inputAdd").value;
    var poblacion = document.getElementById("inputPob").value;
    var infectado = document.getElementById("inputInf").value;
    if(provincia.length==0 || infectado.length==0 || poblacion.length==0){
        window.alert("Datos Incompletos");
    }
    else{
        //con funcion flecha
        if(provinciasT.find(item => item.provincias==provincia)){
            alert(provincia+" se encuentra en la lista eliga otro")
        }
        else{
            console.log(provincia.value);
            console.log(poblacion.value);
            console.log(infectado.value);
            provinciasT.push(new Provincias(provincia,poblacion,infectado));
            ReadD();
        }
        /*
        //con funcion normal find()
        if(provinciasT.find(function(item){
           return item.provincias == provincia; 
        }
        )) alert(provincia + "se encuentra en la lista eliga otro")
        */
    }
}
function ReadD(){
    lista.innerHTML=` <table class="table" style="width: 20%">
    <tr>
    <theader>
    <th scope="col">#</th>
    <th scope="col">Provincia</th>
    <th scope="col">Poblacion</th>
    <th scope="col">Infectados</th> 
    </tr>
    </theader>
    `
    for(let i=0;i<provinciasT.length;i++){
        lista.innerHTML+= `
        <table class="table" style="width: 20%">
        <tbody>
        <tr>     
            <th scope="row">${i+1}</th>  
            <td>${provinciasT[i].provincias}</td>
            <td>${provinciasT[i].poblacion}</td>
            <td>${provinciasT[i].infectados}</td>
            <td><button onclick="Update(${i})">Cambiar</button></td>
            <td><button onclick="Delete(${i})">Eliminar</button></td>          
        </tr>
        `
    }
    lista.innerHTML+= `</tbody></table>`
}
function Update(i){
    lista.innerHTML=` <table class="table" style="width: 20%">
    <tr>
    <theader>
    <th scope="col">#</th>
    <th scope="col">Provincia</th>
    <th scope="col">Poblacion</th>
    <th scope="col">Infectados</th> 
    </tr>
    </theader>
    `
    for(let k=0;k<provinciasT.length;k++){
        if(k==i){
            lista.innerHTML+= `
            <table class="table" style="width: 20%">
            <tbody>
            <tr>     
                <th scope="row">${k+1}</th>  
                <td><input name="nombre" id="inputU" type="text" placeholder="${provinciasT[k].provincias}"></td>
                <td><input name="poblacion" id="inputPobU" type="number" placeholder="${provinciasT[k].poblacion}"></td>
                <td> <input name="Infectados" id="inputInfU" type="number" placeholder="${provinciasT[k].infectados}"></td>
                <td><button onclick="Final(${k})">Aceptar</button></td>
                <td><button onclick="Delete(${k})">Eliminar</button></td>          
            </tr>
            `    
        }
        else{
            lista.innerHTML+= `
            <table class="table" style="width: 20%">
            <tbody>
            <tr>     
                <th scope="row">${k+1}</th>  
                <td>${provinciasT[k].provincias}</td>
                <td>${provinciasT[k].poblacion}</td>
                <td>${provinciasT[k].infectados}</td>
                <td><button onclick="Update(${k})">Cambiar</button></td>
                <td><button onclick="Delete(${k})">Eliminar</button></td>          
            </tr>
            `
        }
    }
    lista.innerHTML+= `</tbody></table>`
}
function Delete(i){
provinciasT.splice(i,1);
console.info(provinciasT);
ReadD();
}