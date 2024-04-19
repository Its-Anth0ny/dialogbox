import { ChevronFirst, ChevronLast } from "lucide-react";
import { generateDummyReports } from "../../utils/dummydata";

const Paginator = ({
    currentPage,
    totalPages,
    onRowNumChange,
    onPageChange,
}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const reports = generateDummyReports();

    return (
        <div className="flex justify-center items-center space-x-14 text-gray-600 text-xs rounded-xl bg-white p-5">
            <div className="flex items-center">
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
                        currentPage < totalPages &&
                            onPageChange(currentPage + 1);
                    }}
                    disabled={currentPage === currentPage + 1}
                >
                    <div className="flex">
                        <p>Next</p>
                        <ChevronLast />
                    </div>
                </button>
            </div>
            <div>
                <label>Rows per page: </label>
                <select
                    onChange={(e) => onRowNumChange(e.target.value)}
                    defaultValue={5}
                >
                    {[...Array(reports.length < 15 ? reports.length : 15)].map(
                        (_, index) => (
                            <option key={index + 1} value={index + 1}>
                                {index + 1}
                            </option>
                        )
                    )}
                </select>
            </div>
        </div>
    );
};

export default Paginator;
