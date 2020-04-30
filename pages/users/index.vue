<template>
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
                <button class="button" @click="$router.push('/')">
                    <font-awesome-icon icon="chevron-circle-left" />
                    <span>前のページに戻る</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    computed: {
        count() { return this.$store.state.counter.count }
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
