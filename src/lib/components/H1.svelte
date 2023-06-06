<script>
    export let innerText = innerText.length <= 0 ? "Undefined" : innerText

</script>
<h1>{innerText}</h1>

<style lang="scss">

    h1{
        color:#FFFBFC;
        font-family: "Bebas Neue";
        font-size: 3rem;
        border-bottom: 8px solid #D30C7B;
        width: fit-content;
        line-height: 2.8rem;
        letter-spacing: 0.8rem;
        margin: 16px;
    }
</style>