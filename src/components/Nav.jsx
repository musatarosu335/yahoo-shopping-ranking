import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ categories }) => {
  // 遷移先パスの生成
  // カテゴリIDが「1」の場合は/all
  const to = category => (
    category.id === 1
      ? '/all'
      : `/category/${category.id}`
  );

  return (
    <ul>
      {categories.map(category => (
        <li key={`nav-item-${category.id}`}>
          <Link to={to(category)}>
            {category.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

Nav.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Nav;
