<template>
    <div class="d-flex flex-column bg-white wizard">
        <div class="d-flex p-3 align-items-center wizard-header">
            <div v-if="hasBackButton"
                @click="wizardPrev();"
                class="d-flex text-dark align-items-center cursor-pointer wizard-header-prev"
            >
                <Icon type="arrow-left" size="2x" />
            </div>
            <div class="flex-grow-1 text-center wizard-header-title">
                <h3 class="text-secondary font-weight-light m-0">
                    {{ title }}
                </h3>
                <h5 v-if="subtitle"
                    class="text-dark"
                >
                    {{ subtitle }}
                </h5>
            </div>
        </div>
        <div class="flex-grow-1 w-100 bg-light wizard-body">
            <swiper ref="wizard" :options="swiperOption">
                <slot></slot>
            </swiper>
        </div>
        <div class="d-flex justify-content-center align-items-center bg-white wizard-pagination">
            <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper } from 'vue-awesome-swiper';

    import { BaseButton, Icon } from './';

    export default {
        name: 'VueEasyWizard',
        components: {
            BaseButton,
            Icon,
            swiper
        },
        data() {
            return {
                hasBackButton: true,
                subtitle: '',
                swiperOption: {
                    allowTouchMove: false,
                    loadPrevNextAmount: 0,
                    pagination: {
                        el: '.swiper-pagination',
                        dynamicBullets: true
                    },
                    slidesPerView: 1
                },
                title: ''
            }
        },
        computed: {
            activeHeader() {
                return this.title;
            },
        },
        mounted() {
            this.onInitSwiper();
        },
        methods: {
            onInitSwiper() {
                this.$parent.$on('wizard:next', this.wizardNext);
                this.$parent.$on('wizard:prev', this.wizardPrev);
                this.updateWizardHeader();
            },
            updateWizardHeader() {
                const { slides, realIndex } = this.$refs.wizard.swiper;

                this.title = slides[realIndex].getAttribute('title');
                this.subtitle = slides[realIndex].getAttribute('subtitle');
                this.hasBackButton = slides[realIndex].getAttribute('hasBackButton');
            },
            wizardNext() {
                this.$refs.wizard.swiper.slideNext();
                this.updateWizardHeader();
            },
            wizardPrev() {
                this.$refs.wizard.swiper.slidePrev();
                this.updateWizardHeader();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .wizard {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
        z-index: 1001;

        &-body {
            /deep/ .swiper-container {
                height: 100%;
            }
        }

        &-pagination {
            height: 40px;
            width: 100%;

            /deep/ .swiper-pagination-bullet {
                background: var(--primary) !important;
                margin: 2px;
            }
        }
    }
</style>