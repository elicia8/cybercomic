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
      <div className="flex flex-col gap-6">
        {datas.map((data) => (
          <Card size="sm" className="mx-auto w-full max-w-sm" key={data.id}>
            <CardHeader>
              <CardTitle>
                Bab {data.id}: {data.title}
              </CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="w-full cursor-pointer"
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
