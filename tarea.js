var fs = require('fs');
readline = require('readline');
var i = 0;
var registro = {
}

var content;
var datos = 'TIPO|CONTRATO|NOMBRE PLAZA|NUMERO PLAZA|NUMERO SUCURSAL|FECHA RECIBO|FECHA DE PAGO|FECHA DEPOSITO|IND IMPORTE|IMPORTE DOCUMENTO|FORMA DE PAGO|INTERESES O DESCUENTOS|IMPORTE INTERESES O DESCUENTOS|IMPORTE TOTAL PAGADO|HORA DE PAGO|                            TOTAL A PAGAR| NUMERO DE REFERENCIA| FECHA LIMITE DE PAGO| NOMBRE| CONCEPTO DE PAGO|CTE. COB. LITE|IND. ORIGEN|' + '\n';
// lectura del archivo 
fs.readFile('./BANCO NUEVO.TXT', 'utf8', function read(err, data) {
    if (err) {
        console.log(err);
        throw err;
    }
    content = data;

    processFile();          
});

function processFile() {
    //procesar el documento

    // se separa el registro completo
    var col1, col2, col3;
    var saltoLinea = content.split('\n');

    for(let i = 0; i < saltoLinea.length-1 ; i++){
        // separar registros por espacio
        col1 = saltoLinea[i].split('     ');
        //trae el signo
        col3=saltoLinea[i].split('                          ');
        //// acomodo de los datos que va a mostrar 

        //trae la fecha
        var str=col1[1].substring(0,8);
        // trae la hora 
        var str2=col1[1].substring(8,12);
        //console.log(str);
        datos += 'D|00001659|TEPIC, NAY.   |014|'+str+'|'+str+'|'+str+'|'+col3[1].trim().substring(0,1)+'|'+col3[1].substring(11,17)+'|'+'001'+'|'+'|   |'+'|                $0.00|'+col3[1].substring(11,17)+'|'+
        str2+'|'+col3[1].trim().substring(1,16)+'|'+col3[1].trim().substring(33,57)+'16012018'+'||'+'REINSCRIPCION                 ||                                                                                                                                                                                                                                                                                                             000000000000000|1|'+'\n';
        
        
    }
   
   
 escribirArchivo('Ejemplo.txt',datos);

   
}

function escribirArchivo(nombreArchivo, info){
    fs.writeFileSync(nombreArchivo, info+"\n")
    var data = readline.createInterface({
        input: fs.createReadStream('ARCHIVO REINSC SCOTIABANK.txt'),
        console: false
    });
}
