import Link from 'next/link';

const Pagination = ({ page, total, perPage }) => {
    const lastPage = Math.ceil(total / perPage);

    return (
        <div>
            {page > 1 && (
                <Link href={`/events?page=${page - 1}`}>
                    <a className='btn-secondary'>Prev</a>
                </Link>
            )}
            {page < lastPage && (
                <Link href={`/events?page=${page + 1}`}>
                    <a className='btn-secondary'>Next</a>
                </Link>
            )}
        </div>
    );
};

export default Pagination;
