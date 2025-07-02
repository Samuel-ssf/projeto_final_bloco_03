function Home() {
    return (
        
            <div className="
                bg-[#67E8F9]
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-1 md:grid-cols-2 
                    text-black
                    gap-4 md:gap-0
                    px-4
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-8
                        text-center
                        ">
                        <h2 className='
                            text-4xl md:text-5xl 
                            font-bold
                            '>
                            Seja bem vinde!
                        </h2>
                        <p className='text-base md:text-xl'>Aqui você encontra Medicamentos e Cosmeticos!</p>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src="https://ik.imagekit.io/spmr3qqjt/download.png"
                            alt="Imagem Página Home"
                            className='w-2/3 max-w-xs md:max-w-md lg:max-w-lg'
                        />
                    </div>
                </div>
            </div>
        
    )
}

export default Home