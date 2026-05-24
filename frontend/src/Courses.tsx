import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "./Layout";
import { useNavigate } from "react-router-dom";
import { datas } from "./data/courseData.ts";

export default function Courses() {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col gap-6 relative">
        {datas.map((data) => (
          <Card size="sm" className="mx-auto w-full max-w-sm bg-[var(--bg-secondary)]" key={data.id}>
            <CardHeader>
              <CardTitle className="keania large">
                Bab {data.id}: {data.title}
              </CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter className="flex items-center justify-center">
              <Button
                className="btn cursor-pointer"
                onClick={() => navigate(`/course/${data.id}`)}
              >
                Mulai Bab {data.id}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
