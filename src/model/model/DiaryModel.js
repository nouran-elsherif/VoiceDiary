import Realm from 'realm';

const ENTRY_SCHEMA="entry";

const EntrySchema= {name: ENTRY_SCHEMA,
properties: {
  entry_id: { type: 'int', default: 0 },
  entry_text: 'string',
  entry_date: 'string',
}
};

const databaseOptions={
    path: 'EntryDatabase.realm',
    schema: [
        EntrySchema
    ],
  };

let modelInstance = null;

export default class DiaryModel{
    constructor(){
        if(!modelInstance){
            this.realm = new Realm(databaseOptions);
            modelInstance = this;
        }
        return modelInstance;
    }

    addEntry = (text,date)=>{
        try{
            console.log('model add entry text '+text.toString() +' '+ date);
            let entry;
            this.realm.write(() => {
                var ID =
                this.realm.objects(ENTRY_SCHEMA).sorted('entry_id', true).length > 0
                    ? this.realm.objects(ENTRY_SCHEMA).sorted('entry_id', true)[0]
                        .entry_id + 1
                    : 1;
                entry= this.realm.create(ENTRY_SCHEMA, {
                entry_id: ID,
                entry_text: text.toString(),
                entry_date: date.toString(),
                });
                console.log('entryyyyyyy '+entry);
                for (var x in entry ){
                    console.log(x + '   '+entry[x]);
                }   
            });
        // realm.close();
            return entry;
        }catch (error){
            console.error('Errroooor in add entry ' + error);
        }
    };

    deleteEntry = (id) =>{
        try{
            if (
                this.realm.objects(ENTRY_SCHEMA).filtered('entry_id =' + id)
                  .length > 0
              ) {
                this.realm.delete(
                  this.realm.objects(ENTRY_SCHEMA).filtered('entry_id =' + id)
                );
              }
        }catch (error){
            console.error('Errroooor in delete entry '+ error);
        }
    };

    getAllEntriesSortedByDate =()=>{
        try{
            let entries = this.realm.objects(ENTRY_SCHEMA).sorted('entry_date', true);
            return entries;
        }catch(error){
            console.error('Errroooor in get all entries '+ error);
        }
    };
  }