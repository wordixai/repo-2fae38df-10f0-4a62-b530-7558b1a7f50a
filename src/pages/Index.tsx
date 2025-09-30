import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const partners = [
    { name: "Airbnb", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Booking.com", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Vrbo", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Expedia", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Google", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Agoda", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Trip.com", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
    { name: "Houfy", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=120&h=40&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold">hostex</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                Features <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                Resources <ChevronDown className="w-4 h-4" />
              </button>
              <button className="text-gray-700 hover:text-gray-900">Price</button>
              <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
                About us <ChevronDown className="w-4 h-4" />
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button className="text-gray-700 hover:text-gray-900">Login</button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                Get started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Put your vacation rental on autopilot with{" "}
              <span className="relative inline-block">
                Smart AI
                <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                  <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              An all-in-one vacation rental software with AI-powered features, quick syncing, and honest pricing to help you stay ahead without overspending.
            </p>
            <div className="space-y-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg">
                15-day free trial
              </Button>
              <p className="text-sm text-gray-500">no card needed, no extra fees</p>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=700&fit=crop" 
                alt="Man using phone" 
                className="rounded-2xl w-full h-auto"
              />
              
              {/* Chat bubbles */}
              <div className="absolute top-8 left-4 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <span className="text-sm font-medium">Thomas Jordi</span>
                </div>
              </div>

              <div className="absolute top-32 left-8 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <p className="text-sm">Hi, where exactly is the parking spot for the unit?</p>
                </div>
                <span className="text-xs text-gray-400">08:41 PM</span>
              </div>

              <div className="absolute top-64 right-8 bg-blue-50 rounded-2xl shadow-lg p-4 max-w-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                  <p className="text-sm">Hi, there's one reserved spot for you in front of the building, marked "Unit 3".</p>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-gray-200 rounded px-2 py-1">AI-powered</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">📄</div>
                <div className="w-8 h-8 rounded bg-gray-200 flex items-center justify-center">⚡</div>
                <input 
                  type="text" 
                  placeholder="Send" 
                  className="border-none outline-none text-sm bg-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="border-t border-b bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
            {partners.map((partner, idx) => (
              <div key={idx} className="text-2xl font-bold text-gray-600">
                {partner.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
                  alt="Woman on boat using phone" 
                  className="rounded-2xl w-full h-auto"
                />
                
                {/* Chat overlay */}
                <div className="absolute top-12 right-8 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <span className="text-sm font-medium">Thomas Jordi</span>
                  </div>
                </div>

                <div className="absolute top-40 right-12 bg-white rounded-2xl shadow-lg p-4 max-w-xs">
                  <p className="text-sm mb-1">Hi, where exactly is the parking spot for the unit?</p>
                </div>

                <div className="absolute bottom-24 left-8 bg-blue-50 rounded-2xl shadow-lg p-4 max-w-xs">
                  <p className="text-sm mb-1">Hi, there's one reserved spot for you in front of the building, marked "Unit 3".</p>
                  <span className="text-xs bg-gray-200 rounded px-2 py-1 inline-block mt-2">AI-powered</span>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                <span className="relative inline-block">
                  AI-driven
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M1 5.5C50 1.5 150 1.5 199 5.5" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
                . Instant. Intelligent.
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our human-like AI responds to all questions, improving guest satisfaction and saving you up to 90% of your burden.
              </p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Continuous learning</h3>
              <p className="text-gray-600">
                Continuously learns from your knowledge base, property details, and past talks to enhance its responses.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart escalation</h3>
              <p className="text-gray-600">
                Alerts your staff automatically when there are questions that need human assistance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sentiment analysis</h3>
              <p className="text-gray-600">
                Alerts you to take over right away when it detects negative emotions or displeasure.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="rounded-full px-6">
              Learn more →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;