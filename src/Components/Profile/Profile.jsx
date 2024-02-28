import './profile.css'

const Profile = () => {
    return (
        <>
            <section className='profile-info flex flex-col my-4 mx-auto'>
                <div className='max-w-lg md:max-w-4xl mx-auto'>
                    <h3 className='my-2 text-sm md:text-lg'>Hola! Mi nombre es Leandro Martínez.</h3>
                    <h1 className='h1-title my-2 text-5xl sm:text-6xl'>Desarrollador Web Full Stack.</h1>
                </div>
                <div className='max-w-lg md:max-w-4xl mx-auto '>
                    <a
                        className='nation-img'
                        href="https://www.google.com/search?q=Uruguay%2C+Ciudad+Montevideo&sca_esv=97490666a088d9f3&sca_upv=1&sxsrf=ACQVn0_pP5KQaTAhrKWaRbZPfgiZUw6MhQ%3A1708209203488&ei=MzTRZa-pHczK1sQPo7-1yAg&ved=0ahUKEwjvjpqWt7OEAxVMpZUCHaNfDYkQ4dUDCBA&uact=5&oq=Uruguay%2C+Ciudad+Montevideo&gs_lp=Egxnd3Mtd2l6LXNlcnAiGlVydWd1YXksIENpdWRhZCBNb250ZXZpZGVvMggQABgIGAcYHjIKEAAYCBgHGB4YDzIIEAAYCBgHGB4yBhAAGAgYHjIGEC4YCBgeMgYQABgIGB4yBhAAGAgYHjIGEAAYCBgeMgYQLhgIGB4yBhAAGAgYHki6EFDgBVi1DnABeAGQAQCYAWOgAeYEqgEBN7gBA8gBAPgBAcICChAAGEcY1gQYsAPCAgoQIxiABBiKBRgnwgINEC4YQxixAxiABBiKBcICBhAAGAcYHsICBRAAGIAEwgILEC4YgAQYxwEYrwHCAhwQLhhDGLEDGIAEGIoFGJcFGNwEGN4EGOAE2AEBwgIGEC4YBxgewgILEC4YCBgHGB4Y1ALCAhUQLhgHGB4YlwUY3AQY3gQY4ATYAQHCAgcQABiABBgNwgIIEC4YCBgHGB6IBgGQBgi6BgYIARABGBQ&sclient=gws-wiz-serp" target='_blank'>
                        <img
                            className='img-div w-8 my-2 mx-auto hover:scale-125 duration-300 '
                            src="https://cdn.icon-icons.com/icons2/107/PNG/512/uruguay_18270.png" alt="Nacionalidad Uruguaya" /></a>
                    <img
                        className='img-div w-3/4 max-w-xs sm:w-64 mx-auto justify-center align-center my-4 rounded-full'
                        src="/profile.jpg" alt="Imagen de perfil" />
                </div>
            </section>
        </>
    )
}

export default Profile

// https://cdn.icon-icons.com/icons2/107/PNG/512/uruguay_18270.png