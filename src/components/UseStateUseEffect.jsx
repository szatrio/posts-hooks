import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UseStateUseEffect = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    if (data.length <= 0) {
        return (
            <div>Loading...</div>
        )
    } else {
        return (
            <>
                <ul>
                    <p>Kumpulan Post</p>
                    <button>
                        Use State
                </button>
                    {data.map(d => (
                        <li>
                            {d.title}
                        </li>
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

export default UseStateUseEffect