import Layout from "./Layout";

export default function Services() {
  return (
    <Layout>
      <div className="relative flex flex-col gap-10 p-10">
        <div className="flex flex-col gap-4">
            <h1 className="px64 text-glow">Our Services</h1>
            <p className="medium">
              Kami menyajikan berbagai layanan untuk mendukung perjalanan belajar Anda di CyberComic, termasuk:
            </p>
            <ul className="small list-disc list-inside text-left btn">
              <li>Course interaktif berbentuk komik dan gamifikasi</li>
              <li>Sertifikat penyelesaian course</li>
              <li>Konsultasi dengan profesional</li>
            </ul>
        </div>
      </div>
    </Layout>
  );
}
