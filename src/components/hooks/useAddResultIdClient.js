import {useResultIdClientQuery} from './useResultIdClientQuery';

export function useAddResultIdClient() {
    const {data, client} = useResultIdClientQuery();

    return [
        function addResultId(resultId) {
            client.writeData({data: {resultID: resultId}});
        },
        data,
        client
    ];
}