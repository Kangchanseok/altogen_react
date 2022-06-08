import dummy from "../db/altogen.json"
import {Table, TableBody, TableCell, TableHead, TableRow, Button, Typography} from '@material-ui/core'

export default function Brain(){
return(
    
    // <table className = 'braintest'>
    //     {dummy.map((brain,index) =>(
    //         <tr key={index}>
    //             <tr>title
    //                 <tr>{brain.title}</tr>
    //             </tr>
    //             <tr>image
    //                 <img src={brain.img} style={{width:'700px', height:'500px'}} ></img>
    //             </tr>
    //             <tr style={{width:'500px', height:'500px', border:'1px solid black'}}>content
    //                 <tr>{brain.content}</tr>
    //             </tr>
    //         </tr>
                
    //     ))}
    // </table>
    <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{fontWeight:'bold', border:'1px solid black', backgroundColor:'black', color:'white'}}>NAME</TableCell>
              <TableCell align="center" style={{fontWeight:'bold', border:'1px solid black', backgroundColor:'black', color:'white'}}>IMG</TableCell>
              <TableCell align="center" style={{fontWeight:'bold', border:'1px solid black', backgroundColor:'black', color:'white'}}>CONTENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummy.map( (brain,index) => (
              <TableRow key={index}>
                <TableCell align="center" style={{fontSize:'15px', fontWeight:'bold', border:'1px solid black'}}>{brain.title}</TableCell>
                <TableCell align="center" style={{border:'1px solid black'}}><img src={brain.img} style={{width:'650px', height:'400px'}}></img></TableCell>
                <TableCell align="center" style={{fontSize:'17px', border:'1px solid black'}}>{brain.content}</TableCell>
                
                
              </TableRow>
            ))}
          </TableBody>
        </Table>

);
}