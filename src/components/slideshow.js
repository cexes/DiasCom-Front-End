import React, { useEffect, useRef, useState } from 'react';
import {motion} from 'framer-motion'
import imageFront1  from './pictures/camiseta_corinthians.jpg'
import imageFront2  from './pictures/camiseta_preta.jpg'
import imageFront3  from './pictures/camiseta-queen.jpg'
import imageFront4  from './pictures/guns n roses.jpg'
import styles from './slides.module.css'



function Slide() {
    const slides = useRef();
   const images = [imageFront1,imageFront2,imageFront3,imageFront4];
   const [width, setWidth] = useState(0)
    useEffect(() =>{
        console.log(slides.current?.scrollWidth, slides.current?.offsetWidth)
        setWidth(slides.current?.scrollWidth - slides.current?.offsetWidth)
    },[])
   return(
      <motion.div ref={slides} className={styles.slides} whileTap={{cursor: "grabbing"}}>
         <motion.div className={styles.inner}
          drag="x"
          dragConstraints={{right: 0, left:-width}}
          initial={{x:100}}
          animate={{x:0}}
          transition={{duration :0.8}}
         >
            {images.map(image =>(
               <motion.div className={styles.image} key={image}>
                  <img src={image} />
                  
               </motion.div>
            ))}

         </motion.div>
      </motion.div>
    
   )
}

export default Slide;