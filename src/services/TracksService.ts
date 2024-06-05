import axios, { AxiosError } from "axios"
import { token } from "./TokenService"


const { VITE_BASE_URL } = import.meta.env

export class TracksService {

    static async getTracks() {
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true
            }
            const response = await axios.get(VITE_BASE_URL + 'tracks', config)
            return response.data
        } catch (error: AxiosError | any) {
            console.log(error, error.request.status)
        }
    }
    static async getTrack(id: string) {
        try {
           const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                WithCredentials: true
            }
        const response = await axios.get(VITE_BASE_URL + 'tracks/' + id, config)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}