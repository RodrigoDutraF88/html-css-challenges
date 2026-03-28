function CalcularMedia() {
    if (arguments.length == 0) {
        console.log("0")
    }
    else if (typeof arguments[0] == "string") {
        console.log("Error")
    }
    else {
        
        let total = 0
        let quantidade = 0
        for ( let i = 0; i < arguments.length; i++) {
            total += arguments[i]
            quantidade++
        }

        console.log("Media:" + total / quantidade)
    } 
    
}

CalcularMedia()
CalcularMedia( 2, 6)
CalcularMedia(2, 6, 1, 1, 2, 6)
CalcularMedia("2", "6")