import styles from "./Home.module.css";

import Page from "../Page/Page";
import Pagination from "../Pagination/Pagination";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Home(props) {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [dogsPerPage] = useState(8);

  useEffect(() => {
    async function Dogs() {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/dogs");
      setDogs(res.data);
      setLoading(false);
    }
    Dogs();
  }, []);

  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = dogs.slice(indexOfFirstDog, indexOfLastDog);

  const paginate=pageNumber=>setcurrentPage(pageNumber)

  return (
    <div className={styles.container}>
      <Pagination dogsPerPage={dogsPerPage} totalDogs={dogs.length} paginate={paginate} />
      <Page dogs={currentDogs} loading={loading}  />
    </div>
  );
  // const { dogs } = props;
  // const [page, setPage] = useState([]);
  // const [pageDogs, setPageDogs]= useState([])
  // useEffect(() => {
  //   if(dogs){
  //     for (let i = 0; i < dogs.length; i++) {
  //       setPageDogs([...pageDogs, dogs[i]])
  //       console.log(dogs[i])
  //       if((i+1)%6===0){
  //         setPage([...page, <Page dogs={pageDogs}/>])
  //         setPageDogs([])
  //       }
  //     }

  //   }
  // },[dogs])

  // return (
  //   <div>
  //     <Nav />
  //     {page.map((e, i)=>{
  //       return <li key={i.toString()}>{i+1}</li>
  //         {e}
  //     })}
  //   </div>
  // );
}
