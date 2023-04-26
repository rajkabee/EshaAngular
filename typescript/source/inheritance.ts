(()=>{
    interface Shape{
        getArea:()=>number;
    }
    class Rectangle implements Shape{
        public constructor(public height:number, public width:number){}
        public getArea(){
            return this.height*this.width;
        }
    }
    class Square extends Rectangle{
        public constructor(public width: number){
            super(width, width);
        }
        public getPerimeter(){
            return 4*this.width;
        }
    }

    let r1 = new Rectangle(23, 54);
    console.log(r1.getArea());

    let s1:Square=new Square(10);
    console.log(s1.getArea());
    console.log("Perimeter: ",s1.getPerimeter());
})();