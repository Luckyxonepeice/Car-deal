import API_URL from "./api_url";

export async function addCar(data){

    console.log(data);
    const response = await fetch(`${API_URL}/cars/add-car`,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    const result =  await response.json();

    return result;
}