(()=>{
    function greet<S,T>(name:S, age: T):String{
        return "hello "+name+", you are "+age+"years old.";
    }

    console.log(greet<string, number>("Subarna", 24));
    console.log(greet<number, string>(34, "Pinky"));

})();