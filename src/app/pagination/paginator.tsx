import { ChevronFirst, ChevronLast } from "lucide-react";

const Paginator = ({
    currentPage,
    totalPages,
    onRowNumChange,
    onPageChange,
}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="paginator">
            <button
                onClick={() => {
                    currentPage > 1 && onPageChange(currentPage - 1);
                }}
                disabled={currentPage === currentPage - 1}
            >
                <div className="flex">
                    <ChevronFirst />
                    <p>Prev</p>
                </div>
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? "active" : ""}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => {
                    currentPage < totalPages && onPageChange(currentPage + 1);
                }}
                disabled={currentPage === currentPage + 1}
            >
                <div className="flex">
                    <p>Next</p>
                    <ChevronLast />
                </div>
            </button>
            <select
                onChange={(e) => onRowNumChange(e.target.value)}
                defaultValue={5}
            >
                {[...Array(15)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                        {index + 1}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Paginator;
