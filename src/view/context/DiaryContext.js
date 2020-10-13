import createDataContext from './createDataContext';
import DiaryController from '../../controller/Controller';

const controller = new DiaryController();

const diaryReducer = (state, action) =>{
    switch(action.type){
        case 'get_diaryentries':
            return {...state,entryList:action.payload};
        case 'add_diaryentry':
            return {...state, entryList: controller.getAllEntries(),currentEntryDate:new Date(), currentEntryText:''};
        case 'delete_diaryentry':
            return {...state,entryList: state.entryList.filter((diaryEntry)=>diaryEntry.entry_id !==action.payload)};
        case 'start_recording':
            return state;
        case 'set_date':
            return {...state, currentEntryDate:action.payload};
        case 'set_text':
            return {...state, currentEntryText:action.payload};
            default:
            return state;
    }

};

const getDiaryEntries = dispatch =>{
    return () =>{
        const entries = controller.getAllEntries();
        console.log('context diary entriesss '+entries.length+'   '+ entries)
        dispatch({type:'get_diaryentries',payload:entries});
    }
}

const addDiaryEntry = (dispatch) =>{
    return (text,date) =>{
        let entry ={text,date};
        let addedEntry=controller.addEntry(entry);
        console.log('reducer added entry '+addedEntry+ addedEntry.entry_id);
        dispatch({type:'add_diaryentry', payload:addedEntry});
    }
};

const deleteDiaryEntry = (dispatch)=>{
    return (id)=>{
        console.log('context deletee '+ id)
        controller.deleteEntry(id);
        dispatch({type:'delete_diaryentry', payload:id });
    }
};

const setDate = (dispatch) =>{
    return (date) =>{
        console.log(`daaaaaaate ${date}`);
        dispatch({type:'set_date', payload:date});
    }
};

const setText = (dispatch) =>{
    return (text) =>{
        dispatch({type:'set_text', payload:text});
    }
};

const record = (dispatch)=>{
    return async(cont)=>{
        console.log('inside reducer func  start rec before' )
        let results = await controller.startRecording(cont);
        console.log('afteeeeer and results : '+ results);
        //setText(results);
        dispatch({type:'set_Text', payload:results});
    }
}


const listItems=controller.getAllEntries();


export const {Context, Provider} = createDataContext(diaryReducer
    ,{addDiaryEntry, deleteDiaryEntry,  getDiaryEntries, record,  setDate, setText},
    {entryList:listItems, currentEntryText:'TEXTTT', currentEntryDate:new Date(), errorMessage:''}
    );