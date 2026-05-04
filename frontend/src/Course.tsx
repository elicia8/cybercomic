import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "./Layout";

const datas = [
  {
    id: 1,
    title: "Pengantar Keamanan Siber",
    description: "Definisi, CIA Triad, ancaman & aktor, terminologi dasar",
  },
  {
    id: 2,
    title: "Jenis-Jenis Ancaman & Serangan Siber",
    description:
      "Malware, phishing, social engineering, DoS/DDoS, MITM, ransomware",
  },
  {
    id: 3,
    title: "Kriptografi Dasar",
    description:
      "Enkripsi simetris & asimetris, hashing, PKI, SSL/TLS, sertifikat digital",
  },
  {
    id: 4,
    title: "Keamanan Jaringan",
    description:
      "Firewall, VPN, IDS/IPS, segmentasi jaringan, protokol TCP/IP aman",
  },
  {
    id: 5,
    title: "Keamanan Sistem Operasi & Endpoint",
    description:
      "Hardening OS, patch management, antivirus/EDR, least privilege",
  },
  {
    id: 6,
    title: "Keamanan Aplikasi Web",
    description:
      "OWASP Top 10, SQL Injection, XSS, CSRF, input validation, HTTPS",
  },
];

export default function Course() {
  return (
    <Layout>
      <div className="flex flex-col gap-6">
        {datas.map((data) => (
          <Card size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
              <CardTitle>
                Bab {data.id}: {data.title}
              </CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="outline" size="sm" className="w-full cursor-pointer">
                Mulai Bab {data.id}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
