const express = require("express");
const logout = express.Router();

logout.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).json({ message: "ERROR LOGOUT USER" });
        }
        res.clearCookie("user_sid").redirect("/");
    });
});

module.exports = logout;
