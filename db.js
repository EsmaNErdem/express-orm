/** Database for lunchly */

const pg = require("pg");

let dbName;
// If we're running in test "mode", use our test db
// Make sure to create both databases!
if (process.env.NODE_ENV === "test") {
    dbName = "lunchly_test";
} else {
    dbName = "lunchly";
}

const db = new pg.Client({
    host: "/var/run/postgresql/",
    database: dbName, 
});

const connectToDatabase = async () => {
    await db.connect();
}

connectToDatabase()

module.exports = db;
