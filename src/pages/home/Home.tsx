function Home() {
    return (
        <section className="flex flex-col items-center justify-center flex-grow text-center py-10 px-4">
            <div className="max-w-7xl">
                <h2 className="text-2xl font-bold mb-2">
                    Bem vindo ao projeto farmácia!!
                </h2>
                <p className="text-lg mb-6">
                    Gerencie as categorias
                </p>

                <img 
                    src="https://ik.imagekit.io/uhimtlk7c/alto-angulo-de-peliculas-para-comprimidos-e-recipientes-de-plastico.jpg?updatedAt=1748867662129"
                    alt="Imagem da página home"
                    className="mx-auto max-w-sm"
                />
            </div>
        </section>
    );
}

export default Home;