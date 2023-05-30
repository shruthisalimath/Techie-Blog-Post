const { User } = require('../models');

const userData = [{
        username: "Jeff",
        email: "JeffWinger@gmail.com",
        password: "P@ssw0rd1"
    },
    {
        username: "Annie",
        email: "AnnieEdison@gmail.com",
        password: "P@ssw0rd2"
    },
    {
        username: "Shirley",
        email: "ShirleyBennett@gmail.com",
        password: "P@ssw0rd3"
    },
    {
        username: "Britta",
        email: "BrittaPerry@gmail.com",
        password: "P@ssw0rd4"
    },
    {
        username: "Troy",
        email: "TroyBarnes@gmail.com",
        password: "P@ssw0rd5"
    },
    {
        username: "Abed",
        email: "AbedNadir@gmail.com",
        password: "P@ssw0rd6"
    },
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;