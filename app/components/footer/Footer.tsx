'use client'

import { useRouter } from 'next/navigation'
import { BsFacebook, BsTwitter, BsInstagram, BsArrowRight } from 'react-icons/bs'


interface LinkProps {
    label: string
    link: string
}

const Footer = ({ }) => {

    const year = new Date().getFullYear()

    const router = useRouter();

    const Links: LinkProps[] = [
        { label: 'Link', link: '/' },
        { label: 'Link', link: '/' },
        { label: 'Link', link: '/' },
        { label: 'Link', link: '/' },
        { label: 'Link', link: '/' },
    ]

    return (

        <footer className="block py-4">
            <div className="container mx-auto ">
                <hr className="mb-4 border-b-1 border-gray-200" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-center mb-2 md:text-left md:mb-0">
                            <div className="text-sm text-gray-500 font-semibold py-1 text-center md:text-left">
                                <button className='text-gray-500 hover:opacity-75' onClick={() => router.push('/')}>rentme</button> © {year}
                                <span className='ml-3'>by <a target="_blank" href='https://helarman.pro' className='text-blue-500 hover:opacity-75'>helarman</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                            {Links && Links.map(({ label, link }) => (
                                <li key={label}>
                                    <button
                                        onClick={() => router.push(link)}
                                        className="text-gray-700 opacity-75 text-sm font-semibold block py-1 px-3"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;