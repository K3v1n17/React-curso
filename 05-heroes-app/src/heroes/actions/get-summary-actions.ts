import { heroApi } from "../api/hero.api"
import type { SummaryInformationResponses } from "../types/summary-information.response";

export const getSummaryAction = async () => 
    {
       const {data} = await  heroApi.get<SummaryInformationResponses>('/summary');

       return data;
    }