module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        id : {
            type : Sequelize.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV4
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        email : {
            type : Sequelize.STRING
        },
        username: {
            type : Sequelize.STRING
        },
        phoneNumber : {
            type : Sequelize.STRING
        },
        role : {
            type : Sequelize.STRING
        },
        token : {
            type : Sequelize.STRING
        },
        created : {
            type : Sequelize.DATE
        },
        password : {
            type : Sequelize.STRING
        },
        address : {
            type : Sequelize.STRING
        }
    }, {
        timestamps: false
    });
    
    return User;
}
