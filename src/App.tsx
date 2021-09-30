import React, { ReactNode, ReactElement, useState } from "react";

import AddToList from "./AddToList";

import "./App.css";
import Todos from "./Componets/Todos";
import Todo from "./models/todo";
import NewTodo from "./Componets/NewTodo";

const Heading = ({ title }: { title: string }) => {
  return <h1>{title}</h1>;
};

const HeadingWithContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  return <h2>{children}</h2>;
};

function Container({
  heading,
  children,
}: {
  heading: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      {children} {heading}
    </div>
  );
}

{
  /* <number | string> after useState */
}

//This states that this is a React functional component with
//the type of IState
const List: React.FC<IState> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li className="List">
          <div className="List-header">{person.name}</div>
          <img className="List-img" src={person.url} />
          <h2>{person.note}</h2>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [number, setNumber] = useState<number>(5);
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      url:
        "https://fullpresscoverage.com/wp-content/uploads/2020/01/101524695-457220551.jpg",
    },
  ]);
  const changeNumber = () => {
    setNumber(10);
  };

  /* CODE FOR NEW TODO HANDLER */

  //Set the todo item to be an empty array with 
  //Todo interface
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodo = (text: string) => {
    const newTodo = new Todo(text);
 
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo]
    })
  }

  const onRemoveTodo = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div className="App">
      <Heading title="People invited to my party" />
      <HeadingWithContent>
        <p>hi!</p>
      </HeadingWithContent>
      <Container heading={"item"}>
        <p>hi there</p>
        <a href="">Hi again</a>
      </Container> 
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
      <NewTodo onAddTodo={onAddTodo}/>
      <Todos items={todos} onRemoveTodo={onRemoveTodo} setTodos={setTodos} />
    </div>
  );
}

export default App;
