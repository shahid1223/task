import React, { useContext } from 'react';
import Context from '../state/Context';
import { Link } from 'react-router-dom';

const SecondPage = () => {

    const { countryArr, addCountry, arr } = useContext(Context);

    return (
        <div>
            {countryArr.map((data, index) => {
                return (
                    <button onClick={() => addCountry(data)} key={index}>{data.name}</button>
                )
            })}

            <Link to="/"><button type="button" class="btn btn-success" >Success</button></Link>


        </div>
    )
}

export default SecondPage