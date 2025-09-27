

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Zap, Sun, Wind, Battery, Leaf, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Energy() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const solutions = [
    {
      icon: Sun,
      title: "Solar Technology",
      description: "Advanced photovoltaic systems and solar energy solutions",
      features: ["Solar Panels", "Energy Storage", "Grid Integration"]
    },
    {
      icon: Wind,
      title: "Wind Power",
      description: "Next-generation wind turbines and wind energy systems",
      features: ["Turbine Technology", "Offshore Wind", "Smart Controls"]
    },
    {
      icon: Battery,
      title: "Energy Storage",
      description: "Cutting-edge battery technology and energy storage solutions",
      features: ["Lithium-ion Batteries", "Grid Storage", "Home Energy"]
    },
    {
      icon: Zap,
      title: "Smart Grid",
      description: "Intelligent power distribution and energy management systems",
      features: ["Grid Optimization", "Demand Response", "Energy Analytics"]
    }
  ];

  const stats = [
    { value: "15GW", label: "Renewable Capacity" },
    { value: "200M", label: "Tons CO₂ Reduced" },
    { value: "50+", label: "Countries Served" },
    { value: "95%", label: "Efficiency Rating" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isHeroInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Renewable
              <span className="block bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                Energy
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Leading the global transition to sustainable energy with innovative 
              renewable energy solutions and smart grid technologies.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-slate-800 mb-6">
              Energy Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive renewable energy solutions powering a sustainable future 
              through solar, wind, storage, and smart grid technologies.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-white hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-700">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Leaf className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Power the Future with Clean Energy
            </h2>
            <p className="text-xl text-yellow-100 mb-8 leading-relaxed">
              Partner with us to accelerate the global transition to renewable energy 
              and build a sustainable future for generations to come.
            </p>
            <Button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-6 text-lg font-semibold">
              Discover Energy Solutions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

