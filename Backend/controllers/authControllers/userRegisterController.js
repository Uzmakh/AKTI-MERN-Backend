const User = require("../../models/Users.js");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const userRegisterController = async (req, res) => {
    // Catch data from input
    const {
        firstName,
        lastName,
        email,
        password,
        dob,
        phoneNumber,
        country,
        gender,
        interests,
        hobbies,
        skills,
        experience,
    } = req.body;
    const profileImage = req.file.filename;

    // Checking the validations results
    const errors = validationResult(req);

    // If there are errors, return bad request and errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: email });
        if (user) {
            return res.status(400).json({
                success: false,
                error: "User with this email already exists",
            });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hashSync(password, salt);

        // Save the user data in MongoDB
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            dob,
            phoneNumber,
            country,
            gender,
            interests,
            hobbies,
            skills,
            experience,
            profileImage,
        });

        // Save the new user to the database
        await newUser.save();

        // Respond with a success message
        return res
            .status(201)
            .json({ message: "User registered successfully", user: newUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = userRegisterController;