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
        <StudentCard
          name="Leonardo Villalobos"
          funFact="I haven't seen snow before"
          favoriteLanguage="Go"
          careerGoal="I want to be a 10x developer"
        />
        <StudentCard
          name="Daniel Fernandez-Amaya"
          funFact="I repair broken consoles"
          favoriteLanguage="python"
          careerGoal="To be a computer engineer."
        />
        <StudentCard
          name="Roberto"
          funFact="I can't solve a 2x2 Rubix cube"
          favoriteLanguage="japanese"
          careerGoal="To make my own or help make a game one day"
        />
        {/* Add your cards here :) */}
        <StudentCard
          name="Xavier Perez"
          funFact="My cat is Siamese"
          favoriteLanguage="HTML"
          careerGoal="To be a full-time software engineer or web developer at a company that focuses on creativity and had artistic values"
        />
      </div>
    </div>
  );
}
