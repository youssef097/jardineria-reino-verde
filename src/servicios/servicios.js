const datosServicios = require("../../datosServicios")

module.exports={getServiciosById:function(id){
    return datosServicios.filter((servicio)=>{
        return servicio.id==id;
    })
}
}
