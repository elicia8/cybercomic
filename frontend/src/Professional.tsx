import Layout from "./Layout";
import hiuhwilyam from "./assets/professionals/hiuhwilyam.jpeg";
import shellyburgin from "./assets/professionals/shellyburgin.jpeg";

export default function Professional() {
  const professionalTutors = [
    {
      name: "Hiuh Wilyam",
      age: 35,
      education: "Doctor of Computer Science, Harvard University",
      experience:
        "Expert Professor of Cyber Security course in Harvard University",
      image: hiuhwilyam,
    },
    {
      name: "Shelly Burgin",
      age: 27,
      education: "Bachelor of Computer Science, Oxford University",
      experience: "Cyber Analyst & expert tutor of Cyber Security course",
      image: shellyburgin,
    },
  ];
  return (
    <Layout>
      <div className="relative flex flex-col justify-center items-center gap-10 p-4">
        <h1 className="px64">Professional Tutors</h1>
        {professionalTutors.map((tutor) => (
          <div key={tutor.name} className="flex flex-col w-[85%]">
            <div className="text-left flex gap-5 btn2 text-glow">
              <img
                src={tutor.image}
                alt={tutor.name}
                className="w-25 h-25 rounded-xl object-cover"
              />
              <div>
                <h1 className="keania small">{tutor.name}</h1>
                <div className="flex flex-col xsmall">
                  <p>Age: {tutor.age}</p>
                  <p>Education: {tutor.education}</p>
                  <p>Experience: {tutor.experience}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
