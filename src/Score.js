

const Score = (props) => {
  console.log(props, "SCORE TEST!!");
  return(
    <>
      <div>Test Date: {props.score.date}</div>
      <div>Score: {props.score.score}</div>
    </>
      )
}

export default Score

