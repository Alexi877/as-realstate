import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div className="appcontainer container-fluid">
     <div className = "row">
      <div className="col-xs-12">
       <div className = "Main-Text">
        <div className = "inner">
       <h3 >Ready to start your home search? </h3>

       <Link to="/search"><button className="btn btn-danger" >Get Started</button></Link>
        
        </div>
       </div>
        <div className="sellpic">
         <div className = "selling">
        <h3>Interested in selling? </h3>
        <p> Check out what your house is worth!</p>
        </div>
        </div>
       </div>
     </div>
    </div>
  );
}

export default Home;