import React, { useState, useEffect, useCallback } from "react";

const useLocalStorage = (key) => {
  const [storageValue, setStorageValue] = useState(() => {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) {
      return value;
    }
  });
  const maxStorageCount = 8;

  const setStorage = (value) => {
    if (storageValue) {
      const overlap = storageValue.filter((item) => item.name === value.name);

      if (overlap.length === 0) {
        if (storageValue.length === maxStorageCount) {
          localStorage.setItem(
            key,
            JSON.stringify([...storageValue.slice(1), value]),
          );
          setStorageValue([...storageValue.slice(1), value]);
        } else {
          localStorage.setItem(key, JSON.stringify([...storageValue, value]));
          setStorageValue([...storageValue, value]);
        }
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
    const stockItem = { name: inputText, stockIndex: "74,300", rate: "0.54%" };
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