<script>
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';

    import Input from '$lib/parts/Forms/Input.svelte';
    import Textarea from '$lib/parts/Forms/Textarea.svelte';

    let loading = false; 
</script>

<form 
    method="POST"
    action="?/contact"
    enctype="multipart/form-data"
    class:loading={loading}
    use:enhance={() => {
        loading = true;

        return async ({ result, update }) => {
            if (result.type === 'redirect') {
                goto(result.location);
            } else {
                await applyAction(result);
            }
            loading = false;
        };
    }}>

    <Input type="text" placeholder="Thomas" name="name" />
    <Input type="email" placeholder="nom@domaine.fr" name="mail" />
    <Input type="file" name="file" />
    <Textarea name="message" />
    <Input type="submit" value="Envoyer" />
</form>

<style>
    form {
        transition: all .2s;
    }
    .loading {
        opacity: .5;
    }
</style>