"use client";

import { use, useState, useEffect } from "react";
import ReportDialog from "./reportdialog";
import Paginator from "./paginator";
import { generateDummyReports } from "../../utils/dummydata";

type Report = {
    id: number;
    name: string;
    generatedDate: string;
};

const ReportsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowNum, setRowNum] = useState(5);
    const reports = generateDummyReports();
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
        setTotalPages(Math.ceil(reports.length / rowNum));
    }, [rowNum, currentPage, reports]);

    return (
        <div className="">
            <ReportDialog reports={currentReports} />
            <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onRowNumChange={handleRowNum}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default ReportsPage;
