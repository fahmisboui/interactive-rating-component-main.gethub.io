
function checkValue() {
    var radios = document.getElementsByName("rate");
    
    document.getElementById("rating-before").style.display = "none";
    document.getElementById("rating-after").style.display = "block";
    
    for ( const radio of radios){
        if (radio.checked){
            console.log(radio.value);
            document.getElementById("rateGiven").innerHTML = radio.value;
            break;
        }
    }
    }