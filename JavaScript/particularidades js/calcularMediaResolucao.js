(function(){
    function calcularMedia(){
        let total = 0
        let qnt = arguments.length
    }
    for (let i = 0; i < qnt; i++) {
        if (typeof arguments[i] !== "number") {
            throw new Error("only numbers")
        }

        total += arguments[i]
    }
    return (total / qnt) || 0
    let media1 = calcularMedia(2, 4)
})()