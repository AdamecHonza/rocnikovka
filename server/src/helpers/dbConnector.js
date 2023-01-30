const PocketBase = require("pocketbase/cjs");
const pb = new PocketBase("http://127.0.0.1:8090");

exports.db = async (cb) => {
    try {
        const authData = await pb.admins.authWithPassword(process.env.DB_ADMIN_EMAIL, process.env.DB_ADMIN_PASS);
        const result = await cb(pb);
        return result
    } catch (err) {
        console.log("Something went wrong on DB")
        return err
    }
}