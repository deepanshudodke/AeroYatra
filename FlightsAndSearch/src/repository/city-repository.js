const { City } = require("../models/index.js");
const { Op } = require("sequelize");

class CityRepository {
    async createCity({ name }) {
        // {name : "New Delhi"}
        try {
            const city = await City.create({ name });
            return city;
        } catch (error) {
            console.log("Something went wrong in City repository Level");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id: cityId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in City repository Level");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            // const city = await City.update(data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();

            return city;
        } catch (error) {
            console.log("Something went wrong in City repository Level");
            throw { error };
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in City repository Level");
            throw { error };
        }
    }

    async getAllCities(filter) {
        // This filter parameter can be empty also
        try {
            if (filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });

                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in City repository Level");
            throw { error };
        }
    }
}

module.exports = CityRepository;
