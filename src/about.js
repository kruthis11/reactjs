import React from 'react';
import './App.css';
import Card from './App';
import Sdata from './Sdata';
 
import esco from './images/Highest_Paying_Engineering_Courses_Infographic_aa78f4bdb5~3.png';
import plc from './images/programming-language.png';
import etc from './images/Teaching-Technology-Courses-to-Online-College-Students.jpg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


 function get(){
    return(

      <>
      
          <h1 className='heading'> Course Selection </h1>

         <div className='container'>

         <div className='row'>
          <div className='col-lg-4 inner' >
           
            <Card poster={esco}
        title={Sdata[0].title}
        instruction={Sdata[0].instruction}
        destination={Sdata[0].destination} />
          </div>
          <div className='col-lg-4 inner'>
          <Card poster={plc}
        title={Sdata[1].title}
        instruction={Sdata[1].instruction}
        destination={Sdata[1].destination} />
          </div>
          <div className='col-lg-4 inner'>
          <Card poster={etc}
        title={Sdata[2].title}
        instruction={Sdata[2].instruction}
        destination={Sdata[2].destination}/>
          </div>
        </div>
           
        </div>

        <footer style={{color:'#404F5E' , paddingTop:'50px' }}>
        
        </footer>

      </>
    );
 }

 export default get;