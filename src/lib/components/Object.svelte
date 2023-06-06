<script>
    export let object;
</script>

<div>
    <pre>
        
        <code>{JSON.stringify(object, null, 3)}</code>
    </pre>
</div>


<style >

    div {

        display: flex;
        
    }

    pre{
        border-radius: 16px;
        background-color: #dadada;
        padding: 16px;
        margin: 16px;
        font-family: 'comfortaa';
        letter-spacing: 1px;
        border: 1px solid #eefefe;
        box-shadow:  2px 2px 2px #000, inset 2px 2px 2px  #dadada;
    }
    code{
        
        line-height: 3vh;
    }

</style>