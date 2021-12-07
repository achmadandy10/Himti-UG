import React from "react"
import { ActionTypes } from "../constants/ActionType"

interface ProductProps {
    products: string
    product: string
}

export const SetProducts = ({ products } : ProductProps) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const SelectedProducts = ({ product } : ProductProps) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}