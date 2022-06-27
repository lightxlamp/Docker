// import axios from 'axios'
import { useCallback } from 'react';

const MainComponent = () => {

    const getAllNumbers = useCallback(() => {

    }) 

    return (
        <div>
            <button onClick={getAllNumbers}>
                GetAllNumbers
            </button>
        </div>
    )
}

export default MainComponent;