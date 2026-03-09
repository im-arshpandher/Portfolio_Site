// import { useState, useEffect } from 'react';

// const useProjects = () => {
//   const [projects, setProjects] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch('/assets/projects/projects.json'); // Path to your JSON file
//         if (!response.ok) {
//           throw new Error('Failed to fetch projects');
//         }
//         const data = await response.json();
//         setProjects(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjects();
//   }, []);

//   return { projects, loading, error };
// };

// export default useProjects;