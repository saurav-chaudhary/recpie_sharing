
export async function addRecpie(data){
    try{
        const response = await fetch('http://127.0.0.1:5000/addrecipe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        return result; 
    }
    catch(error){
        console.log("Error", error);
    }
}

export async function getRecpie() {
    try {
      const response = await fetch('http://127.0.0.1:5000/getrecpie', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Error fetching recipes:', error);
    }
  }
  