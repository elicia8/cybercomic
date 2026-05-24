import Layout from "./Layout";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <Layout>
      <div className="relative h-[calc(100vh-4rem)] flex flex-col justify-center items-center gap-20">
        <h1 className="xlarge font-bold">CyberComic</h1>
        <p className="large">
          Jadilah Pahlawan <span className="font-bold">DIGITAL</span> di Dunia{" "}
          <span className="font-bold">NYATA</span>
        </p>
        <Link to="/welcome" className="btn w-max underline medium">
          Next &gt;&gt;&gt;
        </Link>
      </div>
    </Layout>
  );
}
