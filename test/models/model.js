const fs = require("fs");
const path = require("path");

class Model {
    static async readFile(fileName){
        const modelBuffer = await fs.readFile(fileName);
        const modelsJson = modelBuffer.toString();

        if(!modelsJson){
            return [];
        }

        return JSON.parse(modelsJson);
    }

    static async writeFile(fileName,model){
        if(typeof model === "undefined"){
            return;
        }

        const models = await this.readFile(fileName);
        model.id = models.length +1;
        models.push(model);

        await fs.writeFile(path.join(__dirname,`../dbs/${fileName}`),JSON.stringify(models));
    }
}

module.exports = Model;