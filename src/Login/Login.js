import { useHistory } from "react-router-dom";

const Login = () => {
    const history = useHistory();
    const logInUser = () => {
        localStorage.setItem("loggedInUser", {user: "user"})
        history.push("/");
    }
    return <><h3>Login</h3>
        <p>
            <input type="text" placeholder="UserName" />
        </p>
        <p>
            <input type={'password'} placeholder="Password" />
        </p>
        <button onClick={logInUser}>Login</button>
    </>
}

export default Login;