import Link from "next/link";

export default function Home() {
    return (
        <div className="w-full h-full">
            <h1>Welcome to My Report App</h1>
            <p>Click below to view recently generated reports:</p>
            <Link href="/pagination">View Reports</Link>
        </div>
    );
}
