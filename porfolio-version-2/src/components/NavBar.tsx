import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
  return (
    <div className="flex justify-between p-5 bg-neutral2">
        <p className="font-bodySemibold text-lg">KRISTINE CODES</p>
        <p>kristine.jane.tuazon</p>
    </div>
  )
}

export default NavBar