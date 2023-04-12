(()=>{
    let dec:number=1234;  //  0,1,
    let bin:number=0, rem:number, pv=1, rbin:number=1;
    // while(dec>0){
    //     rem=dec%2;
    //     bin=rem*pv+bin;
    //     pv*=10
    //     dec=Math.floor(dec/2);
    // }
    while(dec>0){
        rem=dec%2;
        rbin=rbin*10+rem;
        dec=Math.floor(dec/2);
    }
    while(rbin>1){
        rem=rbin%10;
        bin=bin*10+rem;
        rbin=Math.floor(rbin/10);
    }

    console.log("Binary Value: ", bin);
})();

/*
2   1234    0           101001011001
2   617     1           10011010010
2   308     0
2   154     0
2   77      1
2   38      0
2   19      1
2   9       1
2   4       0
2   2       0
2   1       1
    0
*/



