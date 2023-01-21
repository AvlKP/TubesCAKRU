<script>
    import { loggedEmail } from "../store";
    import { db } from "$lib/firebase";
    import { collection, addDoc } from "firebase/firestore";

    const currentDate = new Date();

    let title = "";
    let email = $loggedEmail;
    let date = currentDate.toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
    let text = "";

    async function pin() {
        try {
            const docRef = await addDoc(collection(db, "pins"), {
                title: title,
                email: email,
                date: currentDate,
                text: text,
            });
            title = "";
            text = "";
        } catch (error) {
            title = "Error!";
            text = "";
        }
    }
</script>

<div
    class="bg-white shadow-blue-400 shadow-md rounded-l w-72 h-96 p-4 relative"
>
    <textarea
        placeholder="New Pin"
        rows="2"
        cols="26"
        class="placeholder-blue-400 text-blue-400 text-xl resize-none"
        maxlength="48"
        bind:value={title}
    />
    <p class="text-gray-400">{email}</p>
    <p class="text-gray-400 mb-2">{date}</p>
    <textarea
        placeholder="..."
        cols="33"
        rows="10"
        class="resize-none"
        maxlength="300"
        bind:value={text}
    />
    <button
        class="absolute -bottom-4 -right-4 rounded-full button w-12 h-12 
            bg-blue-400 z-10 text-3xl text-white leading-3 active:bg-blue-500"
        on:click={pin}>+</button
    >
</div>
