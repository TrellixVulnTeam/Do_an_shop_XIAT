const User = require('../models/User')
const { generateToken,RefreshToken } = require("../config/generateToken")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const RegisterController = async(req, res) => {
    const { username, email, password } = req.body  
    const oldUser = await User.findOne({ email })

    if (!username || !email || !password)
        return res.json({ success: false, msg: "Vui lòng điền vào ô trống !" })
    if (password.length < 8)
        return res.json({ success: false, msg: "Mật khẩu phải nhiều hơn 8 ký tự !" })
    if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email))
        return res.json({ success: false, msg: "Điền đúng định dạng của email !" })
    if (oldUser)
        return res.json({ success: false, msg: "Tài khoản này đã tồn tại !" }) 
   
    bcrypt.hash(password, 12, async(err, hash) =>{
        const hashPassword = hash

        const newUser = new User({
            username: username,
            email: email,
            password:hashPassword
        })
        await newUser.save()
        return res.json({ success: true, msg: "Tạo tài khoản thành công !" })
    });  
}

const LoginController = async (req, res) => {
    const { email, password } = req.body
    const oldUser = await User.findOne({ email })
    const checkPassword = await bcrypt.compare(password, oldUser.password)
    if (!email || !password)
        return res.json({ success: false, msg: "Bạn phải điền vào ô trống" }) 
    if (!oldUser)
        return res.json({ success: false, msg: "Email đã tồn tại" })
    if (!checkPassword) 
        return res.json({ success: false, msg: "Sai mật khẩu!" }) 
    
    //accessToken && refreshToken

    const accessToken = generateToken(email)
    const refreshToken = RefreshToken(email)
    if (accessToken && refreshToken)
        return res.json({ success: true, accessToken: accessToken, refreshToken: refreshToken, msg: "Token được tạo !" }) 
    else 
        return res.json({ success: false, msg: "Có lỗi khi tạo token" }) 

}

const CheckToken = async (req, res) => {//Kiểm tra token và lấy dữ liệu người dùng
    
    const bearHeader = req.header('Authorization');
    if (typeof bearHeader !== 'undefined') {
        const bearer = bearHeader.split(' ');
        const bearerToken = bearer[1];
        const decodeToken = await jwt.verify(bearerToken, process.env.SECRETKEY)
        
        if (!decodeToken) 
            return res.json({ success: false, msg: "Token không đúng định dạng !" })
        else {
            await User.find({ email: decodeToken.data }, async(err, result) => {
                if (err)
                    return res.json("Error : " + err)
                else {
                    //Authorize
                    if (result[0].admin === true) {
                        await User.find({}, (err, alldata) => {
                            let value = alldata
                            for (let i = 0; i < value.length; i++)
                            {
                                value[i].password = "notpermission";
                            }
                            if (err)
                                return res.json({ msg: ` Error: ${err}` })
                            else 
                                return res.json({ data: value })
                        })
                    }
                    else
                        return res.json({ success: true, data: result, msg: `Bạn là thành viên` })
                }
            })
        }
    }
    else
        return res.json({ success: false, msg: "Xác thực accessToken thất bại!!" })
}

//Check refreshToken ---> tạo mới accessToken đã bị expired

const checkExpiredAccessToken = async (req, res) => {
    const bearHeader = req.header('Authorization');
    if (typeof bearHeader !== 'undefined') {
        const bearer = bearHeader.split(' ');
        const bearerToken = bearer[1];
        const decodeToken = await jwt.verify(bearerToken, process.env.REFRESHKEY)
        if (!decodeToken)
            return res.json({ success: false, msg: "refreshToken sai định dạng" })
        
        //tạo ra access token mới
        const email = decodeToken.data
        const generateToken = (email) => {
            return jwt.sign({ data: decodeToken.data }, process.env.SECRETKEY, { expiresIn: '20s' })
        }
        const accessToken = generateToken(decodeToken.data)
        return res.json({ success: true, accessToken: accessToken, msg: "Token mới được sinh ra !" })
    }
    else
        return res.json({ success: false, msg: "AccessToken trả về sau khi hết hạn sai định dạng" })
}


module.exports = { RegisterController,LoginController,CheckToken ,checkExpiredAccessToken}