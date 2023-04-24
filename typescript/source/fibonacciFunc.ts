//0,1,1,2,3,5,8,13....
(()=>{
    
    let range=100;
    fibonacci(range);
    console.log(fib(5));


    function fibonacci(range:number){
        let n1=0,n2=1,n3;
        while(n1<=range){
            console.log(n1);
            n3=n1+n2;
            n1=n2;
            n2=n3
        }

    }


    function fib(n:number):number{
        if(n==1){
            return 0;
        }
        else if(n==2){
            return 1;
        }
        return fib(n-1)+fib(n-2);
    }
})();


/*
fib(4)
fib(3)+fib(2)
fib(2)+fib(1)+1
1+0+1
2

*/