const React = require("react");

module.exports = function Login({}) {
    return (
        <div className="container mt-5">
            <form name="login-form" className="col-md-6 offset-md-3">
                <h1 className="mb-4">Login Page</h1>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input type="text" name="email" className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enter
                </button>
            </form>
        </div>
    );
};
