

const Score = (props) => {
  console.log(props, "SCORE TEST!!");
  return(
    <>
     - 
      <div class="date">Test Date: {props.score.date}</div>
      <div class="score">Score: {props.score.score}</div>
     - 
    </>
      )
}

export default Score

