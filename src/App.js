
import './App.css';
import { Link } from 'react-router-dom'

function Card(props){

  return(

  
      <div className='card'>
      
        <div className='image'>
        <img src={props.poster} alt="picture"
          className='card_img' />
        </div>
        
        <div className='title'>
        <h3 className='card__category'> {props.title}  </h3>
        </div>

        <div className='des'>
        <span className='card__title'> {props.instruction}  </span>
        </div>

        <div className='button'>  
          
           <Link to={props.destination}>
            <button> Register </button>
           </Link>
          
        </div>
      
      </div>

);
}

export default Card;