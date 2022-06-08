import React from 'react';

const Login = () => {
    return (
        <div>
            <h1> Login Your account</h1>
            <form action="">
                <input type="email" placeholder="Enter Email" /><br /><br />
                <input type="password" placeholder="Enter Password" /><br /><br />
                <button type="submit"> Submit Now</button>
            </form>

        </div>
    );
};

export default Login;