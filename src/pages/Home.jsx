// Paste the Home page code you uploaded here.
// For brevity I included the exact content below (adapted to .jsx imports).

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowRight, 
  Heart, 
  Brain, 
  Plane, 
  Banknote, 
  Zap,
  Users,
  Globe,
  Award,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const industries = [
    {
      title: "Medical Technology",
      description: "Revolutionary healthcare solutions and medical devices",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      link: "Medical"
    },
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence and machine learning",
      icon: Brain,
      color: "from-purple-500 to-indigo-500",
      link: "AI"
    },
    {
      title: "Aerospace",
      description: "Next-generation aerospace technology and innovation",
      icon: Plane,
      color: "from-blue-500 to-cyan-500",
      link: "Aerospace"
    },
    {
      title: "Fintech",
      description: "Financial technology solutions for the digital age",
      icon: Banknote,
      color: "from-green-500 to-emerald-500",
      link: "Fintech"
    },
    {
      title: "Energy Solutions",
      description: "Sustainable energy and clean technology initiatives",
      icon: Zap,
      color: "from-yellow-500 to-orange-500",
      link: "Energy"
    }
  ];

  const stats = [
    { icon: Users, label: "Global Employees", value: "25,000+" },
    { icon: Globe, label: "Countries", value: "45" },
    { icon: Award, label: "Patents", value: "1,200+" },
    { icon: TrendingUp, label: "Revenue Growth", value: "35%" }
  ];

  const AboutSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    return (
      <motion.section
        ref={ref}
        className="py-32 bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-5xl font-bold text-slate-800 mb-8 leading-tight">
                Transforming 
                <span className="bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                  {" "}Tomorrow{" "}
                </span>
                Today
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At Nexus Corp, we don't just adapt to the future—we create it. 
                Our diverse portfolio of companies spans the most dynamic sectors 
                of the global economy, each pushing the boundaries of what's possible.
              </p>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                From life-saving medical devices to revolutionary AI systems, 
                from sustainable energy solutions to cutting-edge aerospace technology, 
                we're building the infrastructure of tomorrow.
              </p>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-lg">
                Discover Our Innovation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <Card className="p-6 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                            <stat.icon className="w-6 h-6 text-slate-600" />
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
                            <p className="text-sm text-slate-500">{stat.label}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };

  const IndustriesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    
    return (
      <motion.section
        ref={ref}
        className="py-32 bg-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Our Industries
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Five dynamic sectors, one unified vision: to advance human progress 
              through breakthrough innovation and technological excellence.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Link to={createPageUrl(industry.link)}>
                  <Card className="group h-full bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <industry.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-slate-700 transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {industry.description}
                      </p>
                      <div className="flex items-center text-slate-700 group-hover:text-slate-800 transition-colors">
                        <span className="font-medium">Learn More</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="block"
              >
                NEXUS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                CORP
              </motion.span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Pioneering the future across five revolutionary industries. 
            Where innovation meets excellence, and tomorrow becomes today.
          </motion.p>
          
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              className="bg-white text-slate-800 hover:bg-slate-100 px-10 py-6 text-lg font-semibold rounded-full"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      <div id="about"><AboutSection /></div>
      <IndustriesSection />
    </div>
  );
}
