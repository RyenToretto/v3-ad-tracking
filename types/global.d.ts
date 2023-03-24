import type {
  ComponentRenderProxy,
  VNode,
  VNodeChild,
  ComponentPublicInstance,
  FunctionalComponent,
  PropType as VuePropType
} from 'vue'
import type { MessageApi, DialogApi, NotificationApi, LoadingBarInst } from 'naive-ui'
import type { AxiosInstance } from 'axios'

declare global {
  const __APP_INFO__: {
    pkg: {
      name: string
      version: string
      dependencies: Recordable<string>
      devDependencies: Recordable<string>
    }
    lastBuildTime: string
  }
  declare interface Window {
    axios: AxiosInstance
    $message: MessageApi
    $dialog: DialogApi
    $notification: NotificationApi
    $loading: LoadingBarInst
  }

  // vue
  declare type PropType<T> = VuePropType<T>
  declare type VueNode = VNodeChild | JSX.Element

  export type Writable<T> = {
    -readonly [P in keyof T]: T[P]
  }

  declare type Nullable<T> = T | null
  declare type NonNullable<T> = T extends null | undefined ? never : T
  declare type Recordable<T = any> = Record<string, T>
  declare type ReadonlyRecordable<T = any> = {
    readonly [key: string]: T
  }
  declare type Indexable<T = any> = {
    [key: string]: T
  }
  declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>
  }
  declare type TimeoutHandle = ReturnType<typeof setTimeout>
  declare type IntervalHandle = ReturnType<typeof setInterval>

  declare interface ChangeEvent extends Event {
    target: HTMLInputElement
  }

  declare interface WheelEvent {
    path?: EventTarget[]
  }

  interface ImportMetaEnv extends ViteEnv {
    __: unknown
  }

  interface ViteEnv {
    VITE_GLOB_APP_TITLE: string
    VITE_GLOB_APP_SHORT_NAME: string
    VITE_PUBLIC_PATH: string
    VITE_CDN: string
    VITE_OUTPUT_DIR: string
    VITE_API_BASE_URL: string
    VITE_PORT: number
    VITE_API_PROXY: string
    VITE_DROP_CONSOLE: boolean
    VITE_USE_MOCK: boolean
  }

  declare function parseInt(s: string | number, radix?: number): number

  declare function parseFloat(string: string | number): number

  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode
    // tslint:disable no-empty-interface
    type ElementClass = ComponentRenderProxy

    interface ElementAttributesProperty {
      $props: any
    }

    interface IntrinsicElements {
      [elem: string]: any
    }

    interface IntrinsicAttributes {
      [elem: string]: any
    }
  }
}

declare module 'vue' {
  export type JSXComponent<Props = any> =
    | { new (): ComponentPublicInstance<Props> }
    | FunctionalComponent<Props>
}