import React from 'react';
import PropTypes from 'prop-types';

const Ranking = ({ categoryId }) => (
  <div>
    <h2>Rankingコンポーネント</h2>
    <p>カテゴリーID: {categoryId}</p>
  </div>
);

Ranking.propTypes = {
  categoryId: PropTypes.string,
};

Ranking.defaultProps = {
  // categoryId=1は総合ランキング
  categoryId: 1,
};

export default Ranking;
