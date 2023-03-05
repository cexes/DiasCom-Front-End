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
            <h1>Produtos</h1>
            {prds.length === 0 ? (<p>Caregando...</p>) : (
                prds.map((produtos) =>(
                    <div key={produtos.id}> 
                      <h2>{produtos.type}</h2>
                     

                    </div>
                ))
            )}
    
            
        </div>

    )
}

export default PrPage;
