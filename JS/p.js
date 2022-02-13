function updateProductNumber(product,price,isIncreasing){
    let productInput = document.getElementById(product+"-number")
    let productNumber =  productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber)+1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // update product price
    const TotalPrice = document.getElementById(product+'-total');
    TotalPrice.innerText = productNumber * price;
    //calcolet 
    calculeteTotal();
}
//phone incrice And decrie 
document.getElementById('phone-plus').addEventListener("click",function(){
 updateProductNumber('phone',1219,true);
    
})
document.getElementById('phone-minus').addEventListener("click",function(){
 updateProductNumber('phone',1219,false);
    
})
//case incrice And decrie 
document.getElementById('case-plus').addEventListener("click",function(){
    updateProductNumber('case',59,true);
       
   });
document.getElementById('case-minus').addEventListener("click",function(){
    updateProductNumber('case',59,false);
       
});

// calculate

function getInputValue(product){
   const totalNumber=  document.getElementById(product + '-number');
   const productNumber = totalNumber.value;
   
   return productNumber;
}
function calculeteTotal(){
    const totalPhone = getInputValue('phone') * 1219;
    const totalcase = getInputValue('case') * 59;
    const subTotal = totalPhone+totalcase;
    const tex = subTotal/10;
    const total = subTotal + tex;
    console.log(subTotal);
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tex;
    document.getElementById('total-price').innerText = total ;
}
