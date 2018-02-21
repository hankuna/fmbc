import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { makeFormatedBalance } from '../models/selector'

/* let x = 0; */

function IndexPage(arg) {
  const { count, dispatch } = arg
  function aa(x){
    dispatch({
      type: 'example/save',
      x
    })
  }
  function bb(x) {
    dispatch({
      type: 'example/save1',
      x
    })
  }
  return (
    <div className={styles.normal}>
      <button onClick={() => bb(3)}>减</button>
      {count}
      <button onClick={() => aa(3)}>加</button>
    </div>
  );
}

IndexPage.propTypes = {
};

const mapStateToProps = (state,props) => {
  return {
    count: state.example.x,
    slide: makeFormatedBalance(state,props)
  }
}

export default connect(mapStateToProps)(IndexPage);
