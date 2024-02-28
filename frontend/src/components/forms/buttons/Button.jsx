import PropTypes from 'prop-types'

function Button ({ children, onClick, type = 'button' }) {
  return (
    <>
      <button onClick={onClick} type={type}>
        {children}
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['submit', 'reset', 'button'])
}

export default Button
