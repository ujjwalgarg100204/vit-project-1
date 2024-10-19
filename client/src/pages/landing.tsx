import {Link} from "@nextui-org/link";
import {Button} from "@nextui-org/button";
import {Card, CardBody} from '@nextui-org/card'
import {Bot, CheckCircle, FileText, MessageCircle, Users} from 'lucide-react'
import {ReactElement} from "react";
import {Image} from "@nextui-org/image";
import Footer from "@/components/footer.tsx";

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-gradient-to-b from-pink-100 to-white">
        <header className="py-4 px-6 bg-white shadow-md">
          <nav className="flex justify-between items-center max-w-7xl mx-auto">
            <Link href="/" className="text-2xl font-bold text-pink-600">CervicalCare</Link>
            <div className="space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-pink-600">Login</Link>
              <Link href="/signup" className="text-gray-600 hover:text-pink-600">Sign Up</Link>
            </div>
          </nav>
        </header>

        <main>
          <section className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-6 md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800">Early Detection Saves Lives</h1>
                <p className="text-lg text-gray-600">
                  Our AI-powered platform helps predict cervical cancer risk and connects you with
                  expert doctors for personalized care.
                </p>
                <div className="space-x-4">
                  <Button color="primary" size="lg" as={Link} href="/signup">
                    Get Started
                  </Button>
                  <Button color="secondary" size="lg" as={Link} href="#features">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2">
                <Image
                    src="https://www.reviveresearch.org/wp-content/uploads/2024/01/lets-beat-cervical-cancer.jpg.webp"
                    alt="Cervical Cancer Awareness"
                    className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="py-16 px-4 max-w-7xl mx-auto" id="features">
            <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                  icon={<FileText size={40}/>}
                  title="AI-Powered Risk Assessment"
                  description="Fill out our questionnaire and get an instant prediction of your cervical cancer risk."
              />
              <FeatureCard
                  icon={<Users size={40}/>}
                  title="Connect with Doctors"
                  description="Share your prediction reports directly with doctors and schedule online consultations."
              />
              <FeatureCard
                  icon={<MessageCircle size={40}/>}
                  title="Support Community"
                  description="Join support groups and read inspiring survivor stories."
              />
              <FeatureCard
                  icon={<Bot size={40}/>}
                  title="24/7 Chatbot Assistance"
                  description="Get instant answers to your questions about cervical cancer and website navigation."
              />
            </div>
          </section>

          <section className="py-16 px-4 max-w-7xl mx-auto bg-pink-50">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="space-y-6 md:w-1/2">
                <h2 className="text-3xl font-bold">Comprehensive Resource Hub</h2>
                <ul className="space-y-2">
                  <ResourceItem text="Survivor Stories: Personal journeys of hope and resilience"/>
                  <ResourceItem text="Prevention Tips: Strategies to reduce your risk"/>
                  <ResourceItem text="Myth Busters: Debunking common misconceptions"/>
                  <ResourceItem text="FAQ Section: Quick answers to common questions"/>
                </ul>
                <Button color="primary" size="lg" as={Link} href="/resources">
                  Explore Resources
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                    src="https://media.defense.gov/2022/Jan/11/2002920958/2000/2000/0/220121-F-PO640-0001.JPG"
                    alt="Resource Hub"
                    className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section className="py-16 px-4 max-w-7xl mx-auto">
            <Card>
              <CardBody className="text-center p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Health?</h2>
                <p className="text-lg mb-6">
                  Join thousands of women who have already benefited from our platform.
                </p>
                <Button color="primary" size="lg" as={Link} href="/signup">
                  Sign Up Now
                </Button>
              </CardBody>
            </Card>
          </section>

          <section className="py-16 px-4 max-w-7xl mx-auto bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FAQItem
                  question="How accurate is the AI prediction?"
                  answer="Our AI model has been trained on extensive medical data and provides a high level of accuracy. However, it's always recommended to consult with a healthcare professional for a definitive diagnosis."
              />
              <FAQItem
                  question="Is my data secure?"
                  answer="We take data privacy very seriously. All your personal and medical information is encrypted and stored securely. We never share your data without your explicit consent."
              />
              <FAQItem
                  question="How do I connect with a doctor?"
                  answer="After receiving your prediction, you can choose to share your results with our network of certified doctors. You can then schedule an online consultation through our platform."
              />
              <FAQItem
                  question="Is the chatbot available 24/7?"
                  answer="Yes, our AI-powered chatbot is available round the clock to answer your questions and provide guidance on using our platform."
              />
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  )
}

function FeatureCard({icon, title, description}: {
  icon: ReactElement;
  title: string;
  description: string
}) {
  return (
      <Card>
        <CardBody className="text-center p-6">
          <div className="flex justify-center mb-4 text-pink-600">{icon}</div>
          <h4 className="text-xl font-semibold  mb-2">{title}</h4>
          <p>{description}</p>
        </CardBody>
      </Card>
  )
}

function ResourceItem({text}: { text: string }) {
  return (
      <li className="flex items-center space-x-2">
        <CheckCircle size={20} className="text-green-500"/>
        <span>{text}</span>
      </li>
  )
}

function FAQItem({question, answer}: { question: string; answer: string }) {
  return (
      <Card>
        <CardBody>
          <h4 className="text-lg font-semibold mb-2">{question}</h4>
          <p>{answer}</p>
        </CardBody>
      </Card>
  )
}
