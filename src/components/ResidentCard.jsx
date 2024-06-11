
import { useEffect } from 'react';
import UseFetch from '../hooks/UseFetch';
import './styles/residentcard.css';

const ResidentCard = ({info}) => {    
    //console.log(info);
  const [resident, getResident]= UseFetch();

  useEffect(() => {
    getResident(info);
  }, [])
  
  // console.log(resident);

  return (
    <article className='residentcard'>
      <figure className='residentcard_img'>
        <img src={resident?.image} alt="character image" />
        <figcaption className='residentcard_status'>
          <div className={`residentcard_circle ${resident?.status}`}></div>
          <span>{resident?.status}</span>
        </figcaption>
      </figure>
      <h2 className='residentcard_name'>{resident?.name}</h2>
      <hr className='residentcard_separator'  />
      <ul className='residentcard_list'>
        <li className='residentcard_item'>
          <span>Specie</span>
          <span>{resident?.species}</span>
        </li>
        <li className='residentcard_item'>
          <span>Origin</span>
          <span>{resident?.origin.name}</span>
        </li>
        <li className='residentcard_item'><span>Episodes where appear</span>
        <span>{resident?.episode.length}</span>
      </li>
      </ul>
    </article>
  )
}

export default ResidentCard;