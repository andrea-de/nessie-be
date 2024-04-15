const { supabase } = require('./index');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

class User {
    constructor(username, email, role) {
        this.username = username;
        this.email = email;
        this.role = role
    }

    static async signin(email, password) {
        const { data, error } = await supabase
            .from('users')
            .select()
            .eq('email', email)
            .single();

        if (error) throw error;
        console.log('hit');

        if (!data) {
            throw new Error('Incorrect email or password');
        }

        const passwordMatch = await bcrypt.compare(password, data.password);
        if (!passwordMatch) {
            throw new Error('Incorrect email or password');
        }
        return data;
    }

    static async signup(email, password, role) {
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

        const { data, error } = await supabase
            .from('users')
            .insert({ email: email, password: hashedPassword, role: role })
            .single();

        if (error) throw error;
        return data;
    }

}

module.exports = User;