import { motion } from 'framer-motion';
import { Upload, Sparkles, Clock, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="w-6 h-6" />,
    title: "업로드 또는 촬영",
    description: "선명한 손바닥 사진을 올리거나 카메라로 바로 촬영하세요.",
    color: "from-violet-500 to-purple-600"
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI 분석",
    description: "진보된 신비로운 AI가 손금을 분석해 숨겨진 패턴을 드러냅니다.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "통찰 발견",
    description: "당신의 성격, 미래, 인생 경로에 대한 맞춤형 통찰을 받아보세요.",
    color: "from-amber-500 to-orange-600"
  },
];

const HowToUse: React.FC = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            이용 방법
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            세 단계로 간단하게 손바닥의 비밀을 알아보세요
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent z-10">
                  <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-gray-400" />
                </div>
              )}

              {/* Card */}
              <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                {/* Step number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-200 to-transparent rounded-b-2xl"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full text-purple-700 font-medium">
            <Sparkles className="w-4 h-4" />
            <span>당신의 운명을 알아볼 준비가 되셨나요?</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;