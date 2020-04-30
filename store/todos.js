export const state = () => ({
    list: []
})

export const mutations = {
    add(state, text) {
        if (!!text && !!text.trim().length) {
            // 入力文字列が改行のみあるいは空白文字以外はToDoとして設定
            state.list.push({
                text: text,
                done: false,
                id: state.list.length + 1,
            })
        }
    },
    remove(state, todo) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    }
}
