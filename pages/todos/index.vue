<template>
<transition name="todos">
    <section>
        <div class="columns">
            <div class="column is-full has-text-centered">
                <h1>ToDoリスト</h1>
            </div>
        </div>
        <div class="columns is-centered">
            <ul class="column is-half">
                <li v-for="todo in todos" :key="todo.id" class="field">
                    <label class="control checkbox">
                        <input type="checkbox" :checked="todo.done" @change="toggle(todo)">
                        <span :class="{ done: todo.done }">{{todo.text}}</span>
                        <a class="delete is-small" @click="removeTodo(todo)"></a>
                    </label>
                </li>
                <li>
                    <input class="input" type="text" placeholder="タスクを入力してください" @keyup.enter="addTodo">
                </li>
            </ul>
        </div>
        <div class="columns">
            <div class="column is-full has-text-centered">
                <!-- <button class="button" @click="$router.push('/')">
                    <font-awesome-icon icon="chevron-circle-left" />
                    <span>前のページに戻る</span>
                </button> -->
                <nuxt-link class="button--grey" to="/">
                    <font-awesome-icon icon="chevron-circle-left" />
                    <span>前のページに戻る</span>
                </nuxt-link>
            </div>
        </div>
    </section>
</transition>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    computed: {
        todos() { return this.$store.state.todos.list }
    },
    transition: {
        name: 'todos',
        beforeLeave: function(el) {
            // set page class to parent element
            el.parentNode.classList.add('todos');
        },
    },
    methods: {
        removeTodo(todo) {
            this.$store.commit('todos/remove', todo);
        },
        addTodo(e) {
            this.$store.commit('todos/add', e.target.value);
            e.target.value = ''
        },
        ...mapMutations({
            toggle: 'todos/toggle'
        })
    }
}
</script>

<style>
.done {
    text-decoration: line-through;
}

.todos-enter { /* ToDoリスト（todos）→メイン（main）：ToDoリスト移動開始位置 */
    transform: translate(100vw, 0);
}
.todos .main-leave-to { /* ToDoリスト（todos）←メイン（main）：メイン移動終了位置 */
    transform: translate(100vw, 0);
}
.todos-enter-active,
.main-leave-active {
    transition: all .5s 0s ease;
}
</style>
