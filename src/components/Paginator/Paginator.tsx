import { useState } from 'react';
import Button from '../../ui/Button/Button';
import styles from './Paginator.module.scss';

type PaginatorProps<T> = {
    data: T[];
    render: (dataToRender: T[]) => JSX.Element;
    itemsPerPage: number;
};

const Paginator = ({ data, render, itemsPerPage }: PaginatorProps<any>) => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = currentPage * itemsPerPage;
    const dataToRender = data.slice(firstIndex, lastIndex);

    const goNextPage = () => {
        if (currentPage === totalPages) return;

        setCurrentPage((prev) => prev + 1);
    };

    const goPrevPage = () => {
        if (currentPage === 1) return;

        setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className={styles.container}>
            {render(dataToRender)}
            {data.length > 0 && (
                <div className={styles.controls}>
                    <Button
                        onClick={goPrevPage}
                        appearance="primary"
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </Button>
                    <span>
                        {currentPage}/{totalPages}
                    </span>
                    <Button
                        onClick={goNextPage}
                        appearance="primary"
                        disabled={currentPage === totalPages}
                    >
                        {'>'}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Paginator;
