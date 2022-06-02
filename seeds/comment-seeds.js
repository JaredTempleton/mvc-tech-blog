const { Comment } = require('../models');

const commentData = [{
    comment_text: "This is test comment number 1 and its for testing",
    user_id: 1,
    post_id: 1
},
{
    comment_text: "Oh wow look another test comment, thisis the 2nd one",
    user_id: 2,
    post_id: 2
},
{
    comment_text: "Thress company extends to comments, who knew.",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments; 