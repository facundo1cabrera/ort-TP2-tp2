import axios from "axios";

const swapiUrl = "https://swapi.dev/api/people/";

const getPeopleById = async (id) => {
    try {
        const result = await axios.get(swapiUrl + id.toString());
        return result.data;
    } catch (e) {
        console.log(`id: ${id} does not belong to any chracter`);
        return null;
    }
}

export default {
    getPeopleById
}