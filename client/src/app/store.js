import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../Features/Auth/authSlice';
import goalSlice from '../Features/Goals/goalSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        goals: goalSlice
    },
});