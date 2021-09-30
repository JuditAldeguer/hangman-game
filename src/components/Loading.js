const Loading = (props) => {
  const getLoading = () => {
    if (props.loading) {
      return <span className="loading" />;
    } else {
      return null;
    }
  };
  return getLoading();
};

export default Loading;
