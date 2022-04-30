import React, { useEffect, useState } from "react";
import {Container, Division, Global, HalfA, HalfB} from './styles.js'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  let[loteryOptions,setLoteryOptions]=useState([])
  let [loteryData,setLoteryData]=useState([]);
  let [loteryNumbers, setLoteryNumbers]=useState({});
  let [backgroundColor, setBackgroundColor]=useState('#6BEFA3');
  let [loading, setLoading]=useState(true);

  const colorPallete = [{name:'mega-sena',color:'#6BEFA3'},{name:'quina',color:'#8666EF'},
  {name:'lotofácil',color:'#DD7AC6'},{name:'lotomania',color:'#FFAB64'},{name:'timemania',color:'#5AAD7D'},{name:'dia de sorte',color:'#BFAF83'}];

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
  const sortNumbers = async(value)=>{
    if(value===''){
      setLoteryNumbers({});
      return;
    }
    setLoading(true);
    const numconcurso=loteryData.find(i=>i.loteriaId.toString()===value)
    const response = await fetch(
      `https://brainn-api-loterias.herokuapp.com/api/v1/concursos/${numconcurso.concursoId}`
    );
    const json = await response.json();
    setLoteryNumbers(json);
    setLoading(false);
  }
  const changeColor= (e)=>{
    const selectedOption = loteryOptions.find(i=>i.id.toString()===e.target.value);
    let newColor = colorPallete.find(i=>i.name===selectedOption.nome);
    setBackgroundColor(newColor.color);
  }
  useEffect(()=>{
      loteryData.length===0?fetchData():sortNumbers(loteryOptions[0].id.toString());
    },[loteryData]);

  return (
    <div>
      <Global/>
      <Container bg={backgroundColor}>
        <HalfA>
          <div>
            <select onChange={(e)=>{sortNumbers(e.target.value);changeColor(e)}}>
              {loteryOptions.map((i)=>
                <option value={i.id}>{i.nome}
                  </option>
              )}
            </select>
          <FontAwesomeIcon icon={faCaretDown} pointerEvents='none' color="#848484"></FontAwesomeIcon>
          </div>
          <h1> MEGA-SENA</h1>
          <footer> 4531</footer>
        </HalfA>
        <HalfB>
          <div></div>
          <ul>
            {!loading?loteryNumbers.numeros.map(i=><li>{i}</li>):<div>Loading...</div>}
          </ul>
          <footer> Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</footer>
        </HalfB>
      </Container>
      
    </div>
  );
}

export default App;
