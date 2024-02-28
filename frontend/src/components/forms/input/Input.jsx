import PropTypes from 'prop-types'

function Input ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
  type = 'text'
}) {
  return (
    <div>
      <label style={{ gap: '5px', display: 'flex' }}>
        {label} :
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string
}

export default Input
