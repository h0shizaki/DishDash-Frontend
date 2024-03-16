
import type { AxiosResponse } from 'axios'
import apiClient from "$lib/api/AxiosCleint";

const getAllBookmarks = async (): Promise<AxiosResponse> => {
    return  apiClient.get('/api/bookmark/', )
}

const getBookmark = async (bookmarkId: string) => {
    return apiClient.get(`/api/bookmark/${bookmarkId}`)
}


export default {getAllBookmarks, getBookmark }