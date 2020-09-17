import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


function Home() {
  return (
    <div className="container-fluid">
      <div className = "row-fluid home-nav-row">
       <div className="col-12 home-Nav">
         <div className="inner-Nav">
         <Navbar className="HomeNav" showFilter={`Don't show`} showSignIn={'show'}/>
         </div>
       </div>
      </div>
     <div className = "row">
      <div className="Main-Text col-12">
        <div className = "inner">
       <h3>Ready to start your home search? </h3>
       <Link to="/search"><button className="btn btn-danger">Get Started</button></Link>
        </div>
        </div>
       <div>
        <div className="sellpic col-12">
         <div className = "selling text-center">
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