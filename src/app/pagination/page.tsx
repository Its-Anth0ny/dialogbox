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
    const allreports = generateDummyReports();
    const reports = allreports.filter((report) => {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        const generatedDate = new Date(report.generatedDate);
        return generatedDate > thirtyDaysAgo;
    });
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
            <div className="h-[650px] max-w-[600px] w-full max-w600:max-w-[450px] max-w600:w-full md:max-w-[700px] md:w-full lg:max-w-[800px] lg:w-full flex flex-col justify-between rounded-xl bg-white shadow-2xl">
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
