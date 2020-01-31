const jwt = require('jwt-simple');
const secret = require('../keys/secret');



function isUserAuthorized(allowedRoles) {
    return function (req, res, next) {

        //get user role from coockie
        const { siteCoockie } = req.cookies;
        if (siteCoockie !== undefined) {
            const cookie = jwt.decode(siteCoockie, secret);
            console.log(cookie)
            req.userRole = cookie.role || false;
        } else {
            req.userRole = false;
            res.send(403);
        }
        //check if user role is in the roles allowed to see the path
        if (req.userRole !== false && allowedRoles.includes(req.userRole)) {
            next()
        } else {
            res.send(403);
        }
    }
    
}

module.exports = { isUserAuthorized }
