import React from 'react';
import {NextPage} from "next";
import Head from 'next/head';
import axios from 'axios';
import Todo from '../../types/todo';

type Props = {
    todos: Todo[],
}

const TodoPage: NextPage<Props> = ({todos}) => {
    return <>
        <Head>
            <title>Todos</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <div>
            {todos.map((todo: Todo) => <div>
                <h1>Todo #{todo.id}</h1>
                <p>{todo.title}</p>
            </div>)}
        </div>
    </>;
};


export async function getStaticProps() {
    const todos: Todo[] = (await axios(`https://jsonplaceholder.typicode.com/todos`)).data;

    const props: Props = {
        todos,
    };

    return {props};
}

export default TodoPage;
