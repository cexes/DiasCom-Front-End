import React from 'react';
import styles from './nav.module.css'
import SlideShow from './slideshow'
import {Link} from 'react-router-dom'


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
                <Link to="/" style={{ textDecoration: 'none'}}><li>Home</li></Link>
                <Link to="/produtos" style={{ textDecoration: 'none'}}><li>Produtos</li></Link>
                <Link to="https://www.instagram.com/" style={{ textDecoration: 'none'}}><li>Redes Sociais</li></Link>

                </ul>
                

                <div className={styles.slideContainer}>
                
              </div>
              
                </div>
               

            
          </div>


    
  )  

}

export default Navegation