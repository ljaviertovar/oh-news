import React from 'react';
import PropTypes from 'prop-types';

import New from './New';

const ListNews = ({ news }) => (

    <div className="row">
        {news.map(nnew => (
            <New
                key={nnew.url}
                nnew={nnew}
            />
        ))}
    </div>

);

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}

export default ListNews;