const addToCart = (id) => {
    let foodCart = getStoredCart();
    const quantity = foodCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        foodCart[id] = newQuantity;
    }
    else {
        foodCart[id] = 1;
    }
    localStorage.setItem('food-cart', JSON.stringify(foodCart));

}
const decreseCartQuantity = (id) => {
    let foodCart = getStoredCart();
    const quantity = foodCart[id];
    if (quantity > 0) {
        const newQuantity = quantity - 1;
        foodCart[id] = newQuantity;
    }
    else {
        removeFromDb(id)
    }
    localStorage.setItem('food-cart', JSON.stringify(foodCart));

}
const removeFromDb = id => {
    const storedCart = localStorage.getItem('food-cart');
    // if (storedCart) {
    //     const foodCart = JSON.parse(storedCart);
    //     // const newCart = foodCart.filter(item => item.id !== id)
    //         localStorage.setItem('food-cart', JSON.stringify(foodCart));
    // }
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        console.log("id", id)
        // if (id in shoppingCart) {
        //     delete shoppingCart.id;
        //     console.log("del", shoppingCart)
        //     localStorage.setItem('food-cart', JSON.stringify(shoppingCart));
        // }
        const res = Object.keys(shoppingCart).filter((key) => key.includes(id))
        console.log(res[0])
        console.log(shoppingCart)
    }


}

const getStoredCart = () => {
    let foodCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('food-cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    return foodCart;
}

export {
    addToCart,
    getStoredCart,
    decreseCartQuantity
}