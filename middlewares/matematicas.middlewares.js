// validaciones para el área del rectangulo
export const validarAreaRectangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (base === undefined || altura === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof base !== "number" || typeof altura !== "number") {
        return res.status(400).json({
            error: "La base y la altura deben ser números"
        });
    };

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "Los valores de base y altura deben ser positivos y mayores a 0"
        });
    };

    next();
}

// validaciones para el área del triangulo
export const validarAreaTriangulo = (req, res, next) => {
    const { base, altura } = req.body;

    if (base === undefined || altura === undefined) {
        return res.status(400).json({
            error: "Datos incompletos"
        });
    };

    if (typeof base !== "number" || typeof altura !== "number") {
        return res.status(400).json({
            error: "La base y la altura deben ser números"
        });
    };

    if (base <= 0 || altura <= 0) {
        return res.status(400).json({
            error: "Los valores de base y altura deben ser positivos y mayores a 0"
        });
    };

    next();
}

// validacines para el área del círculo
export const validarAreaCirculo = (req, res, next) => {
    const { radio } = req.body;

    if (radio === undefined ) {
        return res.status(400).json({
            error:"Datos incompletos"
        });
    };

    if (typeof radio !== "number") {
        return res.status(400).json({
            error: `El radio debe ser valor numérico`
        });
    };

    if (radio <= 0) {
        return res.status(400).json({
            error: `El valor del radio debe ser un número positivo y mayor que 0`
        });
    };

    next();
}

// validacines para la hipotenusa
export const validarHipotenusa = (req, res, next) => {
    const { catetoA, catetoB } = req.body;

    if (catetoA === undefined || catetoB === undefined) {
        return res.status(400).json({
            error:"Datos incompletos"
        });
    };

    if (typeof catetoA !== "number" || typeof catetoB !== "number") {
        return res.status(400).json({
            error: `Los catetos deben ser valores numéricos`
        });
    };

    if (catetoA <= 0 || catetoB <= 0) {
        return res.status(400).json({
            error: `Los valores de los catetos deben ser numeros positivos y mayores a 0`
        });
    };

    next();
}

// validacines para el cateto opuesto
export const validarCatetoOpuesto = (req, res, next) => {
    const { hipotenusa, catetoAdyacente } = req.body;

    if (hipotenusa === undefined || catetoAdyacente === undefined) {
        return res.status(400).json({
            error:"Datos incompletos"
        });
    };

    if (typeof hipotenusa !== "number" || typeof catetoAdyacente !== "number") {
        return res.status(400).json({
            error: `Los catetos deben ser valores numéricos`
        });
    };

    if (hipotenusa <= 0 || catetoAdyacente <= 0) {
        return res.status(400).json({
            error: `Los valores de los catetos deben ser numeros positivos y mayores a 0`
        });
    };
    
    if (hipotenusa <= catetoAdyacente) {
        return res.status(400).json({
            error: "La hipotenusa debe ser mayor que el cateto adyacente"
        });
    };

    next();
}

// validacion de angulo
export const validarAngulo = (req, res, next) => {
    const { x, y } = req.body;

    if (x === undefined || y === undefined) {
        return res.status(400).json({
            error:`Datos incompletos`
        });
    };

    if (typeof x !== "number" || typeof y !== "number") {
        return res.status(400).json({
            error:`Se deben ingresar valores numéricos`
        });
    };

    if (x === 0 && y === 0) {
        return res.status(400).json({
            error: "No se puede calcular el ángulo si ambos componentes son iguales a 0"
        });
    };

    next();
}