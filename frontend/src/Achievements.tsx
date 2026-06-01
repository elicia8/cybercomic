import Layout from "./Layout";

export default function Achievements() {
    return (
        <Layout>
            <div className="relative flex flex-col gap-10 p-10">
                <h1 className="px64">Achievements</h1>
                <p className="medium">
                    Di halaman ini, Anda dapat melihat pencapaian yang telah Anda raih melalui penyelesaian kursus di CyberComic. Setiap pencapaian mencerminkan kemajuan dan dedikasi Anda dalam mempelajari dunia keamanan siber. Teruslah belajar dan kumpulkan lebih banyak poin untuk membuka pencapaian baru!
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
