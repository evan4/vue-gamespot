<template>
    <div>
        <carousel :per-page="1" 

         :paginationEnabled="false">
            <slide v-for="(slide, index) in slides" :key="index">
                <div 
                class="slider_bck"
                :style="{ 'background': `url(${slide.bck})` }">
                    <div class="gradient">
                        <div class="container">
                            <div class="content">
                                <app-button 
                                type="link"
                                :addClass="[]"
                                linkTo="#">See review</app-button>
                                <div class="item">{{slide.title}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
import SlideOne from '../../assets/images/featured/1.jpg';
import SlideTwo from '../../assets/images/featured/2.jpg';
import SlideThree from '../../assets/images/featured/3.jpg';
import SlideFour from '../../assets/images/featured/4.jpg';

export default {
    components: {
        Carousel,
        Slide
    },
    methods: {
        
    },
    data(){
        return {
            slides : [
                {
                    title: 'red dead redumption 2',
                    bck: SlideOne
                },
                {
                    title: 'Watchdogs 1',
                    bck: SlideTwo,
                },
                {
                    tetitlext: 'Rise of tomb rider',
                    bck: SlideThree
                },
                {
                    title: 'Spiderman',
                    bck: SlideFour,
                },
            ]
        }
    }
}
</script>

<style>

</style>
