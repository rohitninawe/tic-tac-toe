import React, { useEffect, useState } from 'react'
import Demo from './demo.html'
import GoogleDesktop from './google_desktop.html'
import GoogleMobile from './google_mobile.html'
import GoogleTablet from './google_tablet.html'

function GooglePage() {
  const [deviceType, setDeviceType] = useState("");
  useEffect(() => {
    setDeviceType(getDeviceType())
  })
  function getDeviceType() {
    const width = window.innerWidth;
    if (width < 768) {
      return "mobile";
    } else if (width < 992) {
      return "tablet";
    } else {
      return "desktop";
    }
  }

  // Usage example
  // const deviceType = getDeviceType();
  console.log(deviceType); // "mobile", "tablet", or "desktop"
  return (
    !deviceType ? <></> :
      <div style={{ width: "100%", height: "100%" }} dangerouslySetInnerHTML={{ __html: deviceType === "mobile" ? GoogleMobile : deviceType === "tablet" ? GoogleTablet : GoogleDesktop }}></div>
  );
}

export default GooglePage