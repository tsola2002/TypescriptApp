var container = document.getElementById('container');

//this program countsdown from an initial number to a final number
//we specify optional parameters by adding equals after the parameter name
function countdown(initial, final = 0, interval = 1) {

    var current = initial;

    while (current > final) {
        container.innerHTML = current;
        current -= interval;
    }

}

countdown(10, 5, 2)