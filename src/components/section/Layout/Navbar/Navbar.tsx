import Image from 'next/image'

import { H1, Text } from "@components/ui"
import Logo from "@assets/Logo.png"


function Navbar() {
    return ( 
    <div className="flex justify-between flex-row items-center">
        <div className="flex flex-row items-center p-0 gap-5">
            <Image src={Logo} alt="Logo Serba Serbi" width={50} height={50}/>
            <div className='flex flex-col'>
                <H1 isOrange>Serba</H1>
                <H1 isOrange>Serbi</H1>
            </div>
        </div>
        <div className="flex items-start gap-20">
            <Text isOrange>Home</Text>
            <Text isFaded>Article</Text>
        </div>
        <div style={{ width: 112 }} />
    </div> 
    )
}

export default Navbar