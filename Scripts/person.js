"use strict";

// define the name of the namespace or "module"
let objects;

(function(objects){

    class Person
    {
        // PROPERTIES

        // Name Property
        get Name()
        {
            return this.m_name;
        }

        set Name(value)
        {
            this.m_name = value;
        }

        // Age Property
        get Age()
        {
            return this.m_age;
        }

        set Age(value)
        {
            this.m_age = value;
        }

        // CONSTRUCTOR
        constructor(name, age)
        {
            this.Name = name;
            this.Age = age;
        }

        // METHODS
        saysHello()
        {
            console.log(`${this.Name} says Hello!`);
        }
    }


    objects.Person = Person;


}(objects || (objects = {})));



