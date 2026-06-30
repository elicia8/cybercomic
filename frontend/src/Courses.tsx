import { Button } from "@/components/ui/button";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { datas } from "./data/courseData.ts";
import { useState } from "react";

export default function Courses() {
  return (
    <Layout>
      <div className="relative flex flex-col mt-10 gap-20 text-left px-15">
        <h1 className="xlarge text-glow">Courses</h1>
        <div className="flex flex-wrap justify-start gap-20 relative">
          {datas.map((data) => {
            const [open, setOpen] = useState(false);
            function handleClick() {
              setOpen(!open);
            }
            return (
              <div className={open ? "w-full flex items-center gap-4" : "w-40 h-40"}>
                <div className="flex flex-col items-center gap-2">
                  <Button
                    className="w-40 h-40 btn2 flex items-center text-center cursor-pointer keania"
                    key={data.id}
                    onClick={handleClick}
                  >
                    <h1 className="keania px64">C{data.id}</h1>
                  </Button>
                  <Link to={`/course/${data.id}`} className={`${open ? "" : "hidden"} btn2 h-2 cursor-pointer text-center flex items-center justify-center`}>START</Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className={`${open ? "px64 keania text-left" : "xsmall mono text-center"}`}>{data.title}</h2>
                  <div className={open ? "" : "hidden"}>
                    <ul>
                      {data.descriptions.map((description) => (
                        <li>- {description}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </Layout>
  );
}
