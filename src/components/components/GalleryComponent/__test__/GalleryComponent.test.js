import React from 'react';
import ReactDom from 'react-dom';
import {render, cleanup, fireEvent, waitFor, screen, act, waitForElementToBeRemoved} from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import MutationObserver from '@sheerun/mutationobserver-shim';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GalleryComponent} from '../Gallery.component';
import {LoaderComponent} from '../../LoaderComponent/Loader.component';

window.MutationObserver = MutationObserver;
Enzyme.configure({ adapter: new Adapter() });
const mockedOnDeleteResult = jest.fn((id) => {
    return Promise.resolve({ id });
});

const mockedGallery = [
    {
        id: '1',
        consumption_items: [{
            id: '11',
            name: 'test1',
            area: 12.4,
            height: '3',
            consumption: '1.5',
            general_consumption: '30',
            coast: '45'
        }],
        title: 'test result 1',
        grand_total: '45'
    }, {
        id: '2',
        consumption_items: [{
            id: '21',
            name: 'test2',
            area: 12.8,
            height: '3',
            consumption: '1.7',
            general_consumption: '35',
            coast: '50'
        }, {
            id: '22',
            name: 'test3',
            area: 10.4,
            height: '2.7',
            consumption: '2.7',
            general_consumption: '45',
            coast: '60'
        }],
        title: 'test result 2',
        grand_total: '110'
    }
];

describe("GalleryComponent", () => {
    afterEach(cleanup);

    it('renders loader component when loading', ()=> {
        render(<GalleryComponent gallery={mockedGallery}
                                 loading={true}/>)
        expect(screen.getByTestId('loader-component')).toBeInTheDocument();
    });

    it('renders nothing when there are no gallery items', ()=> {
        const component = shallow(<GalleryComponent />);
        expect(component.type()).toEqual(null);
    });

    it('renders gallery without crashing', ()=> {
        const div = document.createElement('div');
        ReactDom.render(<GalleryComponent gallery={mockedGallery}
                                          loading={false}/>, div);
    });

    it('renders an appropriate table', ()=> {
        const {getByTestId} = render(<GalleryComponent gallery={mockedGallery}
                                                       loading={false}/>);
        const table1 = screen.getByTestId('gallery-component').children[0];
        const table2 = screen.getByTestId('gallery-component').children[1];
        expect(screen.getByTestId('gallery-component').children).toHaveLength(2);
        expect(table1.querySelectorAll('tbody tr')).toHaveLength(2);
        expect(table2.querySelectorAll('tbody tr')).toHaveLength(3);
        expect(table1.querySelectorAll('tbody td')[0]).toHaveTextContent(mockedGallery[0].consumption_items[0].name);
        expect(table1.querySelectorAll('tbody td')[1]).toHaveTextContent(mockedGallery[0].consumption_items[0].area);
        expect(table1.querySelectorAll('tbody td')[2]).toHaveTextContent(mockedGallery[0].consumption_items[0].general_consumption);
        expect(table1.querySelectorAll('tbody td')[3]).toHaveTextContent(mockedGallery[0].consumption_items[0].coast);
        expect(table1.querySelectorAll('tbody td')[5]).toHaveTextContent(mockedGallery[0].grand_total);
        expect(screen.getAllByRole('heading')[0]).toHaveTextContent(mockedGallery[0].title);
        expect(screen.getAllByRole('heading')[1]).toHaveTextContent(mockedGallery[1].title)
    });

    it("should remove a table when button is clicked", async () => {
        const {getByTestId} = render(<GalleryComponent gallery={mockedGallery}
                                                       loading={false}
                                                       onDeleteResult={mockedOnDeleteResult}/>);
        const table = screen.getByTestId('gallery-component').children[0];
        const title = screen.getAllByRole('heading')[0];
        await act(async () => {
            await fireEvent.click(table.querySelectorAll('button')[0])
        });
        expect(mockedOnDeleteResult).toHaveBeenCalledWith( '1');
    });
});