import { computed } from 'vue'
import * as NaiveUI from 'naive-ui'
import { useDesignSettingWithOut } from '@/store/modules/useDesignSetting'
import { lighten } from '@/utils'

/**
 * 挂载 Naive-ui 脱离上下文的 API
 * 如果你想在 setup 外使用 useDialog、useMessage、useNotification、useLoadingBar，可以通过 createDiscreteApi 来构建对应的 API。
 * https://www.naiveui.com/zh-CN/dark/components/discrete
 */
export default {
  install: () => {
    const designSetting = useDesignSettingWithOut()

    const configProviderProps = computed(() => ({
      theme: designSetting.darkTheme ? NaiveUI.darkTheme : undefined,
      themeOverrides: {
        common: {
          primaryColor: designSetting.appTheme,
          primaryColorHover: lighten(designSetting.appTheme, 6),
          primaryColorPressed: lighten(designSetting.appTheme, 6)
        },
        LoadingBar: {
          colorLoading: designSetting.appTheme
        }
      }
    }))

    const { message, dialog, notification, loadingBar } = NaiveUI.createDiscreteApi(
      ['message', 'dialog', 'notification', 'loadingBar'],
      {
        configProviderProps
      }
    )

    window.$message = message
    window.$dialog = dialog
    window.$notification = notification
    window.$loading = loadingBar
  }
}
