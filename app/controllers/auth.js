const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const knex = require('../config/database')

exports.register = (req, res) =>{

    const { name, email, phone, password, passconfirm } = req.body;  //Instead of the lines const name = req.body.name; ... we can write them in a single line
    let hashedPass = bcrypt.hashSync(password, 4); // Here 4 is for, how many times we are hashing the password. You can use 5/6...
 
    
    knex('users').insert([
        {name: name, email: email, phone: phone, password: hashedPass}
    ])
    .then(data => res.json(data))
    .catch((err) => { res.json(err); throw err })
    .finally(() => {
        knex.destroy();
    });
}


exports.login = async (req, res) => {
    const {email, password} = req.body;
    
    if(!email || !password){ 
       return res.status(400);
    }

    const data = await knex('users')
        .select('id', 'name', 'email', 'phone', 'password')
        .where({'email': email})
        .first()
        .catch((err) => res.json({
            result: false,
            message: err
        }));

    if(!data || !(await bcrypt.compare(password, data.password))){
        res.json({
            result: false,
            message: "Invalid email or password"
        })
    }else{
        delete data.password;

        const payload = { data };
        const options = { expiresIn: process.env.JWT_EXPIRES_IN };
        const secret = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secret, options);

        data.token = token;
        return res.json(data);
    }
        
  
}

