import { FolderDown, Filter, SquareX } from "lucide-react";

const ReportDialog = ({ reports }) => {
    return (
        <div className="h-full relative border-solid border-gray-200 border-b-2 overflow-y-hidden">
            <div className="flex justify-center items-center p-4 relative">
                <h2 className="text-base text-center font-bold text-gray-800 tracking-tight">
                    Recently Generated Reports
                </h2>
                <Filter className="absolute top-0 right-0 mt-4 mr-14 text-gray-500" />
                <SquareX className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
            </div>
            <div className="h-full w-full overflow-y-hidden">
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
                    <tbody className="h-full w-full overflow-y-scroll">
                        {reports.map((report) => (
                            <tr
                                key={report.id}
                                className="text-sm text-gray-800"
                            >
                                <td className="py-2 pl-6">
                                    {report.generatedDate}
                                </td>
                                <td className="py-2">{report.name}</td>
                                <td className="py-2 pr-6 flex justify-center">
                                    <FolderDown className="text-gray-600" />
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
