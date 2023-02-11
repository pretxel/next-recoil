import useSWR from 'swr'

const useFetchAnimals = (items) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR(`https://shibe.online/api/shibes?count=${items}`, fetcher, {
        suspense: true,
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
    })
    return {
        animalsData: data,
        isLoading: !error && !data,
        isError: error
    }
}

export default useFetchAnimals