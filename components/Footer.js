import React from 'react'
import Link from 'next/link'
import { footerData } from "./footerData";
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-sfsblue text-white px-6 md:px-16 lg:px-24 py-16 ">
            <div className='flex flex-col md:flex-row md:items-center md:justify-center mb-20'>
                <div className="mr-0 md:mr-6 mb-3 md:mb-0">
                    <h1 className='text-white font-bold text-3xl text-left md:text-right'>Our</h1>
                    <h1 className='text-white font-bold text-3xl text-left md:text-right'>Channels</h1>
                </div>
                <div>
                    <p className='text-featurestext text-sm text-left'>Get access to sfs life using</p>
                    <p className='text-featurestext text-sm text-left'>any of the following plaforms</p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="col-span-3">
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-gray-50'>
                        {
                            footerData.map(item => {
                                return <div key={item.id} className="flex flex-col md:items-center md:justify-center mb-16 md:mb-0">
                                    <div className="mb-3">
                                        <Image width='60' height="60" src={item.iconUrl} alt="footer icons"/>
                                    </div>
                                    <Link href={item.link}>
                                        <a className="flex items-center">
                                            <div className={`mr-3 ${item.iconStyle}`}>
                                                <Image width='25' height="25" src={item.downloadUrl} alt="download icon"/>
                                            </div>
                                            <div>
                                                <p className="text-white text-sm">{item.upText}</p>
                                                <p className="text-white text-sm">{item.downText}</p>
                                            </div>
                                        </a>
                                    </Link>
                                    
                                </div>
                            })
                        }

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
