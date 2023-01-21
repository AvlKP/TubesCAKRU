<script>
    import "../app.css";
    import { auth } from "$lib/firebase";
    import { signOut, onAuthStateChanged } from "firebase/auth";
    import { loggedIn, loggedEmail } from "../store";

    onAuthStateChanged(auth, (user) => {
        if (user) {
            loggedIn.set(true);
            loggedEmail.set(user.email);
        } else {
            loggedIn.set(false);
            loggedEmail.set("");
        }
    });

    function logOut() {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                console.log(error.message);
            });
        loggedIn.set(false);
        loggedEmail.set("");
    }
</script>

<div class="app h-screen flex flex-col">
    <header class="h-16 flex gap-4 px-6 flex-shrink-0">
        <span class="flex-1 text-xl my-auto"><a href="/">Pinboard</a></span>
        {#if $loggedIn}
            <p class="text-gray-400 text-lg my-auto">{$loggedEmail}</p>
            <button
                class="w-24 bg-blue-400 h-4/6 my-auto rounded text-white
							flex justify-center items-center active:bg-blue-600"
                on:click={logOut}>Logout</button
            >
        {:else}
            <a
                href="/login"
                class="w-24 bg-blue-400 h-4/6 my-auto rounded text-white
					flex justify-center items-center active:bg-blue-600">Register</a
            >
            <a
                href="/login"
                class="w-24 bg-blue-400 h-4/6 my-auto rounded text-white
					flex justify-center items-center active:bg-blue-600">Login</a
            >
        {/if}
    </header>
    <main class="bg-gray-100 flex-1">
        <slot />
    </main>
</div>
