import React, { useState } from 'react';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here
        console.log('Registration form submitted');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <style
                dangerouslySetInnerHTML={{
                    __html:
                        "\n        :root{\n    --color-1: #0f0021;\n    --color-2: #00002c;\n    --color-3: #fcb045;\n    --color-4: #23d18b;\n    --color-5: #29b8db;\n\n    --background-gradient: linear-gradient(to bottom right, var(--color-1), var(--color-2),#0A2E58,#155C84, #1F8AAF, var(--color-5));\n}\n*{\n    font-family: roboto;\n}\n::-webkit-scrollbar{\n    display: none;\n}\nbody{\n    height: 100vh;\n    background: var(--background-gradient);\n}\n.container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\nimg{\n    position: absolute;\n    top: 0;\n    width: 300px;\n}\n.register-card{\n    width: 40rem;\n    background-color: var(--color-2);\n    border-radius: 10px;\n    padding: 20px;\n}\ninput{\n    width: 38%;\n    border-radius: 5px;\n    border: 2px solid white;\n    background-color: transparent;\n    color: white;\n    font-size: 15px;\n    padding: 10px;\n    margin: 10px;\n    \n}\ninput::placeholder{\n    color: rgb(148, 148, 148);\n}\ninput:focus{\n    outline: none;\n}\nh1{\n    color: white;\n    text-align: center;\n    margin: 10px;\n    font-size: 40px;\n}\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=submit]{\n    background-color: var(--color-4);\n    color: white;\n    border: none;\n    padding: 10px;\n    border-radius: 5px;\n    margin: 10px;\n    cursor: pointer;\n    width: 15rem;\n}\ninput[type=submit]:hover{\n    background-color: var(--color-3);\n    transition: background-color 0.9s;\n}\nform{\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.input-group{\n    width: 100%;\n    display: flex;\n    justify-content: center;\n}\n@media screen and (max-width: 600px){\n    .input-group{\n        flex-direction: column;\n        margin: auto;\n    }\n    input{\n        width: 80%;\n        margin: 10px auto;\n    }\n    .register-card{\n        margin-top: 170px;\n    }\n    body{\n        height: unset;\n    }\n}\n    "
                }}
            />
            <code>
                <div className="container">
                    <img src="logo-removebg-preview.png" alt="" />
                    <div className="register-card">
                        <h1>Register</h1>
                        <form action="register.php" method="post">
                            <div className="input-group">
                                <input type="text" name="fname" placeholder="First name" />
                                <input type="text" name="lname" placeholder="Last name" />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    required=""
                                />
                                <input
                                    type="number"
                                    name="mobile"
                                    id=""
                                    placeholder="Mobile"
                                    maxLength={10}
                                    max={9999999999}
                                />
                            </div>
                            <div className="input-group">
                                <input type="email" name="email" id="" placeholder="Email" />
                                <input type="text" name="profession" placeholder="Profession" />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required=""
                                />
                                <input
                                    type="password"
                                    name="cpassword"
                                    placeholder="Confirm Password"
                                    required=""
                                />
                            </div>
                            <input
                                type="submit"
                                name="submit"
                                className="login login-submit"
                                defaultValue="Register"
                            />
                        </form>
                    </div>
                </div>
            </code>
        </>
    );
};
