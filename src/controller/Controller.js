import DiaryModel from '../model/model/DiaryModel';
import VoiceNative from '../apis/STTapi';

let controllerInstance = null;

export default class DiaryController{
    constructor(){
        if(!controllerInstance){
            this.model = new DiaryModel();
            this.sttApi = null;//new VoiceNative();

            controllerInstance = this;
        }
        return controllerInstance;
    }

    addEntry = (text,date) =>{
        console.log('controllerrrr '+text +'  '+ date);
        let entry= this.model.addEntry(text,date);
        console.log('controller baack entryyyy ' + entry);
        return entry;
    };

    deleteEntry = (id) =>{
        this.model.deleteEntry(id);
    };

    getAllEntries=()=>{
        return this.model.getAllEntriesSortedByDate();
    };

    startRecording = async(cont)=>{
        if (!this.sttApi){
            this.sttApi= new VoiceNative(cont);
        }
        try{
            this.sttApi.bindStartRecognition();
            console.log('controller start recording  results :: '+this.sttApi.results);
        }catch(error){
            console.error('controller startrecording erroooor : '+ error);
        }
    };
}