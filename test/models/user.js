const Model = require('./model');

class User extends Model{
    constructor(name,lastName,age,email,role,password,imageName){
        super();
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.role = role;
        this.password = password;
        this.imageName = imageName;
    }
    static async getByEmail(email,showPassword = false){
        const users = await Model.readFile("users.json");

        if(!users.length){
            return [];
        }
        
        const filteredUser = users.find((user)=>user.email === email);

        if(showPassword){
            delete filteredUser.password
        };

        return filteredUser;
    }

    static async getById(userId){
        const users = await Model.readFile("users.json");

        if(!users.length){
            return []
        };

        const filteredUser = users.find((user)=>user.id === userId);
        delete filteredUser.password;

        return filteredUser;
    }

    static async getByRole(Role){
        const users = await Model.readFile("users.json");

        if(!users.length){
            return [];
        };

        const filteredUsers = users.reduce((aggregator,user)=>{

            const agg = await aggregator;

            if(user.role === role){
                delete user.password
                agg.push(user);
            }

            return agg;
        },[])
    }

    static async getFreeStudents()
}