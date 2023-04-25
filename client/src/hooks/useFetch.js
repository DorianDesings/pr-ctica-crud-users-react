import { useEffect, useState } from 'react';

const fetchData = async (url, setFetchStatus, ...options) => {
	console.log(options);
	try {
		const response = await fetch(url, ...options);
		const data = await response.json();
		setFetchStatus({ data, loading: false, error: undefined });

		console.log(data);
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

const useFetch = (url, ...options) => {
	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});
	useEffect(() => {
		fetchData(url, setFetchStatus, ...options);
	}, [url]);

	return { ...fetchStatus };
};

export default useFetch;
