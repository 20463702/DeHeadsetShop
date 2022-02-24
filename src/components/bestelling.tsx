import React from 'react'

const bestelling = ({ headsets }: any) => {
	const headsetName = new URLSearchParams(window.location.search).get("headsetName");
	const headset = headsets.get(headsetName);

  return (
    <>
        bestelling {headset.naam}
    </>
  )
}

export default bestelling