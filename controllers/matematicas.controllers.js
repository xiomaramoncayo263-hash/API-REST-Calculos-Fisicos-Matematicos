// constantes para el área del rectangulo
export const calcularAreaRectangulo = (req, res) => {
    const { base, altura } = req.body;
    const areaRectangulo = base * altura;

    res.json({
        base,
        altura,
        areaRectangulo,
        "mensaje": `Si el valor de la base del rectangulo es de ${base} y su altura es de ${altura}, entonces el área total es de ${areaRectangulo}`
    });
}

// constantes para el área del triangulo
export const calcularAreaTriangulo = (req, res) => {
    const { base, altura } = req.body;
    const areaTrinagulo = base * altura / 2

    res.json({
        base,
        altura,
        areaTrinagulo,
        "mensaje": `Si el valor de la base del triangulo es de ${base} y su altura es de ${altura}, entonces el área total es de ${areaTrinagulo}`
    });
}

// constantes para el área del círculo
export const calcularAreaCirculo = (req, res) => {
    const { radio } = req.body;
    const areaCirculo = Math.PI * (radio ** 2);

    res.json({
        radio,
        areaCirculo,
        "mensaje": `Si el valor del radio del círculo es de ${radio} entonces el área total es de ${areaCirculo}`
    });
}

// constantes de hipotenusa
export const calcularHipotenusa = (req, res) => {
    const { catetoA, catetoB } = req.body;
    const hipotenusa = Math.hypot(catetoA, catetoB);

    res.json({
        catetoA,
        catetoB,
        hipotenusa,
        "mensaje": `Si el valor de cateto A es de ${catetoA} y el de cateto B ${catetoB} entonces la hipotenusa tiene un valor de ${hipotenusa}`
    });
}

// constantes para el cateto opuesto 
export const calcularCatetoOpuesto = (req, res) => {
    const { hipotenusa, catetoAdyacente } = req.body;
    const catetoOpuesto = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(catetoAdyacente, 2));

    res.json({
        hipotenusa,
        catetoAdyacente,
        catetoOpuesto,
        "mensaje": `Si el valor de la hipotenusa es de ${hipotenusa} y el del cateto adyacente es ${catetoAdyacente} entonces el cateto opuesto tiene un valor de ${catetoOpuesto}`
    })
}

// constantes de ángulo
export const calcularAngulo = (req, res) => {
    const { x, y } = req.body
    const radianes = Math.atan2(y, x);
    const grados = radianes * (180 / Math.PI);

    res.json({
        x,
        y,
        radianes,
        grados,
        "mensaje": `Si el valor de X es ${x} e Y es ${y} entonces el ángulo total es de ${grados.toFixed(2)} grados`
    });
}