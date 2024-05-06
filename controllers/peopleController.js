import service from '../services/peopleService.js';

const getPeopleById = async (req, res) =>{
    const {id} = req.params 
    const peopleData = await service.getPeopleById(id)
    res.send(peopleData);
}

export default {
    getPeopleById
}