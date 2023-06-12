const rentRoute = require('express').Router()
const rentController = require('../controller/rentController')
const adminAuth = require('../middleware/adminAuth')
const authMiddleware = require('../middleware/authMiddleware')

rentRoute.get(`/all` , authMiddleware,rentController.getAll)
rentRoute.get(`/single/:id` ,authMiddleware,rentController.getSingle)
rentRoute.post(`/create` , authMiddleware,adminAuth,rentController.create)
rentRoute.patch(`/update/:id` ,authMiddleware,adminAuth,rentController.update)
rentRoute.delete(`/delete/:id` , authMiddleware,adminAuth, rentController.delete)

module.exports = rentRoute