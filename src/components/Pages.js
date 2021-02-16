import React from 'react';

function Pages(props) {
    const { 
        totalPages, 
        currentPage 
    } = props;

    return (
        <div className="pages">
            <div className="pages__container container">
                {
                    currentPage != 1 
                        ? <button name="back" onClick={props.setCurrentPage}>Назад</button> 
                        : null
                }
                {
                    currentPage != totalPages 
                        ? <button name="next" onClick={props.setCurrentPage}>Далее</button> 
                        : null
                }
            </div>
        </div>
    );
}


export default Pages;