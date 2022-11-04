var pool = require('./bd') //llamado dato BD
var md5 = require ('md5');

// es una funcion ansicronica; try y catch tratan los errores, 
async function getUserByUsernameAndPassword (user, password) {
    try {
        var query = 'select * from usuarios where usuario = ? and password = ? limit 1';
        var rows = await pool.query ( query, [ user, md5 (password)]);
        return rows [0];

    } catch (error) {
        console.log (error);
    }
}
module.exports = { getUserByUsernameAndPassword}