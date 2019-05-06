import React from 'react'
import PropTypes from 'prop-types'
import { View, TextInput, StyleSheet } from 'react-native'

export default class Input extends React.Component {
  render() {
    const {
      style,
      color,
      borderColor,
      placeholderColor,
      backgroundColor,
      _ref,
      ...props
    } = this.props
    return (
      <View style={[
        styles.container,
        style,
        {
          backgroundColor,
          borderColor,
        }
      ]}
      >
        <TextInput
          {...props}
          ref={_ref}
          style={[styles.input, { color }]}
          placeholderTextColor={placeholderColor}
        />
      </View>
    )
  }
}

Input.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  placeholderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
}

Input.defaultProps = {
  color: '#000',
  borderColor: '#d3d3d3',
  placeholderColor: '#d3d3d3',
  backgroundColor: '#fff',
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    paddingLeft: 20,
    marginRight: 10,
    fontSize: 13,
  },
})
