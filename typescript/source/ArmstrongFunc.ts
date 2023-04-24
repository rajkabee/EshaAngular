(()=>{
    let num: number=153;
    let arms:boolean = armstrong(num);
    if(arms){
        console.log("Armstrong Number...");
    }
    else{
        console.log("not an Armstrong Number");
    }
})();

function armstrong(n:number):boolean{
    let temp:number=n;
    let d:number = digits(n);
    //console.log(d);
    let rem:number;
    let armv:number=0;
    while(n>0){
        rem=n%10;
        armv+=pow(rem, d);
        n=Math.floor(n/10);
    }
    if(armv==temp){
        return true;
    }
    return false;
}
function digits(n:number):number{
    let count:number=0;
    while(n>0){
        n=Math.floor(n/10);
        count++;
    }
    return count;
}

function pow(b:number, p:number):number{
    let res:number=1;
    while(p>0){
        res*=b;
        p--;
    }
    return res;
}
