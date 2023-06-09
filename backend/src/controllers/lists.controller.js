
import { ObjectId } from 'mongodb';
import * as listsServices from '../services/lists.services.js'

export const getLists = async (req, res) => {
    try {
        const lists = await listsServices.getLists();
        return res.status(200).json(lists);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const getList = async (req, res) => {
    try {
        const listId  = req.params.id;
        console.log(req.params.id)
        const List = await listsServices.getList(ObjectId(listId));
        return res.status(200).json({ status: 200, data: List, message: `List with id ${listId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const createList = async (req, res) => {
    try {
        const listToCreate = req.body;
        const lists = await listsServices.createList(listToCreate);
        return res.status(200).json({ status: 200, data: lists, message: "Succesfully Lists Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updateList = async (req, res) => {
    try {
        const listUpdated = await listsServices.updateList(req.body);
        return res.status(200).json({ status: 200, data: listUpdated, message: `List with id ${req.body._id} succesfully updated` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/*
export const patchList = async (req, res) => {
    try {
        const { ListId } = req.params;
        const ListUpdated = await ListsServices.patchList(ListId, req.body);
        return res.status(200).json({ status: 200, data: ListUpdated, message: `List with id ${ListId} succesfully patched` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}*/

export const deleteList = async (req, res) => {
    try {
        const listId  = req.params.id;
        await listsServices.deleteList(listId);
        return res.status(200).json({ status: 204, message: `List with id ${listId} succesfully deleted` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const createTask = async (req, res) => {
    try {
        const listId  = req.params.id;
        const task = req.body.task;
        
        const List = await listsServices.createTask(listId,task);
        return res.status(200).json({ status: 200, data: List, message: `List with id ${listId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const listId  = req.params.listId;
        const taskId  = req.params.taskId;
        
        
        const List = await listsServices.deleteTask(listId,taskId);
        return res.status(200).json({ status: 200, data: List, message: `List with id ${listId} succesfully retrieved` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

export const updateTask = async (req, res) => {
    try {
        const listId  = req.params.listId;
        const task  = req.body;
        
        const List = await listsServices.updateTask(listId,task);
        return res.status(200).json({ status: 200, data: List, message: `List with id ${listId} succesfully updated` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


