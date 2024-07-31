// Se exporta esta función 👇 a App.jsx
export function TwitterFollowCard ({ formatUserName, username, name, isFollowing }) { // 👈 Esta función recoge 4 parámetros

    // Ternaria para cambiar al texto de mi botón
    const text = isFollowing ? 'Siguiendo' : 'Seguir'

    // Cambiar el classname de mi botón según si se sigue o no, al usuario
    const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button '

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
                    className={buttonClassName}
                >
                    {text}
                </button>
            </aside>
        </article>
    )
}