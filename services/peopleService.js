import model from '../models/peopleModel.js';

const getPeopleById = async (id) => {
    const people = await model.getPeopleById(id)
    return people;
}

export default {
    getPeopleById
}