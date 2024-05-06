import model from '../models/peopleModel.js';

const getPeopleById = async (id) => {
    const people = await model.getPeopleById(id)
    if (people === null) {
        return null;
    }
    return people;
}

export default {
    getPeopleById
}