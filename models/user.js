import { Schema, model, models} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already in use'],
        required: [true, 'Email is required for registration']
    },

    username: {
        type: String,
        required: [true, 'Username is required for registrarion']
    },

    image: {
        type: String,
    }
});

const User = models.User || model("User", userSchema);

export default User;