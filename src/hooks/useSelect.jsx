import React, {useState} from 'react';

const useSelect = (stateInit, options) => {

    const [state, setState] =useState(stateInit);

    const SelectNews = () => (

        <select
        className="browser-default"
        value={state}
        onChange={e => setState(e.target.value)}
        >
            <option value="">-- Select --</option>
            {options.map(option =>(

                <option key={option.value} value={option.value}>{option.label}</option>
            ))}

        </select>

    )

    return [state, SelectNews];

}

export default useSelect;