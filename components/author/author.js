import { Avatar, Divider, Icon } from "antd";
import "./author.css";
import handsomeGuy from "public/assets/head_img.JPG";
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src={handsomeGuy} />
      </div>
      <div className="author-introduction">
        3年web前端开发萌新新
        <p>技术栈:vue、react、next.js、mocha、express等</p>
        <Divider>社交账号</Divider>
      </div>
    </div>
  );
};

export default Author;
