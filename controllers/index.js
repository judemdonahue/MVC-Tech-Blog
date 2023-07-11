// dependencies 
const router = require('express').Router();
const apiRoutes = require('./');
const homeRoutes = require('./htmlroutes');
const dashboardRoutes = require('./');

//use pathing routes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.export = router;