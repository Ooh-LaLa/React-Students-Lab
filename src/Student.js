import Score from "./Score"


const Student =(props) => {
    console.log(props, "STUDENT TEST!!");
    return(
        <>
        <h1>Profiles!</h1>
       <h2>{props.student.name}</h2>
       <h2>{props.student.bio}</h2>
       <h1>Scores!</h1>
       {props.student.scores.map((score, idx)=>
         <Score score={score} key={idx} />
       )}
         </>
      )
}

export default Student