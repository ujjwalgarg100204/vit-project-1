import {Link} from "@nextui-org/link";
import {Input} from '@nextui-org/input'
import {Button} from "@nextui-org/button";
import {Card, CardBody} from '@nextui-org/card'
import {Bot, CheckCircle, FileText, MessageCircle, Users} from 'lucide-react'
import {ReactElement} from "react";
import {Image} from "@nextui-org/image";

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

        <footer className="bg-gray-800 text-white py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">CervicalCare</h3>
                <p>Empowering women through early detection and education.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold">Quick Links</h4>
                <ul className="space-y-1">
                  <li><Link href="/about" className="hover:text-pink-400">About Us</Link></li>
                  <li><Link href="/resources" className="hover:text-pink-400">Resources</Link></li>
                  <li><Link href="/contact" className="hover:text-pink-400">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-pink-400">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Stay Connected</h4>
                <Input
                    placeholder="Enter your email"
                    endContent={
                      <Button color="primary">
                        Subscribe
                      </Button>
                    }
                />
                <div className="flex space-x-4">
                  <Link href="#" className="text-white hover:text-pink-400">
                    <span className="sr-only">Facebook</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                         aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-white hover:text-pink-400">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                         aria-hidden="true">
                      <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </Link>
                  <Link href="#" className="text-white hover:text-pink-400">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                         aria-hidden="true">
                      <path fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center text-sm">
              © {new Date().getFullYear()} CervicalCare. All rights reserved.
            </div>
          </div>
        </footer>
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
