import axios from "axios";
import { URL } from "../../AppContains";
import { IBookingMovie } from "../../Util/FormInit";

export const getListMovie = () => {
    return axios.get(URL + "/view/movies").then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getListMovieById = (id: number) => {
    return axios.get(URL + "/view/movie/"+ id).then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getListMovieDayByMovieId =  (id: number) => {
    return axios.get(URL + "/view/movie/show_calendar/"+ id).then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getMovieDayById = (id: number) => {
    return axios.get(URL + "/view/movie_day/show_calendar/"+ id).then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}

export const saveBookingOrder = (data : IBookingMovie) => {
    return axios.post(URL + "/view/save/booking" , data).then((res) => {
        if(res.status === 200){
            return true;
        }else{
            return false;
        }
    })
}

export const getSeatedBookingById = (id: number) => {
    return axios.get(URL + "/view/booking/seated/"+ id).then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}

export const getBookingByUserId = (id: String) => {
    return axios.get(URL + "/view/booking_depot/"+ id).then((res) => {
        if(res.status === 200){
            return res.data;
        }
    })
}