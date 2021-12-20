import {useResultIdClientQuery} from './useResultIdClientQuery';

export function useAddResultIdClient() {
    const {data, client} = useResultIdClientQuery();

    return [
        function addResultId(resultId:string) {
            client.writeData({data: {resultID: resultId}});
        },
        data,
        client
    ];
}