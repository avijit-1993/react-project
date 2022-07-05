const initialState = {
    list : [],
};

const AddingList = (state=initialState,action) => {
  switch(action.type){
      case "INCREMENT" : 

      return{

        ...state,
        list:[
            ...state.list,
            {
                data:action.payload.data,
                id:action.payload.id

            }
        ]

      }

      case "DECRMENT" :  
      
      

        let newData = state.list.filter((elm)=>{
            return action.payload != elm.id
        })
        return{
        list : newData
        }

      

      default: return state;

  }
};

export default AddingList;
