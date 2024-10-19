import {useState} from 'react'
import {Input, Textarea} from '@nextui-org/input'
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader} from "@nextui-org/modal";
import {Button} from "@nextui-org/button";
import {Card, CardBody, CardHeader} from '@nextui-org/card'
import {PlusCircle} from 'lucide-react'
import {Link} from "@nextui-org/link";
import Footer from "@/components/footer.tsx";

// Mock data for initial stories
const initialStories = [
  {
    title: "My Journey to Recovery",
    author: "Sarah Johnson",
    content: "When I was diagnosed with cervical cancer at 35, I felt like my world had fallen apart. But with the support of my family, friends, and an amazing medical team, I fought through it. Today, I'm cancer-free and cherishing every moment of life."
  },
  {
    title: "Hope in the Darkest Times",
    author: "Emily Chen",
    content: "Battling cervical cancer was the toughest challenge I've ever faced. There were days when I wanted to give up, but the love of my children kept me going. I'm sharing my story to give hope to others who are just starting this journey."
  }
]

export default function StoriesPage() {
  const [stories, setStories] = useState(initialStories)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newContent, setNewContent] = useState('')

  const handleAddStory = () => {
    if (newTitle.trim() && newAuthor.trim() && newContent.trim()) {
      setStories([...stories, {title: newTitle, author: newAuthor, content: newContent}])
      setNewTitle('')
      setNewAuthor('')
      setNewContent('')
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
              <Link href="/faq" className="text-gray-600 hover:text-pink-600">FAQ</Link>
            </div>
          </nav>
        </header>

        <main className="py-16 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Survivor Stories</h1>

          <div className="flex flex-col gap-4 mb-8">
            {stories.map((story, index) => (
                <Card key={index} className="w-full">
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <p className="text-gray-600 mb-4">By {story.author}</p>
                    <p>{story.content}</p>
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
              Share Your Story
            </Button>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <ModalContent>
              <ModalHeader>Share Your Story</ModalHeader>
              <ModalBody>
                <Input
                    label="Title"
                    placeholder="Enter a title for your story"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                />
                <Input
                    label="Your Name"
                    placeholder="Enter your name or use 'Anonymous'"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                />
                <Textarea
                    label="Your Story"
                    placeholder="Share your experience with cervical cancer"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button color="primary" onPress={handleAddStory}>
                  Share Story
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </main>
        <Footer/>
      </div>
  )
}
