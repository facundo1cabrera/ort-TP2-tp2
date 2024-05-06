import service from '../services/peopleService.js';

const getPeopleById = async (req, res) =>{
    const {id} = req.params 
    const peopleData = await service.getPeopleById(id);
    if (peopleData === null) {
        res.status(404).send("chracter not found");
    } else {
        res.send(peopleData);    
    }
}

export default {
    getPeopleById
}