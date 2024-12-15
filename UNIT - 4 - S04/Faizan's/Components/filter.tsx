import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../redux/action";

export let Filter: React.FC = () => {
  const dispatch = useDispatch();

  function handleFilter(e: any) {
    dispatch(setFilter(e.target.value));
  }
  return (
    <div>
      <input type="text" placeholder="Filter Data" onChange={handleFilter} />
    </div>
  );
};
