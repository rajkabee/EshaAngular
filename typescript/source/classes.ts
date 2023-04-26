(()=>{
    class Person{
        public constructor(protected name:string,protected age:number){}
    }

    let p:Person=new Person("Alina", 33);
    console.log(p);
})();