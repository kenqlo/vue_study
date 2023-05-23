<template>
<transition name="main">
    <section class="container">
        <div>
            <app-logo/>
            <h1 class="title">sample</h1>
            <h2 class="subtitle">Nuxt.js project</h2>
            <div class="pages">
                <nuxt-link to="/users" class="button--green">
                    <font-awesome-icon icon="chevron-circle-left" />
                    <span>カウンター</span>
                </nuxt-link>
                <nuxt-link to="/todos" class="button--grey">
                    <span>ToDoリスト</span>
                    <font-awesome-icon icon="chevron-circle-right" />
                </nuxt-link>
            </div>
        </div>
    </section>
</transition>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
    components: {
        AppLogo
    },
    methods: {
        beforeLeave: function(el) {
            console.log('method beforeLeave');
        }
    },
    transition: {
        name: 'main',
        beforeEnter: function(el) {
            // set page class to parent element
            this.$parent.$el.classList.add('main');
        },
        afterEnter: function(el) {
            // remove all page classes
            this.$parent.$el.classList.remove('main', 'users', 'todos');
        },
    }
}
</script>

<style>
.container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

.users .main-enter { /* カウンター（users）→メイン（main）：メイン移動開始位置 */
    transform: translate(100vw, 0);
}
.users-leave-to { /* カウンター（users）←メイン（main）：カウンター移動終了位置 */
    transform: translate(100vw, 0);
}
.todos .main-enter { /* メイン（main）→ToDoリスト（todos）：メイン移動開始位置 */
    transform: translate(-100vw, 0);
}
.todos-leave-to { /* メイン（main）←ToDoリスト（todos）：ToDoリスト移動終了位置 */
    transform: translate(-100vw, 0);
}
.main-enter-active,
.users-leave-active,
.todos-leave-active {
    transition: all .5s 0s ease;
}
</style>
