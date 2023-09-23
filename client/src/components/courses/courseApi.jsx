export function fetchCourse() {
    return new Promise(async (resolve) =>{
      //TODO: we will not hard-code server URL here
      const response = await fetch('http://localhost:8000/course') 
      const data = await response.json()
      resolve({data})
    }
    );
  }


  

export const fetchCourseById = async (id) => {
  return new Promise(async (resolve) => {
    const response = await fetch(`http://localhost:8000/course/${id}`);


    const data = await response.json();

    resolve({ data })

  })}
  