export const Square = ({ children, isSelected, updateBoard, index }) => {
  let className = `square m-2 shadow-md shadow-indigo-500/60 ${isSelected ? ' bg-purple-800/30 shadow-lg shadow-indigo-400' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
