const UserRepository = require("../repository/user-repository");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in service level");
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const user = await this.userRepository.getById(userId);
            return user;
        } catch (error) {
            console.log("Something went wrong in service level");
            throw { error };
        }
    }

    async signIn(email, plainPassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            const passwordMatch = this.checkPassword(
                plainPassword,
                user.password
            );
            if (!passwordMatch) {
                console.log("Password not matched");
                throw { error: "incorrect password" };
            }

            const newJWT = this.createToken({
                email: user.email,
                id: user.id
            });

            return newJWT;
        } catch (error) {
            console.log("Something went wrong in Sign in process");
            throw { error };
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, "auth", { expiresIn: "1h" });
            return result;
        } catch (error) {
            console.log("Something went wrong in token creation");
            throw { error };
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, "auth");
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation");
            throw { error };
        }
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if (!response) {
                throw { error: "Invalid token" };
            }

            const user = await this.userRepository.getById(response.id);
            if (!user) {
                throw { error: "No user with the corresponding token exist" };
            }

            return user.id;
        } catch (error) {
            console.log("Something went wrong in token authentication");
            throw { error };
        }
    }

    checkPassword(userInputPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong in password comparision");
            throw { error };
        }
    }

    isAdmin(userId) {
        try {
            return this.userRepository.isAdmin(userId);
        } catch (error) {
            console.log("Something went wrong in service layers");
            throw { error };
        }
    }
}

module.exports = UserService;
