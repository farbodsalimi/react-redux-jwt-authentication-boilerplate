const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// define our model
const userSchema = new Schema({
    email: { type: String, unique: true, lowercase: true },
    password: String
});

// on save hook, encrypt password
// before saving a model, run this function

userSchema.pre('save', function (next) {
    // get access to the user model
    const user = this;

    // generate a salt then run callback
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }

        // hash our password using the salt
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) { return next(err); }

            // overwrite plain text password with encrypted password
            user.password = hash;
            next();
        });
    });
});

userSchema.methods.comparePassword = function (candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if (err) { return callback(err); }

        callback(null, isMatch);
    });
};

// create the model class
const model = mongoose.model('user', userSchema);

// export the model
module.exports = model;
