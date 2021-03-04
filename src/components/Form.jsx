import React from 'react';

import useSelect from '../hooks/useSelect';

import styles from './Form.module.css';

const Form = () => {


  const [category, SelectNews ] = useSelect();

    return (
        <div className={`row ${style.search}`}>

            <div className="col s12 m8 offset-m2">
                <form>
                    <h2 className={styles.heading}>Find News by category</h2>

                    <SelectNews/>

                    <div className="input-field col s12">
                        <input
                        type="submit"
                        className={`btn-large amber darken-2 ${sttyles['btn-block']}`}
                        value="Search"
                        />
                    </div>
                </form>
            </div>

        </div>
    );

}

export default Form;