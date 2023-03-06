import { useState } from "react";
import axios from "axios";


function RegisterNewPrd() {
      const [newPrd, setNewPrd] = useState({
         type: '',
         price: undefined,
         description: '',
         amount: undefined,
         image: undefined,

      })
    
     const [image,setImage] = useState('');
    
  
    function SetForm(event, key){
        setNewPrd({...newPrd,
            [key]:event.target.value})
    }

    async function Handle(event){
         event.preventDefault()
         //const send = await axios.post('/registernewprd',newPrd);
         console.log(image)
         
         
     };

    return (
        <div>
            <form onSubmit={Handle} enctype="multipart/form-data">
                <input type="text"
                 name="type"
                 placeholder="tipo"
                 value={newPrd.type}
                 onChange={(event)=>SetForm(event,'type')}
                 ></input>
             
                <br/>
                <input type="number"
                 name="price"
                 placeholder="preço"
                 value={newPrd.price}
                 onChange={(event)=>SetForm(event,'price')}
               ></input><br/>
             
                <input type="text" 
                name="description"
                value={newPrd.description}
                placeholder="Descrição"
                onChange={(event)=>SetForm(event,'description')}
                ></input>
                <br/>

                <input 
                type="number" 
                name="amount"
                placeholder="Quantidade"
                value={newPrd.amount}
                onChange={(event)=>SetForm(event,'amount')}
                ></input>

                <input 
                type='file'
                name ="SendImage"
                
                onChange={event => setImage(event.target.files[0])
}
                ></input>


                <button type="submit">Enviar</button>
            </form>
         </div>
    );
};

export default RegisterNewPrd;

