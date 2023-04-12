(()=>{
    let num:number=76524567654;
    let  k=0;
    while(num>=1){
        num=num/10;
        k++;
    }
    console.log("no. of digits: ", k);
})();