(()=>{
    let num:number=234;
    let t:number=num, dig:number=0, av:number=0, pv:number, i:number, rem:number;
    while(t>=1){
        t/=10;
        dig++;
    }
    //console.log(dig);
    t=num;
    while(t>0){
        rem = t%10;
        i=0;
        pv=1;
        while(i<dig){
            pv*=rem;
            i++;
        }
        av+=pv;

        t=Math.floor(t/10);
    }
    //console.log("Armstrong Value: ", av);
    if(num==av){
        console.log("Armstrong Number!");
    }
    else{
        console.log("Not a Armstrong Number!");
    }

})();

/*

    153
    no. of digits=3;
    1^3+5^3+3^3
    1+125+27
    153

*/