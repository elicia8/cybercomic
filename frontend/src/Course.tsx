import { Link, useParams } from "react-router-dom";
import Layout from "./Layout";
import { datas } from "./data/courseData";
export default function Course() {
  const { id } = useParams();
  const idInt = Number(id);
  const course = datas.find((data) => data.id === idInt);
  return (
    <Layout>
      <div className="relative flex flex-col gap-10 items-center">
        <Link to="/courses" className="btn cursor-pointer w-60 medium">
          NEXT +5 pts
        </Link>
        <div className="relative flex flex-col gap-4 w-full">
          <h1 className="px64 text-glow">
            Bab {id}: {course?.title}
          </h1>
          {/* {course?.descriptions.map((description) => (
              <p className="medium">{description}</p>
            ))} */}
          <img src={course?.image} alt="panel komik bab 1" className="w-full" />
        </div>
      </div>
    </Layout>
  );
}
