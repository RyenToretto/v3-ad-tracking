import os from 'os'

// 获取本机 IP
export const getLocalIp = () => {
  const ifaces = os.networkInterfaces()
  for (const attr of Object.keys(ifaces)) {
    if (ifaces[attr]) {
      // @ts-ignore
      for (const info of ifaces[attr]) {
        if (info.family === 'IPv4' && info.address !== '127.0.0.1') {
          return info.address
        }
      }
    }
  }
}
