import type {AxiosResponse} from 'axios'
import apiClient from "$lib/api/AxiosCleint";
import type {RecordPayload} from "$lib/models/Bookmark";

const getAllBookmarks = async (isLightWeight=false): Promise<AxiosResponse> => {
    return apiClient.get(`/api/bookmark?isLightWeight=${isLightWeight}`)
}

const getBookmark = async (bookmarkId: string,) => {
    return apiClient.get(`/api/bookmark/${bookmarkId}`)
}

const removeBookmarkRecord = async (bookmarkId: string, recipeId: string) => {
    return apiClient.delete(`/api/bookmark`, {
        data: {
            "bookmarkId": bookmarkId,
            "recipeId": recipeId
        }
    })
}

const updateBookmarkRecord = async (bookmarkId: string,record: RecordPayload) => {
    return apiClient.put(`/api/bookmark/${bookmarkId}/record`, {record: record})
}

const addToBookmark = async (payload: any) => {
    return apiClient.post(`/api/bookmark/record`, payload)
}

export default {getAllBookmarks,addToBookmark, getBookmark, removeBookmarkRecord, updateBookmarkRecord}