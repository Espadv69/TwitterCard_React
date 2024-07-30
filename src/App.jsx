import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx' // 👈 Se importa el componente

// Se exporta esta función a main.jsx
export function App () {
    // Se crea una función con el parametro username para agregarle un @
    const formatUserName = (username) => `@${username}`
    // Se retorna los elementos a main.jsx para que renderice el componente
    return (
        // Section para separar las twitter cards
        <section className='App'>

            // Todas estas son twitter cards 👇
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                username="midudev"
                name="Miguel Ángel Durán"
             />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                username="pheralb"
                name="Pablo Hernandez"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="aitor"
                name="Aitor Sanchez"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="pepe"
                name="Pepe Biñuelas"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                username="roberto"
                name="Roberto Villa"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="gregoria"
                name="Gregoria Salamanca"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="elon_musk"
                name="Elon Musk"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                username="hector"
                name="Hector"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="espadv._"
                name="Espadv Díaz"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={true}
                username="sanchez"
                name="Sanchez Villanueva"
            />

            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                username="vanessa"
                name="Vanesa Parra"
            />


        </section>
       )
}