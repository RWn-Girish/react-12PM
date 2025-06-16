const HocComp = (Component) => {
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return <h1>Loading.....</h1>;
    } else {
      return <Component props={props} />;
    }
  };
};

export default HocComp;
