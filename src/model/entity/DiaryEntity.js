export default class DiaryEntity{
    constructor(entry){
        this.entry_id=entry.entry_id;
        this.entry_text=entry.entry_text;
        this.entry_date = entry.entry_date;
    }
}