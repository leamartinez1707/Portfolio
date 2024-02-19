import './profile.css'

const Profile = () => {
    return (
        <>
            {/* <section className='hidden md:block'>
                <div className="content">
                    <div className="content__container">
                        <p className="content__container__text">
                            Hola,                       </p>
                        <ul className="content__container__list">
                            <li className="content__container__list__item"> mundo !</li>
                            <li className="content__container__list__item"> usuarios !</li>
                            <li className="content__container__list__item"> reclutadores !</li>
                            <li className="content__container__list__item"> a todos !</li>
                        </ul>
                    </div>
                </div>
            </section> */}
            <section className='profile-info flex flex-col sm:my-4'>
                <h2 className='my-2 text-xl sm:text-3xl '>Mi nombre es Leandro Martínez.</h2>
                <h1 className='h1-title my-2 text-3xl sm:text-6xl'>Desarrollador Web Full Stack.</h1>
                <h2 className='my-2 text-xl'>Me encargo de diseñar páginas web.</h2>
                <a 
                className='nation-img'
                href="https://www.google.com/search?q=Uruguay%2C+Ciudad+Montevideo&sca_esv=97490666a088d9f3&sca_upv=1&sxsrf=ACQVn0_pP5KQaTAhrKWaRbZPfgiZUw6MhQ%3A1708209203488&ei=MzTRZa-pHczK1sQPo7-1yAg&ved=0ahUKEwjvjpqWt7OEAxVMpZUCHaNfDYkQ4dUDCBA&uact=5&oq=Uruguay%2C+Ciudad+Montevideo&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlVydWd1YXksIENpdWRhZCBNb250ZXZpZGVvMggQABgIGAcYHjIKEAAYCBgHGB4YDzIIEAAYCBgHGB4yBhAAGAgYHjIGEC4YCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQLhgIGB4yBhAAGAgYHki6EFDgBVi1DnABeAGQAQCYAWOgAeYEqgEBN7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQIxiABBiKBRgnwgINEC4YQxixAxiABBiKBcICBhAAGAcYHsICBRAAGIAEwgILEC4YgAQYxwEYrwHCAhwQLhhDGLEDGIAEGIoFGJcFGNwEGN4EGOAE2AEBwgIGEC4YBxgewgILEC4YCBgHGB4Y1ALCAhUQLhgHGB4YlwUY3AQY3gQY4ATYAQHCAgcQABiABBgNwgIIEC4YCBgHGB6IBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp" target='_blank'>
                    <img
                        className='w-8 my-2 mx-auto'
                        src="https://cdn.icon-icons.com/icons2/107/PNG/512/uruguay_18270.png" alt="Nacionalidad Uruguaya" /></a>
                <img
                    className='w-3/4 sm:w-64 mx-auto justify-center align-center my-4 rounded-full'
                    src="/profile.jpg" alt="Imagen de perfil" />
            </section>
        </>
    )
}

export default Profile

// https://cdn.icon-icons.com/icons2/107/PNG/512/uruguay_18270.png