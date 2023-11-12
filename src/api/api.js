import axios from "axios";

const URL = 'http://localhost:3005'

export const sendLabelsDataToServer = async (labels) => {
    try {
        const response = await axios.post(`${URL}/labels`, labels)
        console.log('Labels data saved to the server successfully');
        return response.data
    } catch (error) {
        console.error('Error saving labels to the server:', error.message)
        throw error
    }
}