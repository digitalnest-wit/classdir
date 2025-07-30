interface CardProps {
  name: string;
  funFact: string;
  favoriteLanguage: string;
  careerGoal: string;
}

export default function StudentCard({
  name,
  funFact,
  favoriteLanguage,
  careerGoal,
}: CardProps) {
  return (
    <div className="p-2 bg-gray-100 rounded-md hover:shadow-md hover:shadow-gray-300 transition-all duration-300 ease-in-out">
      <h2 className="text-xl font-bold">{name}</h2>

      <div className="mt-1 flex flex-col gap-2">
        <div>
          <div className="font-bold">Fun Fact:</div>
          <p>{funFact}</p>
        </div>
        <div>
          <div className="font-bold">Favorite Language:</div>
          <p>{favoriteLanguage}</p>
        </div>
        <div>
          <div className="font-bold">Career Goal:</div>
          <p>{careerGoal}</p>
        </div>
      </div>
    </div>
  );
}
