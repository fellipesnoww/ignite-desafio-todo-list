import React from 'react';
import { TouchableOpacity, Image, TouchableOpacityProps } from 'react-native';
import Plus from '../../assets/plus.png';

import { styles } from './styles';

export function Button({...rest}: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
        <Image source={Plus}/>
    </TouchableOpacity>
  );
}