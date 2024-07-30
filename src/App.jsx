import './App.css'
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src="https://unavatar.io/midudev"
                    alt="avatar de midudev" />
                <div className='tw-followCard-div'>
                    <strong>Miguel Ángel Durán</strong>
                    <span className='tw-followCard-span'>@midudev</span>
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