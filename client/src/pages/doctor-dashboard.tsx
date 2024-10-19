import {useState} from 'react'
import {Avatar} from "@nextui-org/avatar";
import {Badge} from "@nextui-org/badge";
import {Button} from "@nextui-org/button";

import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/table";
import {Calendar, FileText, MessageCircle, User} from 'lucide-react'

// Mock data (replace with actual data fetching in a real application)
type Appointment = { id: number, patientName: string, date: string, time: string }
const appointments = [
  {id: 1, patientName: 'Alice Johnson', date: '2023-06-15', time: '10:00 AM'},
  {id: 2, patientName: 'Bob Smith', date: '2023-06-16', time: '2:30 PM'},
] satisfies Appointment[];

type CervicalCancerForm = {
  id: number,
  patientName: string,
  submissionDate: string,
  aiResult: string
}
const cervicalCancerForms = [
  {id: 1, patientName: 'Carol Davis', submissionDate: '2023-06-14', aiResult: 'Low Risk'},
  {id: 2, patientName: 'Diana Brown', submissionDate: '2023-06-15', aiResult: 'Medium Risk'},
] satisfies CervicalCancerForm[];

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState('appointments')

  const renderContent = () => {
    switch (activeTab) {
      case 'appointments':
        return <AppointmentsTable appointments={appointments}/>
      case 'cervicalCancer':
        return <CervicalCancerFormsTable forms={cervicalCancerForms}/>
      case 'profile':
        return <DoctorProfile/>
      case 'chat':
        return <ChatInterface/>
      default:
        return null
    }
  }

  return (
      <div className="min-h-screen bg-gray-100 p-8">
        <Card className="w-full max-w-6xl mx-auto">
          <CardHeader className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Doctor Dashboard</h1>
            <Avatar name="Dr. Smith" size="lg"/>
          </CardHeader>
          <CardBody>
            <div className="flex space-x-4 mb-6">
              <Button
                  color={activeTab === 'appointments' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('appointments')}
                  startContent={<Calendar size={20}/>}
              >
                Appointments
              </Button>
              <Button
                  color={activeTab === 'cervicalCancer' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('cervicalCancer')}
                  startContent={<FileText size={20}/>}
              >
                Patient Cancer Forms
              </Button>
              <Button
                  color={activeTab === 'profile' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('profile')}
                  startContent={<User size={20}/>}
              >
                Profile
              </Button>
              <Button
                  color={activeTab === 'chat' ? 'primary' : 'default'}
                  onClick={() => setActiveTab('chat')}
                  startContent={<MessageCircle size={20}/>}
              >
                Chat
              </Button>
            </div>
            {renderContent()}
          </CardBody>
        </Card>
      </div>
  )
}

function AppointmentsTable({appointments}: { appointments: Appointment[] }) {
  return (
      <Table aria-label="Appointments table">
        <TableHeader>
          <TableColumn>PATIENT NAME</TableColumn>
          <TableColumn>DATE</TableColumn>
          <TableColumn>TIME</TableColumn>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

function CervicalCancerFormsTable({forms}: { forms: CervicalCancerForm[] }) {
  return (
      <Table aria-label="Patient Cancer Forms table">
        <TableHeader>
          <TableColumn>PATIENT NAME</TableColumn>
          <TableColumn>SUBMISSION DATE</TableColumn>
          <TableColumn>AI RESULT</TableColumn>
        </TableHeader>
        <TableBody>
          {forms.map((form) => (
              <TableRow key={form.id}>
                <TableCell>{form.patientName}</TableCell>
                <TableCell>{form.submissionDate}</TableCell>
                <TableCell>
                  <Badge color={form.aiResult === 'Low Risk' ? 'success' : 'warning'}>
                    {form.aiResult}
                  </Badge>
                </TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
  )
}

function DoctorProfile() {
  return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Doctor Profile</h2>
        <div className="flex items-center space-x-4">
          <Avatar name="Dr. Smith" size="lg"/>
          <div>
            <h3 className="text-lg font-medium">Dr. John Smith</h3>
            <p className="text-gray-600">Gynecologist</p>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Contact Information</h4>
          <p>Email: dr.smith@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className="font-medium">Specializations</h4>
          <ul className="list-disc list-inside">
            <li>Cervical Cancer Screening</li>
            <li>Women's Health</li>
            <li>Obstetrics</li>
          </ul>
        </div>
      </div>
  )
}

function ChatInterface() {
  return (
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Chat with Patients</h2>
        <div className="border rounded p-4 h-64 bg-gray-50 overflow-y-auto">
          {/* Chat messages would go here */}
          <p className="text-gray-500 text-center">No messages yet</p>
        </div>
        <div className="flex space-x-2">
          <input
              type="text"
              placeholder="Type your message..."
              className="flex-grow border rounded p-2"
          />
          <Button>Send</Button>
        </div>
      </div>
  )
}
