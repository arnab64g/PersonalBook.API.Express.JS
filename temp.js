const db = require("./database/dbconnect");
db.User.update(
            {
                role : 'Admin'
            },
            {
                where: {
                    username : 'arnab64g'
                }
            }
        
    )
