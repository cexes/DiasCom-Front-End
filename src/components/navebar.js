import React from 'react';
import styles from './nav.module.css'
import SlideShow from './slideshow'


function Navegation(){


  return(
    
          <div id ={styles.container}>
  
             <div className={styles.searchBox}>
                <h1>DiasCom .</h1>
                <input className={styles.search} type="text" id="txtSearch" placeholder="Buscar..."/>
                
              </div>
              
            <div className={styles.home}>
            <h4>Produtos em destaque :</h4>
                <SlideShow></SlideShow>
            </div>
              
               <div className={styles.nav}>
                <ul>
                <li>Home</li>
                <li>Produtos
                    <ul>
                        <li>Camisetas</li>
                        <li>Calças</li>
                        <li>Bermudas</li>
                        <li>Tênis</li>
                    </ul>
                </li>
                   <li>Redes Socias</li>
                </ul>
                <div className={styles.slideContainer}>
              
              </div>
              
                </div>
            
          </div>
    
  )  

}

export default Navegation