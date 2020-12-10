import React, {Component} from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';
import Favorites from './Favorites';

class AccountInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            UserInfo: [],
            MyFavorites: [],
            Name: "Sample Name"
        }
    }

    render() {
           return(
             <div className="account-info">
              <Navbar showSignIn="show"/>
                <div className="signin-message"><p>Welcome {this.state.Name}!</p></div>
                 <div className="account-options">
                  <div className="favorites-group">
                   <div className="favorites-icon"> <span className="fa fa-star fa-lg"></span> </div>
                   <div className="favorites">Favorites</div>
                  </div>
                  <div className="settings-group">
                   <div className="settings-icon"> <i className="fa fa-cog fa-lg"></i> </div>
                   <div className="settings">Settings</div>
                  </div>
                 </div>
                 <div className="options-display">
                  <Favorites homes={this.props.homes} favorites={this.props.favorites}/>
                 </div>
                  <div className="homes-slide">Recommended Homes</div>
             </div>
            );
        }
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {
        favorites: state.favorites,
        homes:state.homes
    }
}

export default connect(mapStateToProps)(AccountInfo);