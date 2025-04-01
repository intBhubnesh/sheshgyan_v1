"use client"



const TailwindWrapper = ({ children }) => {
  // This component acts as a container for Tailwind-styled components
  // to prevent style conflicts with Bootstrap
  return <div className="tailwind-scope">{children}</div>
}

export default TailwindWrapper
