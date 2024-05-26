module.exports = (sequelize) => {
    const User = sequelize.define("User", {
        id: {
            type: 'UUID',
            allowNull: false,
            comment: null,
            special: [],
            primaryKey: true,
            foreignKey: [Object]
          },
          firstName: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          lastName: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          email: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          username: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          phoneNumber: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          role: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          token: {
            type: 'CHARACTER VARYING',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          created: {
            type: 'TIMESTAMP WITHOUT TIME ZONE',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          address: {
            type: 'CHARACTER VARYING',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          password: {
            type: 'CHARACTER VARYING',
            allowNull: false,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          },
          image: {
            type: 'BYTEA',
            allowNull: true,
            defaultValue: null,
            comment: null,
            special: [],
            primaryKey: false
          }
    }, {
        timestamps: false
    });
    return User;
}
