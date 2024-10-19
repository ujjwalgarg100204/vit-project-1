import {useState} from 'react'
import {Input, Textarea} from '@nextui-org/input'
import {Button} from "@nextui-org/button";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Card, CardBody} from '@nextui-org/card'
import {ChevronDown, ChevronUp, PlusCircle} from 'lucide-react'
import {Link} from "@nextui-org/link";
import Footer from "@/components/footer.tsx";

// Mock data for initial FAQs
const initialFaqs = [
  {
    question: "What is cervical cancer?",
    answer: "Cervical cancer is a type of cancer that occurs in the cells of the cervix - the lower part of the uterus that connects to the vagina. Various strains of the human papillomavirus (HPV), a sexually transmitted infection, play a role in causing most cervical cancer."
  },
  {
    question: "What are the early signs of cervical cancer?",
    answer: "Early-stage cervical cancer generally produces no signs or symptoms. Signs and symptoms of more advanced cervical cancer include: vaginal bleeding after intercourse, between periods or after menopause, watery, bloody vaginal discharge that may be heavy and have a foul odor, pelvic pain or pain during intercourse."
  },
  {
    question: "How can cervical cancer be prevented?",
    answer: "To prevent cervical cancer: Get vaccinated against HPV, have regular screening tests, practice safe sex, don't smoke. Regular Pap tests can detect precancerous conditions of the cervix, so they can be monitored or treated in order to prevent cervical cancer."
  }
]

export default function FAQPage() {
  const [faqs, setFaqs] = useState(initialFaqs)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')
  const [newAnswer, setNewAnswer] = useState('')

  const toggleFaq = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleAddFaq = () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      setFaqs([...faqs, {question: newQuestion, answer: newAnswer}])
      setNewQuestion('')
      setNewAnswer('')
      setIsModalOpen(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
        <header className="py-4 px-6 bg-white shadow-md">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-pink-600">CervicalCare</Link>
            <div className="space-x-4">
              <Link href="/" className="text-gray-600 hover:text-pink-600">Home</Link>
              <Link href="/stories" className="text-gray-600 hover:text-pink-600">Stories</Link>
            </div>
          </nav>
        </header>

        <main className="py-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>

          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
                <Card key={index} className="w-full">
                  <CardBody>
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFaq(index)}
                    >
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      {expandedIndex === index ? <ChevronUp/> : <ChevronDown/>}
                    </div>
                    {expandedIndex === index && (
                        <p className="mt-4 text-gray-600">{faq.answer}</p>
                    )}
                  </CardBody>
                </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
                color="primary"
                endContent={<PlusCircle size={20}/>}
                onClick={() => setIsModalOpen(true)}
            >
              Add a Question
            </Button>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalContent>
              <ModalHeader>Add a New FAQ</ModalHeader>
              <ModalBody>
                <Input
                    label="Question"
                    placeholder="Enter your question"
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                />
                <Textarea
                    label="Answer"
                    placeholder="Enter the answer"
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleAddFaq}>
                  Add FAQ
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </main>

        <Footer/>
      </div>
  )
}
