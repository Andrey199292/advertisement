const React = require("react");
const Layout = require("../Layout");
const Login = require("../../common/Login/Login");

module.exports = function LoginPage({ user }) {
    return (
        <Layout user={user}>
            <Login />
        </Layout>
    );
};
