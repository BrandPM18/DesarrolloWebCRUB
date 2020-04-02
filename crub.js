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

    lista.innerHTML = ''
    for(let i=0;i<provinciasT.length;i++){
    let newRow = lista.insertRow();
    let newC1 = newRow.insertCell();
    let newC2 = newRow.insertCell();
    let newC3 = newRow.insertCell();
    let newC4 = newRow.insertCell();
    let newC5 = newRow.insertCell();
    let newC6 = newRow.insertCell();
    newC1.innerHTML = i+1;
    newC2.innerHTML = provinciasT[i].provincias;  
    newC3.innerHTML = provinciasT[i].poblacion;  
    newC4.innerHTML = provinciasT[i].infectados;  
    newC5.innerHTML = `<button class="btn btn-danger" onclick="Update(${i})">Cambiar</button>` 
    newC6.innerHTML = `<button class="btn btn-danger" onclick="Delete(${i})">Eliminar</button>`
    }
}
function Update(i){
    lista.innerHTML = ''
    for(let k=0;k<provinciasT.length;k++){
        let newRow = lista.insertRow();
        let newC1 = newRow.insertCell();
        let newC2 = newRow.insertCell();
        let newC3 = newRow.insertCell();
        let newC4 = newRow.insertCell();
        let newC5 = newRow.insertCell();
        let newC6 = newRow.insertCell();
        if(k==i){
            newC1.innerHTML = k+1;
            newC2.innerHTML = `<input size="10" name="nombre" id="inputU" type="text" placeholder="${provinciasT[k].provincias}">`
            newC3.innerHTML = `<input min="0" max="100000000" name="poblacion" id="inputPobU" type="number" placeholder="${provinciasT[k].poblacion}">`
            newC4.innerHTML = `<input min="0" max="100000000" name="Infectados" id="inputInfU" type="number" placeholder="${provinciasT[k].infectados}">`
            newC5.innerHTML = `<button class="btn btn-danger" onclick="Final(${k})">Aceptar</button>`
            newC6.innerHTML = `<button class="btn btn-danger" onclick="Delete(${k})">Eliminar</button>`
        }
        else{
            newC1.innerHTML = k+1;
            newC2.innerHTML = provinciasT[k].provincias;
            newC3.innerHTML = provinciasT[k].poblacion;
            newC4.innerHTML = provinciasT[k].infectados;
            newC5.innerHTML = `<button class="btn btn-danger" onclick="Update(${k})">Cambiar</button>`
            newC6.innerHTML = `<button class="btn btn-danger" onclick="Delete(${k})">Eliminar</button>` 
        }
    }
}
function Delete(i){
provinciasT.splice(i,1);
ReadD();
}