import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TasksState {
  tasks: Task[];
}

const initialState: TasksState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    clearTasks: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, deleteTask, clearTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
