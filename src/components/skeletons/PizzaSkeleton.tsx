import ContentLoader from "react-content-loader";

const PizzaSkeleton: React.FC<{ key: number }> = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="pizza-skeleton"
      {...props}
    >
      <circle cx="137" cy="114" r="112" />
      <rect x="0" y="306" rx="10" ry="10" width="276" height="88" />
      <rect x="1" y="254" rx="10" ry="10" width="276" height="34" />
      <rect x="3" y="425" rx="10" ry="10" width="93" height="30" />
      <rect x="128" y="416" rx="25" ry="25" width="150" height="45" />
    </ContentLoader>
  );
};

export default PizzaSkeleton;
