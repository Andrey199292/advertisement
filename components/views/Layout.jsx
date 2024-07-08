const React = require("react");
const Navbar = require("./Navbar/Navbar");

module.exports = function Layout({ children, title, user }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <link
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    rel="stylesheet"
                />
                <link rel="stylesheet" href="/css/style.css" />
                <script defer src="/js/login.js" />
                <script defer src="/js/register.js" />
                <title>{title}</title>
            </head>
            <body>
                <Navbar user={user} />
                {children}
                <script defer src="/js/client.js" />
            </body>
            <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </html>
    );
};
