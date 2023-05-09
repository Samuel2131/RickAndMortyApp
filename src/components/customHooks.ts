
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://rickandmortyapi.com/api/character"

export type UrlParams = {
    page: number,
    name: string,
    status: "All" | "Alive" | "Dead" | "Unknown"
}

export const useCharacter = (urlParams: UrlParams, setLoading: Function): any[] => {
    const { page, name, status } = urlParams;
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        let finalUrl = url, char = "?";
        if(page) {
            finalUrl += `${char}page=${page}`
            char = "&"
        }
        if(name) {
            finalUrl += `${char}name=${name}`
            if(char==="?") char = "&"
        }
        if(status && status !== "All") finalUrl += `${char}status=${status}`;

        axios.get(finalUrl).then(({ data }) => {
            setData(data.results);
            setLoading(false);
        }).catch(() => {
            setData([]);
            setLoading(false);
        });
    }, [page, name, status, setLoading]);

    return data;
}