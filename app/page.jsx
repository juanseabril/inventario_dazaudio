import Feed from '@components/Feed'

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <span className="orange_gradient text-center"> Inventario Almacén</span>
        </h1>
        <p className="desc text-center">
            Bienvenido/a a nuestra plataforma de inventario de almacén,
            donde podrás gestionar de manera eficiente y precisa todos 
            los productos y existencias. 
        </p>

        <Feed />
        </section>
    )
}

export default Home