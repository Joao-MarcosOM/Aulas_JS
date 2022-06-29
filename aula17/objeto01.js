let amigo = {nome: "joao",sexo:"M",peso:67,engordar(p=0){
    console.log("Engordou")
    this.peso += p
}}

console.log(amigo.engordar(5))
console.log(amigo.peso)