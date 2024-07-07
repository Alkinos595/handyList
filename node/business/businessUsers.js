const ObjectId = require("mongodb").ObjectId;
const mongodbUtil = require('../utils/mongodbUtil.js');
const createError = require("../utils/createError.js").createError

exports.checkLogin = async function (username) {
	try {
		return await mongodbUtil.scheme.collection("users").findOne({ username: username })
	} catch (error) {
		console.log(error)
		throw createError(500, "DB Error")
	}
}

exports.insertUser = async function (user) {
	try {
		if (!user.username	|| user.username.trim()	== "" ||
			!user.email		|| user.email.trim()	== "" ||
			!user.name		|| user.name.trim()		== "" ){
			throw createError(400)
		}

		let checkUser = await exports.checkLogin(user.username)
		if (checkUser) {
			throw createError(400, "That username already exists")
		}

		delete user._id
		return await mongodbUtil.scheme.collection("users").insertOne(user)
	} catch (error) {
		if (error.code) {
			throw error
		}
		console.log(error)
		throw createError(500, "Error with DB")
	}
}
