import { ObjectId } from 'mongodb';
import mongoose from 'mongoose';

const ListSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  
  tasks:  [ 
      {
        label : {
          type : String,
          required : true
        },
        done : {
          type : Boolean,
          default : false
        }  
      }
    ],
  },
{ versionKey: false },);

const List = mongoose.model("lists", ListSchema);

export default List;



