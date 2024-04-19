import { FolderDown, Filter, SquareX } from "lucide-react";
import Link from "next/link";

const ReportDialog = ({ reports }) => {
    return (
        <div className="h-[575px] relative border-solid border-gray-200 border-b-2 overflow-y-hidden">
            <div className="flex justify-center items-center p-4 relative">
                <h2 className="text-base text-center font-bold text-gray-800 tracking-tight">
                    Recently Generated Reports
                </h2>
                <Filter className="absolute top-0 right-0 mt-4 mr-14 text-gray-500 hover:text-gray-700" />
                <Link href="/">
                    <button>
                        <SquareX className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 hover:text-gray-700" />
                    </button>
                </Link>
            </div>
            <div className="h-[520px] w-full">
                <table className="w-full table-fixed">
                    <thead className="text-left text-xs font-semibold text-gray-500 bg-gray-100 ">
                        <tr>
                            <th className="w-[20%] py-2 pl-6">Date</th>
                            <th className="w-[68%] py-2">Report Name</th>
                            <th className="w-auto py-2 pr-6 text-center">
                                Download
                            </th>
                        </tr>
                    </thead>
                    <tbody className="h-full w-full">
                        {reports.map((report) => (
                            <tr
                                key={report.id}
                                className="text-sm text-gray-800"
                            >
                                <td className="py-3 pl-6">
                                    {report.generatedDate}
                                </td>
                                <td className="py-2">{report.name}</td>
                                <td className="py-2 pr-6 flex justify-center">
                                    <FolderDown className="text-gray-600 hover:text-gray-800" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReportDialog;
