import { useState, useEffect } from "react";
import Head from "next/head";
import json from "../data/verbs";

import Layout from "../components/Layout";
import Input from "../components/Input";
import Table from "../components/Table";
import Title from "../components/Title";

export default function Home() {
  const [verbs, setVerbs] = useState(json.verbs);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const { value } = e.target;
    setTimeout(() => {
      setInputValue(value);
    }, 500);
  };

  useEffect(() => {
    handleFilter();
  }, [inputValue]);

  const handleFilter = () => {
    if (inputValue) {
      const filteredVerbs = json.verbs.filter(
        (el) =>
          el["Base"].includes(inputValue.toLowerCase()) ||
          el["Past-simple"].includes(inputValue.toLowerCase()) ||
          el["Past-Participle"].includes(inputValue.toLowerCase())
      );
      setVerbs(filteredVerbs);
    } else {
      setVerbs(json.verbs);
    }
  };
  return (
    <Layout>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Check yourself or quickly find that you need." />
        <meta name="keywords" content="Irregular verbs" />
        <title>iVerbs</title>
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB"/>  
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Title />
      <Input handleInput={handleInput} />
      <Table verbs={verbs} />
    </Layout>
  );
}
