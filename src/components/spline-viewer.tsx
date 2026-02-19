
'use client'

import { useEffect } from 'react'

// This tells TypeScript to recognize the <spline-viewer> tag
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        url: string;
        style?: React.CSSProperties;
      }, HTMLElement>;
    }
  }
}

export default function SplineViewer({ url }: { url: string }) {
  useEffect(() => {
    // Load model-viewer only once
    if (!document.querySelector('script[src*="@splinetool/viewer"]')) {
      const script = document.createElement('script')
      script.type = 'module'
      script.src =
        'https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js'
      document.head.appendChild(script)
    }
  }, [])

  return (
      <spline-viewer
        url={url}
        style={{
          width: '100%',
          height: '100%',
          outline: 'none',
        }}
      />
  )
}
