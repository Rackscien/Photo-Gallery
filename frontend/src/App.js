import { useEffect, useState } from "react";
import Button from "./components/Button";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
import axios from "axios";


function App() {
  const {photos, setPhotos} = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:5000/api/get")
    .then((res)=>{
      console.log(res.data);
      setPhotos(res.data)
    })
    .catch((err)=> console.log(err));
  },[])

  return (
   <div className="App">
    <Navbar/>
    <Grid photos={photos}/>
    <Button/>
   </div>
  );
}

export default App;
