import React from 'react';
import {NextPage} from "next";
import Head from 'next/head';
import axios from 'axios';
import Todo from '../../types/todo';
import getConfig from 'next/config';

type Props = {
    todo: Todo,
}

const TodoPage: NextPage<Props> = ({todo}) => {
    return <>
        <Head>
            <title>{todo.title}</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>

        <div>
            <h1>Todo #{todo.id}</h1>
            <p>{todo.title}</p>
        </div>
    </>;
};


export async function getStaticPaths() {
    const {publicRuntimeConfig} = getConfig();
    // Call an external API endpoint to get posts
    const todos: Todo[] = (await axios(`${publicRuntimeConfig}/todos/`)).data;

    // Get the paths we want to pre-render based on posts
    const paths = todos.map((item: Todo) => {
        return ({
            params: {id: String(item.id)},
        });
    });

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {paths, fallback: true};
}

export async function getStaticProps(context: any) {
    const {publicRuntimeConfig} = getConfig();
    const id: string = context.params.id ? String(context.params.id) : '';
    const todo: Todo = (await axios(`${publicRuntimeConfig}/todos/${id}`)).data;

    const props: Props = {
        todo,
    };

    return {props};
}

export default TodoPage;
