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
                 <p>Name</p>
                 <button>Edit Name</button>
                 </div>
                <div className="settings-name">Name goes here</div>
             </div>
             <div>
              <div className="birthday-setting">
                 <p>Birthday</p>
                 <button>Edit </button>
              </div>
              <div className="settings-birthday">BD goes here</div>
             </div>
             <div>
              <div className="email-setting">
                 <p>Email</p>
                 <button>Edit Name</button>
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