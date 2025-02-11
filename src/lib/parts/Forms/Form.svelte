<script>
    import { enhance, applyAction } from '$app/forms';
    import { goto } from '$app/navigation';

    import Input from '$lib/parts/Forms/Input.svelte';
    import Textarea from '$lib/parts/Forms/Textarea.svelte';
	import Checkbox from '$lib/parts/Forms/Checkbox.svelte';

    let loading = false; 
</script>

<form 
    method="POST"
    action="?/contact"
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

        <Input type="text" placeholder="Nom" name="firstname" size="half" required={true} />
        <Input type="text" placeholder="Prénom" name="lastname" size="half" required={true} />

        <Input type="text" placeholder="Adresse" name="adresse" size="full" required={false}/>

        <Input type="text" placeholder="Code postal" name="code postal" size="half" required={false}/>
        <Input type="text" placeholder="Ville" name="Ville" size="half" required={true}/>

        <Input type="text" placeholder="Téléphone" name="telephone" size="half" required={true}/>
        <Input type="email" placeholder="e-mail" name="mail" size="half" required={true}/>

        <Textarea name="message" placeholder="Votre message" size="full" required={true}/>

        <Checkbox label="J’accepte que mes données soient récupérées pour le traitement de ma demande." name="acceptance" />

        <Input type="submit" value="Envoyer" />
</form>

<style lang="scss">
    form {
        display: flex;
        justify-content: space-between;
        flex-flow: row wrap;
        gap: $space-m;
        transition: all .2s;
    }

    // :global(input[type="submit"]) {
    //     width: unset !important;
    // }

    .loading {
        opacity: .5;
    }
</style>