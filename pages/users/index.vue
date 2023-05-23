<template>
<transition name="users">
    <section>
        <div class="columns">
            <div class="column has-text-centered">
                <h1>カウンター</h1>
                <p class="is-size-1">{{count}}</p>
                <div class="buttons is-centered">
                    <button class="button is-primary" @click="addCount">カウントアップ</button>
                    <button class="button is-info" @click="resetCount">カウントリセット</button>
                </div>
            </div>
        </div>
        <div class="columns">
            <div class="column has-text-centered">
                <!-- <button class="button" @click="$router.push('/')">
                    <span>前のページに戻る</span>
                    <font-awesome-icon icon="chevron-circle-right" />
                </button> -->
                <nuxt-link class="button--grey" to="/">
                    <span>前のページに戻る</span>
                    <font-awesome-icon icon="chevron-circle-right" />
                </nuxt-link>
            </div>
        </div>
    </section>
</transition>
</template>

<script>
export default {
    computed: {
        count() { return this.$store.state.counter.count }
    },
    transition: {
        name: 'users',
        beforeLeave: function(el) {
            // set page class to parent element
            el.parentNode.classList.add('users');
        },
    },
    methods: {
        addCount(e) {
            this.$store.commit('counter/add')
        },
        resetCount(e) {
            this.$store.commit('counter/reset')
        }
    }
}
</script>

<style>
.users-enter { /* カウンター（users）→メイン（main）：カウンター移動開始位置 */
    transform: translate(-100vw, 0);
}
.users .main-leave-to { /* カウンター（users）←メイン（main）：メイン移動終了位置 */
    transform: translate(-100vw, 0);
}
.users-enter-active,
.main-leave-active {
    transition: all .5s 0s ease;
}
</style>