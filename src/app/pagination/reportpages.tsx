import ReportDialog from "./reportdialog";
import { generateDummyReports } from "../../utils/dummydata";

const ReportsPage = () => {
    const reports = generateDummyReports();
    return (
        <div className="reports-page">
            <ReportDialog reports={reports} />
        </div>
    );
};

export default ReportsPage;
