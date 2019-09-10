import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

class Index extends Component {
  //2.初始化数据
  constructor(props) {
    super(props);
    this.state = {
      imageBoxIsOpen: false,//打开灯箱
      currentImage: 0,//默认显示第一张图片
    };
  }

  //3.打开灯箱，且打开当前灯箱图片
  openImageBox = (event, obj) => {
    this.setState({
      currentImage: obj.index,
      imageBoxIsOpen: true,
    });
  };
  //4.关闭灯箱图片，且恢复初始值数据
  closeImageBox = () => {
    this.setState({
      currentImage: 0,
      imageBoxIsOpen: false,
    });
  };

  //5.切换前一张图片操作
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  //6.切换后一张图片操作
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };


  render() {
    //7.render 部分
    const photos = [
      { src: require('@/assets/1.jpeg'), width: 5, height: 3 },
      { src: require('@/assets/2.jpeg'), width: 5, height: 3 },
    ];
    return (
      <div>
        <Gallery photos={photos} onClick={this.openImageBox}/>
        <Lightbox
          images={photos}
          onClose={this.closeImageBox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.imageBoxIsOpen}
        />
      </div>
    );
  }
}

export default Index;
