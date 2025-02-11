<script>
    import { onMount, onDestroy, afterUpdate } from 'svelte';
    import { navigating } from '$app/stores';

    let cursorVisible = false;
    let cursorX = 0;
    let cursorY = 0;
    let customCursor;
    let targets = [];

    const handleMouseMove = (event) => {
        cursorX = event.clientX;
        cursorY = event.clientY;
        customCursor.style.left = `${cursorX}px`;
        customCursor.style.top = `${cursorY}px`;
        customCursor.style.transform = cursorVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)';
    };

    const handleMouseEnter = () => { cursorVisible = true; };
    const handleMouseLeave = () => { cursorVisible = false; };

    const attachEventListeners = () => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {
            
            customCursor = document.querySelector('.custom-cursor');
            window.addEventListener('mousemove', handleMouseMove);

            targets = document.querySelectorAll('.hover-target');
            targets.forEach(target => {
                target.addEventListener('mouseenter', handleMouseEnter);
                target.addEventListener('mouseleave', handleMouseLeave);
            });
        }

    };

    const removeEventListeners = () => {
        if (typeof window !== 'undefined' && typeof document !== 'undefined') {

            window.removeEventListener('mousemove', handleMouseMove);

            targets.forEach(target => {
                target.removeEventListener('mouseenter', handleMouseEnter);
                target.removeEventListener('mouseleave', handleMouseLeave);
            });
        }

    };

    onMount(() => { attachEventListeners() });

    onDestroy(() => { removeEventListeners() });

    $: if ($navigating) {
        removeEventListeners();
    } else {
        attachEventListeners();
    }

</script>

<div class="custom-cursor">
    <svg width="56" height="56" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20.75" cy="20.0642" r="20" fill="#F8F7F4"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5469 11.8611H17.2344V12.6423H13.8806L18.9587 17.7205L18.4062 18.2729L13.3281 13.1948V16.5486H12.5469V11.8611ZM24.2656 11.8611H28.9531V16.5486H28.1719V13.1948L23.0938 18.2729L22.5413 17.7205L27.6194 12.6423H24.2656V11.8611ZM18.9587 22.408L13.8806 27.4861H17.2344V28.2673H12.5469V23.5798H13.3281V26.9337L18.4062 21.8555L18.9587 22.408ZM23.0938 21.8555L28.1719 26.9337V23.5798H28.9531V28.2673H24.2656V27.4861H27.6194L22.5413 22.408L23.0938 21.8555Z" fill="black" stroke="black" stroke-width="0.25" stroke-linecap="square"/>
    </svg>
</div>

<style lang="scss">
    .custom-cursor {
        position: fixed;
        pointer-events: none;
        transition: transform 0.2s ease-in-out;
        z-index: 100;
        transform: scale(0);
        
        // .simple-cursor {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     background-color: rgba(0, 0, 0, 0.7);
        //     border-radius: 50%;
        //     color: #fff;
        //     font-size: 16px;
        //     width: 60px;
        //     height: 60px;
        // }
    }

    :global(.hover-target:hover) {
        cursor: none;
    }
</style>