import './tarjetas.css'
import { useState,useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


export function Tarjeta({num,dato,id}){

    const [ref,inView] = useInView()

    const [isActive,setIsActive] = useState(false)

    useEffect(() => {

        if(inView && isActive == false){
            setIsActive(!isActive)
        }
        
    },[inView,isActive])
    
    const classActive = `${isActive ? 'active' : ''}`

    return(
    
        <div className={`datos ${classActive} ${id}`}>
            <div className={`numero`}>{num}</div>
            <p ref={ref} className='texto'>{dato}</p>
        </div>
    )
}