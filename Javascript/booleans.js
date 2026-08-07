let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log('Discount applied to food order')
    } else {
        console.log('No Discount applied to food order')
    }
}

processOrder ()