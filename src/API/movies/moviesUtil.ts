import axios from "axios";
import { URL } from "../../AppContains";

export const getListMovie = () => {
    return axios.get(URL + "/view/movies").then((res) => {
        console.log(res.data);
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getListMovieById = (id: number) => {
    return axios.get(URL + "/view/movie/"+ id).then((res) => {
        console.log(res.data);
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getListMovieDayByMovieId =  (id: number) => {
    return axios.get(URL + "/view/movie/show_calendar/"+ id).then((res) => {
        console.log(res.data);
        if(res.status === 200){
            return res.data;
        }
    })
}