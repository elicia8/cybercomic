import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { profiles } from "./data/profile";
import Layout from "./Layout";
import "./Layout.css";
import "./Profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserProfile } from "./services/setUserProfile";
import { getUserProfile } from "./services/getUserProfile";
export default function Profile() {
  const [profileUrl, setProfileUrl] = useState("");
  useEffect(() => {
    async function getProfile() {
      getUserProfile();
    }
    getProfile();
    
  }, []);
  const navigate = useNavigate();
  function handleChoose() {
    setUserProfile(profileUrl);
    navigate("/");
  }
  return (
    <Layout>
      <div className="flex flex-col relative h-[calc(100vh-4rem)] gap-2 items-center">
        <h1 className="px64">User Profile</h1>
        <h2 className="medium">Pilihlah avatar Anda</h2>
        <div className="flex flex-col flex-wrap sm:flex-row mt-5 justify-center items-center gap-6">
          {profiles.map((profile) => (
            <Button
              key={profile.id}
              className="w-full sm:w-3xs h-auto cursor-pointer"
              onClick={() => setProfileUrl(profile.image)}
            >
              <Card
                className={`w-full bg-[var(--bg-secondary)] pt-0 profile ${profileUrl === profile.image ? "active" : ""}`}
              >
                <img src={profile.image} alt="Event cover" className="w-full" />
                <CardHeader>
                  <CardTitle>{profile.id}</CardTitle>
                </CardHeader>
              </Card>
            </Button>
          ))}
        </div>
        <Button className="btn w-[10%] cursor-pointer" onClick={handleChoose}>
          Pilih
        </Button>
      </div>
    </Layout>
  );
}
