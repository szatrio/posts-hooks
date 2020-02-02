import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

const App = () => {
  
  const [data, setData]= useState([])

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  })

  
    if(data.length <= 0){
      return (
        <div>Loading...</div>
      )
    }else{
      return (
          <>
            <ul>
              <p>Kumpulan Post</p>
              {data.map(d => (
                  <li>{d.title}</li>
              ))}
            </ul>
          </>
        )
    }  
  
}

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       data : []
//     }
//   }

//   componentDidMount(){
//     axios.get('http://jsonplaceholder.typicode.com/posts')
//     .then(res => {
//       this.setState({
//         data: res.data
//       })
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }

//   render(){
//     if(this.state.data.length <= 0){
//       return (
//         <div>Loading...</div>
//       )
//     }else{
//       return (
//           <>
//             <ul>
//               <p>Kumpulan Post</p>
//               {this.state.data.map(d => (
//                   <li>{d.title}</li>
//               ))}
//             </ul>
//           </>
//         )
//     }  
//   }
// }

export default App;
