function checkBasket(N,B){
    // write code here
    console.log(checkBasket1(B))
    function checkBasket1(B){
        let fruiteType=B[0];
    for(let i=0;i<B.length;i++){
        if(B[i]!==fruiteType){
            return "Mixed Basket";
        }
    }
    return "Single Type";
    }
    
}
