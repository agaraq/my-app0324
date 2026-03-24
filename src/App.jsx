import Hello from "./Hello";
function User({ name }) {
    <p>안녕~ {name}</p>;
}
function Product({ name, price }) {
    return (
        <>
            <h3>상품: {name}</h3>
            <p>가격 : {price}</p>
        </>
    );
}
function App() {
    return (
        <>
            <h1>4주차 실습</h1>
            <hr />
            <h2>실습1</h2>
            <Hello />
            <hr />
            <h2>실습2</h2>
            <User name="강아지"></User>
            <Product name="담배" price="4500"></Product>
        </>
    );
}

export default App;
