const express = require('express');
const router = express.Router();


const { authorizer } = require('./middlewares/authorizer');
const { jwtAuthorizer } = require('./middlewares/jwtAuthorizer');


const categoriesRoutes = require('./categorias');
router.use('/categories', categoriesRoutes);


const usuariosRoutes = require('./usuarios');
router.use('/usuarios', usuariosRoutes);

const vacunasRoutes = require('./vacunas');
router.use('/vacunas', vacunasRoutes);

const carnetRoutes = require('./carnet');
router.use('/carnet', carnetRoutes);

const citasRoutes = require('./citas');
router.use('/citas', citasRoutes);

const securityRoutes = require('./security');
const cashflowRoutes = require('./cashflow');
router.use('/cashflow', authorizer, jwtAuthorizer, cashflowRoutes);
router.use('/auth', authorizer, securityRoutes);
module.exports = router;
