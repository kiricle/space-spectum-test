import { useState } from 'react';

export function usePagination<T>(
    startingPage: number = 1,
    data: T[],
    itemsPerPage: number
) {
    const [currentPage, setCurrentPage] = useState(startingPage);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = currentPage * itemsPerPage;
    const dataToRender = data.slice(firstIndex, lastIndex);

    if(currentPage > totalPages && totalPages !== 0) {
        setCurrentPage(totalPages)
    }

    const goNextPage = () => {
        if (currentPage === totalPages) return;

        setCurrentPage((prev) => prev + 1);
    };

    const goPrevPage = () => {
        if (currentPage === 1) return;

        setCurrentPage((prev) => prev - 1);
    };

    return {
        dataToRender,
        goPrevPage,
        goNextPage,
        currentPage,
        totalPages,
    } as const;
}
