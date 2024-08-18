const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function generatePassword() {
    let passwordLength = 16;
    let password1 = "";
    let password2 = "";
    
    for (let i = 0; i < passwordLength; i++) {
        const randomChar1 = characters[Math.floor(Math.random() * characters.length)];
        const randomChar2 = characters[Math.floor(Math.random() * characters.length)];
        password1 += randomChar1;
        password2 += randomChar2;
    }
    
    document.getElementById("password1").textContent = password1;
    document.getElementById("password2").textContent = password2;
}