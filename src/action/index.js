export const Increment = (data) =>{
    return {
        type: "INCREMENT",
        payload:{
            data:data,
            id: new Date().getTime().toString(),
        }
    }
}

export const Decrement = (id) =>{
    return {
        type: "DECRMENT",
        payload: id
    }
}