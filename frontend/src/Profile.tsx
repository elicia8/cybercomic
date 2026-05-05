import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { avatars } from "./data/avatar";
import Layout from "./Layout";
import "./Layout.css";
import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const [profileUrl, setProfileUrl] = useState("");
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="flex flex-col h-full">
        <h1>User Profile</h1>
        <h2>Pilihlah avatar Anda</h2>
        <div className="flex flex-col flex-wrap sm:flex-row mt-5 justify-center items-center gap-6">
          {avatars.map((avatar) => (
            <Button
              className="w-full sm:w-3xs h-auto cursor-pointer"
              onClick={() => setProfileUrl(avatar.image)}
            >
              <Card
                className={`w-full pt-0 profile ${profileUrl === avatar.image ? "active" : ""}`}
              >
                <img src={avatar.image} alt="Event cover" className="w-full" />
                <CardHeader>
                  <CardTitle>{avatar.id}</CardTitle>
                </CardHeader>
              </Card>
            </Button>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        className="bg-white text-dark cursor-pointer choose"
        onClick={() => navigate("/")}
      >
        Pilih
      </Button>
    </Layout>
  );
}
