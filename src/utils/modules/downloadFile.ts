export function getFileNameByUrl(url) {
  const num = url.lastIndexOf('/') + 1
  let fileName = url.substring(num)
  fileName = decodeURI(fileName.split('?')[0]) // 把参数和文件名分割开
  return fileName
}

export function downloadByUrl({
  url,
  target = '_blank',
  fileName
}: {
  url: string
  target?: '_self' | '_blank'
  fileName?: string
}): Promise<boolean> {
  // 是否同源
  const isSameHost = new URL(url).host == location.host
  return new Promise<boolean>((resolve, reject) => {
    if (isSameHost) {
      const link = document.createElement('a')
      link.href = url
      link.target = target

      if (link.download !== undefined) {
        link.download = fileName || getFileNameByUrl(url)
      }

      if (document.createEvent) {
        const e = document.createEvent('MouseEvents')
        e.initEvent('click', true, true)
        link.dispatchEvent(e)
        return resolve(true)
      }

      if (url.indexOf('?') === -1) {
        url += '?download'
      }

      window.open(url, target)
      return resolve(true)
    } else {
      const canvas = document.createElement('canvas')
      const img = document.createElement('img')
      img.setAttribute('crossOrigin', 'Anonymous')
      img.src = url
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        const context = canvas.getContext('2d')!
        context.drawImage(img, 0, 0, img.width, img.height)
        // window.navigator.msSaveBlob(canvas.msToBlob(),'image.jpg');
        // saveAs(imageDataUrl, '附件');
        canvas.toBlob((blob) => {
          const link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob as Blob)
          link.download = getFileNameByUrl(url)
          link.click()
          URL.revokeObjectURL(link.href)
          resolve(true)
        }, 'image/jpeg')
      }
      img.onerror = (e) => reject(e)
    }
  })
}
