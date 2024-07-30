// Se exporta esta función 👇 a App.jsx
export function TwitterFollowCard ({ formatUserName, username, name, isFollowing }) { // 👈 Esta función recoge 4 parámetros
    console.log(isFollowing) // 👈 Aquí muestra en consola a los que se sigue en Boolean
    const imageSrc = `https://unavatar.io/${username}` // 👈 Aquí se crea una variable para recoger las imágenes que tenga el username
    // 👇 Aquí retornamos la función para que se renderice
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={imageSrc}
                    alt="avatar de midudev" />
                <div className='tw-followCard-div'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-span'>{formatUserName(username)}</span>
                </div>
            </header>
            <aside>
                <button
                    className='tw-followCard-button'
                >
                    Seguir
                </button>
            </aside>
        </article>
    )
}