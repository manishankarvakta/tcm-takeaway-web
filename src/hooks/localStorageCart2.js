// const getStoredCart = () => {
//     let foodCart = {};

//     //get the shopping cart from local storage
//     const storedCart = localStorage.getItem('food-cart');
//     if (storedCart) {
//         foodCart = JSON.parse(storedCart);
//     }
//     return foodCart;
// }

// const addToCart = (food) => {
//     let foodCart = getStoredCart();
//     let quantity = 1;
//     const { _id, name, priceList } = food;
//     const newFood = {
//         id: _id,
//         name: name,
//         priceList: priceList,
//         quantity: quantity
//     }


//     // const quantity = foodCart[id];
//     // if (quantity) {
//     //     const newQuantity = quantity + 1;
//     //     foodCart[id] = newQuantity;
//     // }
//     // else {
//     //     foodCart[id] = 1;
//     // }
//     localStorage.setItem('food-cart', JSON.stringify(newFood));

// }

// export {
//     addToCart,
//     getStoredCart
// }

// use local storage to manage cart data

const addToDb = (food) => {
    let foodCart = [];
    const { _id, name, priceList } = food;

    // Process the cart item data
    const item = {
        id: _id,
        name: name,
        priceList: priceList,

    };

    // check cart data
    // get the shopping cart from local storage
    const storedCart = getStoredCart();
    if (storedCart) {
        const selectedItem = storedCart.find(
            (p) => p._id === item.id
        );
        if (selectedItem) {
            const restItem = storedCart.filter(
                (p) => p._id !== item.id
            );
            selectedItem.qty = selectedItem.qty + 1;
            foodCart = [...restItem, selectedItem];
        } else {

            foodCart = [
                ...storedCart,
                {
                    ...item,
                    qty: 1
                },
            ];
        }
    } else {
        foodCart = [
            ...foodCart,
            {
                ...item,
                qty: 1
            },
        ];
    }

    console.log("stored Cart:", storedCart);
    console.log("Food cart:", foodCart);

    localStorage.setItem("food_cart", JSON.stringify(foodCart));
    return true;
};

const getStoredCart = () => {
    let foodCart = [];

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("food_cart");
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    // console.log(foodCart);
    return foodCart;
};

const removeFromDb = (id) => {
    const storedCart = getStoredCart();
    if (storedCart) {
        const newCart = storedCart.filter((p) => p._id !== id);
        return localStorage.setItem("food_cart", JSON.stringify(newCart))
            ? "true"
            : "false";
    }
};

const removeQuantity = (id) => {
    const storedCart = getStoredCart();
    if (storedCart) {
        const selectedItem = storedCart.find((p) => p._id === id);
        const restItem = storedCart.filter((p) => p._id !== id);

        selectedItem.qty = selectedItem.qty - 1;
        const newCart = [...restItem, selectedItem];

        return localStorage.setItem("food_cart", JSON.stringify(newCart))
            ? "true"
            : "false";
    }
};

const addQuantity = async (id) => {
    const storedCart = getStoredCart();
    if (storedCart) {
        const selectedItem = storedCart.find((p) => p._id === id);
        const restItem = storedCart.filter((p) => p._id !== id);
        // console.log(selectedItem, selectedItem.qty);

        // const newQty = parseInt(selectedItem.qty) + 1;
        console.log("selectedItem", selectedItem, "restItem", restItem);
        const newCart = [
            ...restItem,
            {
                ...selectedItem,
                qty: selectedItem.qty + 1,
            },
        ];

        console.log(newCart, selectedItem.qty);
        return localStorage.setItem("food_cart", JSON.stringify(newCart))
            ? "true"
            : "false";
    }
};


const deleteShoppingCart = () => {
    return localStorage.removeItem("food_cart") ? "true" : "false";
};

export {
    addToDb,
    addQuantity,
    removeQuantity,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart,

};