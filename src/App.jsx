import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    const formatUserName = (username) => `@${username}`
    return (
        <section className='App'>

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
                name="Aitor Díaz"
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

        </section>
       )
}