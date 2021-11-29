import React, { useEffect, useState } from "react"
import styled from "styled-components"

const SearchButtons = ({ projects, setProjects, setBackToAll }) => {
  const [active, setActive] = useState(0)
  const types = ["all", ...new Set(projects.map(project => project.data.type))]

  const onChangeTypeHandler = (type, id) => {
    setActive(id)
    if (type === "all") {
      setBackToAll()
    } else {
      setProjects(projects.filter(project => project.data.type === type))
    }
  }

  return (
    <Wrapper>
      {types.map((type, id) => (
        <button
          key={id}
          onClick={() => onChangeTypeHandler(type, id)}
          className={active === id ? "active" : ""}
        >
          {type}
        </button>
      ))}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: flex;
  margin-bottom: 0;
  justify-content: center;
  flex-wrap: wrap;
  button {
    margin: 0.5rem;
    text-transform: capitalize;
    background: transparent;
    border: transparent;
    color: var(--clr-grey-6);
    letter-spacing: var(--spacing);
    font-size: 1rem;
    padding: 0.25rem;
    cursor: pointer;
    outline: none;
    transition: var(--transition);
  }
  button:hover,
  button.active {
    box-shadow: 0px 1.5px 0 var(--clr-grey-6);
  }
`
export default SearchButtons
