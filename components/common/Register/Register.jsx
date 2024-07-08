const React = require("react");

module.exports = function Register({}) {
    return (
        <div className="container mt-5">
            <h2 className="mb-4">Register</h2>
            <form name="register-form" className="col-md-6 offset-md-3">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email:
                    </label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password:
                    </label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
};
