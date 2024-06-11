import React from 'react';
import './styles/paginate.css'

const Paginate = ({page, setPage, total}) => {
    const handleLess = () => {
        if (page > 1){
            setPage(page-1);
        }
    }

    const handlePlus = () => {
        if(page < total){
            setPage(page+1);
        }
    }
  return (
    <div>
        <button className='paginate_prev' onClick={handleLess}>Prev </button>
        <span className='paginate_status'> {page} / {total} </span>
        <button className='paginate_next' onClick={handlePlus}> Next</button>
    </div>
  )
}

export default Paginate;