import { useState, useEffect } from "react";
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
    }, 500)
  };

  useEffect(() => {
    handleFilter();
  }, [inputValue])

  const handleFilter = () => {
    if(inputValue){
      const filteredVerbs = json.verbs.filter(
        (el) =>
          el["Base"].includes(inputValue.toLowerCase()) ||
          el["Past-simple"].includes(inputValue.toLowerCase()) ||
          el["Past-Participle"].includes(inputValue.toLowerCase())
      );
      setVerbs(filteredVerbs)
    }else{
      setVerbs(json.verbs)
    }
   
  };
  return (
    <Layout>
      <Title />
      <Input handleInput={handleInput} />
      <Table verbs={verbs} />
    </Layout>
  );
}