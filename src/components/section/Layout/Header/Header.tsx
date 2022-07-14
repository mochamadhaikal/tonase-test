import { useContext, ChangeEvent } from 'react';

import { H1, TextField } from '@components/ui'
import { BlogStore } from '@context/blog'
 
function Header() {
    const { blogDispatch } = useContext(BlogStore)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        blogDispatch({
            type: 'SET_KEYWORD',
            payload: e.target.value
        })
    }
    
    return ( 
        <div className='py-20 flex justify-between'>
            <H1 className='text-5xl' isOrange>Article</H1>
            <TextField onChange={handleChange} />
        </div>
     );
}

export default Header;