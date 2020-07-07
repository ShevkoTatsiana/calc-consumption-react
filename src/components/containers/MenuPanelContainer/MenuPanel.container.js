import React from 'react';
import {MenuPanelComponent} from '../../components/MenuPanelComponent/MenuPanel.component';
import {useHistory} from 'react-router';
import {useResultIdClientQuery} from '../../hooks/useResultIdClientQuery';

export function MenuPanelContainer(props) {
    const {
        as: Component = MenuPanelComponent,
    } = props;

    const history = useHistory();
    const {data} = useResultIdClientQuery();
    const resultId = !!data && data.resultID;

    const handleOnResult = () => {
        console.log(resultId);
        if (!!resultId && !!resultId.resultId) {
            history.push(`/result/${resultId.resultId}`);
        } else {
            history.push(`/no-result`);
        }

    };

    return (
        <Component as={MenuPanelComponent}
                   onResult={handleOnResult}
                   resultId={resultId}/>
    );
}