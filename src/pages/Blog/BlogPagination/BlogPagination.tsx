import { useMemo } from 'react'
import classnames from 'classnames'

interface BlogPaginationProps {
    total: number
    page: number
    setPage: (val: number) => void
}

const PER_PAGE = 6

function BlogPagination({ total, page, setPage }: BlogPaginationProps) {
    const totalPage = useMemo(() => {
        const totalCeil = Math.ceil(total / PER_PAGE)
        const data = []

        for(let i = 1; i <= totalCeil; i++) {
            data.push(i)
        }

        return data
    }, [total])

    const handlePrev = () => {
        if(page > 1) {
            setPage(page - 1)
        }
    }

    const handleNext = () => {
        const totalPage = Math.ceil(total / PER_PAGE)
        if(page < totalPage) {
            setPage(page + 1)
        }
    }
    
    return (
        <div>
            <ul className="flex gap-2 justify-center">
                <li onClick={handlePrev} className="px-3 py-1 text-orange-500 cursor-pointer">
                    Prev
                </li>
                {totalPage.map((item, index) => (
                    <li
                        onClick={() => setPage(item)}
                        className={
                            classnames(
                                'px-3 py-1 border rounded-md text-orange-500 hover:border-[#f97316] cursor-pointer',
                                {
                                    'border-[#f97316]': page === item,
                                    'border-[#ffffff]': page !== item,
                                }
                            )
                        }
                        key={index}
                    >
                        {item}
                    </li>
                ))}
                <li onClick={handleNext} className="px-3 py-1 text-orange-500 cursor-pointer">Next</li>
            </ul>
        </div>
    )
}

export default BlogPagination