const mongodb = require("mongodb")

exports.scheme = null

exports.connection = async function(){
    try {
        console.log("Connecting to MongoDB...")
        const client = new mongodb.MongoClient(process.env.urldb)
        let dbs = await client.connect()
        console.log("Successful connection!")
        exports.scheme = dbs.db(process.env.scheme)
    } catch (error) {
        console.log(error)
        throw ({ code : "500",  message : "Unable connect to DB"} )        
    }
}
