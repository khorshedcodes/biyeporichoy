'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Check, Sparkles, ShieldCheck, Heart, CreditCard, 
  X, CheckCircle2, ArrowRight, Zap 
} from 'lucide-react';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [paymentStep, setPaymentStep] = useState<'method' | 'success'>('method');
  const [phone, setPhone] = useState('');
  const [trxId, setTrxId] = useState('');

  const plans = [
    {
      id: 'free',
      name: 'ফ্রি প্যাকেজ (Free)',
      price: '৳০',
      period: 'আজীবন বিনামূল্যে',
      description: 'মৌলিক বায়োডাটা তৈরি ও সাধারণ ডাউনলোডের জন্য যথেষ্ট।',
      features: [
        'সবগুলো স্ট্যান্ডার্ড টেমপ্লেট ব্যবহার',
        'রিয়েল-টাইম লাইভ প্রিভিউ',
        'স্ট্যান্ডার্ড PDF এক্সপোর্ট',
        'হোয়াটসঅ্যাপ ইমেজ (PNG) ডাউনলোড',
        'প্রাইভেট শেয়ারিং লিঙ্ক',
        '১টি সংরক্ষিত বায়োডাটা',
      ],
      popular: false,
      cta: 'বিনামূল্যে শুরু করুন',
      href: '/create',
    },
    {
      id: 'pro',
      name: 'প্রিমিয়াম সিঙ্গেল (Pro)',
      price: '৳৪৯',
      period: 'এককালীন পেমেন্ট',
      description: 'সর্বোচ্চ কোয়ালিটি HD এক্সপোর্ট ও বিশেষ কাস্টমাইজেশন সুবিধা।',
      features: [
        'সবগুলো প্রিমিয়াম ও রয়্যাল টেমপ্লেট',
        'আল্ট্রা HD প্রিন্ট-রেডি ভেক্টর PDF',
        'ওয়াটারমার্ক ও ব্র্যান্ডিং সম্পূর্ণ মুক্ত',
        'উন্নত প্রাইভেসি ও পাসওয়ার্ড প্রোটেকশন',
        '৩টি সংরক্ষিত বায়োডাটা প্রোফাইল',
        'লাইফটাইম ক্লাউড লিঙ্ক এক্টিভ',
      ],
      popular: true,
      cta: '৳৪৯ দিয়ে আপগ্রেড করুন',
      isPaid: true,
    },
    {
      id: 'family',
      name: 'ফ্যামিলি প্যাক (Family Pack)',
      price: '৳১৯৯',
      period: 'এককালীন পেমেন্ট',
      description: 'একাধিক ভাই-বোন বা পরিবারের একাধিক সদস্যের জন্য সেরা প্যাক।',
      features: [
        'সব প্রো ফিচারের আনলিমিটেড এক্সেস',
        '১০টি পর্যন্ত বায়োডাটা সংরক্ষণ ও ম্যানেজ',
        'সবগুলো প্রিমিয়াম ও রয়্যাল ডিজাইন',
        'কাস্টম কালার ও ফন্ট কাস্টমাইজেশন',
        'অগ্রাধিকার ভিত্তিতে সাপোর্ট',
        'প্রিন্টিং গাইডলাইন ও ফরম্যাটিং হেল্প',
      ],
      popular: false,
      cta: '৳১৯৯ দিয়ে ফ্যামিলি প্যাক নিন',
      isPaid: true,
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    setPaymentStep('method');
  };

  const handleSimulatePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('success');
  };

  return (
    <div className="min-h-screen bg-stone-50 py-12 px-4 sm:px-6 lg:px-8 font-bangla space-y-12">
      
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold">
          <Zap className="w-4 h-4 text-amber-700" />
          <span>স্বচ্ছ ও সাশ্রয়ী মূল্য তালিকা</span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold font-bangla text-stone-900 leading-snug">
          প্রয়োজনের সাথে মানানসই <span className="text-brand-900">সেরা প্যাকেজটি</span> নিন
        </h1>
        <p className="text-sm sm:text-base text-stone-600 max-w-2xl mx-auto">
          মৌলিক বায়োডাটা সম্পূর্ণ ফ্রি। বিশেষ প্রিমিয়াম ডিজাইন এবং ওয়াটারমার্কবিহীন HD এক্সপোর্টের জন্য এককালীন নামমাত্র ফি।
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
              plan.popular
                ? 'bg-white border-2 border-brand-900 shadow-2xl md:scale-105 z-10'
                : 'bg-white border border-amber-200/80 shadow-sm hover:shadow-md'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-900 text-amber-200 font-bold text-xs uppercase tracking-wider shadow-md border border-amber-400/40">
                সবচেয়ে জনপ্রিয় (Best Value)
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-stone-900">{plan.name}</h3>
                <p className="text-xs text-stone-500 mt-1">{plan.description}</p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-stone-900 font-serif">
                  {plan.price}
                </span>
                <span className="text-xs text-stone-500 font-medium">/ {plan.period}</span>
              </div>

              <div className="space-y-3 pt-4 border-t border-stone-100">
                <span className="text-xs font-bold text-stone-700 uppercase tracking-wider block">
                  প্যাকেজের সুবিধাসমূহ:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-600">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              {plan.isPaid ? (
                <button
                  type="button"
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition shadow-md ${
                    plan.popular
                      ? 'bg-rose-600 hover:bg-rose-700 text-white'
                      : 'bg-stone-900 hover:bg-stone-800 text-white'
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  href={plan.href || '/create'}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 transition"
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Payment Simulation Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border border-stone-200">
            
            <div className="bg-gradient-to-r from-rose-600 to-rose-700 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                <h3 className="font-bold text-lg font-serif">পেমেন্ট গেটওয়ে (bKash / Nagad)</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPlan(null)}
                className="p-1 rounded-full text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {paymentStep === 'method' ? (
                <form onSubmit={handleSimulatePayment} className="space-y-4">
                  <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 text-xs text-rose-900 space-y-1">
                    <p className="font-bold">নির্বাচিত প্যাকেজ: {selectedPlan === 'pro' ? 'প্রিমিয়াম সিঙ্গেল (৳৪৯)' : 'ফ্যামিলি প্যাক (৳১৯৯)'}</p>
                    <p className="text-stone-600">বিকাশ বা নগদ সেন্ড মানি / মার্চেন্ট পেমেন্ট সিমুলেশন।</p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      মোবাইল ব্যাংকিং নম্বর (bKash / Nagad)
                    </label>
                    <input
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      ট্রানজেকশন আইডি (TrxID)
                    </label>
                    <input
                      type="text"
                      required
                      value={trxId}
                      onChange={(e) => setTrxId(e.target.value)}
                      placeholder="e.g. 9J87K65"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow transition"
                  >
                    পেমেন্ট সম্পন্ন করুন
                  </button>
                </form>
              ) : (
                <div className="text-center space-y-4 py-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-stone-900 font-serif">পেমেন্ট সফল হয়েছে!</h4>
                  <p className="text-xs text-stone-600">
                    আপনার প্রিমিয়াম ফিচারসমূহ তাৎক্ষণিকভাবে সক্রিয় করা হয়েছে। এখন কোনো বাধা ছাড়াই HD এক্সপোর্ট করতে পারবেন।
                  </p>
                  <Link
                    href="/create"
                    onClick={() => setSelectedPlan(null)}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs shadow"
                  >
                    <span>বায়োডাটা এডিটরে যান</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
