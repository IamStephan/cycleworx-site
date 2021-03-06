import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import globals from '../../utils/global.scss';
import styles from './footer.module.scss'

import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';
import Input from '../../components/input/input'

@withRouter
export default class Footer extends Component {
  render() {
    return (
      <footer className={`${styles['footer']}`}>
        <div className={`${styles['info']}`}>
          <Icon name='copyright' color={globals.light} />
          <Button variant='ghost' type='light'>2019 Cycleworx Langebaan</Button>
          |
          <Button variant='ghost' type='light'>Sitemap</Button>
          |
          <Button variant='ghost' type='light'>Developer</Button>
        </div>

        <div className={`${styles['social']}`}>
          <Button.Group>
            <Button>
              <Icon color={globals.light} name='facebook' type='logo' />
            </Button>
            <Button onClick={() => this.props.history.push('/contact')}>
              <Icon color={globals.light} name='mail-send' type='logo' />
            </Button>
          </Button.Group>
        </div>

        <div className={`${styles['tracking']}`}>
          <Input style={{margin: globals.margin}} placeholder='Bicycle Tracking ID' />
          <Button state='disabled'>Track</Button>
        </div>
      </footer>
    );
  }
}
