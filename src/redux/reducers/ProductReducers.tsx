import { ActionTypes } from "../constants/ActionType";

const initialState = {
    product: [{
        id: 1,
        title: "Dipesh",
        category: "Programmer"
    }]
}

interface ActionProps {
    type: string,
    payload: string
}

export const ProductReducer =  (state = initialState, { type, payload }: ActionProps) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}