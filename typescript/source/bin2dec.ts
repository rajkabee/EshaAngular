(()=>{
    let bin:number=1011011;
    let p2=1;
    let rem:number;
    let dec=0;
    while(bin!>=1){
        rem = bin%10;
        dec+=rem*p2;
        p2*=2;
        bin=Math.floor(bin/10);
    }

    console.log("Decimal: ", dec);
})();