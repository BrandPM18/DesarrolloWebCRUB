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
let provinciasT=[];
for(let i=0;i<provincias2020.length;i++){
    provinciasT[i]= new Provincias(provincias2020[i],poblacion2020[i],infectados2020[i]);
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
    var inputAdd = document.getElementById("inputAdd").value;
    var inputPob = document.getElementById("inputPob").value;
    var inputInf = document.getElementById("inputInf").value;
    if(inputAdd.length!=0 && inputInf.length!=0 && inputPob.length!=0){
        provinciasT[provinciasT.length+1]=new Provincias(inputAdd.value,inputPob.value,inputInf.value);
        ReadD();
    }
    else{
        window.alert("Nombre Invalido");
    }
}
function ReadD(){
    lista.innerHTML=` <table class="table" style="width: 20%">
    <tr>
    <th scope="col">#</th>
    <th scope="col">Provincia</th>
    <th scope="col">Poblacion</th>
    <th scope="col">Infectados</th> 
    </tr>
    </table>
    `
    for(let i=0;i<provinciasT.length;i++){
        lista.innerHTML+= `
        <table class="table" style="width: 20%">
    </tr>  
        <tr>     
            <th scope="row">${i+1}</th>  
            <td>${provinciasT[i].provincias}</td>
            <td>${provinciasT[i].poblacion}</td>
            <td>${provinciasT[i].infectados}</td>          
        </tr>
        `
    }
    lista.innerHTML+= `</table>`
}
function Update(){

}
function Delete(){

}