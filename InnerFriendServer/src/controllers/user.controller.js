const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.toString() })
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ error: error.toString() })
    }
}

const createUser = async (req, res) => {
    const {email, password, confirmedPassword } = req.body;
    const existingUser = await User.findOne({email: email});

    if(existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    if (password !== confirmedPassword) {
        return res.status(400).send({ error: 'Passwords do not match' });
    }

    const salt = bcrypt.genSaltSync() //more secure
    const encryptedPassword = await bcrypt.hash(password, salt);

    try {
        const user = await User.create({
            email: email,
            password: encryptedPassword
        });
        return res.status(201).json({ message: 'User created', data: user});
    } catch (error) {
        return res.status(500).json({ error: error.toString() })
    }
}

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const user = await User.findOne({email: email});

    if(!user) {
        return res.status(400).json({ message: 'User not found' });
    }

    const checkPassword = bcrypt.compareSync(password, user.password)

    if (!checkPassword) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({
        id: user.id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '30d'
    })

    return res.status(201).json({ user: user, token: token});
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const updatedUser = await User.findById(req.params.id)
        res.status(200).send(updatedUser)
    } catch (error) {
        res.status(500).send({ error: error.toString() })
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        res.status(200).send("User deleted successfully")
    } catch (error) {
        res.status(500).send({ error: error.toString() })
    }
}



module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login
}