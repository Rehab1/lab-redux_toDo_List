const Reducer = (state, action) => {
    switch(action.type){
        case 'addTask':
        return {
            ...state, 
            data:[...state.data,action.data,]
        };
           
         case 'deleteTask':
        let delTask= state.data.find(item=>
          ( item.id=== action.id)) ;
           delTask.deleted=!(delTask.deleted);
         return {
            ...state, 
            data:[...state.data]
        };

            case 'completeTask':
            let comTask= state.data.find(item=>
                ( item.id=== action.id)) ;
                comTask.completed=!( comTask.completed);
               return {
                   ...state, 
                   data:[...state.data]
                };


        default:
        return state;

    }

   
    
}
export default Reducer;