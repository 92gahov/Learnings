const express = require('express');
const workoutControllers = require('../controllers/workoutControllers');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', workoutControllers.getWorkouts);

router.get('/:id', workoutControllers.getWorkout);

router.post('/', workoutControllers.createWorkout);

router.delete('/:id', workoutControllers.deleteWorkout);

router.patch('/:id', workoutControllers.updateWorkout);

module.exports = router;