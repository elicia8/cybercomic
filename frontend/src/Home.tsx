import Layout from "./Layout";
import "./Home.css";
import { Link } from "react-router-dom";
const introductions = [
  {
    title: "WHY US",
    descriptions: [
      "Cybercomic kami menawarkan course Cyber Security secara mendetail dengan bahasa yang mudah dipahami, analogi, serta visualisasi yang interaktif",
    ],
  },
  {
    title: "VISI",
    descriptions: [
      "Menjadi platform edutainment terdepan yang mendemokratisasi edukasi Cyber Security melalui pendekatan visual interaktif, serta menjadi pusat ekosistem inovatif yang menghubungkan talenta IT berkualitas dengan kebutuhan industri.",
    ],
  },
  {
    title: "MISI",
    descriptions: [
      "Mengubah konsep Cyber Security yang kompleks menjadi mudah dipahami",
      "Membangun komunitas yang inklusif dan sinergis dengan menggandeng seniman visual (mangaka), akademisi (dosen/guru), praktisi industri IT, dan antusias komik untuk menciptakan pengalaman belajar yang unik.",
      "Memberikan layanan B2B profesional bermutu tinggi yang mencakup program pelatihan, pengembangan perangkat lunak (aplikasi/web), hingga pembuatan karya seni ilustrasi kreatif untuk mitra perusahaan.",
      "Menjembatani kesenjangan SDM di industri teknologi dengan menyalurkan tenaga ahli IT dan Cyber Security (seperti konsultan dan analis siber) yang kompeten melalui sistem outsourcing yang andal.",
    ],
  },
];
export default function Home() {
  return (
    <Layout>
      <div className="my-20 relative flex flex-col justify-center items-center">
        <div className=" flex flex-col gap-20 items-center">
          {/* <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-50">
            
          </div> */}
          <h1 className="xlarge font-bold drop-shadow-[0_0_20px_#ff69b4]">
            CyberComic
          </h1>
          <p className="large">
            Jadilah Pahlawan <span className="font-bold">DIGITAL</span> di Dunia{" "}
            <span className="font-bold">NYATA</span>
          </p>
          <Link to="/welcome" className="btn2 w-max underline medium">
            NEXT &gt;&gt;&gt;
          </Link>
        </div>
        <div className="flex flex-col gap-8 mt-30">
          {introductions.map((introduction) => (
            <div
              className="px-20 text-left flex flex-col gap-6"
              key={introduction.title}
            >
              <h2 className="text-glow">{introduction.title}</h2>
              <ul className="list-disc">
                {introduction.descriptions.map((description) => (
                  <li className="small">{description}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
