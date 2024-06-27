import axios from "axios";

const API_URL = "http://localhost:8080/ads";

export async function saveAd(ad) {
    return await axios.post(API_URL, ad);
}

export async function getAds(page = 0, size = 10) {
    return await axios.get(`${API_URL}?page=${page}&size=${size}`);
}

export async function getAd(id) {
    return await axios.get(`${API_URL}/${id}`);
}

export async function updateAd(ad) {
    return await axios.post(API_URL, ad);
}

export async function deleteAd(id) {
    return await axios.post(`${API_URL}/${id}`);
}