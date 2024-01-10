import { IUser } from "../App";
import { SERVER_URL } from "../consts";

export default class DataServic {


    static async readList () {

        let response = await fetch(`${SERVER_URL}/users.json `);

        if (response.ok) {
            let dataList = await response.json();
            return dataList
        } else {
            console.log("Ошибка HTTP: " + response.status);
          }
    }

    static async readDetails (id:number): Promise<IUser | null> {

        let response = await fetch(`${SERVER_URL}/${id}.json `);

        if (response.ok) {
            let dataList = await response.json();
            return dataList as IUser
        } else {
            console.log("Ошибка HTTP: " + response.status);
          }

        return null
    }


}