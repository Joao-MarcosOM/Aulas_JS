var num = '(31)99544-2323';


function verificaNum(num){
    if(num.length == 14){
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD / traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    }else if(num.length == 13){
        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD 
        var regex2 = new RegExp('^([0-9 ]{3})((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: DDD / espaço entre DDD e Número / Traço entre os números
        if (regex.test(num) == true ){
            console.log(num);
        } else if (regex2.test(num) == true ){
            console.log(num);
            }else{
                console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
            }
    } else if(num.length == 11){
        var regex = new RegExp('^([0-9]{2})((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: DDD 
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    } else if(num.length == 12){
        var regex = new RegExp('^([0-9 ]{3})((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: DDD / espaço entre DDD e Número
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    }else if(num.length == 9){
        var regex = new RegExp('^((3[0-9]{3}[0-9]{4})|(9[0-9]{4}[0-9]{4}))$') ;//Validação de numeros com: 9 Digitos
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    }else if(num.length == 10){
        var regex = new RegExp('^((3[0-9]{3}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: 9 Digitos / Traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    }else if(num.length == 15){
        var regex = new RegExp('^\\([0-9]{2}\\)(( 3[0-9]{3}-[0-9]{4})|( 9[0-9]{4}-[0-9]{4}))$') ;//Validação de numeros com: parenteses / DDD / espaço entre DDD e Números / Traço entre os numeros
        if (regex.test(num) == false ){
            console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
        } else{
            console.log(num);
        }
    }else{
        console.log("Ops, isso não me parece um telefone, certifique-se de que não faltou nenhum número.");
    }
    

}
verificaNum(num);
