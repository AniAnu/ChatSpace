'use strict';
const router = require('express').Router();
module.exports = () => {
    
    let routes = {
        
        'get' : {
            '/': (req, res, next) => {
                res.render('login');
            },
            '/rooms': (req, res,next) => {
                res.render('rooms');
            },
            '/chat': (req, res, next) => {
                res.render('chatroom');
            }
        },
        'post': {
            
        }
    }
    // Iterating through the routes object and mounting the routes
    let registerRoutes = (routes, method) => {
        
        for (let key in routes) {
            if(typeof routes[key] === 'object' && routes[key] !== null && !(routes[key] instanceof Array)) {
                registerRoutes(routes[key], key)
                
            } else {
                // Registering the routes
                if(method === 'get') {
                    router.get(key, routes[key]);
                } else if(method === 'post') {
                    router.post(key, routes[key]);
                }
            }
        }
    }
    // Invoking the routes
    registerRoutes(routes);
    return router;
    
}