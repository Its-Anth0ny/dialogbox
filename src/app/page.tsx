import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">
                Welcome to My Report App
            </h1>
            <p className="text-lg text-gray-700 mb-8">
                Click below to view recently generated reports
            </p>
            <Link href="/pagination">
                <p className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
                    View Reports
                </p>
            </Link>
        </div>
    );
}
