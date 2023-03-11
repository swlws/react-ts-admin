import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const incrementAsync = createAsyncThunk(
  "counter/fetchCount",
  async (amount: number) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    status: "loading",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit 允许我们在 reducers 中编写 mutating 逻辑。
      // 它实际上并没有 mutate state 因为它使用了 Immer 库，
      // 它检测到草稿 state 的变化并产生一个全新的基于这些更改的不可变 state
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    // 监听reducer之外的action，根据状态做出对应的处理
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// 为每个 case reducer 函数生成 Action creators
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;