import fetchJsonp from 'fetch-jsonp';
import qs from 'qs';
import { replace } from 'react-router-redux';
import ENV from '../../env';

const API_URL = 'https://shopping.yahooapis.jp/ShoppingWebService/V1/json/categoryRanking';
const APP_ID = ENV.CLIENT_ID;

// リクエスト開始
const startRequest = category => ({
  type: 'START_REQUEST',
  payload: {
    category,
  },
});

// レスポンス受信
const receiveData = (category, error, response) => ({
  type: 'RECEIVE_DATA',
  payload: {
    category,
    error,
    response,
  },
});

// リクエスト完了
const finishRequest = category => ({
  type: 'FINISH_REQUEST',
  payload: {
    category,
  },
});

// ランキングを取得
export const fetchRanking = categoryId => (
  async (dispatch, getState) => {
    const { categories } = getState().shopping;
    const category = categories.find(eachCategory => eachCategory.id === categoryId);
    console.log(category);
    // 対応するデータがない場合はトップページにリダイレクト
    if (typeof category === 'undefined') {
      dispatch(replace('/'));
      return;
    }

    dispatch(startRequest(category));

    const queryString = qs.stringify({
      appid: APP_ID,
      category_id: categoryId,
    });

    try {
      const response = await fetchJsonp(`${API_URL}?${queryString}`);
      const data = await response.json();
      dispatch(receiveData(category, null, data));
    } catch (err) {
      dispatch(receiveData(category, err));
    }
    dispatch(finishRequest(category));
  }
);

export default fetchRanking;
