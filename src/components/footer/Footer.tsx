import {  InstagramLogoIcon, LinkedinLogoIcon, GithubLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-cyan-500 text-white w-full fixed bottom-0">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Projeto farmácia - Iago Willian  | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes</p>
                    <div className='flex gap-2'>
                        <a href="https://linkedin.com/in/iago-willian-" target="_blank">
                        <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/iagowillian?igsh=MTVrbzEwbDVkNzN1MA==" target="_blank">
                        <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/IagoWiliian" target="_blank">
                        <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer