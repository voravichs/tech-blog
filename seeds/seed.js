const sequelize = require("../config/connection");
const { Blog, User, Comment } = require("../models");

const userData = require("./userData.json");
const blogData = require("./blogData.json");
const commentData = require("./commentData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const blog of blogData) {
    await Blog.create({
      ...blog,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comment of commentData) {
    const randUser = Math.floor(Math.random() * users.length);
    await Comment.create({
      ...comment,
      user_id: users[randUser].id,
      user_name: users[randUser].name,
      blog_id: 1,
    });
  }

  process.exit(0);
};

seedDatabase();
