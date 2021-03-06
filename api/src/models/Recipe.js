const { DataTypes, STRING } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {

      type: DataTypes.TEXT,
      allowNull: false

    },
    readyIn: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    likes: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull:true
    },
    instructions: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.STRING

    }

  });
};
