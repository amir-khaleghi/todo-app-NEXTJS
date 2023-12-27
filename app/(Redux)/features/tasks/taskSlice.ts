'use client';

/* Import CreateSlice ___________________________________ */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTask = createAsyncThunk('fetchTask', async () => {
  try {
    const response = await fetch('/api/todo');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});

/* Create The Slice Of The Cart _________________________ */
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    tasks: [],
    isLoading: true,
    error: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTask.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasks = action.payload;
    });
    builder.addCase(fetchTask.rejected, (state, action) => {
      state.error = true;
    });
  },
  // reducers------------------------
  reducers: {
    removeTask: (state, action) => {
      const itemId = action.payload;
      state.tasks = state.tasks.filter((item) => item.id !== itemId);
    },
  },
});

//exporting the actions
export const { removeTask } = taskSlice.actions;

/* Export _______________________________________________ */
export default taskSlice.reducer;

// removeTask: (state, action) => {
//   const itemId = action.payload;
//   console.log(itemId);
//   console.log(state.tasks);
//   state.tasks = state.tasks.filter((item) => item.id !== itemId);
// },
