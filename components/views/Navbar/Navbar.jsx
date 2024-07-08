const React = require("react");

module.exports = function Navbar({ user }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                Площадка для объявлений
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    {user ? (
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">
                                Logout
                            </a>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item">
                                <a className="nav-link" href="/register">
                                    Register
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                        </>
                    )}
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
