import React from 'react';

const Options = ({op,id}) => {
    return (
        <div className='bg-white m-4 p-4 rounded-lg'>
            <input type="radio" name={id} id={id} value={op} /> {op}
        </div>
    );
};

export default Options;