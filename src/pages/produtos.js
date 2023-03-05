import axios from 'axios';
import React, {useEffect,useState } from 'react'; 
import styles from '../components/prd.module.css';

function PrPage() {

   const [prds, setPrds] = useState([]);
   const getPrds = async () => {
        const response =  await axios.get("/produtos");
        const data = response.data
        console.log(data)
        setPrds(data);
   };

    useEffect(()=>{
       getPrds(); 
    },[]);


    return(    
        <div className = {styles.container}>
            <h1>Produtos:</h1>
            {prds.length === 0 ? (<p>Caregando...</p>) : (
                prds.map((produtos) =>(
                    <div className= {styles.boxPrd} key={produtos.id}> 
                       <div> 
                         <img src='r'/>
                          <p>{produtos.type}</p>
                          <p>{produtos.price}</p>
                          <p>{produtos.description}</p>
                        

                        </div>
                    </div>
                ))
            )}
    
            
        </div>

    )
}

export default PrPage;
