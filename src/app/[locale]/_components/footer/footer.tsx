import React from 'react'
import styles from './footer.module.css'
import logo from '@/media/logo.png'
import Image from 'next/image'
import { Link } from "@/i18n/routing";
import twitterIcon from '@/media/twitterIcon.png'
import instagramIcon from '@/media/instgramIcon.png'


const Footer = () => {
    return (
        <footer className={'bg-[#00431F] ' + styles.footer}>
            <div className='py-12 flex flex-nowrap flex-col md:flex-row gap-8 mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
                <div className="w-full md:w-1/2 flex flex-col gap-8">
                    <Link href={"/"}>
                        <Image src={logo} alt='logo' />

                    </Link>
                    <p className='w-full md:w-3/4 text-justify'>We are a company dedicated to sustainable agriculture, providing fresh, organic products directly from the farm to your table. Since our founding, we have been committed to offering the best agricultural solutions while preserving.</p>
                </div>

                <div className='w-full md:w-1/2 flex items-start gap-4'>
                    {/* Second element - Quarter width on desktop */}
                    <div className="w-1/2 md:w-1/4  ">
                        <h6>company</h6>
                        <ul>
                            <li><Link href="/market">Market</Link></li>
                            <li><Link href="/our-projects">Our Projects</Link></li>
                            <li><Link href="/news-articles">Blogs</Link></li>
                            <li><Link href="/partners">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Third element - Quarter width on desktop */}
                    <div className="w-1/2 md:w-1/4 ">
                        <h6>Help</h6>
                        <ul>
                            <li><Link href="/contact-us">Contacts Us</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='border-t-[1px] border-[#DBDBDB99] py-8 flex flex-col md:flex-row justify-between items-center gap-4 mx-auto max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl'>
                <p className='text-[#DBDBDB99]'>Copyright ® 2025 Quotoof All rights Reserved</p>
                <div className='flex items-center gap-4'>
                    <Link href="https://x.com/" className='rounded-[50%] bg-[#dbdbdb4f] p-2 w-8 h-8 flex justify-center items-center'>
                        <Image src={twitterIcon} alt='twitter' />
                    </Link>
                    <Link href="https://www.instagram.com/" className='rounded-[50%] bg-[#dbdbdb4f] p-2 w-8 h-8 flex justify-center items-center'>
                        <Image src={instagramIcon} alt='instagram' />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer