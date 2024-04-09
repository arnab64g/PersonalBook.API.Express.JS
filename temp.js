
async function roleChange() {
    const db = require("./database/dbconnect");
const res = await db.User.update(
            {
                role : 'Admin'
            },
            {
                where: {
                    username : 'arnab64'
                }
            }
        
    )
	console.log(res);    
    return res;
}

async function getall() {
    const db = require("./database/dbconnect");
    const res = await db.User.findAll();
    return res;
}

module.exports = {
    roleChange,
    getall
}