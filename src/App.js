import React, { useEffect, useState } from "react";
import {Container, Division, Global, HalfA, HalfB} from './styles.js'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  let[loteryOptions,setLoteryOptions]=useState([])
  let [loteryData,setLoteryData]=useState([]);
  let [loteryNumbers, setLoteryNumbers]=useState({});
  let [emptySort,setEmptySort]=useState(true);

  
  const fetchData = async() =>{
    const response = await fetch(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias"
    );
    const json = await response.json();
    setLoteryOptions(json);

    const response2 = await fetch(
      "https://brainn-api-loterias.herokuapp.com/api/v1/loterias-concursos"
    );
    const json2= await response2.json();
    setLoteryData(json2);
  };

  const sortNumbers = async(e)=>{
    if(e.target.value===''){
      setLoteryNumbers({});
      setEmptySort(true);
      return;
    }
    const numconcurso=loteryData.find(i=>i.loteriaId.toString()==e.target.value)
    const response = await fetch(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${numconcurso.concursoId}`
    );
    const json = await response.json();
    setLoteryNumbers(json);
    setEmptySort(false)
  }

  useEffect(()=>{
      if(loteryData.length===0){
        fetchData();
      }
      console.log(loteryOptions);
    },[loteryData]);

  return (
    <div>
      <Global/>
      <Container>
        <HalfA>
          <div>
            <select onChange={sortNumbers}>
              <option></option>
              {loteryOptions.map((i)=>
                <option value={i.id}>{i.nome}
                  </option>
              )}
            </select>
          <FontAwesomeIcon icon={faCaretDown} pointerEvents='none' color="#848484"></FontAwesomeIcon>
          </div>
          <h1> MEGA-SENA</h1>
          <footer> 4531 - 07/04/2020</footer>
        </HalfA>
        <Division/>
        <HalfB>
          <div></div>
          <ul>
            {!emptySort?loteryNumbers.numeros.map(i=><li>{i}</li>):null}
          </ul>
          <footer> Este sorteio é meramente ilustrativo e não possuí nenhuma ligação com a CAIXA.</footer>
        </HalfB>
      </Container>
      
    </div>
  );
}

export default App;
