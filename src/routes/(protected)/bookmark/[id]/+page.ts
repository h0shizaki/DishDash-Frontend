import type {PageLoad} from './$types';


export const load: PageLoad = async ({params}) => {
    try {
        const bookmarkId = params.id
        return {bookmarkId}
    } catch (e) {
        console.error(e)
    }

}

export interface BookmarkPage {
    bookmarkId: string
}
