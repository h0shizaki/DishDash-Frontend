
import type { AxiosResponse } from 'axios'
import apiClient from "$lib/api/AxiosCleint";

const getAllBookmarks = (): Promise<AxiosResponse> => {
    return  apiClient.get('/api/bookmark/', )
}


export default {getAllBookmarks }