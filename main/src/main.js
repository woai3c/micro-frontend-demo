import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun'
import render from './micro'

/**
 * Step1 初始化应用（可选）
 */
render()

const loader = () => render()

/**
 * Step2 注册子应用
 */

registerMicroApps(
    [
        {
            name: 'vue',
            entry: '//localhost:7101',
            container: '#subapp-viewport',
            loader,
            activeRule: '/vue',
        },
        {
            name: 'react',
            entry: '//localhost:7102',
            container: '#subapp-viewport',
            loader,
            activeRule: '/react',
        },
    ],
    {
        beforeLoad: [
            app => {
                console.log('[LifeCycle] before load %c%s', 'color: green', app.name)
            },
        ],
        beforeMount: [
            app => {
                console.log('[LifeCycle] before mount %c%s', 'color: green', app.name)
            },
        ],
        afterUnmount: [
            app => {
                console.log('[LifeCycle] after unmount %c%s', 'color: green', app.name)
            },
        ],
    },
)

const { onGlobalStateChange, setGlobalState } = initGlobalState({
    user: 'qiankun',
})

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev))

setGlobalState({
    ignore: 'master',
    user: {
        name: 'master',
    },
})

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/vue')

/**
 * Step4 启动应用
 */
start()

runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted')
})
