const yargs = require("yargs");
const logicOfCommand = require ("./logicOfCommand")


const builder= {
    fname : {
        describe: "adding the first name ",
        demandOption: true,
        type: "string"
    },
    lname : {
        describe: "adding the last name ",
        demandOption: true,
        type: "string"
    }
}

yargs.command({
    command : "create",
    describe: "to add an item",
    builder,
    handler: (x)=> {
        logicOfCommand.addPerson(x.fname , x.lname , x.city , x.age , x.id )
    }
 }).command(
     "remove",
    "to delete an item",
   function  (yargs) {
        logicOfCommand.deleteData(yargs.argv.id)
    }
 ).command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
            describe : "this is id description in read command",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        logicOfCommand.readData (x.id)
    }
 }).command (
   "list",
    "list data",
   function handler(){
        commandData.listData()
    }
 ).command({

        command:"calculate",
        desc:"degrees",
        builder:{
            degreeArray : {
                describe : "this is Array  description in degree command",
                demandOption : true,
                type : "object"
            }
        },
        handler:(yargs)=>{

            logicOfCommand.calcData(yargs.degreeArray)
             
        }
    }
 )
 
 .parse() 

 

