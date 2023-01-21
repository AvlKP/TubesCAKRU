<script>
    import { auth } from "$lib/firebase";
    import { loggedIn } from "../../store";
    import {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
    } from "firebase/auth";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";

    $: {
        if (browser && $loggedIn) {
            goto("/");
        }
    }

    let email = "";
    let password = "";

    const emailRE =
        /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    function register() {
        if (!emailRE.test(email)) {
            email = "Invalid email address";
            password = "";
        } else if (password.length < 6) {
            email = "Password must have at least 6 characters";
            password = "";
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    goto("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    }

    function logIn() {
        if (!emailRE.test(email)) {
            email = "Invalid email address";
            password = "";
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    goto("/");
                })
                .catch((error) => {
                    email = "Invalid email or password";
                    password = "";
                });
        }
    }
</script>

<div
    class="bg-white w-2/6 h-[16rem] rounded shadow-md flex flex-col py-8 px-4
                gap-4"
>
    <input
        class="bg-gray-100 h-12 flex-shrink-0 px-4"
        type="text"
        placeholder="E-mail"
        bind:value={email}
    />
    <input
        class="bg-gray-100 h-12 flex-shrink-0 px-4"
        type="password"
        placeholder="Password"
        bind:value={password}
    />
    <div class="flex gap-8 flex-1">
        <button
            class="w-24 bg-blue-400 h-4/6 my-auto rounded text-white flex-1
                        active:bg-blue-600"
            on:click={register}>Register</button
        >
        <button
            class="w-24 bg-blue-400 h-4/6 my-auto rounded text-white flex-1
                        active:bg-blue-600"
            on:click={logIn}>Login</button
        >
    </div>
</div>
