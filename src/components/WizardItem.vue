<template>
    <swiper-slide
        :title="title"
        :subtitle="subtitle"
        :hasBackButton="backButton"
    >
        <slot></slot>
    </swiper-slide>
</template>

<script>
    import { swiperSlide } from 'vue-awesome-swiper';

    export default {
        name: 'WizardItem',
        components: {
            swiperSlide
        },
        props: {
            backButton: {
                default: true,
                required: false,
                type: Boolean
            },
            subtitle: {
                default: '',
                required: false,
                type: String
            },
            title: {
                required: true,
                type: String
            }
        }
    }
</script>