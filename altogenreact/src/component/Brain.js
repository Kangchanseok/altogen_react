import dummy from "../db/altogen.json"

export default function Brain(){
// console.log(dummy.Brain.constructor.name)
return(
    
    <table className = 'braintest'>
        {dummy.map((brain,index) =>(
            <tr key={index}>
                <td>{brain.title}</td>
                <br/>
                <br/>
                <img src={brain.img} style={{width:'800px', height:'500px'}} ></img>
                <br/>
                <td style={{width:'500px', height:'500px', border:'1px solid black'}}>{brain.content}</td>
            </tr>
                
        ))}
    </table>
);
}