const { User, Role } = require("../models/index");
const user = require("../models/user");

class UserRepository {
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async destroy(userId) {
        try {
            await User.delete({
                where: {
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const user = await User.findByPk(userId, {
                attributes: ["email", "id"]
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async getByEmail(emailId) {
        try {
            const user = await User.findOne({
                where: {
                    email: emailId
                }
            });
            return user;
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }

    async isAdmin(userId) {
        try {
            const user = await User.findByPk(userId);
            const adminRole = await Role.findOne({
                where: {
                    name: "ADMIN"
                }
            });

            return user.hasRole(adminRole);
        } catch (error) {
            console.log("Something went wrong in repository level");
            throw { error };
        }
    }
}

module.exports = UserRepository;
