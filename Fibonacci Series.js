function fibonacciGenerator (n) {
var fib=[];
    if(n===1){
        return [0];
    }
    else if(n===2){
        return [0,1];
    }
    else{
        var a=0;
        var b=1;
        fib=[a,b];
        for(var i=2;i<n;i++){
            var temp=a+b;
            fib.push(temp);
            a=b;
            b=temp;

        }
        return fib;
    }
}
