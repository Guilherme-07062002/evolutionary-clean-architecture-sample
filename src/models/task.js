const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

class Task extends Model { }

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: "Task",
        timestamps: true
    }
)
module.exports = Task