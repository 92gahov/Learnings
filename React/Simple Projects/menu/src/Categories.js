import React from 'react';

const Categories = ({ filterItems, categories }) => {
    return (
        <div className='btn-container'>
            {
                categories[0].map((category, index) => {
                    return (
                        <button type='button' className='filter-btn' key={index} onClick={() => filterItems(category)}>{category}</button>
                    )
                })
            }
        </div>
    )
};

export default Categories;