// models folder: This folder will host all the ‘models’ (table schema) for our tables. Here we’ll define the columns in our table and their data types using sequelize. The models folder will also have index.js where we’ll be using the sequelize library to connect to our DB and create the relevant table.

// this is a function that would take the sequelize instance and DT Class
// and return a Topic model object
module.exports = (sequelize, DataTypes) => {
    // Define a new model, representing a table in the database.
    // modelName is 'topic' (first argument of define function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "topics"
    const Topic = sequelize.define('topic', {
        id: { // the id will be our primary key for accessing topic data
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

    return Topic;
}