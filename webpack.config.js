//Este archivo indica a webpack como va a funcionar

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path');

//path: solicita el modulo path que me permite concatenar directorios en sin usar / ó \
//HtmlWebpackPlugin:SOLICITA EL MODULO QUE PERMITE ALMACENAR ARCHIVOS HTML CREANDO UN OBJETO

module.exports = {
    
    entry:"./src/app/index.js",
    
    output:{
        
        path:path.join(__dirname, 'dist'),
        
        filename:'bundle.js', 
        
    },
    
    devServer:{
      
        port: 3000
        
    },
    
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
// "module.exports": indica cual archivo va a tomar para convertir y donde lo va aponer 
//          "entry": Este es el archivo que se va a tomar
//         "output": Indca en que ruta y en que archivo se almacenara el codigo
//           "path": Ruta donde ira el arcchivo
//      "__dirname": Constante que contiene la ruta actual
//           "dist": Nueva carpeta que se crearapara almacenar los archivos
//      "bundle.js": Archivo que sera creado y contendra todo el codigo del proyecto
//        "plugins": Arreglo de objetos que esta llamando al objeto HtmlWebpackPlugin
//       "template": Ruta donde se encuentra el archivo html
//      "devServer": Permite seleccionar el puerto donde se ejecutara la app