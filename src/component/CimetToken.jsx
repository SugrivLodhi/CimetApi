const CimetToken = ({ address }) => {
  return (
    <>
      {address.map((item) => {
        return <p>{item.adress}</p>;
      })}
    </>
  );
};
export default CimetToken;
