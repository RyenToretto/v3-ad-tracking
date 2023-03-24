import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

interface IModuleType {
  default: any[]
}

const mockFilesInfo = import.meta.glob<IModuleType>('./**/*.ts', { eager: true })
const mockModules: any[] = []

Object.keys(mockFilesInfo).forEach((key) => {
  if (key.includes('/_')) {
    return
  }
  mockModules.push(...mockFilesInfo[key].default)
})

/**
 * Used in a production environment. Need to manually import all modules
 */
export function setupMockServer() {
  createProdMockServer(mockModules)
}
