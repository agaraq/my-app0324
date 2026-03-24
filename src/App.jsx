import Hello from "./Hello";
function User({ name }) {
    return <p>안녕~ {name}</p>;
}
function Product({ name, price }) {
    return (
        <>
            <h3>상품: {name}</h3>
            <p>가격 : {price}</p>
        </>
    );
}
function ProfileCard({ name, age, job }) {
    return (
        <>
            <h3>이름: {name}</h3>
            <h3>나이: {age}</h3>
            <h3>직업: {job}</h3>
        </>
    );
}
function Button({ text }) {
    return <button>{text}</button>;
}
function Box({ children }) {
    return <div style={{ color: "blue" }}>{children}</div>;
}
function FruitList({ fruits }) {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}
function App() {
    const fruits = ["사과", "바나나", "포도"];
    return (
        <>
            <h1>4주차 실습</h1>
            <hr />
            <h2>실습1</h2>
            <Hello />
            <hr />
            <h2>실습2</h2>
            <User name="강아지"></User>
            <hr />
            <h2>실습3</h2>
            <Product name="동양미래대" price="3,000,000"></Product>
            <Product name="컴퓨터" price="1,000,000"></Product>
            <Product name="담배" price="4500"></Product>
            <hr />
            <h2>실습4</h2>
            <ProfileCard name="전정완" age="23" job="백수"></ProfileCard>
            <ProfileCard name="ㅈㅈㅇ" age="만 21" job="학생"></ProfileCard>
            <ProfileCard name="전정완" age="23" job="무직"></ProfileCard>
            <hr />
            <h2>실습5</h2>
            <Button text="로그인"></Button>
            <Button text="회원가입"></Button>
            <Button text="삭제"></Button>
            <hr />
            <h2>실습6</h2>
            <Box>
                <h1>안녕안녕</h1>
            </Box>
            <hr />
            <h2>실습7</h2>
            <FruitList fruits={fruits}></FruitList>
        </>
    );
}

export default App;
