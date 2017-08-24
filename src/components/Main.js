// css
require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import ImgFigure from './ImgFigure';

// 获取图片相关的数据
let imageDatas = require('../data/imageDatas.json');

/**
 * 利用自执行函数，将图片名信息转化为图片的url地址
 */
imageDatas = (function getImagesUrl(imageDatasArr) {
  for (let i = 0, len = imageDatasArr.length; i < len; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageUrl = require(`../images/${imageDatasArr[i].fileName}`);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    const controllerUnits = [],
        imgFigures = [];

    imageDatas.forEach(function (value) {
      imgFigures.push(<ImgFigure key={value.imageUrl} data={value} />);
    });

    return (
      <section className="stage">
        <section className="img-section">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
