import { API_KEY } from "../Const/Key";
import request from "./RequestNetwork"

export const GETWEATHERAPI = (cityName:String) => {
    return request(
        {
          url: `weather?q=${cityName}&appid=${API_KEY}` ,
          method: "GET",
        },
        false
      );
}