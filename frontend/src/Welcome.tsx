import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Welcome() {
  return (
    <Layout>
      <div className="relative overflow-hidden">
        <div className="relative h-[calc(100vh-4rem)] flex flex-col justify-center items-center gap-5">
          <h1 className="xlarge font-bold">Welcome</h1>
          <Link to="/login" className="btn underline medium mt-12">
            Press to Start
          </Link>
          <div className="flex flex-col gap-4">
            <Link to="/login" className="underline medium">
              Log In
            </Link>
            <Link to="/register" className="medium">
              Don't have an account yet?{" "}
              <span className="underline">Sign Up Now!</span>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
