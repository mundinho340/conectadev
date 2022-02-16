import React from 'react';
import { GoogleOutlined, FacebookOutlined, GithubOutlined, AppleOutlined }
 
from '@ant-design/icons'

const Login = () => {
    return(
        <div id="login-page">
            <div id="login-card">
                <h2>Welcome to Buzi!</h2>

                <div
                    className="login-button google"
                >
                    <GoogleOutlined /> Sign In with  Google
                </div>
                <br /> <br />

                <div
                    className="login-button facebook"
                >
                    <FacebookOutlined /> Sign In with Facebook
                </div>
                <br /> <br />
                <div className="login-button github">
                    <GithubOutlined /> Sign In with Github
                </div>
                <br /> <br />
                <div className="login-button Apple">
                    <AppleOutlined />
                </div>

            </div>

        </div>
    );
}

export default Login;