import axios from "axios";
import {getApiUrl} from "../store/services/getApiUrl";

export const useFetchArticlesByPeriod = async (period: string) => {
    try {
      return await axios.post(`${getApiUrl()}/t2_json_out.php`, {
        tage: period,
      })
    } catch (error) {
      console.error(error)
    }
}