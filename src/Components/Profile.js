// import React, { useEffect } from 'react'
// import {auth,db} from '../firebase'
// import { getDoc,doc} from 'firebase/firestore'

// function Profile() {
//     const [user,setUser]=React.useState(null)
//     const fetchdata = async()=>{
//         auth.onAuthStateChanged(async(user)=>{
//             console.log(user)
//         const docRef = doc(db,"Users",user.uid);
//         const docSnap = await getDoc(docRef)
//         if(docSnap.exists()){
//             setUser(docSnap.data())
//         }else{
//             console.log("No such document")
//         }
//     })
//     }
//     useEffect(()=>{
//         fetchdata()
//     },[])
//   return (
//     <div>
//       <h1>Welcome</h1>
//       {user ? (
//         <>
//             <h1>{user.name}</h1>
//             <h1>{user.email}</h1>
//             <h1>{user.name}</h1>

//         </>
//       ):(
//         <>
//         <p>Loading 1 23 ..............</p>
//         </>
//       )}
//     </div>
//   )
// }

// export default Profile
import React from 'react'

function Profile() {
  return (
    <div className='Profile'>
      
    </div>
  )
}

export default Profile
