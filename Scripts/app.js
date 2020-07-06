"use strict";

// IIFE
(function(){

     function Start()
    {
        let tom = new objects.Person("Tom", 30);
        tom.saysHello();

    }

    window.addEventListener("load", Start);

})();