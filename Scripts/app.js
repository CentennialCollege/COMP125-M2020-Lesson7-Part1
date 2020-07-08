//"use strict";

// IIFE
(function(){

     function Start()
    {
        let tom = new objects.Student("Tom", 30, "A1234567890");
        tom.SaysHello();
        tom.Studies();

        console.log(tom);


        let teacher = {
            name: "Mark",
            ID: "B1234",
            age: 35,
            Teaches: function()
            {
                console.log(`${teacher.name} is teaching`);
            } 
        };

        teacher.Teaches();

        console.log(teacher);

        
    }

    window.addEventListener("load", Start);

})();