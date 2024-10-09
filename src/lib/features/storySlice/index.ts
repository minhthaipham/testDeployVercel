import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStory } from "./type";
import { storyApi } from '@/lib/services/modules/storyService';
import { ICategory } from '@/common/types';

const initialState:IStory = {
    categories: []
}
export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            storyApi.endpoints.getAllCategories.matchFulfilled,
         (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        }
        )
    }
})

export default storySlice.reducer;