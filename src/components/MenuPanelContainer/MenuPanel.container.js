import React, {useState} from 'react';
import {MenuPanelComponent} from '../MenuPanelComponent/MenuPanel.component';
import {useHistory} from 'react-router';

export function MenuPanelContainer(props) {
    const {
        as: Component = MenuPanelComponent,
        resultId
    } = props;

    const [resultID, setResultID] = useState(resultId);
    const history = useHistory();

    const handleOnResult = () => {
        console.log(resultId);
        if (!!resultId && !!resultId.resultId) {
            history.push(`/result/${resultId.resultId}`);
            console.log('jjjjj');
        } else {
            history.push(`/no-result`);
            console.log('jjj');
        }

    };

    return (
        <Component as={MenuPanelComponent}
                   onResult={handleOnResult}
                   resultId={resultID}/>
    );
}