

const intState = {
    products: [],
    loading: true,
    errorMessage: "",

    product: [],
    load: true,
    errorProduct: ""
}

const reducer = (state = intState, action) => {

    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "LOADER_OFF":
            return { ...state, loading: false };
        case "SET_ERROR":
            return { ...state, errorMessage: action.payload };

        case "SET_PRODUCT":
            return { ...state, product: action.payload };
        case "SET_LOAD":
            return { ...state, load: false };
        case "SET_ERROR_PRODUCT":
            return { ...state, errorProduct: action.payload };
        default:
            return state;
    }
}

export default reducer;