import { Routes, Route, Navigate } from 'react-router-dom';

import Sidebar from './componentes/sidebar'
import Velocidad from './componentes/velocidad'
import Distancia from './componentes/distancia'
import Tiempo from './componentes/tiempo'
import Fuerza from './componentes/fuerza'
import Peso from './componentes/peso'
import EnergiaCinetica from './componentes/energiaCinetica'

import AreaRectangulo from './componentes/areaRectangulo'
import AreaTriangulo from './componentes/areaTriangulo'
import AreaCirculo from './componentes/areaCirculo'
import Hipotenusa from './componentes/hipotenusa'
import Angulo from './componentes/angulo'

function App() {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar />
      <div className='flex-1 p-6 overflow-y-auto'>
        <Routes>
          <Route path="/" element={<Navigate to="/velocidad" />} />
          <Route path="/velocidad" element={<Velocidad />} />
          <Route path="/distancia" element={<Distancia />} />
          <Route path="/tiempo" element={<Tiempo />} />
          <Route path="/fuerza" element={<Fuerza />} />
          <Route path="/peso" element={<Peso />} />
          <Route path="/energiaCinetica" element={<EnergiaCinetica />} />

          <Route path="/areaRectangulo" element={<AreaRectangulo />} />
          <Route path="/areaTriangulo" element={<AreaTriangulo />} />
          <Route path="/areaCirculo" element={<AreaCirculo />} />
          <Route path="/hipotenusa" element={<Hipotenusa />} />
          <Route path="/angulo" element={<Angulo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App
