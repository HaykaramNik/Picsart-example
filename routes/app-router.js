const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/group-controller');
const RateController = require('../controllers/rate-controller');

router.get('/groups', GroupController.groupsIndex);
router.post('/groups', GroupController.createGroup);
router.get('/groups/:groupId', GroupController.index);


router.get('/app/users/:userId/rates', RateController.index);
router.post('/app/users/:userId/rates', RateController.indexPost);



// router.post('/app/groups/:groupId/students', GroupController.createGroupStudent);
// router.post('/app/groups/:groupId/students/:studentId', GroupController.createGroupStudent);

module.exports = router;