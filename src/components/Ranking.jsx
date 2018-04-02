import React from 'react';
import PropTypes from 'prop-types';

export default class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const { category, ranking, error } = this.props;

    if (error) {
      return (
        <p>エラーが発生しました。リロードしてください</p>
      );
    } else if (typeof ranking === 'undefined') {
      // リクエスト完了前
      return (
        <p>読み込み中...</p>
      );
    }

    return (
      <div>
        <h2>
          {
            typeof category !== 'undefined'
              ? `${category.name}のランキング`
              : ''
          }
        </h2>
        <ol>
          {ranking.map(item => (
            <li key={`ranking-item-${item.code}`}>
              <img alt={item.name} src={item.imageUrl} />
              <a href={item.url} target="_blank">{item.name}</a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

Ranking.propTypes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  ranking: PropTypes.isRequired,
  error: PropTypes.bool.isRequired,
};

Ranking.defaultProps = {
  // categoryId=1は総合ランキング
  categoryId: '1',
};
