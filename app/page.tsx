import StudentCard from "@/components/students/card";

export default function Home() {
  return (
    <div className="m-3 flex flex-col items-center">
      <h1 className="font-bold text-xl">Digital NEST Class Directory</h1>
      <p className="my-1">
        Welcome to our class directory! Each student will add their own profile
        below.
      </p>
      <div className="flex flex-col justify-center gap-3 mt-3">
        <StudentCard
          name="Jared Esquivel"
          funFact="I enjoy playing the piano"
          favoriteLanguage="Python"
          careerGoal="Explore Careers in Cybersecurity, Software Development and Fintech."
        />
        {/* Add your cards here :) */}
      </div>
    </div>
  );
}
