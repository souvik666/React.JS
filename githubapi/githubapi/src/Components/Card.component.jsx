import "./Card.css";
import { useState } from "react";
import { SearchBar } from "../Components/Search.Comonent";
import { fscty } from "../config/Request.config";

export const UserCard = () => {
  const [text, setText] = useState("");
  const [profiles, SetProfiles] = useState([]);

  const SearchForProfile = async (who) => {
    const res = await fscty.get(`/users?q=${who}`);
    const { data: items } = res;
    SetProfiles(items.items);
  };

  return (
    <>
      <SearchBar>
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            SearchForProfile(text);
            setText("");
          }}
        >
          Search
        </button>
      </SearchBar>
      <div className="container">
        <ol>
          {profiles.map((el) => {
            return (
              <>
                <li key={el.id}>{el.login}</li>
              </>
            );
          })}
        </ol>
      </div>
    </>
  );
};
