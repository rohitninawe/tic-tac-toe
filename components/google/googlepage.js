import React from 'react'
import Demo from './demo.html'
import Google from './google.html'

function GooglePage() {
  return (
    <div style={{width: "100%", height: "100%"}} dangerouslySetInnerHTML={{ __html: Google }}></div>
  );
}

export default GooglePage