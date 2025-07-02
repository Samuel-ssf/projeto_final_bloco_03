import {  InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-cyan-500 text-white w-full fixed bottom-0">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto farmácia - Samuel Silva  | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes</p>
                    <div className='flex gap-2'>
                        <LinkedinLogoIcon size={48} weight='bold' />
                        <InstagramLogoIcon size={48} weight='bold' />
                        <GithubLogoIcon size={48} weight='bold' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer