import Realm from 'realm';

let instance = null;

const USER_SCHEMA="user_details";

const UserSchema= {name: USER_SCHEMA,
properties: {
  user_id: { type: 'int', default: 0 },
  user_name: 'string',
  user_contact: 'string',
  user_address: 'string'
}
}

const databaseOptions={
    path: 'UserDatabase.realm',
    schema: [
      UserSchema
    ],
  };
export default class TrialModel{
    constructor(){
        if (!instance){
            this.realm= new Realm (databaseOptions);
            instance = this;
        }
        return instance;
    };

    addUser = (userName,userContact,userAddress)=>{
    try{
        let user;
    this.realm.write(() => {
        var ID =
          this.realm.objects('user_details').sorted('user_id', true).length > 0
            ? this.realm.objects('user_details').sorted('user_id', true)[0]
                .user_id + 1
            : 1;
        user= this.realm.create('user_details', {
          user_id: ID,
          user_name: userName,
          user_contact: userContact,
          user_address: userAddress,
        });
        console.log('userrr '+user);
        for (var x in user ){
            console.log(x + '   '+user[x]);
        }
        
    });
    // realm.close();
        return user;
}catch (error){
    console.log('Errroooor in register useer ' + error);
}
}
}