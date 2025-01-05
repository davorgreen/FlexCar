import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
    id: string;
    email: string;
}
interface CarData {
    city: string;
    color: string;
    description: string;
    id: number;
    image: string;
    //image_thumb: string;
    //latitude: number;
    //longitude: number;
    make_id: string;
    model: string;
    postal: string | number;
    price: number;
    seller: string;
    //seller_name: string;
    state: string;
    vin: string;
    year: number;
}

interface UserState {
    user: User | null;
    data: CarData[];
}

const initialState: UserState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
    data: [],
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload.email))
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        },
        setData: (state, action: PayloadAction<CarData[]>) => {
            state.data = action.payload;
        }
    }
})

export const { login, logout, setData } = UserSlice.actions;
export default UserSlice.reducer;