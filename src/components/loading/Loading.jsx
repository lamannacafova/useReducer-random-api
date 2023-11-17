import { useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";
const Loading =({loading,color,setLoading})=> {
  useEffect(()=>{
   setLoading(true)
  },[])
  return (
    <div className="sweet-loading">
      <PuffLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loading;
