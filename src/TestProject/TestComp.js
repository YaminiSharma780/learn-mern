export default function TestComp() {
  return (
    <>
      <BookImg />
      <Title />
      <Author />
      <Price />
    </>
  );
}
const BookImg = () => {
  return (
    <>
      <img src="https://qph.cf2.quoracdn.net/main-qimg-9453af8ac5c258368110c598704871d3.webp" alt=""/>
    </>
  );
};
const Title = () => {
    const title = "Book Title";
  return (
    <>
      <h1 style={{color:"blue"}}>{title}</h1>
    </>
  );
};
const Author = () => {
  return (
    <>
      <h3> Author Name</h3>
    </>
  );
};
const Price = () => {
  return (
    <>
      <h3> Book Price</h3>
    </>
  );
};
