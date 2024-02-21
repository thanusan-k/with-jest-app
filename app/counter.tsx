"use client"
import React, { useState } from "react";
import styles from "./counter.module.scss"

export interface ButtonProps {
  label: string;
  labelColor?: string; 
}

const Counter = ({ label, labelColor }: ButtonProps) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2 className={styles.test}>{count}</h2>
      <button
        type="button"
        onClick={handleIncrement}
        style={{ color: labelColor }}
      >
        + {label}
      </button>
    </>
  );
};

export default Counter;
