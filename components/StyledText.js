import React from 'react';
import { Text } from 'react-native';

export function StyledText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'monospace' }]} />
  );
}
