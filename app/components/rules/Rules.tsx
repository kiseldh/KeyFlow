"use client"
import {useState, useEffect} from "react" 

export default function Rules() {
    const [open, setOpen]=useState(false)
    useEffect(() => {
        function keyDown(event: KeyboardEvent){
            if(event.key ==="Escape") {
                setOpen(false);
            }
        }
        document.addEventListener("keydown", keyDown)
    return () => {
        document.removeEventListener("keydown", keyDown)
    }
    },
    )
    return(
        <div>
     <button className="butt" onClick={() => setOpen(true)}>Правила</button>  
     {open && ( 
        <div className="overlay" onClick={() => setOpen(false)}>
        <div className="rul">
                <div className="rul_window">

                    <h1>Тут будут правила</h1>
                     <h1>И тут будут правила</h1>
                      <h1>И тут тоже будут правила</h1>
                    
                </div>
            
            <button className="butt" id="butt2" onClick={() => setOpen(false)}>Закрыть</button>  
        </div>
        </div>
     )
     }
     
     </div>
     
    )
}