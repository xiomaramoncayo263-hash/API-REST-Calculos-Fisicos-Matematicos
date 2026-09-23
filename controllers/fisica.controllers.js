// constantes de velocidad 
export const calcularVelocidad = (req, res) => {
    const { distancia, tiempo } = req.body;
    const velocidad = distancia / tiempo;

    res.json({
        distancia,
        tiempo,
        velocidad,
        "mensaje": `Para recorrer una distancia de ${distancia} en un tiempo de ${tiempo} se necesita una velocidad de ${velocidad}`
    });
}  // retorno de resultado en formato json // con los datos de entrada y el resultado del calculo de la velocidad

// constantes de distancia
export const calcularDistancia = (req, res) => {
    const { velocidad, tiempo } = req.body;
    const distancia = velocidad * tiempo;
    
    res.json({
        velocidad,
        tiempo,
        distancia,
        "mensaje": `Con una velocidad de ${velocidad} y un tiempo de ${tiempo} se recorre una distancia de ${distancia}`
    });
}

// constantes de tiempo 
export const calcularTiempo = (req, res) => {
    const { distancia, velocidad } = req.body;
    const tiempo = distancia / velocidad;

    res.json({
        distancia,
        velocidad,
        tiempo,
        "mensaje": `Para recorrer una distancia de ${distancia} con una velocidad de ${velocidad} se necesita un tiempo de ${tiempo}`
    });
}

// constantes de fuerza
export const calcularFuerza = (req, res) => {
    const { masa, aceleracion } = req.body;
    const fuerza = masa * aceleracion;

    res.json({
        masa,
        aceleracion,
        fuerza,
        "mensaje": `A un cuerpo cuya masa es de ${masa} y la aceleración de ${aceleracion} se le aplica una fuerza de ${fuerza}`
    });
}

// constantes de peso 
export const calcularPeso = (req, res) => {
    const { masa } = req.body;
    const gravedad = 9.8
    const peso = masa * gravedad

    res.json({
        masa,
        gravedad,
        peso,
        "mensaje": `A un cuerpo cuya masa es de ${masa} y contando que la gravedad de la tierra es de ${gravedad} se le aplica un peso de ${peso}`
    });
}

// constante de energia cinetica
export const calcularEnergiaCinetica = (req, res) => {
    const { masa, velocidad } = req.body;
    const energiaCinetica = 0.5 * masa * velocidad ** 2; 

    res.json({
    masa,
    velocidad,
    energiaCinetica,
    "mensaje": `Un cuerpo de masa ${masa} y velocidad ${velocidad} tiene una energia cinetica de ${energiaCinetica}`
    })
}
