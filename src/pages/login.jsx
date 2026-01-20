import { useState } from "react";

function Login() {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    return(
        <div className="login">
            <div className="log-img">
                <img src="" alt="logo" />
            </div>

            <input 
            type="text" 
            placeholder="masukan email"
            />
        </div>
    )
}

export default Login;