<template>
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
                <button class="button" @click="$router.push('/')">
                    <font-awesome-icon icon="chevron-circle-left" />
                    <span>前のページに戻る</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
    computed: {
        todos() { return this.$store.state.todos.list }
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
</style>

