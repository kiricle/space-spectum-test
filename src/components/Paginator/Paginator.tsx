import { usePagination } from '../../hooks/usePagination';
import Button from '../../ui/Button/Button';
import styles from './Paginator.module.scss';

type PaginatorProps<T> = {
    data: T[];
    render: (dataToRender: T[]) => JSX.Element;
    itemsPerPage: number;
};

const Paginator = ({ data, render, itemsPerPage }: PaginatorProps<any>) => {
    const { dataToRender, goPrevPage, goNextPage, currentPage, totalPages } =
        usePagination(1, data, itemsPerPage);

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
