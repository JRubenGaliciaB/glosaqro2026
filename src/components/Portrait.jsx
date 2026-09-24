import { useState } from "react";
import { preparationImages } from "../data";
export default function Portrait({ person, photo, className = "" }) {
  const [failed, setFailed] = useState(false);
  const name = person.holder || person.name;
  const url = photo || preparationImages[person.id];
  return (
    <span className={`portrait ${className}`} aria-hidden="true">
      {url && !failed ? (
        <img src={url} alt="" onError={() => setFailed(true)} loading="lazy" />
      ) : (
        <span>
          {name
            .split(" ")
            .slice(0, 2)
            .map((n) => n[0])
            .join("")}
        </span>
      )}
    </span>
  );
}
