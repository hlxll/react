import { Component } from "react";
import { Carousel, Image } from "antd";
import "./intervalImg.less";
class IntervaImg extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="intervalImg">
        <div className="interval">
          <Carousel autoplay>
            <div>
              <Image
                className="img"
                src="./img/intervalimg.png"
                preview={false}
              />
            </div>
            <div>
              <Image
                className="img"
                src="https://imgs.qunarzz.com/vs_ceph_vcimg/c0a60fa20379efa4f02ce527a680dc1b.jpeg"
                preview={false}
              />
            </div>
            <div>
              <Image
                className="img"
                src="https://imgs.qunarzz.com/vs_ceph_vcimg/79faa5a73731e84a7731db49d5baa91e.jpeg"
                preview={false}
              />
            </div>
            <div>
              <Image
                className="img"
                src="./img/intervalimg.png"
                preview={false}
              />
            </div>
          </Carousel>
        </div>
        <div className="intervalText">
          <p>旅行资讯</p>
          <p>
            <a href="http://cs.mfa.gov.cn/gyls/lsgz/lsyj/" target="_blank">
              中国人民共和国外交部安全提醒
            </a>
          </p>
          <p>
            <a href="https://www.mct.gov.cn/ggfw/cxts/" target="_blank">
              中国人民共和国文化和旅游部出行提示
            </a>
          </p>
          <p>
            <a
              href="http://cs.mfa.gov.cn/gyls/lsgz/fwxx/t1667263.shtml"
              target="_blank"
            >
              带这些东西去韩国，可能被罚款6万元！
            </a>
          </p>
          <p>
            <a
              href="https://ucomplain.12301.cn/view/complaintsheetnewest"
              target="_blank"
            >
              全国旅游投诉渠道
            </a>
          </p>
        </div>
      </div>
    );
  }
}
export default IntervaImg;
