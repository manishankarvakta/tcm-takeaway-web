const getStoredCart = () => {
    let foodCart = [];

    const storedCart = localStorage.getItem("food_cart");
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }

    return foodCart;
};
const data = getStoredCart();

const totalCalculationForQuantity = (data) => {
    console.log(data)
    let sum = 0;
    const totalCalculation2 = data?.map(items => sum = items.qty
        // console.log(items)


    )
    console.log(totalCalculation2)
    const total = totalCalculation2.reduce((totalSummation, a) => totalSummation + a, 0);
    // console.log(total)
    return total

}

export {
    totalCalculationForQuantity
}