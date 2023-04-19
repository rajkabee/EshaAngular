(()=>{
    const names:string[]=["Prajwol", "Pushkar"];
    names.push("Smriti");
    names.push("Manisha");
    names.push("Anish");
    names.push("Devi");
    names.push("Gopal");
    console.log(names);
    names.pop();
    console.log(names);
    names.shift();
    console.log(names);
    names.unshift("Imona");
    console.log(names);
    console.log(names.length);
    console.log(names[5]);
    let i:number=0;
    for(i=0; i<names.length; i++){
        console.log(names[i]);
    }
    console.log("For Each Loop: ");
    names.forEach(item=>{
        console.log(item);
    })
})();