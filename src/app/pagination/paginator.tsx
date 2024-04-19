const Paginator = ({
    currentPage,
    totalPages,
    onRowNumChange,
    onPageChange,
}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="paginator">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={currentPage === page ? "active" : ""}
                >
                    {page}
                </button>
            ))}
            <select onChange={(e) => onRowNumChange(e.target.value)}>
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
