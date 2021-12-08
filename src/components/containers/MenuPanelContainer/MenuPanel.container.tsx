import React from 'react';
import {MenuPanelComponent} from '../../components/MenuPanelComponent/MenuPanel.component';
import {useResultIdClientQuery} from '../../hooks/useResultIdClientQuery';
import {MenuPanelComponentProps} from '../../components/MenuPanelComponent/MenuPanel.component';

interface MenuPanelContainerProps {
    as?: React.FunctionComponent<MenuPanelComponentProps>
}

export const MenuPanelContainer: React.FunctionComponent<MenuPanelContainerProps> = (props: MenuPanelContainerProps) => {
    const {
        as: Component = MenuPanelComponent,
    } = props;

    const {data} = useResultIdClientQuery();
    const resultId = !!data && data.resultID;

    return (
        <Component as={MenuPanelComponent}
                   resultId={resultId}/>
    );
}