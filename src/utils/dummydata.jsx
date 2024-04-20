export const generateDummyReports = () => {
    const currentDate = new Date();
    const reports = [];

    for (let i = 0; i < 40; i++) {
        const generatedDate = new Date(currentDate - i * 24 * 60 * 60 * 1000);
        const report = {
            id: i + 1,
            name: `Reportjasvddddddddddddddddddddddddvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv`,
            generatedDate: generatedDate,
        };
        reports.push(report);
    }

    return reports;
};
