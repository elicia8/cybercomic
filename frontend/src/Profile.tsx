import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { profiles } from "./data/profile";
import Layout from "./Layout";
import "./Layout.css";
import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useProfileStore } from "./store/useProfileStore";
export default function Profile() {
  const {setProfilePhoto} = useProfileStore();
  const [profileUrl, setProfileUrl] = useState("");
  const navigate = useNavigate();
  function handleChoose() {
    setProfilePhoto(profileUrl);
    navigate("/");
  }
  return (
    <Layout>
      <div className="flex flex-col h-full">
        <h1>User Profile</h1>
        <h2>Pilihlah avatar Anda</h2>
        <div className="flex flex-col flex-wrap sm:flex-row mt-5 justify-center items-center gap-6">
          {profiles.map((profile) => (
            <Button key={profile.id}
              className="w-full sm:w-3xs h-auto cursor-pointer"
              onClick={() => setProfileUrl(profile.image)}
            >
              <Card
                className={`w-full pt-0 profile ${profileUrl === profile.image ? "active" : ""}`}
              >
                <img src={profile.image} alt="Event cover" className="w-full" />
                <CardHeader>
                  <CardTitle>{profile.id}</CardTitle>
                </CardHeader>
              </Card>
            </Button>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        className="bg-white text-dark cursor-pointer choose"
        onClick={handleChoose}
      >
        Pilih
      </Button>
    </Layout>
  );
}
