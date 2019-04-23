export const ResponseSampleTitle = props => {
  const { response, r } = props;
  return r && response.replace(/[_]/g, " ");
};

export default ResponseSampleTitle;
