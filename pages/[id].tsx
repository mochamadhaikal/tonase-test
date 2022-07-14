import { useRouter } from 'next/router'

import BlogDetail from '@pages/BlogDetail';

function Detail() {
    const router = useRouter();
    const { id } = router.query;

    return <BlogDetail id={id as string} />
}

export default Detail