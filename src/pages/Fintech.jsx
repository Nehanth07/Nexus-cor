import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Banknote, CreditCard, Shield, TrendingUp, Smartphone, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Fintech() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const solutions = [
    {
      icon: CreditCard,
      title: "Payment Solutions",
      description: "Secure, fast, and reliable payment processing systems",
      features: ["Digital Wallets", "Contactless Payments", "Cross-border Transfers"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Advanced cybersecurity and regulatory compliance solutions",
      features: ["Fraud Detection", "Risk Management", "Regulatory Compliance"]
    },
    {
      icon: TrendingUp,
      title: "Investment Platforms",
      description: "Intelligent investment and wealth management technologies",
      features: ["Portfolio Management", "Algorithmic Trading", "Market Analysis"]
    },
    {
      icon: Smartphone,
      title: "Mobile Banking",
      description: "Next-generation mobile banking and financial services",
      features: ["Digital Banking", "Personal Finance", "Budgeting Tools"]
    }
  ];

  const stats = [
    { value: "$50B+", label: "Transaction Volume" },
    { value: "10M+", label: "Active Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Financial Partners" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/3 left-1/4 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"
            animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
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
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <Banknote className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
              Financial
              <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Transforming the financial landscape with innovative fintech solutions 
              that make banking, payments, and investments more accessible and secure.
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
                <div className="text-4xl font-bold text-green-600 mb-2">{stat.value}</div>
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
              Fintech Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive financial technology solutions designed to modernize 
              banking, enhance security, and improve financial accessibility.
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
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3" />
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Building className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionize Your Financial Services
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Join financial institutions worldwide who trust our fintech solutions 
              to drive innovation and customer satisfaction.
            </p>
            <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-6 text-lg font-semibold">
              Explore Financial Solutions
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

