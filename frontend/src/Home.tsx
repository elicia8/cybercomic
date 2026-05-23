import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { MoveUpRight } from "lucide-react";
import "./Home.css";
import { whyCyberComics } from "./data/whyCyberComic";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
export default function Home() {
  return (
    <Layout>
      <section className="flex flex-col text-left gap-3" id="s1">
        <h1>Cyber<span className="text-[var(--green)]">Comic</span></h1>
        <h2 className="green">LEARN SECURITY. READ COMICS.</h2>
        <p>
          Platform pembelajaran <span className="font-bold text-[var(--green)]">Cyber Security Fundamental</span> pertama yang
          menggunakan pendekatan komik. Belajar lebih intuitif, lebih seru, dan
          lebih mudah diingat.
        </p>
        <div className="flex gap-3">
          <Link to="/courses">
            <Button variant="outline" className="cursor-pointer">
              Mulai Belajar
              <span>
                <MoveUpRight />
              </span>
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" className="cursor-pointer">
              Lihat Silabus
            </Button>
          </Link>
        </div>
      </section>
      <section className="text-left flex flex-col gap-4" id="s2">
        <h2>Kenapa Cyber<span className="text-[var(--green)]">Comic?</span></h2>
        <div className="flex gap-4">
          {whyCyberComics.map((data) => (
            <Card key={data.title} className="px-3 py-6">
              <CardHeader>
                <CardTitle className="font-bold text-lg green">{data.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </Layout>
  );
}
