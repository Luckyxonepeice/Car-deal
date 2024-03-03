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
export async function getallCar(){

  
    const token = sessionStorage.getItem("token");
    const response = await fetch(`${API_URL}/cars/get-allcar`,{
        headers:{

            authorization: "Bearer " + token,
        }
    });

    const result =  await response.json();

    return result;
}

export async function addSoldCar(data){

    const token = sessionStorage.getItem("token");
    const response = await fetch(`${API_URL}/cars/add-soldcar`,{
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


export async function getSoldCar(){

  
    const token = sessionStorage.getItem("token");
    const response = await fetch(`${API_URL}/cars/get-soldcar`,{
        headers:{

            authorization: "Bearer " + token,
        }
    });

    const result =  await response.json();

    return result;
}