import API_URL from "./api_url";

export async function authtoken(){

    const token = sessionStorage.getItem('token');

    const val = {val:token}

    const response = await fetch(`${API_URL}/authtoken/`,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body :JSON.stringify(val),
    });

    const result =  await response.json();

    return result;
}