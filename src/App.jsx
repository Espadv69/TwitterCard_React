import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx' // 👈 Se importa el componente

// Se exporta esta función a main.jsx
export function App () {

    // Se crea una función con el parametro username para agregarle un @
    const formatUserName = (username) => `@${username}`

    // Una manera para pasar propiedades más rápido es haciendo un objeto con las props
    const pheralb = { formatUserName, username: 'pheralb', name: 'Pablo Hernandez' }

    // Estado para cambiar nombre al usuario
    const [name, setname] = useState('Aitor Díaz')

    // Se retorna los elementos a main.jsx para que renderice el componente
    return (
        // Section para separar las twitter cards
        <section className='App'>

            {/* Todas estas son twitter cards 👇 */}
            <TwitterFollowCard
                formatUserName={formatUserName} // 👈 Aquí se agrega la función una vez añadida en el componente TwitterCard
                isFollowing={true} // 👈 Aquí se pondría si se está siguiendo al usuario otra forma de hacerlo si es true es 👉 isFollowing
                username="midudev" // 👈 Aquí se pondría el nombre de usuario, que a su vez, se buscará una imagen con este mismo nombre
                name="Miguel Ángel Durán" // 👈 Aquí va el nombre completo
             />

            <TwitterFollowCard
                {...pheralb} // 👈 Así le pasaría todo el objeto con propiedades
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                username="aitordd"
                name={name}
             />

             <button
             onClick={() => setname('Pedro Villa')}
             >
                Cambiar nombre
             </button>

        </section>
       )
}