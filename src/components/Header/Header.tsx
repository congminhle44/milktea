import React, {FC} from 'react';
import {ReactComponent as Employee} from './icon/Employee.svg';
import {ReactComponent as Loyal} from './icon/Loyal.svg';
import {ReactComponent as Reports} from './icon/Reports.svg';
import {ReactComponent as Rev} from './icon/Rev.svg';
import {ReactComponent as Cancel} from './icon/Cancel.svg';

interface HeaderProps {
  hideMenu: any;
}

const Home: FC<HeaderProps> = ({hideMenu}) => {
  return (
    <div className="header">
      <div className="headerLogo">
        <div
          onClick={() => {
            hideMenu();
          }}
          className="cancelButton"
        >
          <Cancel />
        </div>
        <img src="./images/logo.png" alt="milk tea logo" />
      </div>
      <div className="headerMenu">
        <div className="headerMenuItem">
          <Employee />
          <p>Employees</p>
        </div>
        <div className="headerMenuItemFocus">
          <Loyal />
          <p>Loyal customers</p>
        </div>
        <div className="headerMenuItem">
          <Reports />
          <p>Reports</p>
        </div>
        <div className="headerMenuItem">
          <Rev />
          <p>Revenue</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
