import { useEffect, useState } from 'react';
import Slider from '../../header/Slider';
import Loader from '../loader comp/loader';
import Sections from './Sections';

const Home=()=>{

    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{setLoading(false)},(Math.round((Math.random()*10000))%6000)+2000)
    })

    return(
        <>{
            loading? 
            <div style={{'width':'100%','height':'100vh'}}><Loader /></div> :
                <>  
                    <Slider />
                    <Sections />
                </>
        }
        </>
    )
}

export default Home;