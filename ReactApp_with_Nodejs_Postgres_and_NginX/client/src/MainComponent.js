import axios from 'axios'
import { useCallback, useState } from 'react';
import './MainComponent.css'

const MainComponent = () => {
    const [values, setValues] = useState([]);
    // nginx will be used to redirect to the proper URL. 
    // nginx proxy will handle redirection from '/api/values/all' to '/values/all' (which is running on NodeJS)
    const getAllNumbers = useCallback(async () => {
        const values = await axios.get('/api/values/all')
        setValues(values)
    }) 

    return (
        <div>
            <button onClick={getAllNumbers}>
                GetAllNumbers
            </button>
            <br/>
            <br/>
            <span className='title'>Values</span>
            <div className='values'>
                {values.map((value) => <div className='value'>{value}</div>)}
            </div>
        </div>
    )
}

export default MainComponent;