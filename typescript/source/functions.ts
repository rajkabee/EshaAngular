(()=>{
    let num: number=1101
    let decimal: number = binToDec();
    console.log(decimal);
    console.log(add(2,3));
    console.log(add(2,3,4));
    console.log(add(2,3,4,5));
})();

function binToDec(bin?:number):number{
    let pv:number=1;
    let dec:number=0;
    let rem:number;
    if(!bin){
        bin=0;
    }
    while(bin>0){
        rem=bin%10;
        dec+=rem*pv;
        pv*=2;
        bin = Math.floor(bin/10);
    }
    console.log("Hello from BinToDec");
    return dec;
    
}

function pi():number{
    return 3.1415;
}

function add(a:number, b:number, c:number=0, d:number=0):number{
   // return a+b+(c||0)+(d||0);
   return a+b+c+d;
}


/*
a=5;
b=7;
a=a+b; =>12
b=a-b;  =>5
a-=b;   =>7

a,b=b,a;//python


*/