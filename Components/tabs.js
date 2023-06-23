import React, { useState } from 'react';
import { Tabs, Tab,Box, lighten } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';


const tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedOption, setSelectedOption] = useState('oneWay');

  return (
    <div>
      <Tabs value={activeTab} onChange={(event, newValue) => setActiveTab(newValue)}>
        <Tab label="Flight" value={0} />
        <Tab label="Hotel" value={1} />
      </Tabs>
      {activeTab === 0 &&  <div style={{background:"#1373e9",padding:"20px"}}>
       {/* buttons div start */}
       <div>
        <span style={{background:lighten('#1373e9', 0.2),color:"#fff",padding:"10px"}}>
      <input type="radio" checked id="oneWay" name="fav_language" value="oneWay" />
  <label style={{cursor:"pointer"}} for="oneWay">One Way</label></span>
  <span style={{background:lighten('#1373e9', 0.2),color:"#fff",padding:"10px",marginLeft:"10px"}}> 
  <input type="radio" id="roundTrip" name="fav_language" value="roundTrip"/>
  <label style={{cursor:"pointer"}} for="roundTrip">Round Trip</label></span>
    </div>
       {/* buttons div end */}
       <div>
       <Box class="left-inner-addon input-container">
            <FlightTakeoffIcon />
            <input type="password"
                   class="form-control" 
                   placeholder="Left icon" />
        </Box>
       </div>
    </div>}
      {activeTab === 1 && <div>Tab 2 content</div>}
    </div>
  );
};

export default tabs;
