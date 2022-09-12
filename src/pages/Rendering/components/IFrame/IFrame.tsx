import { useEffect, useRef } from 'react'

export default function IFrame() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)

  useEffect(() => {
    const iframe = iframeRef.current
    const iframeDocument = iframeRef.current?.contentDocument
    if (!iframeDocument || !iframe) return

    const h1 = document.createElement('h1')
    h1.innerText = 'Hello inside IFrame'
    iframeDocument.body.appendChild(h1)

    // iframe.style.height = iframeDocument.documentElement.scrollHeight + 'px'
  }, [])

  return (
    <iframe
      ref={iframeRef}
      src="about:blank"
      frameBorder="0"
      scrolling="auto"
      title="test-1"
    />
  )
}
