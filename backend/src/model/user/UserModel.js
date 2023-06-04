import UserSchema from "./UserSchema.js"

//create new admin-user
export const createUser = (userObj) => {
    return UserSchema(userObj).save()
}

// find user by filter (filter must be an object)

export const findUser = (filter) => {
    return UserSchema.findOne(filter)
}

//find by filter and update

