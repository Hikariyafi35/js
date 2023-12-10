class Developer{
    constructor(name){
        this.name = name;
    }

    commitChanges(){
        console.log(`${this.name} is commiting changes. . .`);
    }
}

class frontEndDeveloper extends Developer{
    buildUI(){
        console.log(`${this.name} is building UI . . . `);
    }
}

class backEndDeveloper extends Developer{
    buildAPI(){
        console.log(`${this.name} is building API . . .`);
    }
}
class DevOps extends Developer{
    deployApp(){
        console.log(`${this.name} is deploying app . . .`);
    }
}