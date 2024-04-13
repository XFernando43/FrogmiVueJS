<template>
    <div class="flex flex-col justify-center items-center p-10 gap-12">

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3904.79692287466!2d-77.08374282585076!3d-11.849484038257078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d6b8edc07263%3A0xc8884fcd8baff4a0!2sAv.%20las%20Vi%C3%B1as%20760%2C%20Puente%20Piedra%2015121!5e0!3m2!1ses-419!2spe!4v1712953937924!5m2!1ses-419!2spe"
        class="maps shadow-2xl" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <CommentsComponent />

    </div>

</template>

<script lang="ts">

    import CommentsComponent from '../components/Comments/Comments.component.vue';

    export default{
        data(){
            return{
                reports:[],
                comments:[],
            }   
        },
        components:{
            CommentsComponent
        }
    }

</script>


<style scoped>
.maps {
    width: 900px;
    height: 500px;
    border: 5px solid blue;
    border-radius: 20px;
}
</style>