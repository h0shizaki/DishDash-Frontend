import type {PageLoad} from './$types';
import type {Bookmark} from "$lib/models/Bookmark";
import BookmarkService from "$lib/api/BookmarkService";


export const load: PageLoad = async () => {
    try {
        const resp = await BookmarkService.getAllBookmarks()
        const bookmarks = resp.data
        return {bookmarks}
    } catch (e) {
        console.error(e)
    }

}

export interface FolderPage {
    // bookmarkId: string
    bookmarks: Bookmark[]
}
