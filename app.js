// Memory Button function
function getCost(num, product){
    const productCost = document.getElementById(product + '-cost');
    if(num == 'firstButton'){
        productCost.innerText = 0;
    }
    else if(num == 'secondButton'){
        productCost.innerText = 180;
    }
    else if(num == 'defrent'){
        productCost.innerText = 100;
    }
    else if(num == 'paidButton'){
        productCost.innerText = 20;
    }
    

    // calculate total
    calculateTotalPrice();
};


function productCost(product){
    const productCostText = document.getElementById(product + '-cost').innerText;
    const productCost = parseInt(productCostText);
    return productCost;
}



// update Total Price
function calculateTotalPrice(){
    const bestPrice = productCost('best-price');
    const memoryCost = productCost('memory');
    const storageCost = productCost('storage');
    const deliveryCharge = productCost('delivery');

    const totalPrice = parseInt(bestPrice + memoryCost + storageCost + deliveryCharge);
    
    
    // update total price in html
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;
    

    // handle pomo code
    const inputCode = document.getElementById('input-code');
    const inputCodeValue = inputCode.value;
    if(inputCodeValue == 'stevekaku'){
        const discount = totalPrice*20 / 100;
        const discountPrice = totalPrice - discount;
        
        // update main total price
        document.getElementById('total').innerText = discountPrice;
    }

    // clear the pomo code input fiels
    inputCode.value = '';
}




// handle Memory Button
document.getElementById('8gb-m-button').addEventListener('click', function(){
    getCost('firstButton', 'memory');
    
});
document.getElementById('16gb-m-button').addEventListener('click', function(){
    
    getCost('secondButton', 'memory');
});



// handle storage button
document.getElementById('256gb-s-button').addEventListener('click', function(){
    getCost('firstButton', 'storage');
    
});
document.getElementById('512gb-s-button').addEventListener('click', function(){
    getCost('defrent', 'storage')
    
});
document.getElementById('1tb-s-button').addEventListener('click', function(){
    getCost('secondButton', 'storage');
});




// handle delivery button
document.getElementById('free-delivery-button').addEventListener('click', function(){
    getCost('firstButton', 'delivery');
});
document.getElementById('paid-delivery-button').addEventListener('click', function(){
    getCost('paidButton', 'delivery');
});



// handle Pomo code
document.getElementById('pomo-code-button').addEventListener('click', function(){
    calculateTotalPrice();
});
