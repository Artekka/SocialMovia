const Login = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
   .then(response => response.json())
   .then(data => console.log(data));
    return (
        
        <div className="d-flex flex-column align-items-center">
        <form id="loginForm" className="">
            <div className="form-group">
                <div><label htmlFor="userName" className="col-form-label">Username</label>
                        <input type="text" id="userName" name="userName" placeholder="Enter your username" required className="mx-sm-3"></input>
                    </div>
                    <div>
                <label htmlFor="password" className="col-form-label">Password</label>
                <input type="text" id="password" name="password" placeholder="Enter your password" required className="mx-sm-3"></input>
                </div>
                <button type="button" className="btn btn-danger">Login</button>
            </div>
            </form>
            </div>
    )
}

export default Login