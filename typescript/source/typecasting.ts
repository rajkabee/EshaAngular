(()=>{
    let x:unknown="hello";
    console.log((x as string).length);

    let contact:number=9849948147;
    //let con:string=contact as unknown as string; 
    let con:string=<string><unknown>contact;
    console.log(con);
})();