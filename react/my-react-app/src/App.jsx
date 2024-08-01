import Student from "./components/student/Student";

function App() {
  return (
    <>
      <Student name="John Smith" age={30} />
      <Student name="Abel Griffith" age={23} />
      <Student name="Samuel Orion" age={37} />
      <Student />
    </>
  );
}

export default App;
