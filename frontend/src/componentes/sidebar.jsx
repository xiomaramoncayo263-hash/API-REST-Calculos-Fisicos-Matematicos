function Sidebar() {

    const menuFisica = [
        { nombre: "Velocidad", ruta: "/velocidad" },
        { nombre: "Distancia", ruta: "/distancia" },
        { nombre: "Tiempo", ruta: "/tiempo" },
        { nombre: "Fuerza", ruta: "/fuerza" },
        { nombre: "Peso", ruta: "/peso" },
        { nombre: "Energía Cinética", ruta: "/energiaCinetica" }
    ]

    const menuMatematicas =[
        { nombre: "Área del Rectángulo", ruta: "/areaRectangulo" },
        { nombre: "Área del Triángulo", ruta: "/areaTriangulo" },
        { nombre: "Área del Círculo", ruta: "/areaCirculo" },
        { nombre: "Hipotenusa", ruta: "/hipotenusa" },
        { nombre: "Ángulo", ruta: "/angulo" }
    ];

    return(
        <>
        <div className="w-74 h-screen bg-sky-900 text-white p-6">
            <h2 className="text-2xl font-bold pb-7">Cálculos Físicos</h2>
            <ul>
                {menuFisica.map((item, index) => (
                    <SidebarItem
                        key={index}
                        nombre={item.nombre}
                        ruta={item.ruta}
                    />
                ))}
            </ul>

            <hr className="border-sky-800 my-6"/>
            <h2 className="text-2xl font-bold pb-7">Cálculos Matemáticos</h2>
            <ul>
                {menuMatematicas.map((item, index) => (
                    <SidebarItem
                        key={index}
                        nombre={item.nombre}
                        ruta={item.ruta}
                    />
                ))}
            </ul>
        </div>
        </>
    )
}

function SidebarItem({nombre, ruta}) {
    return(
    <li className="mb-5 ">
        <a className="hover:text-sky-300" href={ruta}>{nombre}</a>
    </li>
    )
}

export default Sidebar