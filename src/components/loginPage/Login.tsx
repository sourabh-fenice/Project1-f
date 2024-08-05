import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import './Login.css'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e: any) {
        e.preventDefault();

        try {
            let url = process.env.REACT_APP_Base_Url? process.env.REACT_APP_Base_Url : "http://localhost:3000"
            url = url + "/bo/apis/auth/login"
            const res = await axios.post(url, {
                email, password
            })
            if (res.status === 200) {
                console.log(res.data.data.user)
                const user = {
                    id: res.data.data.user._id,
                    email: res.data.data.user.email,
                    name: res.data.data.user.name
                }
                console.log(user)
                localStorage.setItem("user", JSON.stringify(user))
                window.location.href = "/home"
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div className="login ">
            <div className="rect">
                <h1 >Login</h1>
                <form action="POST">
                    <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" name='' id='' />
                    <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" name='' id='' />

                    <button className="submit-bt" onClick={submit}>Login</button>
                </form>
                <br />
                <p>OR</p>
                <br />
                <Link className="signup-link" to="/signup">Signup Page</Link>
            </div>
        </div>

    )
}

export default Login

