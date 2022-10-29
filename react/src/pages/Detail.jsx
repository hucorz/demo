import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const { state } = useLocation();
  return (
    <ul>
        <li>{state.id}</li>
        <li>{state.title}</li>
        <li>{state.content}</li>
    </ul>
  )
}
