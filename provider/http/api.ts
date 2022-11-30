import Cookie from "./../storage/cookie";

type Options = {
    cache?:RequestCache;
} | null


function fetchApi() {

    async function post<JSON = any>(url: string, object: any, options:Options = null ): Promise<JSON> {
        
        const response = await fetch(url, {
            method: 'POST',
            cache: options?.cache || 'no-store',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                // 'Authorization': `Bearer ${await Cookie.get('auth')}`,
            },
            body: JSON.stringify(object)
        })
        const data = await response.json()
        return data
      
    }

    async function get<JSON = any>(url: string, object: any = null, options:Options = null ): Promise<JSON> {
        
        const response = await fetch(url + `${ object ? `?${new URLSearchParams(object)}` : ''}`, {
            method: 'GET',
            cache: options?.cache || 'no-store',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                // 'Authorization': `Bearer ${await Cookie.get('auth')}`,
            },
        })
        const data = await response.json()
        return data
      
    }

    // async function auth<JSON = any>(url: string, object: any): Promise<JSON> {
    //     const response = await fetch(url, {
    //         method: 'POST',
    //         mode: 'cors',
    //         headers: {
    //             'Content-Type': 'application/json;charset=utf-8'
    //         },
    //         body: JSON.stringify(object)
    //     })
    //     const data = await response.json()
    //     await Cookie.set('auth', data.accessToken, 360)
    //     return data
    // }

    // async function signOut(): Promise<void> {
    //     try{
    //         await Cookie.expire('auth')
    //         if(typeof window !== 'undefined') window.location.reload()

    //     } catch(err){
    //         console.log('An error occurred when logging out: ', err)
    //         if(typeof window !== 'undefined') window.location.reload()
    //     }
    // }

    function absoluteUrl() {
        if(typeof window !== 'undefined')  return window.location.href
    }

    return {post, get, absoluteUrl}
}



const Api = fetchApi();

export default Api



// --------------------------------------

// function absoluteUrl() {
//     if(typeof window !== 'undefined') {
//         const url = window.location.href
//         return url
//         // return window.location.hostname;
//     }
// }
