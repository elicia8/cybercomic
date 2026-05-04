import { useParams } from "react-router-dom";
import Layout from "./Layout";
import { datas } from "./data/courseData";
export default function Course() {
  const { id } = useParams();
  const idInt = Number(id);
  const course = datas.find((data) => data.id === idInt);
  return (
    <Layout>
      <div>
        <h1>Bab {id}: {course?.title}</h1>
        <h3>{course?.description}</h3>
        <img src={course?.image} alt="" />
      </div>
    </Layout>
  );
}
