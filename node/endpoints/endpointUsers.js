const businessUsers = require("../business/businessUsers.js");
const router = require("express").Router()

router.head('/users',checkLogin)
router.post('/users', insertUser)

exports.router = router;

async function insertUser(request, response){
    let user = request.body

    try {
        let result = await businessUsers.insertUser(user)
        response
            .status(201)
            .json(result)
    } catch (error){
        console.log(error)
        response
            .status(error.code)
            .json(error)         
    }
}

async function checkLogin(request, response){
    let username = request.query.username
    if(!username){
        response.status(400).end("The username is missing")
        return
    }

    try {
        let checkUser = await businessUsers.checkLogin(username);
        if(checkUser){
            response.json();
        } else {
            response
                .status(404)
                .json({ code:404, message: "No existe un usuario con ese login"})         
        }
    }catch(error) {
        console.log(error)
        response
            .status(error.code)
            .json(error)
    }
}