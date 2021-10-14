import React from 'react';
interface IProps<T = {}> {
  items: T[];
  className?: string;
  renderItem: (item: T, key: number) => React.ReactNode;
}
export const List = ({ items, renderItem, className = '' }: IProps) => {
  return <div className={className}>{items.map((m, index) => renderItem(m, index))}</div>;
};
