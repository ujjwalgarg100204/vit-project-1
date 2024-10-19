import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import {Input} from '@nextui-org/input'
import {Modal, ModalBody, ModalFooter, ModalHeader} from "@nextui-org/modal";

import {Avatar} from "@nextui-org/avatar";
import {Button} from "@nextui-org/button";

import {Select, SelectItem} from "@nextui-org/select";
import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {Calendar, FileText, MessageCircle} from 'lucide-react'

// Mock data (replace with actual data fetching in a real application)
type Doctor = { id: number, name: string, specialty: string };
const doctors = [
  {id: 1, name: 'Dr. John Smith', specialty: 'Gynecologist'},
  {id: 2, name: 'Dr. Sarah Johnson', specialty: 'Oncologist'},
] satisfies  Doctor[];

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState('appointment')
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState('')

  const renderContent = () => {
    switch (activeTab) {
      case 'appointment':
        return <AppointmentCreation doctors={doctors}
                                    onCreateAppointment={() => setIsAppointmentModalOpen(true)}/>
      case 'cervicalCancer':
        return <CervicalCancerForm/>
      case 'chat':
        return <ChatInterface doctors={doctors} selectedDoctor={selectedDoctor}
                              setSelectedDoctor={setSelectedDoctor}/>
      default:
        return null
    }
  }

  return (
      <div className="min-h-screen bg-gray-100 p-8">
        <Card className="w-full max-w-6xl mx-auto">
          <CardHeader className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Patient Dashboard</h1>
            <Avatar name="Jane Doe" size="lg"/>
          </CardHeader>
          <CardBody>
            <div className="flex space-x-4 mb-6">
              <Button
                  color={activeTab === 'appointment' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('appointment')}
                  startContent={<Calendar size={20}/>}
              >
                Create Appointment
              </Button>
              <Button
                  color={activeTab === 'cervicalCancer' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('cervicalCancer')}
                  startContent={<FileText size={20}/>}
              >
                Cervical Cancer Form
              </Button>
              <Button
                  color={activeTab === 'chat' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('chat')}
                  startContent={<MessageCircle size={20}/>}
              >
                Chat with Doctor
              </Button>
            </div>
            {renderContent()}
          </CardBody>
        </Card>
        <AppointmentModal isOpen={isAppointmentModalOpen}
                          onClose={() => setIsAppointmentModalOpen(false)}/>
      </div>
  )
}

function AppointmentCreation({doctors, onCreateAppointment}: {
  doctors: Doctor[],
  onCreateAppointment: () => void
}) {
  return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Create an Appointment</h2>
        <Select
            label="Select Doctor"
            placeholder="Choose a doctor"
        >
          {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </SelectItem>
          ))}
        </Select>
        <Input
            label="Preferred Date"
            type="date"
            placeholder="Select a date"
        />
        <Input
            label="Preferred Time"
            type="time"
            placeholder="Select a time"
        />
        <Button color="primary" onClick={onCreateAppointment}>
          Create Appointment
        </Button>
      </div>
  )
}

function AppointmentModal({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {
  const [meetLink, setMeetLink] = useState('')

  const handleCreateAppointment = () => {
    // Here you would typically make an API call to create the appointment
    console.log('Appointment created with meet link:', meetLink)
    onClose()
  }

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalHeader>
          <h3 className="text-lg font-semibold">Confirm Appointment</h3>
        </ModalHeader>
        <ModalBody>
          <p>Please provide a Google Meet link for your appointment:</p>
          <Input
              label="Google Meet Link"
              placeholder="https://meet.google.com/xxx-xxxx-xxx"
              value={meetLink}
              onChange={(e) => setMeetLink(e.target.value)}
          />
          <p className="text-sm text-gray-600 mt-2">
            Note: The doctor will not wait for more than 10 minutes if you're late for the meeting.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleCreateAppointment} disabled={!meetLink}>
            Confirm Appointment
          </Button>
        </ModalFooter>
      </Modal>
  )
}

function CervicalCancerForm() {
  const [formData, setFormData] = useState({
    age: '',
    sexualHistory: '',
    smoker: '',
    birthControlUse: '',
    std: '',
  })

  const handleInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (e) => {
    const {name, value} = e.target
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    // Here you would typically make an API call to submit the form data
    console.log('Form submitted:', formData)
  }

  return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-semibold">Cervical Cancer Prediction Form</h2>
        <Input
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            required
        />
        <Select
            label="Sexual History"
            name="sexualHistory"
            value={formData.sexualHistory}
            onChange={handleInputChange}
            required
        >
          <SelectItem key="single" value="single">Single Partner</SelectItem>
          <SelectItem key="multiple" value="multiple">Multiple Partners</SelectItem>
        </Select>
        <Select
            label="Smoker"
            name="smoker"
            value={formData.smoker}
            onChange={handleInputChange}
            required
        >
          <SelectItem key="yes" value="yes">Yes</SelectItem>
          <SelectItem key="no" value="no">No</SelectItem>
        </Select>
        <Select
            label="Birth Control Use"
            name="birthControlUse"
            value={formData.birthControlUse}
            onChange={handleInputChange}
            required
        >
          <SelectItem key="yes" value="yes">Yes</SelectItem>
          <SelectItem key="no" value="no">No</SelectItem>
        </Select>
        <Select
            label="History of STDs"
            name="std"
            value={formData.std}
            onChange={handleInputChange}
            required
        >
          <SelectItem key="yes" value="yes">Yes</SelectItem>
          <SelectItem key="no" value="no">No</SelectItem>
        </Select>
        <Button type="submit" color="primary">
          Submit Form
        </Button>
      </form>
  )
}

function ChatInterface({doctors, selectedDoctor, setSelectedDoctor}: {
  doctors: Doctor[],
  selectedDoctor: string;
  setSelectedDoctor: (doc: string) => void
}) {
  const [messages, setMessages] = useState<{ sender: string, content: string }[]>([])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim() && selectedDoctor) {
      setMessages([...messages, {sender: 'patient', content: newMessage}])
      setNewMessage('')
      // Simulate doctor's response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, {
          sender: 'doctor',
          content: 'Thank you for your message. How can I help you today?'
        }])
      }, 1000)
    }
  }

  return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Chat with Doctor</h2>
        <Select
            label="Select Doctor"
            placeholder="Choose a doctor to chat with"
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          {doctors.map((doctor) => (
              <SelectItem key={doctor.id} value={doctor.id}>
                {doctor.name} - {doctor.specialty}
              </SelectItem>
          ))}
        </Select>
        <div className="border rounded p-4 h-64 bg-gray-50 overflow-y-auto">
          {messages.map((message, index) => (
              <div key={index}
                   className={`mb-2 ${message.sender === 'patient' ? 'text-right' : 'text-left'}`}>
            <span
                className={`inline-block p-2 rounded ${message.sender === 'patient' ? 'bg-blue-100' : 'bg-gray-200'}`}>
              {message.content}
            </span>
              </div>
          ))}
        </div>
        <div className="flex space-x-2">
          <Input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              fullWidth
          />
          <Button onClick={handleSendMessage} disabled={!selectedDoctor || !newMessage.trim()}>
            Send
          </Button>
        </div>
      </div>
  )
}
