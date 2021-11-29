import React, { createContext, useState } from "react"
import sublinks from "../constants/links"

const GatsbyContext = createContext()

// Provider, Consumer

const GatsbyProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [links, setLinks] = useState(sublinks)
  return (
    <GatsbyContext.Provider value={{ isSidebarOpen, setIsSidebarOpen, links }}>
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyProvider, GatsbyContext }
