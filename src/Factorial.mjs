function Factorial(n){

    if(n == 1)
        return 1;
    else
       return  n*Factorial(n-1);
}

export {Factorial}