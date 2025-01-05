import { configureStore } from "@reduxjs/toolkit";
import UserSlice from '../slices/UserSlice'
import FavoriteSlice from '../slices/FavoritesSlice'

const store = configureStore({
    reducer: {
        userStore: UserSlice,
        favoritesStore: FavoriteSlice,
    }

})

export default store;