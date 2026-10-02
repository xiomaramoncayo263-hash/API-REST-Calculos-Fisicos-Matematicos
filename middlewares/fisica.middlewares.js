// validación de velocidad
export const validarVelocidad = (req, res, next) => {
    const { distancia, tiempo } = req.body;

    if (tiempo === undefined || distancia === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof tiempo !== "number" || typeof distancia !== "number") {
        return res.status(400).json({
            error: "El tiempo y la distancia deben ser numeros"
        });
    };

    if (tiempo <= 0) {
        return res.status(400).json({
            error: "El valor de tiempo debe ser mayor a cero"
        });
    };
    
    next();
}

// validación de distancia
export const validarDistancia = (req, res, next) => {
    const { velocidad, tiempo } = req.body;

    if (velocidad === undefined || tiempo === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof velocidad !== "number" || typeof tiempo !== "number") {
        return res.status(400).json({
            error: "La velocidad y el tiempo deben ser numeros"
        });
    };

    if (tiempo < 0 || velocidad < 0) {
        return res.status(400).json({
            error: "Tiempo y velocidad deben ser numeros positivos"
        });
    };

    next();
}

// validación de tiempo
export const validarTiempo = (req, res, next) => {
    const { velocidad, distancia } = req.body;

    if (velocidad === undefined || distancia === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof velocidad !== "number" || typeof distancia !== "number") {
        return res.status(400).json({
            error: "Los valores deben ser numericos"
        });
    };

    if (velocidad <= 0) {
        return res.status(400).json({
            error: "El valor de velocidad debe ser mayor a 0"
        });
    };

    next();
}

// validaciones de fuerza
export const validarFuerza = (req, res, next) => {
    const { masa, aceleracion } = req.body;

    if (masa === undefined || aceleracion === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof masa !== "number" || typeof aceleracion !== "number") {
        return res.status(400).json({
            error: "Los valores deben ser numericos"
        });
    };

    if (masa <= 0 || aceleracion <= 0) {
        return res.status(400).json({
            error: "Los valores deben ser positivos"
        });
    };

    next();
}

// validación de peso 
export const validarPeso = (req, res, next) => {
    const { masa } = req.body;

    if (masa === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof masa !== "number") {
        return res.status(400).json({
            error: "Los valores deben ser numericos"
        });
    };

    if (masa < 0) {
        return res.status(400).json({
            error: "Los valores deben ser positivos"
        });
    };
    
    next();
}

// validación de energia cinetica
export const validarEnergiaCinetica = (req, res, next) => {
    const { masa, velocidad } = req.body;
    
    if (masa === undefined || velocidad === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };
    
    if (typeof masa !== "number" || typeof velocidad !== "number") {
        return res.status(400).json({
            error: "Los valores deben ser numericos"
        });
    };

    if (masa < 0 || velocidad < 0) {
        return res.status(400).json({
            error: "Los valores deben ser positivos"
        });
    };

    next();
}