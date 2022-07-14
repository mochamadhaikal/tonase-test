import { ChangeEvent } from 'react';

import Search from '@components/icons/Search';

interface TextFieldProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

function TextField({ onChange }: TextFieldProps) {
    return ( 
    <div className="flex justify-end">
        <div className="mb-3 xl:w-96">
            <div className="input-group relative flex flex-end items-stretch w-full">
                <Search className="absolute" style={{ left: 18, top: 12}} />
                <input
                    onChange={onChange}
                    type="search"
                    className="p-3 rounded-lg bg-white border border-zinc-400 outline-none h-10 w-full pl-12"
                    placeholder="Cari"
                    aria-label="Search"
                />
            </div>
        </div>
    </div>
     );
}

export default TextField;