

const fetchData = async <T>(url: string, apiKey: string): Promise<T> => {
    const options = {
        "headers": {
            "Authorization": `Bearer ${apiKey}`,
            "Content-type": "application/json"
        }
    };

    try {
        const json = await fetch(url);
        const data = await json.json();
        return data as T;

    } catch (error) {
        console.log(error);
        if (error instanceof Error)
            throw Error("Error while fetching data: ", error);
        else
            throw Error("Error while fetching data - unknown ");
    }
}

export { fetchData };