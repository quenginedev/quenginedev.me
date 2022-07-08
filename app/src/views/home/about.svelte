<script>
  import ImageHolder from "../../assets/me.png";
  import ScaleInSize from '../../components/scale-in-size.svelte'
  import AnimatedProfile from "../../components/animated-profile.svelte";
</script>
<section id="about" class="flex justify-center pt-24">
  <div class="max-w-screen-lg w-full p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
    <div class="w-full col-span-1 md:col-span-2 space-y-3">
      <h1 class="text-3xl font-extrabold">About Me</h1>
      <p>
        Hello! My name is Ernest and I enjoy creating things that live on both the
        internet and mobile. My interest in software development started back
        in 2014 when my dad asked me a question whiles playing a video
        game,
        <br/><q class="font-semibold">
        Wouldn't it be cool to make your own game instead?
      </q>
        <br/>
        And that's what sparked my interest in developing software.
      </p>
      <p>
        Fast-forward to today, and I've had the privilege of working at a
        <span>Security agencies</span>,
        <a href="https://agroinnovagh.com/" target="_blank"
        >Agriculture startups</a
        >, and
        <a href="https://www.simple-dealer.com/" target="_blank">
          automation companies</a
        >. My main focus these days is building accessible, inclusive products
        and digital experiences at
        <a href="https://www.simple-dealer.com/" target="_blank"
        >Simple Dealer</a
        > for a variety of clients.
      </p>
      <p>Here are a few technologies I've been working with recently:</p>
      <ul class="grid grid-cols-2">
        <li class="langs">VueJS</li>
        <li class="langs">TypeScript</li>
        <li class="langs">Flutter</li>
        <li class="langs">Node.JS</li>
        <li class="langs">Serverless Stack</li>
        <li class="langs">MongoDB</li>
      </ul>
    </div>
    <div class="col-span-1 text-center flex flex-row justify-center items-center">
      <ScaleInSize let:mouseOver={mouseOver}>
        <AnimatedProfile blur={mouseOver ? 0 : 5} image={ImageHolder} />
      </ScaleInSize>
    </div>
  </div>
</section>

<style>
    li, q {
        @apply text-primary font-bold;
    }
</style>