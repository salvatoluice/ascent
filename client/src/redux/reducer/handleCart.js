const cart = [];

const handleCart = ( state = cart, action ) => {
    const spare = action.payload
    switch ( action.type ) {
        case "ADDITEM":
            const  exist = state.find((x)=> x._id === spare._id)
            if ( exist ) {
                return state.map((x) => 
                x._id === spare._id ? {...x, qty: x.qty + 1} : x)
            }else{
                const spare = action.payload;
                return[
                    ...state,
                    {
                        ...spare,
                        qty: 1,
                    }
                ]
            }
        break
        case "DELITEM":
            const exist1 = state.find((x)=> x._id === spare._id);
            if(exist1.qty === 1) {
                return state.filter((x) => x._id !== exist1._id)
            }else {
                return state.map((x) => 
                    x._id === spare._id ? {...x,qty: x.qty-1} : x
                );
            }
        break

        default:
            return state;
            break;
    }
}

export  default handleCart;