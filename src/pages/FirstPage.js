import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../state/Context';

const FirstPage = () => {

    const { arr } = useContext(Context);
    return (
        <div>
            <Link to="/second"><button>Select Country</button></Link>
            {arr.length > 0 && arr.map((data, index) => {
                return (
                    <button key={index} type="button" class="btn btn-success">{data.name}</button>
                )
            })}
        </div>
    )
}

export default FirstPage