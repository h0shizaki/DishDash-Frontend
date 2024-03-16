import type {PageLoad} from './$types';

export const load: PageLoad = async ({params}) => {
    const bookmarkId = params.id

    return {bookmarkId}
}

export interface BookmarkPage {
    bookmarkId: string
}
