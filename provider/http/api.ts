import Cookie from "./../storage/cookie";

type Options = {
    cache?:RequestCache;
} | null


function fetchApi() {

    async function post<JSON = any>(url: string ,object: any = null, init?: RequestInit | undefined): Promise<JSON> {
        
        const response = await fetch(url, {
            method: 'POST',
            cache: init?.cache || 'no-store',
            next: { revalidate: init?.next?.revalidate } || undefined,
            headers: init?.headers || {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(object)
        })
        return response.json()
    }

    async function get<JSON = any>(url: string ,object: any = null, init?: RequestInit | undefined): Promise<JSON> {
        
        const response = await fetch(url + `${ object ? `?${new URLSearchParams(object)}` : ''}`, {
            method: 'GET',
            cache: init?.cache || 'no-store',
            next: { revalidate: init?.next?.revalidate } || undefined,
            headers: init?.headers || {
                'Content-Type': 'application/json;charset=utf-8',
            },
        })
        return await response.json()
    }


    function absoluteUrl() {
        if(typeof window !== 'undefined')  return window.location.href
    }

    return {post, get, absoluteUrl}
}

const Api = fetchApi();

export default Api



