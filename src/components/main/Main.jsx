import React, { useReducer, useState } from 'react'
import { AppReducer } from '../../features/AppReducer'
import axios from 'axios'
import Loading from "../loading/Loading"
const Main = () => {
    const initialState={
        loading:false,
        data:"",
        error:""
    }
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#36d7b7");
    const [state,dispatch]=useReducer(AppReducer,initialState)
    const fetchRandomImage = () => {
        dispatch({ type: "FETCH_START" });
        setTimeout(() => {
          axios.get("https://dog.ceo/api/breeds/image/random")
            .then(res => {
              console.log(res.data);
              dispatch({ type: "FETCH_SUCCESS", payload: res.data.message });
            })
            .catch(error => {
              dispatch({ type: "FETCH_ERROR", payload: error.message });
            });
        }, 1000);
      };
    return (
        <>
          <div className="h-full flex flex-col items-center justify-center py-[40px]">
          <button className="w-[150px] h-[45px] bg-black text-white rounded-[7px]" onClick={fetchRandomImage}>Get random image</button>
          {state.loading && loading ? <div className="h-[70vh] flex items-center justify-center"><Loading loading={loading} color={color} setLoading={setLoading}/></div> :<img src={state.data} alt="" className="w-[500px] h-[345px] mt-[35px]"/> }
          </div>
        </>
    )
}

export default Main
