import {useState} from "react"
import "./App.css"

function App(){

const [candidates,setCandidates]=useState([
{id:1,name:"Alice Johnson",votes:0},
{id:2,name:"Bob Smith",votes:0},
{id:3,name:"Charlie Cruz",votes:0}
])

const [selected,setSelected]=useState(null)

const submitVote=()=>{

if(selected===null){
alert("Please select a candidate")
return
}

const updated=candidates.map(c =>
c.id===selected ? {...c,votes:c.votes+1} : c
)

setCandidates(updated)
setSelected(null)
}

const resetVotes=()=>{
setCandidates(candidates.map(c=>({...c,votes:0})))
}

const totalVotes=candidates.reduce((sum,c)=>sum+c.votes,0)

return(

<div>

<div className="header">
Online Voting System
</div>

<div className="container">

<h2 className="title">Select Your Candidate</h2>

{candidates.map(c=>(
<div className="candidate-card" key={c.id}>

<div className="candidate-info">

<div className="avatar">
{c.name.charAt(0)}
</div>

<div>
<strong>{c.name}</strong>
</div>

</div>

<input
type="radio"
checked={selected===c.id}
onChange={()=>setSelected(c.id)}
/>

</div>
))}

<button className="vote-btn" onClick={submitVote}>
Submit Vote
</button>

<div className="results">

<h3>Live Results</h3>

{candidates.map(c=>{

const percent = totalVotes ? (c.votes/totalVotes)*100 : 0

return(

<div className="result" key={c.id}>

<div>{c.name} ({c.votes})</div>

<div className="progress">
<div className="bar" style={{width:`${percent}%`}}></div>
</div>

</div>

)
})}

</div>

<button className="reset" onClick={resetVotes}>
Reset Voting
</button>

</div>

</div>

)
}

export default App