import boy from "../assets/avatar/chibi_boy.png";
import girl from "../assets/avatar/chibi_girl.png";
interface Avatar {
  id: string;
  image: string;
}
export const avatars: Avatar[] = [
  {
    id: "Laki-laki",
    image: boy,
  },
  {
    id: "Perempuan",
    image: girl,
  },
];
