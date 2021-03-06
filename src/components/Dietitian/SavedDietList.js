import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {  firebaseConnect } from 'react-redux-firebase'
import {Card, CardText, CardHeader} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import {Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';

import '../../styles/MessageList.css'
import LoadingIcon from '../Common/LoadingIcon';
import ProfileAppBar from '../Common/ProfileAppBar';

import SearchBar from 'material-ui-search-bar';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Moment from 'react-moment';
import 'moment/locale/tr';

const enhance = compose(
  withRouter,
  firebaseConnect([
    { path: 'users' },
  ]),
  connect(({ firebase }) => ({
      users: firebase.data.users,
    })
  )
);

const changeHandler = (target, formattedNumber, selectedCountry, rawValue) => {
  console.log(`${formattedNumber} - ${rawValue}`, 'Formatted value and raw value')
}

class SavedDietList extends React.PureComponent {

  render() {

    if (this.props.users === undefined) {
      return (<LoadingIcon />);
    }
    
    const styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
    var chipBadem = <Chip style={styles.chip} onRequestDelete={() => void(0) } onClick={() => void(0)}>
      <Avatar src="https://www.sifalibitkitedavisi.com/wp-content/uploads/2015/01/badem.jpg" />Badem
    </Chip>;

    var chipYumurta = <Chip style={styles.chip} onRequestDelete={() => void(0) } onClick={() => void(0)}>
      <Avatar src="http://www.i2clipart.com/cliparts/a/a/5/1/clipart-egg-aa51.png" />Yumurta
    </Chip>;

    var dietView = <Table selectable={false}>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>Pazartesi</TableHeaderColumn>
        <TableHeaderColumn>Sali</TableHeaderColumn>
        <TableHeaderColumn>Carsamba</TableHeaderColumn>
        <TableHeaderColumn>Persembe</TableHeaderColumn>
        <TableHeaderColumn>Cuma</TableHeaderColumn>
        <TableHeaderColumn>Cumartesi</TableHeaderColumn>
        <TableHeaderColumn>Pazar</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableHeaderColumn>Kahvalti</TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}
        </TableHeaderColumn>
        <TableHeaderColumn>
          {chipYumurta}
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>1. Ara Öğün</TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}
        </TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}
        </TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipBadem}
          {chipBadem}
          {chipBadem}
        </TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Öğle Yemeği</TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
          {chipBadem}
          {chipYumurta}</TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>2. Ara Öğün</TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Akşam Yemeği</TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn>
        </TableHeaderColumn>
        <TableHeaderColumn></TableHeaderColumn>
      </TableRow>
    </TableBody>
  </Table>;

    return ( 
      <div>
      <ProfileAppBar title="Kayıtlı Diyetlerim"/>
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton label="Yeni Liste" primary={true} />
          <SearchBar
            hintText="Diyet Listesi Ara"
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style = {{minWidth: 800}}
          />
        </ToolbarGroup>
      </Toolbar>
        

        <Card key={1} className="card">
            <CardHeader 
                title={"Stres Atma Diyeti"}
                subtitle={"1 Haftalık diyet programı, günlük 1850 kcal, yeşillik ağırlıklı, spor takviyeli"}
                actAsExpander={true}
                showExpandableButton={true}
                avatar={<Avatar src="https://images.pexels.com/photos/988865/pexels-photo-988865.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=150&amp;w=150" />}
            />
            <CardText expandable={true}>
              {dietView}
            </CardText>
        </Card>
        
        <Card key={2} className="card">
            <CardHeader 
                title={"Lif Zengini"}
                actAsExpander={true}
                showExpandableButton={true}
                avatar={<Avatar src="https://images.pexels.com/photos/259363/pexels-photo-259363.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=150&amp;w=150" />}
            />
            <CardText expandable={true}>
              {dietView}
            </CardText>
        </Card>
        
        <Card key={3} className="card">
            <CardHeader 
                title={"Hamile ve Lohusa Dönemi beslenme"}
                actAsExpander={true}
                showExpandableButton={true}
                avatar={<Avatar src="https://images.pexels.com/photos/247685/pexels-photo-247685.png?auto=compress&amp;cs=tinysrgb&amp;h=150&amp;w=150" />}
            />
            <CardText expandable={true}>
              {dietView}
            </CardText>
        </Card>
      </div>
  );
  }
}

export default enhance(SavedDietList)