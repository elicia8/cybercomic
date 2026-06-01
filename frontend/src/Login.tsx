import { useState } from "react";
import { supabase } from "./lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./Layout";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    navigate("/courses");
  }

  return (
    <Layout>
      <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
        <Card className="w-[40%] relative flex justify-center bg-[var(--bg-secondary)] p-4">
          <CardHeader>
            <CardTitle className="keania large">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 items-center"
            >
              <div className="grid gap-2 w-full">
                <Label className="mono medium">Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="m@example.com"
                  className="mono small btn"
                />
              </div>
              <div className="grid gap-2 w-full">
                <Label className="mono medium">Password</Label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mono small btn"
                />
              </div>
              {error && <p className="text-sm text-red-500">{error}</p>}
              <Button
                type="submit"
                disabled={loading}
                className="btn small w-[50%] mt-4"
              >
                {loading ? "Loading..." : "Submit"}
              </Button>
              <div className="flex flex-col">
                <p className="xsmall">Don't have an account yet?</p>
                <Link to="/register" className="small underline">
                  Sign Up Now!
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
