import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, 
  Heart, 
  Brain, 
  Plane, 
  Banknote, 
  Zap, 
  Menu, 
  X 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Home", url: createPageUrl("Home"), icon: Building2 },
  { title: "Medical", url: createPageUrl("Medical"), icon: Heart },
  { title: "AI Solutions", url: createPageUrl("AI"), icon: Brain },
  { title: "Aerospace", url: createPageUrl("Aerospace"), icon: Plane },
  { title: "Fintech", url: createPageUrl("Fintech"), icon: Banknote },
  { title: "Energy", url: createPageUrl("Energy"), icon: Zap },
];

export default function Layout({ children }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      <motion.header 
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to={createPageUrl("Home")} className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-slate-800 to-slate-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Nexus Corp</h1>
                <p className="text-xs text-slate-500 tracking-wider">INNOVATION REDEFINED</p>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.url}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium ${
                    location.pathname === item.url
                      ? 'bg-slate-100 text-slate-800'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              ))}
            </nav>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-6 py-4 space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.title}
                    to={item.url}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.url
                        ? 'bg-slate-100 text-slate-800'
                        : 'text-slate-600 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.title}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="pt-20">
        {children}
      </main>

      <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-500 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">Nexus Corp</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Pioneering innovation across multiple industries, transforming the future through technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Industries</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Medical Technology</li>
                <li>Artificial Intelligence</li>
                <li>Aerospace Engineering</li>
                <li>Financial Technology</li>
                <li>Renewable Energy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Contact</h4>
              <p className="text-slate-400">
                1 Innovation Drive<br />
                Tech Valley, CA 94043<br />
                info@nexuscorp.com
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500">© 2024 Nexus Corp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
