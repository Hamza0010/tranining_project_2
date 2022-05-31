import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        {/* <span className="headerTitleSm">React Blog App</span> */}
        <span className="headerTitleLg">Creativity is the Key!</span>
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDOfXGQdOEWAYdf2R0ATIiWd3WJf6A-u4xng&usqp=CAU"
        alt=""
      />
    </div>
  );
}
