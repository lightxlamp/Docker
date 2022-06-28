import axios from 'axios'
import { useCallback, useState, useEffect } from 'react';
import './MainComponent.css'

const MainComponent = () => {
    const [values, setValues] = useState([]);
    const [value, setValue] = useState([]);
    // nginx will be used to redirect to the proper URL. 
    // nginx proxy will handle redirection from '/api/values/all' to '/values/all' (which is running on NodeJS)
    const getAllNumbers = useCallback(async () => {
        const values = await axios.get('/api/values/all')
        setValues(values.data.rows.map(row => row.number));
    }, [])

    const saveNumber = useCallback(
        async event => {
            event.preventDefault();

            await axios.post("/api/values", {
                value
            });

            setValue("");
            getAllNumbers();
        },
        [value, getAllNumbers]
    );

    useEffect(() => {
        getAllNumbers();
    }, []);

    return (
        <div>
            <button onClick={getAllNumbers}>Get all numbers</button>
            <br />
            <span className="title">Values</span>
            <div className="values">
                {values.map(value => (
                    <div className="value">{value}</div>
                ))}
            </div>
            <form className="form" onSubmit={saveNumber}>
                <label>Enter your value: </label>
                <input
                    value={value}
                    onChange={event => {
                        setValue(event.target.value);
                    }}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default MainComponent;
