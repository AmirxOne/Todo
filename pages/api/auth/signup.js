const { default: User } = require("@/models/User");
const { hashPassword } = require("@/utils/auth");
const { default: connectDB } = require("@/utils/connectDB");

async function handler (req, res) {
    if(req.method !== 'POST') return;

    try {
        await connectDB()
    } catch (err) {
        console.log(err);
        return res.status(500).json({status : 500, action: "failed", message: "Error in Connecting to DB"})
    }

    const { password, email } = req.body;

    if(!password || !email){
        return res.status(422).json({status : 422, action: "failed", message: "Invalid data"})
    }

    const existingUser = await User.findOne({email: email})

    if(existingUser){
        return res.status(422).json({status : 422, action: "failed", message: "User exists already!"})
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({email: email, password: hashedPassword})
    console.log(newUser)

    res.status(201).json({status : 201, action: "Success", message: "Create User!"})
}

export default handler;