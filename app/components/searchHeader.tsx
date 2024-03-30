"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchHeader.module.css";

const SearchHeader = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const delaySearch = setTimeout(async () => {
      if (search) router.push(`/${search}`);
    }, 2000);
    return () => {
      clearTimeout(delaySearch);
    };
  }, [search]);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        Put pokemon's name here for its detail!
      </div>
      <input
        className={styles.input}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchHeader;
