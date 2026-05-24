import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { datas } from "./data/courseData";
export default function Course() {
  const { id } = useParams();
  const idInt = Number(id);
  const course = datas.find((data) => data.id === idInt);
  return (
    <Layout>
      <div className="relative flex flex-col gap-4">
        <h1 className="large">Bab {id}: {course?.title}</h1>
        <h3 className="medium">{course?.description}</h3>
        <img src={course?.image} alt="panel komik bab 1" />
      </div>
    </Layout>
  );
}
