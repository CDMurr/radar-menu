const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
   
    username: 'Cody1',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'Ranya2',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'Mark3',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;