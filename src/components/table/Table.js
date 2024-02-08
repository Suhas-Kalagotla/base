import react from 'react' 
import './table.css'
import upload from "./upload.js"

const Table = () => {
    return (
        <div className="uploadContainer"> 
        <div className= "uploads">
        Uploads
        </div>
        <table className="uploadTable">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Links</th>
            <th>Prefix</th>
            <th>Add Tags</th>
            <th>Selected Tags</th>
          </tr>
        </thead>
        <tbody>
        {
            upload.map((item,index)=>(
              <tr key={index} className="uploadBodyRow">
                <td>
                {index+1}
                </td>
                <td>{item.links}</td>
                <td>{item.prefix}</td>
                <td>tags</td>
                <td>selectedTags</td>
              </tr>
            ))
        }
        </tbody>
      </table>
        </div>
    ); 
} 

export default Table; 
