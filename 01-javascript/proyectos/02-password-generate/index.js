const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]; 
let btn1El = document.getElementById("pass1-el")
let btn2El = document.getElementById("pass2-el")

function genRan(){
    let numR = Math.floor(Math.random()*90)
    return numR
}

function generarRanPass() {
    let lenInp = document.getElementById("length-input")
    let aber = lenInp.value;
    btn1El.textContent = ""
    btn2El.textContent = ""
    for (let i = 0; i < aber; i++){
        let numR1 = genRan()
        btn1El.textContent += characters[numR1]
        let numR2 = genRan()
        btn2El.textContent += characters[numR2]
    }
}


document.querySelector('.password-box img').addEventListener('click', function() {
    text = document.getElementById('pass1-el')
    navigator.clipboard.writeText(text)
});

