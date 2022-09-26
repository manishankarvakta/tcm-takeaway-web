const getStoredCart = () => {
    let foodCart = [];

    const storedCart = localStorage.getItem("food_cart");
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }

    return foodCart;
};
const updateCart = () => {
    const loadCart = getStoredCart();
    return loadCart;

}

const addToCart = (food) => {
    let foodCart = [];
    let order = 1
    const storedCart = getStoredCart();
    const { _id, name, priceList } = food;

    const item = {
        id: _id,
        name: name,
        priceList: priceList,

    };
    if (storedCart) {
        const selectedItem = storedCart.find((p) => p.id === item.id);
        // console.log(selectedItem)
        if (selectedItem) {
            const restItem = storedCart.filter(
                (p) => p.id !== item.id
            );
            selectedItem.qty = selectedItem.qty + 1;
            // order = order

            foodCart = [...restItem, selectedItem];
        } else {

            foodCart = [
                ...storedCart,
                {
                    ...item,
                    qty: 1,
                    // order=storedCart.length + 1

                },
            ];
        }
    } else {
        foodCart = [
            ...foodCart,
            {
                ...item,
                qty: 1,
                // order
            },
        ];
    }

    // console.log("stored Cart:", storedCart);
    // console.log("Food cart:", foodCart);

    localStorage.setItem("food_cart", JSON.stringify(foodCart));
    updateCart();
    return foodCart;

}

const addToDb = (food) => {
    let foodCart = [];
    const { id, name, priceList } = food;

    const item = {
        id: id,
        name: name,
        priceList: priceList,

    };

    const storedCart = getStoredCart();
    if (storedCart) {
        const selectedItem = storedCart.find((p) => p.id === item.id);
        // console.log(selectedItem)
        if (selectedItem) {
            const restItem = storedCart.filter(
                (p) => p.id !== item.id
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

    // console.log("stored Cart:", storedCart);
    // console.log("Food cart:", foodCart);

    localStorage.setItem("food_cart", JSON.stringify(foodCart));

    return foodCart;
};
const removeQuantity = (food) => {
    const storedCart = getStoredCart();
    let newCart = [];
    // console.log(storedCart)
    const { id, name, priceList } = food;
    // console.log(food)

    if (storedCart) {
        const selectedItem = storedCart.find((p) => p.id === id);

        // console.log(selectedItem);

        const restItem = storedCart.filter((p) => p.id !== id);

        if (selectedItem?.qty > 1) {
            selectedItem.qty = selectedItem.qty - 1;
            newCart = [...restItem, selectedItem];
        }
        else {
            newCart = storedCart.filter((p) => p.id !== id);
        }


        return localStorage.setItem("food_cart", JSON.stringify(newCart))
            ? newCart
            : storedCart;
    }
};

const removeFromDb = (food) => {
    const storedCart = getStoredCart();
    const { id, name, priceList } = food;
    if (storedCart) {
        const newCart = storedCart.filter((p) => p.id !== id);
        return localStorage.setItem("food_cart", JSON.stringify(newCart))
            ? newCart
            : storedCart;
    }
};
const deleteFoodCart = () => {
    return localStorage.removeItem("food_cart") ? "true" : "false";
};


export {
    addToDb,
    getStoredCart,
    removeQuantity,
    removeFromDb,
    addToCart,
    deleteFoodCart,
    updateCart,

}