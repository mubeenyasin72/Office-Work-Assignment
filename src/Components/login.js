import React, { Component } from 'react';
import './registration.css';
class login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <React.Fragment>
                 <div className="Reg_container">
                    <h4 style={{textAlign:"center", color:"#ffff",padding:"10px"}} className="h4_style">
                        This Is Login Page
                    </h4>
                        <form style={{textAlign:"center"}}>
                        <label style={{background:"#e7e9bb", padding:"10px"}}>Enter UserID</label>
                        <div>
                            <input type ="text" name = "userId" placeholder="Enter the UserID "
                            />
                        </div>
                        <label style={{background:"#e7e9bb", padding:"10px"}}>Enter Password</label>
                        <div>
                            <input type ="password" name = "body" placeholder="Enter The Password"
                            />
                        </div>
                        <button type = "submit">Login</button>
                    </form>
                </div>
            </React.Fragment>    
        );
    }
}

export default login;


