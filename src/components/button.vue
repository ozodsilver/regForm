<template>
    <div>

        <form action="">
        <button class="btn btn-primary" v-on="$listeners" type="submit" >
          {{qiymat}}
        </button>
        </form>
    </div>
</template>

<script>
export default {
    props:['qiymat'],
    
}
</script>




<style lang="css" scoped>
    

    .btn{
        position: relative;
        z-index: 11;
        width: 90%;
        border-radius: 25px;
        margin: auto !important;
        display: block;
        font-size: 1.1em;
    
    }
</style>