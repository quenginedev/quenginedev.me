<script>
  import { getRecentRepos } from "../../services/github";
  import githubLogo from "../../assets/Octicons-mark-github.svg";
</script>

<section id="work" class="flex justify-center items-center pt-24">
  <div class="max-w-screen-lg w-full p-5 flex flex-wrap items-center">
    <div class="w-full space-y-3">
      <h1 class="col-span-1 md:col-span-3 text-3xl font-extrabold">
        Things I've been working on
      </h1>
      {#await getRecentRepos("quenginedev") then { data: repos }}
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 pt-12">
          {#each repos as repo}
            <div class="w-full bg-base-100 shadow-xl rounded-2xl relative">
              <img
                  src={githubLogo}
                  alt="Github logo"
                  class="rounded-full w-12 bg-white p-2 border-base-300 border-4 absolute -top-6 -left-6"
                />
              <div class="card-body items-center text-center flex flex-col justify-between h-full gap-5">
                <h2 class="card-title">{repo.name}</h2>
                <div class="flex flex-wrap gap-2 justify-center min-h-6">
                  {#each Object.keys(repo.languages) as language}
                    <span class="btn btn-secondary btn-xs cursor-default">
                      {language}
                    </span>
                  {/each}
                </div>
                <div class="card-actions">
                  <a href="{repo.html_url}" target="_blank" class="btn btn-primary">View Repo</a>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/await}
    </div>
  </div>
</section>
