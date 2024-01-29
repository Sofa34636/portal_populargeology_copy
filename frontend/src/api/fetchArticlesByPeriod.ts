import axios from "axios";
import {getApiUrl} from "../store/services/getApiUrl";

export const fetchArticlesByPeriod = async (period: string) => {
  return await axios.get(`${getApiUrl()}/periodArticles/?period=${period}`)
}