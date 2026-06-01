import Layout from "./Layout";

export default function Leaderboard() {
    const leaderboardData = [
        { rank: 1, username: "John Doe", points: 30 },
        { rank: 2, username: "Jane Smith", points: 25 },
        { rank: 3, username: "Fay", points: 5 },
    ]
  return (
    <Layout>
      <div className="relative flex flex-col gap-10 p-10 h-calc(100vh - 200px) justify-center">
          <h1 className="px64">Leaderboard</h1>
        <div className="flex flex-col gap-4">
            <p className="medium">
                Berikut adalah daftar peringkat pengguna berdasarkan poin yang telah mereka kumpulkan melalui penyelesaian kursus di CyberComic:
            </p>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr>
                        <th className="border-b-2 border-[var(--accent)] py-2">Peringkat</th>
                        <th className="border-b-2 border-[var(--accent)] py-2">Nama Pengguna</th>
                        <th className="border-b-2 border-[var(--accent)] py-2">Poin</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((data) => (
                        <tr key={data.rank}>
                            <td className="border-b border-[var(--accent)] py-2">{data.rank}</td>
                            <td className="border-b border-[var(--accent)] py-2">{data.username}</td>
                            <td className="border-b border-[var(--accent)] py-2">{data.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </Layout>
  );
}
