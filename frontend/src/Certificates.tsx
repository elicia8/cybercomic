import Layout from "./Layout";

export default function Certificates() {
    return (
        <Layout>
            <div className="relative flex flex-col gap-10 p-10">
                <h1 className="px64">Congratulations</h1>
                <p className="medium">
                    For finishing your course!!!
                </p>
                <ul className="small list-disc list-inside text-left btn">
                    <li>Cyber Novice: Dapatkan setelah menyelesaikan kursus pertama Anda.</li>
                    <li>Cyber Explorer: Dapatkan setelah menyelesaikan 5 kursus.</li>
                    <li>Cyber Master: Dapatkan setelah menyelesaikan 10 kursus.</li>
                    <li>Cyber Legend: Dapatkan setelah menyelesaikan semua kursus yang tersedia.</li>
                </ul>
            </div>
        </Layout>
    );
}
