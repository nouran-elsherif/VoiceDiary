import DiaryModel from '../model/model/DiaryModel';
// import VoiceNative from '../apis/STTapi';
// import DiaryEntity from '../model/entity/DiaryEntity';

let controllerInstance = null;

export default class DiaryController{
    constructor(){
        if(!controllerInstance){
            this.model = new DiaryModel();
            // this.sttApi = null;//new VoiceNative();

            controllerInstance = this;
        }
        return controllerInstance;
    }

    addEntry = (entry) =>{
        console.log('controllerrrr '+entry.text +'  '+ entry.date);
        let addedEntry= this.model.addEntry(entry.text,entry.date);
        console.log('controller baack entryyyy ' + addedEntry);
        return addedEntry;
    };

    deleteEntry = (id) =>{
        console.log('controlleeeerr delete '+ id);
        this.model.deleteEntry(id);
    };

    getAllEntries=()=>{
        let entries = this.model.getAllEntriesSortedByDate();
        console.log('controller all entries '+ entries);
        return entries;
    };

    // startRecording = async(cont)=>{
    //     if (!this.sttApi){
    //         this.sttApi= new VoiceNative(cont);
    //     }
    //     try{
    //         await this.sttApi.bindStartRecognition();
    //         console.log('controller start recording  results :: '+this.sttApi.results);
    //         return this.sttApi.results;
    //     }catch(error){
    //         console.error('controller startrecording erroooor : '+ error);
    //     }
    // };
}