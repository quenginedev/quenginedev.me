<script>
    import AtIcon from 'svelte-material-icons/At.svelte'
    import TwitterIcon from 'svelte-material-icons/Twitter.svelte'
    import LinkedInIcon from 'svelte-material-icons/Linkedin.svelte'

    const contacts = [
        {href: 'mailto:quenginedev@gmail.com', icon: AtIcon},
        {href: 'https://twitter.com/ernestt45h', icon: TwitterIcon, target: '_blank'},
        {href: 'https://www.linkedin.com/in/ernest-hayford', icon: LinkedInIcon, target: '_blank'},
    ]
</script>

<div id="contact" class="flex flex-row justify-center">
    <div class="w-full p-5">
        <div class="rounded-3xl flex flex-col items-center text-center p-10 text-base-content">
            <p class="mb-5 text-5xl font-bold">Get In Touch</p>
            <p class="mb-5 max-w-md">
                Although I’m not currently looking for any new opportunities, my inbox
                is always open. Whether you have a question or just want to say hi, I’ll
                try my best to get back to you!
            </p>
            <div class="flex gap-10">
                {#each contacts as {icon, href, target}}
                    <a {href} {target}
                       class="btn btn-secondary shadow-xl hover:animate-bounce">
                        <svelte:component this={icon} size={24}/>
                    </a>
                {/each}
            </div>
        </div>
    </div>
</div>

