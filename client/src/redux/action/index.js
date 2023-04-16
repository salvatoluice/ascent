export const addCart = (spare) => {
    return {
        type: "ADDITEM",
        payload: spare
    }
}

export const delCart = (spare) => {
    return {
        type: "DELITEM",
        payload: spare
    }
}