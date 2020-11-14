import React from 'react'
import ContentLoader from 'react-content-loader'


function LoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#dadada"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="142" r="115"></circle>
      <rect x="0" y="273" rx="6" ry="6" width="280" height="26"></rect>
      <rect x="0" y="310" rx="6" ry="6" width="280" height="84"></rect>
      <rect x="0" y="418" rx="6" ry="6" width="91" height="31"></rect>
      <rect x="137" y="408" rx="25" ry="25" width="140" height="46"></rect>
    </ContentLoader>
  )
}

export default LoadingBlock
