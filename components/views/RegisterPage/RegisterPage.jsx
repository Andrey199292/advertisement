const React = require("react");
const Layout = require("../Layout");
const Register = require("../../common/Register/Register");

module.exports = function RegisterPage({ user }) {
    return (
        <Layout user={user}>
            <Register />
        </Layout>
    );
};
