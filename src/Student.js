import Score from "./Score"


const Student =(props) => {
    console.log(props, "STUDENT TEST!!");
    return(
        <>
        <h2>Profile:</h2>
       <h3>{props.student.name}</h3>
       <h4>{props.student.bio}</h4>

       <h3>Score:</h3>
       {props.student.scores.map((score, idx)=>
         <Score score={score} key={idx} />
       )}
         </>
      )
}

export default Student