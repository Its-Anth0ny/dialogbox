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
        <div className="flex justify-center items-center space-x-14 text-gray-500 text-xs font-semibold rounded-xl bg-white p-5">
            <div className="flex items-center">
                <button
                    onClick={() => {
                        currentPage > 1 && onPageChange(currentPage - 1);
                    }}
                    disabled={currentPage === currentPage - 1}
                    className="px-2"
                >
                    <div className="flex space-x-1">
                        <ChevronFirst className="size-4" />
                        <p>Prev</p>
                    </div>
                </button>
                <div className="flex">
                    {pages.map((page) => (
                        <button
                            key={page}
                            onClick={() => onPageChange(page)}
                            className={`py-2 px-3 mx-1 rounded-lg border-solid border-gray-200 border-2 ${
                                currentPage === page
                                    ? "bg-[#ff6136] text-gray-100"
                                    : ""
                            }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => {
                        currentPage < totalPages &&
                            onPageChange(currentPage + 1);
                    }}
                    disabled={currentPage === currentPage + 1}
                    className="px-2"
                >
                    <div className="flex space-x-1">
                        <p>Next</p>
                        <ChevronLast className="size-4" />
                    </div>
                </button>
            </div>
            <div className="flex items-center space-x-1.5">
                <label>Rows per page </label>
                <select
                    onChange={(e) => onRowNumChange(e.target.value)}
                    defaultValue={5}
                    className="border-solid border-gray-200 border-2 rounded-lg px-2 py-1.5"
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
