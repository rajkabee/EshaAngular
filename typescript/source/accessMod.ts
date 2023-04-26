(()=>{
    class Person{
        private name:string="";
        private age:number=0;
        public constructor(name:string, age:number){
            this.name=name;
            this.age=age;
        } 
        
        public getName(): string {
            return this.name;
        }
        public getAge():number{
            return this.age;
        }
        public setName(name:string){
            this.name=name;
        }
        public setAge(age:number){
            this.age=age;
        }

    }

    let x:number=0;
    let p1:Person=new Person("",0);
    p1.setName("Regal Maharjan");
    p1.setAge(23);
    console.log(p1);
    console.log(p1.getName());
})();