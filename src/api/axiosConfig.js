import axios from "axios";

export default axios.create({
    /*
     * backend is running local on my host via port 8080
     */
    baseURL: "http://localhost:8080"
    /*
     * when using a tunnel agent like ngrok (https://ngrok.com/)
     * use the following setting:
     *    
    baseURL: "https://b73b-2a02-8071-883-bd20-cdf5-46e1-d767-f493.ngrok-free.app",
    headers: {"ngrok-skip-browser-warning": "true"}
    /*
     * when the backend is running in Google App Cloud
     * use the following setting:
     *
    baseURL: "https://fullstack-backend.ew.r.appspot.com"
    /**/
});
