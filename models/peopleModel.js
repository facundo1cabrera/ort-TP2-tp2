import axios from "axios";

const swapiUrl = "https://swapi.dev/api/people/";

const getPeopleById = async (id) => {
    const result = await axios.get(swapiUrl + id.toString());
    return result.data;
}

export default {
    getPeopleById
}