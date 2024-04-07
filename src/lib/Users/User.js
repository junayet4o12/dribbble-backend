const Users = require("../../modals/users/Users");

const checkDuplicateUser = async (user) => {
    const query = { email: user.email }
    const existingUser = await Users.findOne(query);
    return existingUser
}
module.exports= checkDuplicateUser