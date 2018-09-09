//IIFE - Immediately Invoked Funtion Expression
(function(){
    let myVariable:number = 5;

    function Start() {
        console.log(`%c Game Somewhat Started...`, "color: blue; font-size: 20px;");
    }

    function Update() {

    }
    window.addEventListener("load", Start);
})();