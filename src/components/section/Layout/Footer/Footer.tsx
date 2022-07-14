import Image from 'next/image';
import { FaFacebookSquare, FaYoutubeSquare, FaInstagram } from 'react-icons/fa'

import { Text, H1 } from '@components/ui'
import Logo from '@assets/Logo.png'


function Footer() {
    const SIZE = '1.5rem'

    return (
        <footer className='pt-20'>
        <div className='flex gap-32 mb-28 items-start'>
            <div className='flex items-center gap-2'>
                <Image src={Logo} alt="Logo Serba Serbi" width={50} height={50}/>
                <H1 isOrange>SerbaSerbi</H1>
            </div>
            <div className='flex gap-14 tracking-wide'>
                <div>
                    <H1 isBold>Menu</H1>
                    <Text>Home</Text>
                </div>

                <div>
                    <H1 isBold>Bantuan</H1>
                    <Text>Pusat bantuan</Text>
                    <Text>Privacy Policy</Text>
                </div>
            </div>
        </div>

        {/* Copyright */}
         <div className="border-t flex justify-between pt-5">
            <Text isFaded>©2022 Sislog. All Right Reserved.</Text>
            <div className='flex gap-2'>
                <FaFacebookSquare size={SIZE}/>
                <FaYoutubeSquare size={SIZE}/>
                <FaInstagram size={SIZE}/>
            </div>
         </div>      
             
    </footer>
      
     );
}
export default Footer;