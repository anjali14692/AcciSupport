import axios from "axios";

const User_BASE_REST_API_URL="http://localhost:8080/api/v1/users"
 
 class UserService{
    getAllUsers(){
        return axios.get(User_BASE_REST_API_URL)
    }
    createUSer(user){
        return axios.post(User_BASE_REST_API_URL,user)
    }
    getUserById(userId){
        return axios.get(User_BASE_REST_API_URL+"/"+userId)
    }
    updateUser  (userId, user)  {
        return axios.put(User_BASE_REST_API_URL + '/' +userId, user);
    }
    deleteUser (userId)  {
        return axios.delete(User_BASE_REST_API_URL + '/' +userId);
    }
 }
 export default new  UserService;   