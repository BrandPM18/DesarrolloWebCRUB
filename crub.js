let provincias2020 = ['Lima','Piura','Loreto','Junín','Arequipa','Callao','Lambayeque','Cusco','La Libertad','Áncash','Tumbes','Ica','Madre de Dios','San Martín'];
let poblacion2020 = [9485405,1856809,883510,1246038,1382730,994494,1197260,1205527,1778080,1083519,224863,850765,141070,813381];
let infectados2020 = [322,19,16,10,9,8,7,6,5,4,3,2,2,1,1];

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

function data(provincias, poblacion, infectado){
    document.write("<tr>");
    let provinciaWP = "<th>"+provincias+"</th>";
    document.write(provinciaWP);
    provinciaWP = "<th>"+poblacion+"</th>";
    document.write(provinciaWP);
    provinciaWP = "<th>"+infectado+"</th>";
    document.write(provinciaWP);
    document.write("</tr>");
}


//function New_Data()
let provinciasT =[];
for(let i=0;i<provincias2020.length;i++){
    provinciasT[i]= new Provincias(provincias2020[i],poblacion2020[i],infectados2020[i]);
    data(provinciasT[i].provincias,provinciasT[i].poblacion,provinciasT[i].infectados);
    //document.write("<tr>")
}
console.log(provinciasT);

//poblacion.push

/*
var count =0;
while(count < 20){
    let cac = "Usted posee "+count+" iteraciones";
    console.log(cac);
    count++;
}*/