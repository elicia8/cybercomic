import defaultProfile from "../assets/profile/default_profile.png";
import boy from "../assets/profile/chibi_boy.png";
import girl from "../assets/profile/chibi_girl.png";

interface Profile {
  id: string;
  image: string;
}
export const profiles: Profile[] = [
  {
    id: "Default",
    image: defaultProfile,
  },
  {
    id: "Laki-laki",
    image: boy,
  },
  {
    id: "Perempuan",
    image: girl,
  },
];
