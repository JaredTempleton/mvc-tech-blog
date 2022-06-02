const { Post } = require("../models");

const postData = [
  {
    title: "Cool title here",
    content:
      "I should start using that word stuff that looks like real words but really isn't real words",
    user_id: 1,
  },
  {
    title: "Even cooler title here",
    content:
      "stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff stuff",
    user_id: 2,
  },
  {
    title: "Not another title story",
    content: "All this content and no where to go",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
