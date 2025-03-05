import express from 'express'
import { deleteUser, getUserById, getUsers, login, register } from '../controllers/userController'
import { z } from 'zod';
import { validate } from '../middlewares/validate';


const router = express.Router()

const UserSchema = z.object({
  email: z.string().email("Not a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters long."),
});

// Get all users
router.get('/', getUsers)

router.post('/login', login)

router.post('/register', validate(UserSchema), register);

// Get a user by ID
router.get('/:id', getUserById)

// Delete a user by ID
router.delete('/:id', deleteUser)

export default router
