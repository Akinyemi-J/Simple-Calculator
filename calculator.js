const display = document.getElementById('display');
const AC = document.getElementById('AC');
const DE = document.getElementById('DE');
const equal = document.getElementsByClassName('equal');

for(var i=0; i<20; i++){
    document.querySelectorAll(".NoButton")[i].addEventListener("click", function ()
    {

        if(this.value === "AC"){
            display.value = "";
        }
        else if(this.value === "DE"){
            display.value = display.value.toString().slice(0, -1);
        }

        else if(this.value === "="){
            display.value = eval(display.value);
        }

        else{
            display.value += this.value;
        }

    });
    
};

