import React, { Component } from 'react';
import './registration.css';
class registration extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  };
    // }
    render() {
        return (
            <React.Fragment>
                <div className="Reg_container">
                    <h4 style={{textAlign:"center", color:"#2C5364",background:"#D3CCE3",padding:"10px"}}>
                        This Is registration Page
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
                        <button type = "submit">Submit</button>
                    </form>
                </div>

            </React.Fragment>    
        );
    }
}

export default registration;