import React, {Component} from 'react';


class Recommendedhomes extends Component{
    render() {
        return(
            <div className="recommended-container">
                {this.props.homes.map( home =>{
                return <img width="200px" key={home.id} height='150px' src={home.img} />}) }
            </div>
        )
    }
}

export default Recommendedhomes;