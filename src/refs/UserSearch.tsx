import { useState, useRef, useEffect } from "react";

const users = [
    { name: "sarah", age: 20 },
    { name: "alex", age: 20 },
    { name: "michael", age: 20 },
];

const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    useEffect(() => {
        if (!inputRef.current) {
            return;
        }
        inputRef.current.focus();
    }, []);

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name;
        });

        setUser(foundUser);
    };

    return (
        <div>
            UserSearch
            <input
                ref={inputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={onClick}>Search</button>
            <div>
                Name: {user && user.name} Age: {user && user.age}
            </div>
        </div>
    );
};

export default UserSearch;
