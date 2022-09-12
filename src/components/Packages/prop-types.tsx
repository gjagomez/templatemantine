import { Text } from '@mantine/core'
import propTypes from 'prop-types'
import React from 'react'

type Props = {
  isOpen?: boolean
}

const PropTypes: React.FC<Props> = ({ isOpen }) => {
  return (
    <>
      <Text color="grape" size="sm" weight="bolder">
        Current "isOpen" props type is: {typeof isOpen}
      </Text>
    </>
  )
}

PropTypes.propTypes = {
  isOpen: propTypes.bool,
}

PropTypes.defaultProps = {
  isOpen: false,
}

export default PropTypes
