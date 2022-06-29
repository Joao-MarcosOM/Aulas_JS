var num = '3199544-2323';

var qt_num = num.length

switch (qt_num){
    case 14:
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD / traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
        break;
    case 13:
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD 
        var regex2 = new RegExp('^([0-9 ]{3})((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: DDD / espaço entre DDD e Número / Traço entre os números
        if (regex.test(num) == true ){
            console.log(num);
        } else if (regex2.test(num) == true ){
            console.log(num);
            }else{
                console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
            }
        break;
    case 11:
        var regex = new RegExp('^([0-9]{2})((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: DDD 
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
        break;
    case 12:
        var regex = new RegExp('^([0-9 ]{3})((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: DDD / espaço entre DDD e Número
        var regex2 = new RegExp('^([0-9]{2})((3[0-9]{3}[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: DDD / Traço entre os números
        if (regex.test(num) == true){
            console.log(num);
        } else if(regex2.test(num) == true){
            console.log(num);
        }else{
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        }
        break;
    case 9:
        var regex = new RegExp('^((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: 9 Digitos
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
        break;
    case 10:
        var regex = new RegExp('^((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: 9 Digitos / Traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    case 15:
        var regex = new RegExp('^\\([0-9]{2}\\)(( 3[0-9]{3}-[0-9]{4})|( 9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD / espaço entre DDD e Números / Traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
        break;
    default:
        console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
}

