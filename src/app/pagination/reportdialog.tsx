const ReportDialog = ({ reports }) => {
    return (
        <div className="report-dialog">
            <h2>Recently Generated Reports</h2>
            <ul>
                {reports.map((report) => (
                    <ul key={report.id} className="flex">
                        <li>{report.name}</li>
                        <li>{report.generatedDate}</li>
                    </ul>
                ))}
            </ul>
        </div>
    );
};

export default ReportDialog;
