// React
import React from 'react'
// React Bootstrap
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './index.css'

export default function App () {
  return (
    <main>
      <Alert id='mailto-alert'>For further information, please contact the Office of Experiential Education at <Alert.Link href='mailto:oee@binghamton.edu'>oee@binghamton.edu</Alert.Link></Alert>
      <Form>
        <Tabs defaultActiveKey='personal-information' id='form-nav-tab' className='mb-3'>
          <Tab eventKey='personal-information' title='Personal Info.'>
            <Form.Group className='mb-3' controlId='formFirstName'>
              <Form.Label>First Name</Form.Label>
              <Form.Control type='text' placeholder='John' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formMiddleInitial'>
              <Form.Label>Middle Initial</Form.Label>
              <Form.Control type='text' placeholder='A' required />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formLastName'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type='text' placeholder='Smith' required />
            </Form.Group>
          </Tab>
          <Tab eventKey='site-information' title='Site Info.'>
            <p>Site Info.</p>
          </Tab>
          <Tab eventKey='licensure' title='Licensure'>
            <p>Licensure</p>
          </Tab>
          <Tab eventKey='prof-assoc-memberships' title='Prof. Assoc. Membership'>
            <p>Prof. Assoc. Membership</p>
          </Tab>
          <Tab eventKey='resume-cv' title='Resume / CV'>
            <p>Resume / CV</p>
          </Tab>
          <Tab eventKey='other' title='Other'>
            <p>Other</p>
          </Tab>
          <Tab eventKey='submission' title='Submission'>
            <p>Submission</p>
          </Tab>
        </Tabs>
      </Form>
    </main>
  )
}
