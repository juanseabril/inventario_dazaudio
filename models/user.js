import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email ya existe.'],
        required: [true, 'Email es requerido.']
    },
    username: {
        type: String,
        required: [true, 'Usuario es requerido.'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Usuario invalido, este debe contener de 8 a 20 letras y/o numeros y debe ser unico."]
    },
    image: {
        type: String
    }
});

const User = models.User || model("User", UserSchema);

export default User;