
import List from '../models/lists.model.js';

const getLists = async () => {
    try {
        return await List.find();
    } catch (e) {
        throw Error('Error while fetching list.');
    }
}

const getList = async (id) => {
    try {
        return await List.find({_id : id});

    } catch (e) {
        throw Error('Error while fetching list.');
    }
}


const createList = async (list) => {
    try {
        const newList = new List(list) ;
       
        await newList.save();

        return await getLists()

    } catch (e) {
        console.log(e)
        throw Error('Error ');
    }
}

const updateList = async (list) => {
    try {
        const l =  await getList(stud._id);
  
        if(l){
           /* st.name = stud.name;
            st.firstname = stud.name;
            st.age = stud.age;
            await st.save();
            return st;*/
        }
        else{
            return {"error" : "not found"}
        }

    } catch (e) {
        throw Error('Error ');
    }
}

const deleteList = async (id) => {
    try {
        return await List.deleteOne({_id : id});

    } catch (e) {
        throw Error('Error.');
    }
}

const createTask = async (listId,task) => {
    try {
        var list = await getList(listId);
        if(list && list.length==1){
            list = list[0];
            list.tasks.unshift({label : task,done : false});
            await list.save();
            return  list;
        }

    } catch (e) {
        throw Error('Error.');
    }
}

const deleteTask = async (listId,taskId) => {
    try {
        var list = await getList(listId);
        
        if(list && list.length==1){
            list = list[0];
            
            var i = list.tasks.findIndex((e)=>e._id==taskId)
            
            list.tasks.splice(i,1)
            
            await list.save();
            return  list;
        }

    } catch (e) {
        throw Error('Error.');
    }
}

const updateTask = async (listId,task) => {
    try {
        var list = await getList(listId);
        
        
        if(list && list.length==1){
            list = list[0];
            var i = list.tasks.findIndex((e)=>e._id==task._id)
            if(i!=-1){
                list.tasks[i]=task;
            }
            
            await list.save();
            return  list;

  
        }
        else{
            return {"error" : "not found"}
        }

    } catch (e) {
        throw Error('Error ');
    }
}








export {
    getLists,
    getList,
    createList,
    updateList,
    deleteList,
    createTask,
    deleteTask,
    updateTask
}