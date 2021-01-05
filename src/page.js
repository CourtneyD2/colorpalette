import React from 'react'

function Page(props){
  return <section className={`page ${props.dir}`}>{props.children}</section>
}
export default Page;