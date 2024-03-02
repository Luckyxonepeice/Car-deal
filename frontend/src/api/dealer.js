import API_URL from "./api_url";

export async function addCar(data){
    

    const token = sessionStorage.getItem("token");
    const response = await fetch(`${API_URL}/cars/add-car`,{
        method:'POST',
        headers:{
            authorization: "Bearer " + token,
            'content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    const result =  await response.json();

    return result;

}


export async function getCar(){

  
    const token = sessionStorage.getItem("token");
    const response = await fetch(`${API_URL}/cars/get-car`,{
        headers:{

            authorization: "Bearer " + token,
        }
    });

    const result =  await response.json();

    return result;
}