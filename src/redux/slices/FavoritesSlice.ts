import { createSlice } from "@reduxjs/toolkit";

interface FavoritesState {
    favoritesProduct: number[];
}

const initialState: FavoritesState = {
    favoritesProduct: localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')!) : []
}



const FavoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            if (!state.favoritesProduct.includes(action.payload)) {
                state.favoritesProduct.push(action.payload);
            }
            localStorage.setItem('favorites', JSON.stringify(action.payload))
        },
        removeFromFavorites: (state, action) => {
            state.favoritesProduct = state.favoritesProduct.filter((id) => id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(state.favoritesProduct));
        }

    }
})

export const { addToFavorites, removeFromFavorites } = FavoriteSlice.actions;
export default FavoriteSlice.reducer; 