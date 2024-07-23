function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const procentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (procentage === 100) emoji = "🎖️";
  if (procentage >= 80 && procentage < 100) emoji = "🎉";
  if (procentage >= 50 && procentage < 80) emoji = "⭐";
  if (procentage >= 0 && procentage < 50) emoji = "👍 ";
  if (procentage === 0) emoji = "😂";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out if {maxPossiblePoints}(
        {Math.ceil(procentage)})
      </p>
      <p className="highscore">(Highscore : {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart quiz
      </button>
    </>
  );
}

export default FinishScreen;
