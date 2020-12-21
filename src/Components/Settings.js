import React, {Component} from 'react';

class Settings extends Component{
    constructor(props) {
        super(props);
        this.state={
            UserInfo:[]
        }
    }

    render() {
        return(
            <div className="Setting-outer">
             <div>
                 <div className="name-setting">
                 <p className="name" >Name</p>
                 <button className="edit-button">Edit Name</button>
                 </div>
                <div className="settings-name">Name goes here</div>
             </div>
             <div>
              <div className="birthday-setting">
                 <p className="birthday">Birthday</p>
                 <button calssName="edit-button">Edit </button>
              </div>
              <div className="settings-birthday">BD goes here</div>
             </div>
             <div>
              <div className="email-setting">
                 <p className="email">Email</p>
                 <button className="edit-email">Edit Name</button>
              </div>
              <div className="settings-email">Name goes here</div>
             </div>
             <div>
              <div className="favorites-setting"> 
                 <p>Make profile private</p>
                 <button>Edit Fav</button>
              </div>
              <div className="settings-favorites">Button goes here</div>
             </div>
            </div>
        )
    }
}

export default Settings;