<script lang="ts">

    import type {ModalSettings} from "@skeletonlabs/skeleton";
    import { getModalStore } from '@skeletonlabs/skeleton';

    // export let confirm
    const modalStore = getModalStore();

    const modal: ModalSettings = {
        type: 'confirm',
        // Data
        title: 'Please Confirm',
        body: 'Are you sure you wish to proceed?',
        // TRUE if confirm pressed, FALSE if cancel pressed
        response: (r: boolean) => console.log('response:', r),
    };

    modalStore.trigger(modal);
</script>