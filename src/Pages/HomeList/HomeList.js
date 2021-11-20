import React from 'react';
import { Tab,Tabs,} from 'react-bootstrap';
import Breakfast from '../Home/FoodArea/Breakfast/Breakfast';
import Dinner from '../Home/FoodArea/Dinner/Dinner';
import Lunch from '../Home/FoodArea/Lunch/Lunch';
import './HomeList.css'

const HomeList = () => {

    return (
        <div>
             <Tabs defaultActiveKey="breakfast" id="uncontrolled-tab-example" className="  menu mb-5 mt-5 justify-content-center">
                <Tab eventKey="breakfast" title="Breakfast">
                    <Breakfast></Breakfast>
                </Tab>
              
                <Tab eventKey="lunch" title="Lunch" >
                    <Lunch></Lunch>
                </Tab>
                <Tab eventKey="dinner" title="Dinner">
                <Dinner></Dinner>
                </Tab>
        </Tabs>
        </div>
    );
};

export default HomeList;