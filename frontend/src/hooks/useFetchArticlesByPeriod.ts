import axios from "axios";

export const useFetchArticlesByPeriod = async (period: string) => {
    try {
      return await axios.post(`https://new.populargeology.ru:8000/t2_json_out.php`, {
        tage: period,
      })
    } catch (error) {
      console.error(error)
    }
}