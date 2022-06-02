const { User } = require('../models');

const userData = [{
    username: 'Jared',
    password: 'password123'
},
{
    username: 'Tera',
    password: 'tera123'
},
{
    username: 'Kyle',
    password: 'byrd123'
}];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers; 