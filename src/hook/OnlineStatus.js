import { useEffect, useState } from "react";

const OnlineStatus = ()=>{

    const [ isOnline, setIsOnline ] = useState(true);
    
    useEffect(()=>{
        window.onload()
    },[]);


    return(
        <div>
            <p>Status : 258</p>
        </div>
    )
};

export default OnlineStatus;