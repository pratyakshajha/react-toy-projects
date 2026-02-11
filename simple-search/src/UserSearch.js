import React, { useEffect, useMemo, useState } from "react";
import usersData from "./data/users.json";

export default function UserSearch() {
    const [search, setSearch] = React.useState("");
    const [debouncedSearch, setDebouncedSearch] = useState("");

    // simple filter
    // const filteredUsers = usersData.filter(user => {
    //     return user.name.toLowerCase().includes(search.toLowerCase());
    // });

    // filter with memo
    // const filteredUsers = useMemo(() => {
    //     const query = search.trim().toLowerCase();
    //     if (!query) return usersData;
    //     return usersData.filter(user => {
    //         return user.name.toLowerCase().includes(search.toLowerCase());
    //     });
    // }, [search]);

    // search on multiple fields
    // const filteredUsers = usersData.filter(user => {
    //     return `${user.name} ${user.email}`.toLowerCase().includes(search.toLowerCase());
    // });

    // debounced search: keep debounced value separate and use it filtering 
    useEffect(() => {
        // set search term after 500ms
        const timer = setTimeout(() => {
            setDebouncedSearch(search);
        }, 500);

        // cleanup runs before the next effect and on unmount 
        // i.e. search changes before timer with previous search value is completed
        // new timer will start after this
        return () => clearTimeout(timer);
    }, [search]);
    const filteredUsers = usersData.filter(user => {
        return user.name.toLowerCase().includes(debouncedSearch.toLowerCase());
    });

    function highlightText(text) {
        if (!debouncedSearch) return text;

        const regex = new RegExp(`(${debouncedSearch})`, "gi"); 
        const parts = text.split(regex); // split item around search item

        // in the split parts, only highlight the matching search term
        return parts.map((part, index) =>
            part.toLowerCase() === debouncedSearch.toLowerCase() ? 
                (<mark key={index}>{part}</mark>) : (part)
        );
    }


return (
    <div className="container">
        <input 
            type="text"
            placeholder="Search users"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pure-input-1 search-input"
        >
        </input>

        <ul className="user-list">
            {filteredUsers.map((user) => (
                <li className="list-item" key={user.id}>
                    <h3> {highlightText(user.name)} </h3> 
                    <span> {user.email} </span> 
                </li>
            ))}
        </ul>
    </div>
    )
}