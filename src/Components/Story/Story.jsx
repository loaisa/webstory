// import React, {useEffect, useState} from 'react';
// import {NavLink, useParams} from "react-router-dom";
//
//
// const Story= () => {
//
//
//     const {id} = useParams()
//     const [story, setStory] = useState(null)
//
//     debugger
//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//             .then((response) => response.json())
//             .then((data) => setStory(data));
//     }, [id])
//     return (
//
//         <div>
//             {story &&(
//                 <>
//                     <h1>{story.title}</h1>
//                     <p>{story.body}</p>
//                 </>
//             )}
//         </div>
//     );
// }
// export default Story;