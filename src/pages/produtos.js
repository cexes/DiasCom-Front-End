import React,{useEffect,useState} from 'react'; 
import styles from '../components/prd.module.css';


function PrPage() {
 
  const [backEndData, setBackEndData] = useState([{}])
   useEffect(()=>{
     fetch("/produtos").then(
       response => response.json()
    ).then(
        data =>{
          setBackEndData(data);
        }
      )
  },[])

  return(
        
        <div className= {styles.container}>
            <h1>Produtos</h1>

             <div>
               {(typeof backEndData.singers === 'undefined')?(
                    <p>Loading </p>
                ):(
                  backEndData.singers.map((singers,i)=>(
                  <p key={i}>{singers} <br></br></p>
                      
              ))
            )}                     

 

             </div>
        </div>

           

    )
}

export default PrPage;
