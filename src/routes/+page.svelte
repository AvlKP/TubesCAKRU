<script>
    import { db } from "$lib/firebase";
    import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
    import { loggedIn } from "../store";
    import { onDestroy } from "svelte";
    import NewCard from "./NewCard.svelte";
    import Card from "./Card.svelte";

    let pins = [];

    const q = query(collection(db, "pins"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        pins = querySnapshot.docs;
    });

    onDestroy(() => {
        unsubscribe();
    });
</script>

<div class="flex flex-wrap gap-12 justify-center p-8">
    {#if $loggedIn}
        <NewCard />
    {/if}
    {#each pins as pin}
        <Card
            title={pin.get("title")}
            email={pin.get("email")}
            date={pin.get("date")}
            text={pin.get("text")}
        />
    {/each}
</div>
