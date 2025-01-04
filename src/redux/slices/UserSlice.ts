import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface User {
    id: string;
    email: string;
}

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null,
}

const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<User>) => {
            console.log(action.payload)
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload.email))
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem('user');
        }
    }
})

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;