export const config = {
    APP_PORT: 3000,
    PROXIES: [        
        {
            target: 'http://localhost:8000', // target host (the base url of the api, ex: http://localhost:8000/api base url is http://localhost:8000)
            pathToReplace: '/api', // path that will be replaced (the path of the api, ex: http://localhost:8000/api will be replaced by http://localhost:3000)
            changeOrigin: true // needed for virtual hosted sites
        }, 
        // ... you can add more proxies here
    ]
}