const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diets', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {timestaps: false}
  );
};
//no le pasamos el id porque en este caso porque no vamos a tener otro tipo de datos de ocupacion salvo lo que tenemos en db entonces me lo va a generar solito. Con el ID de numero me alcanza. 