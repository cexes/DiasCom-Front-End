import { useRef, useState } from "react";
import axios from "axios";

function RegisterNewPrd() {
    const formData = new FormData();
      const [newPrd, setNewPrd] = useState({
         type: '',
         price: undefined,
         description: '',
         amount: undefined
    });
   
    const [image, setImage] = useState(null);

    function SetForm(event, key){
         setNewPrd({...newPrd,
            [key]:event.target.value})};

    const handlerImage = (event)=>{
        if(event.target.files[0]){
            imgRef.current.src = URL.createObjectURL(event.target.files[0])
         };setImage(event.target.files[0])
    };

    const imgRef = useRef();

    const SendFormForAPi = async(event)=>{
        event.preventDefault();
        const data = new FormData();
        data.append("type",newPrd.type);
        data.append("price",newPrd.price);
        data.append("description",newPrd.type);
        data.append("amount",newPrd.amount);
        data.append("image",image)
        
        try {
            await axios.post('/registernewprd',data,{
                headers: {
                    "Content-Type": `multipart/form-data`
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={SendFormForAPi}>
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
                <br></br>
                <input 
                type="file" 
                name="image"
                placeholder="image"
                onChange={handlerImage}
                ></input>
                <img  ref={imgRef}/>
                <br></br>
                <br></br>
                <button type="submit" >Enviar</button>

            </form>

         </div>
    );
};

export default RegisterNewPrd;

