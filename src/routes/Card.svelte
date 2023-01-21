<script>
    export let title;
    export let email;
    export let date;
    export let text;

    $: formattedDate = date.toDate().toLocaleDateString("en-EN", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
</script>

<div class="bg-white shadow-md rounded-l w-72 h-96 p-4">
    <h4 class="text-blue-400 text-xl h-14 overflow-y-auto overflow-x-hidden">
        {title}
    </h4>
    <p class="text-gray-400">{email}</p>
    <p class="text-gray-400 mb-2">{formattedDate}</p>
    <p class="h-60 overflow-y-auto overflow-x-hidden">{text}</p>
</div>
