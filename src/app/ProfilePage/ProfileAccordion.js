import React, { Component } from 'react'
import '../App.css';
import { Accordion, Icon } from 'semantic-ui-react'
import CheckboxExampleRadioGroup from './ProfileUserInfo';
import InputExampleFluid from './ProfileCityInp';
import TextAreaExampleMinHeight from './ProfileBio';
import CheckboxExampleRadioStatus from './ProfileStatus';
import CheckboxExampleRadioHouse from './ProfileHouseChoice';
import CheckboxExampleRadioSmoke from './ProfileSmokeChoice';
import RangeSlider from './ProfileRangeAge';

export default class AccordionExampleFluid extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion className='accordion-bd' fluid styled>

        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          City/Town
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <InputExampleFluid />
        </Accordion.Content>
        
        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Loking For
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <RangeSlider />
        </Accordion.Content>


        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Interested In?
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <CheckboxExampleRadioGroup />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 3}
          index={3}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Bio
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 3}>
                <TextAreaExampleMinHeight />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 4}
          index={4}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Relationship Status
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 4}>
                <CheckboxExampleRadioStatus />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 5}
          index={5}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Children
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 5}>
                <CheckboxExampleRadioHouse />
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 6}
          index={6}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Smoker
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 6}>
                <CheckboxExampleRadioSmoke />
        </Accordion.Content>
      </Accordion>

    )
  }
}

// 