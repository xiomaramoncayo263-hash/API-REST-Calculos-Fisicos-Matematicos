import { useState } from 'react';
import fondofisica from "../assets/fondofisica.png";

function Distancia() {

    const [tiempo, SetTiempo] = useState(undefined);
    const [velocidad, SetVelocidad] = useState(undefined);
    const [resultado, SetResultado] = useState(null);

    const calcularDistancia = async () => {
        const respuesta = await 
        fetch("http://localhost:3000/fisica/distancia", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                tiempo: tiempo,
                velocidad: velocidad
            })
        });

        const datos = await respuesta.json();
        SetResultado(datos);
    };

    return (
        <div className="h-full max-w-full flex items-center justify-center p-6" style={{ backgroundImage: `url(${fondofisica})` }}>

            <div className="bg-white/95 w-full max-w-md rounded-2xl border-2 border-gray-400 shadow-2xl p-8">
                <h2 class Name="text-3x1 font-bold text-center text-gray-800 mb-6">
                    Calcular Distacia
                </h2>

                <div className="space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Velocidad
                        </label>

                        <input 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese el valor de la velocidad" onChange={(e) => SetVelocidad(Number(e.target.value))} 
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Tiempo
                        </label>

                        <input 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Ingrese el valor del tiempo" onChange={(e) => SetTiempo(Number(e.target.value))} 
                        />
                    </div>

                    <button 
                        onClick={calcularDistancia} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200">
                        Calcular
                    </button>

                </div>

                {resultado !== null && (
                    <div className="mt-6 p-4 rounded-lg bg-gray-50">
    
                        {resultado.mensaje && (
                            <p className="text-green-600 font-medium">
                                {resultado.mensaje}
                            </p>
                        )}

                        {resultado.error && (
                        <p className="text-red-400 font-medium">
                            {resultado.error}
                        </p>
                    )}
                </div>
                )}
            </div>
        </div>
    );
}

export default Distancia