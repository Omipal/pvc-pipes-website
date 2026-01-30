import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbState = {
  items: BreadcrumbItem[];
};

const initialState: BreadcrumbState = {
  items: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    setBreadcrumb(state, action: PayloadAction<BreadcrumbItem[]>) {
      state.items = action.payload;
    },
    clearBreadcrumb(state) {
      state.items = [];
    },
  },
});

export const { setBreadcrumb, clearBreadcrumb } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
