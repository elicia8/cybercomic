import komik1 from "../assets/komik_keamanan_siber.svg";
interface Course {
  id: number;
  title: string;
  descriptions: string[];
  image?: string;
}
export const datas: Course[] = [
  {
    id: 1,
    title: "Pengantar Keamanan Siber",
    descriptions: ["Definisi", "CIA Triad", "ancaman & aktor", "terminologi dasar"],
    image: komik1,
  },
  {
    id: 2,
    title: "Jenis-Jenis Ancaman & Serangan Siber",
    descriptions:
      ["Malware", "phishing", "social engineering", "DoS/DDoS", "MITM", "ransomware"],
  },
  {
    id: 3,
    title: "Kriptografi Dasar",
    descriptions:
      ["Enkripsi simetris & asimetris, hashing, PKI, SSL/TLS, sertifikat digital"],
  },
  {
    id: 4,
    title: "Keamanan Jaringan",
    descriptions:
      ["Firewall", "VPN", "IDS/IPS", "segmentasi jaringan", "protokol TCP/IP aman"],
  },
  {
    id: 5,
    title: "Keamanan Sistem Operasi & Endpoint",
    descriptions:
      ["Hardening OS", "patch management", "antivirus/EDR", "least privilege"],
  },
  {
    id: 6,
    title: "Keamanan Aplikasi Web",
    descriptions:
      ["OWASP Top 10", "SQL Injection", "XSS", "CSRF", "input validation", "HTTPS"],
  },
];
