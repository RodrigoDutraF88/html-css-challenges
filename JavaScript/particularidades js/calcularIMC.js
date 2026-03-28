(function(){
    function calcularIMC(peso, altura){
        let imc = peso / (altura * altura)
        if (imc < 18.5) {
            console.log("Abaixo do peso")
        }
    }
})()