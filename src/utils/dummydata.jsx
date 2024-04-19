export const generateDummyReports = () => {
    const currentDate = new Date();
    const reports = [];

    for (let i = 0; i < 40; i++) {
        const generatedDate = new Date(currentDate - i * 24 * 60 * 60 * 1000);
        const report = {
            id: i + 1,
            name: `Report ${i + 1}`,
            generatedDate: generatedDate.toISOString().split("T")[0],
            generatedTime: generatedDate.toISOString().split("T")[1], //(YYYY-MM-DDTHH:mm:ss.sssZ)
        };
        reports.push(report);
    }

    return reports;
};
