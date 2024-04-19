"use client";

import { useState, useEffect } from "react";
import ReportDialog from "./reportdialog";
import Paginator from "./paginator";
import { generateDummyReports } from "../../utils/dummydata";

type Report = {
    id: number;
    name: string;
    generatedDate: string;
};

const ReportsPage = () => {
    const reports = generateDummyReports();
    const [currentPage, setCurrentPage] = useState(1);
    const [rowNum, setRowNum] = useState(5);
    const [currentReports, setCurrentReports] = useState<Report[]>([]);
    const [totalPages, setTotalPages] = useState(
        Math.ceil(reports.length / rowNum)
    );

    const handleRowNum = (rows) => {
        setRowNum(rows);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    useEffect(() => {
        const indexOfLastReport = currentPage * rowNum;
        const indexOfFirstReport = indexOfLastReport - rowNum;
        setCurrentReports(reports.slice(indexOfFirstReport, indexOfLastReport));
    }, [rowNum, currentPage]);

    useEffect(() => {
        setTotalPages(Math.ceil(reports.length / rowNum));
    }, [rowNum, reports.length]);

    return (
        <div className="w-full h-full flex justify-center items-center bg-gray-200">
            <div className="h-[80%] max-w-full w-full md:max-w-[75%] md:w-auto lg:max-w-[50%] lg:w-auto flex flex-col justify-between rounded-xl bg-white shadow-2xl">
                <ReportDialog reports={currentReports} />
                <Paginator
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onRowNumChange={handleRowNum}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default ReportsPage;
