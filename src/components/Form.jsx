import React from 'react';
import PropTypes from 'prop-types';

import useSelect from '../hooks/useSelect';

import styles from './Form.module.css';

const Form = ({ setCategory }) => {

    const OPTIONS = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Bussines' },
        { value: 'entertainment', label: 'Entertainment' },
        { value: 'health', label: 'Health' },
        { value: 'science', label: 'Science' },
        { value: 'sports', label: 'Sports' },
        { value: 'technology', label: 'Technology' },
    ];

    const [category, SelectNews] = useSelect('general', OPTIONS);

    const searchNews = e => {
        e.preventDefault();

        setCategory(category);

    }

    return (
        <div className={`row ${styles.search}`}>

            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={searchNews}
                >
                    <h2 className={styles.heading}>Find News by category</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`btn-large amber darken-2 ${styles['btn-block']}`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>

        </div>
    );

}

Form.propTypes = {
    setCategory: PropTypes.func.isRequired
}

export default Form;