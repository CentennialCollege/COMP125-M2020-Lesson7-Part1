"use strict";

// IIFE
(function(){

     function Start()
    {
        let tom = new objects.Student("Tom", 30, "A1234567890");
        tom.SaysHello();
        tom.Studies();

    }

    window.addEventListener("load", Start);

})();