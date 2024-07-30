export function TwitterFollowCard ({ formatUserName, username, name, isFollowing }) {
    console.log(isFollowing)
    const imageSrc = `https://unavatar.io/${username}`
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