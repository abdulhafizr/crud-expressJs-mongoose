const mongoose = require('./index');
const {Schema} = mongoose;

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    timestamp: {
        type: Date,
        default: Date
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;