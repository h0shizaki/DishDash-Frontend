<script lang="ts">

    import type {ModalSettings, ToastSettings} from "@skeletonlabs/skeleton";
    import {getModalStore, getToastStore} from '@skeletonlabs/skeleton';
    import type {Bookmark} from "$lib/models/Bookmark";
    import BookmarkService from "$lib/api/BookmarkService";

    export let bookmarks: Bookmark[] ;
    const toastStore = getToastStore();
    const modalStore = getModalStore();

    const t: ToastSettings = {
        message: 'Yippies! Bookmark created!',
        timeout: 5000,
        background: 'variant-filled-success',
    };

    const modal: ModalSettings = {
        type: 'prompt',
        // Data
        title: 'Enter Name',
        body: 'Provide a name of new folder.',
        value: '',
        valueAttr: {type: 'text', minlength: 3, maxlength: 15, required: true},
        // Returns the updated response value
        response: async (r: string) => {
            if(r){
                try{
                    const resp = await BookmarkService.createBookmark(r)
                    if(resp.status === 200){
                        bookmarks = [...bookmarks, resp.data.body.data]
                        toastStore.trigger(t);
                    }
                }catch(e){
                    console.error(e)
                }

            }
        },
    };

    const trigger = () => {
        modalStore.trigger(modal);
    }

</script>

<button on:click={trigger} class="flex flex-col w-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
    <div class="flex flex-col justify-center p-4 leading-normal w-full">
        <button class="text-2xl font-semibold text-black rounded-full ">
                    <span class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 h-16 ">
                        +
                    </span>
        </button>
    </div>
</button>