import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-cyan-500 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className="text-2xl font-bold">Farmácia</Link>

                    <div className='flex gap-4'>
                       <Link to='/categorias' className="text-2xl font-bold">Categorias</Link>
                       <Link to='/cadastrarcategoria' className="text-2xl font-bold">Cadastrar Categoria</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar