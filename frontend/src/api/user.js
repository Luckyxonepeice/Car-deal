import API_URL from "./api_url";

export async function register(data){

    console.log(data);
    const response = await fetch(`${API_URL}/user/sign-in`,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    const result =  await response.json();

    return result;
}


export async function login(data){

    const response = await fetch(`${API_URL}/user/login`,{
        method:'POST',
        headers:{
            'content-Type':'application/json',
        },
        body:JSON.stringify(data),
    });

    const result =  await response.json();

    if(result.token){
        sessionStorage.setItem('token',result.token);
    }
    return result;
}