import { FolderDown, Filter, SquareX } from "lucide-react";
import Link from "next/link";

const ReportDialog = ({ reports }) => {
    return (
        <div className="h-full border-solid border-gray-200 border-b-2 overflow-hidden">
            <div className="flex relative justify-center items-center p-4">
                <h2 className="text-base text-center font-bold text-gray-800 tracking-tight max-w375:text-left">
                    Recently Generated Reports
                </h2>
                <Filter className="absolute top-0 right-0 mt-4 mr-14 text-gray-500 hover:text-gray-700 max-w470:size-5 max-w375:mr-10" />
                <Link href="/">
                    <button>
                        <SquareX className="absolute top-0 right-0 mt-4 mr-5 text-gray-500 hover:text-gray-700 max-w470:size-5 max-w375:mr-3" />
                    </button>
                </Link>
            </div>
            <div className="h-full w-full text-sm max-w600:text-xs pb-[56px]">
                <div className="h-full w-full">
                    <table className="w-full table-fixed">
                        <thead className="text-left text-gray-500 tracking-tight bg-gray-100">
                            <tr className="flex">
                                <th className="max-w-[140px] w-full pl-6 py-2 font-semibold max-w600:max-w-[110px] max-w600:w-full max-w600:pl-3">
                                    Date
                                </th>
                                <th className="flex-1 py-2 font-semibold">
                                    Report Name
                                </th>
                                <th className="max-w-[120px] w-full py-2 text-center font-semibold max-w600:max-w-[90px] max-w600:w-full">
                                    Download
                                </th>
                            </tr>
                        </thead>
                    </table>
                    <div className="overflow-auto unshow-scroll h-full w-full pb-[36px]">
                        <table className="w-full table-fixed">
                            <tbody className="w-full overflow-auto">
                                {reports.map((report) => (
                                    <tr
                                        key={report.id}
                                        className="flex text-sm max-w600:text-xs text-gray-800"
                                    >
                                        <td className="max-w-[140px] w-full pl-6 pt-4 pb-2 max-w600:max-w-[110px] max-w600:w-full max-w600:pl-3">
                                            {report.generatedDate
                                                .toLocaleDateString("en-GB")
                                                .replace(/\//g, ".")}
                                            <br />
                                            <p className="text-[11px] text-gray-500 max-w600:text-[9px]">
                                                {report.generatedDate.toLocaleTimeString(
                                                    "en-US",
                                                    {
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                        hour12: true,
                                                    }
                                                )}
                                            </p>
                                        </td>
                                        <td className="w-full flex-1 py-2 flex items-center overflow-hidden overflow-ellipsis whitespace-nowrap">
                                            {report.name}
                                        </td>
                                        <td className="max-w-[120px] w-full py-2 flex justify-center items-center max-w600:max-w-[90px] max-w600:w-full">
                                            <FolderDown className="text-gray-600 hover:text-gray-800" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportDialog;
