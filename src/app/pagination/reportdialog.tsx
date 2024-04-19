import { FolderDown, Filter, SquareX } from "lucide-react";

const ReportDialog = ({ reports }) => {
    return (
        <div className="h-full relative border-solid border-gray-200 border-b-2 overflow-hidden">
            <div className="flex justify-center items-center p-4 relative">
                <h2 className="text-base text-center font-bold text-gray-800 tracking-tight">
                    Recently Generated Reports
                </h2>
                <Filter className="absolute top-0 right-0 mt-4 mr-14 text-gray-500" />
                <SquareX className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" />
            </div>
            <table className="w-full table-fixed">
                <thead className="text-left text-xs font-semibold text-gray-500 bg-gray-100">
                    <tr>
                        <th className="w-[20%] py-2 pl-6">Date</th>
                        <th className="w-[68%] py-2">Report Name</th>
                        <th className="w-auto py-2 pr-6 text-center">
                            Download
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map((report) => (
                        <tr key={report.id} className="text-sm text-gray-800">
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

            {/* <div>
                <ul className="w-full text-xs font-semibold text-gray-500 flex bg-gray-100 px-6 py-2">
                    <li className="flex-shrink-0 w-[20%]">Date</li>
                    <li className="flex-shrink-0 lg:flex-grow-0 lg:w-[60%] overflow-hidden">
                        Report Name
                    </li>
                    <li className="flex-shrink-0 w-[20%]">Download</li>
                </ul>
                <div className="my-2">
                    {reports.map((report) => (
                        <ul
                            key={report.id}
                            className="w-full text-sm text-gray-800 flex bg-white px-6 py-2"
                        >
                            <li className="">{report.generatedDate}</li>
                            <li className="">{report.name}</li>
                            <li className="flex justify-center">
                                <FolderDown className="text-gray-600" />
                            </li>
                        </ul>
                    ))}
                </div>
            </div> */}
        </div>
    );
};

export default ReportDialog;
