export default {
    state: {
        // 侧边栏展开 or 收缩
        isCollapse: false,
        // 面包屑
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        currentMenu: null
    },
    mutations: {
        // 侧边栏展开 or 收缩
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        // 面包屑
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        // tag
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        }
    }
}