const { User } = require('../models');

const userData = [
    {
        userName: "Jeff",
        email: "JeffWinger@gmail.com",
        password: "P@ssw0rd1"
    },
    {
        userName: "Annie",
        email: "AnnieEdison@gmail.com",
        password: "P@ssw0rd2"
    },
    {
        userName: "Shirley",
        email: "ShirleyBennett@gmail.com",
        password: "P@ssw0rd3"
    },
    {
        userName: "Britta",
        email: "BrittaPerry@gmail.com",
        password: "P@ssw0rd4"
    },
    {
        userName: "Troy",
        email: "TroyBarnes@gmail.com",
        password: "P@ssw0rd5"
    },
    {
        userName: "Abed",
        email: "AbedNadir@gmail.com",
        password: "P@ssw0rd6"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;