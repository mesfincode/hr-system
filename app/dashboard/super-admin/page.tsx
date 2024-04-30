import React from 'react'

const SuperAdmin = () => {
  return (
    <div>
       <h1>Registered Users</h1>
       <table>
         <thead>
           <tr>
             <th>Username</th>
             <th>Email</th>
             <th>Registration Date</th>
           </tr>
         </thead>
         <tbody>
           {/* {users.map((user) => (
             <tr key={user.id}>
               <td>{user.username}</td>
               <td>{user.email}</td>
               <td>{user.registrationDate}</td>
             </tr>
           ))} */}
         </tbody>
       </table>
     </div>
  )
}

export default SuperAdmin
// import { useEffect, useState } from 'react';
// interface User {
//   id: number;
//   username: string;
//   email: string;
//   registrationDate: string;
// }

// const SuperAdmin = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null); // Specify type as string | null

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('/api/admin/users');
//         if (!response.ok) {
//           throw new Error('Failed to fetch users');
//         }
//         const data = await response.json();
//         setUsers(data.users);
//       } catch (error) {
//         setError("Something went wrong"); // Set error state to string value
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Registered Users</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Registration Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id}>
//               <td>{user.username}</td>
//               <td>{user.email}</td>
//               <td>{user.registrationDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SuperAdmin;

