import React, { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key) => {
  const [storageValue, setStorageValue] = useState(() => {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      return value;
    }
  });

  const setStorage = (value) => {
    if (storageValue) {
      const overlap = storageValue.filter((item) => item.name === value.name);
      console.log(overlap);
      if (overlap.length === 0) {
        localStorage.setItem(key, JSON.stringify([...storageValue, value]));
        setStorageValue([...storageValue, value]);
      }
    } else {
      localStorage.setItem(key, JSON.stringify([value]));
      setStorageValue([value]);
    }
  };

  return [storageValue, setStorage];
};

const StorageInput = ({ type }) => {
  const [inputText, setInputText] = useState();
  const [storageValue, setStorage] = useLocalStorage("recentStocks");

  function onRecentStorage(event) {
    // event.preventDefault();
    const stockItem = { name: inputText, stockIndex: "add" };
    setStorage(stockItem);
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      로컬스토리지 저장 테스트
      <form onSubmit={(event) => onRecentStorage(event)}>
        <input
          type="text"
          onChange={(event) => setInputText(event.target.value)}
        />
      </form>
    </div>
  );
};

export default StorageInput;
