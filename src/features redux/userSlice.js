import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { client } from "../supabase/client";

const initialState = {
  email: null,
  name: null,
  lastname: null,
  id: null,
};

export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    const { email, password } = user;

    const respuesta = await axios.post(
      "api/users/login",

      {
        email: email,
        password: password,
      }
    );

    return respuesta.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({
      msg: "Credenciales incorrectas",
      codigo: 401,
    });
  }
});
export const isLoggedIn = createAsyncThunk(
  "user/isLoggedIn",
  async (thunkAPI) => {
    try {
      const respuesta = await axios.get("/api/users/PaginaUsuarios");

      return respuesta.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("No se encuentra usuario");
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => (state.user = action.payload), //cambio el estado actual de user por el nuevo usuario
    setUser: (state, action) => state.user, //simplemente retorno el usuario
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      // state.user = action.payload;
      //return state;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
      state.id = action.payload.id;
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.nombre = action.payload.nombre;
      // state.apellido = action.payload.apellido;
      // state.id = action.payload.id;
    },
    [login.rejected]: (state) => {
      state = initialState;
      return state;
    },
    [isLoggedIn.fulfilled]: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.lastname = action.payload.lastname;
      state.id = action.payload.id;
    },
  },
});
export const { getUser, setUser } = userSlice.actions;
export default userSlice.reducer;
