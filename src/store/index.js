// import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initialCounterState = {
  counter: 0,
  showCounter: true,
};
//using reactToolkit
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState, //initialState,
  reducers: {
    increment(state) {
      state.counter++; //react toolkit uses a internal package which checks for immutibility and if state is mutable it converts it to unmutable
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//using react-redux
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     // NOTE:  the object returned will not merge into the old state object but override the existing old state object   ,so it is important to  properly set all the key of an oject with proper value

//     // it is super important to return an copy of object  insted of mutating  the orginal object
//     // state.counter++;
//     // return state

//     //// avove two line of code are correct theoritically and practically but they mutate the orginal object which makes hard to track the various state , creates problem when debugging and so on.
//     // the  object and array  pass value by reference that mean that they do not pass the actual value but pointer to the reference(stored in stack) where thet value is located(heap).
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter + -1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toogle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };
// const store = createStore(counterReducer);

// const store = createStore(counterSlice.reducer);// it will be problem to use the reducer of multiple slice  using the createStore method.

const initialAuthState = {
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
const store = configureStore({
  //   reducer: counterSlice.reducer, // single global state
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer }, //multiple global state slice
});
export const counterActions = counterSlice.actions; // consist of the function withsame name as  reducers function which are used to uniquely identify the  reducers state
export const authAction = authSlice.actions;
export default store;

//we neeed to provide store and store is provided to the highest component in dom here index.js
