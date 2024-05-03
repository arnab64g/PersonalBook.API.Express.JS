module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User_pb", {
        id : {
            type : Sequelize.UUID,
            primaryKey: true,
            defaultValue: sequelize.UUIDV4
        },
        firstName : {
            type : Sequelize.STRING,
			allowNull : false
        },
        lastName : {
            type : Sequelize.STRING,
			allowNull : false
        },
        email : {
            type : Sequelize.STRING,
			allowNull : false
        },
        username : {
            type : Sequelize.STRING,
			allowNull : false
        },
        phoneNumber : {
            type : Sequelize.STRING,
			allowNull : false
        },
        role : {
            type : Sequelize.STRING,
			allowNull : false
        },
        token : {
            type : Sequelize.STRING,
        },
        created : {
            type : Sequelize.DATE,
			allowNull : false
        },
        password : {
            type : Sequelize.STRING,
			allowNull : false
        },
        address : {
            type : Sequelize.STRING
        }
    }, {
        timestamps: false
    });
    return User;
}
