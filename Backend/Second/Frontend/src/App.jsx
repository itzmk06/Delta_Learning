import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";


function App() {
  const [jokes, setJokes] = useState([])
  useEffect(()=>{
    fetchData();
},[])  

  const fetchData=async()=>{
    try{
      const response=await axios.get('/api/jokes/')
      console.log(response.data)
      setJokes(response.data);
    }catch(err){
      console.log(err);
    }

  }

  
  return (
      <div>
        <h1>Hello World!</h1>
        <h4>Jokes:{jokes.length}</h4>
        <div>
          {
            jokes.map((joke)=>{
                return <div key={joke.id}>
                    <h1>{joke.content}</h1>
                </div>
            })
          }
        </div>
      </div>
  );
}

export default App;
