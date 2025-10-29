import React from 'react';
import { Ionicons } from '@expo/vector-icons';

type IconSymbolProps = {
  name: keyof typeof Ionicons.glyphMap;
  size?: number;
  color?: string;
};

export function IconSymbol({ name, size = 24, color = 'black' }: IconSymbolProps) {
  return <Ionicons name={name} size={size} color={color} />;
}
