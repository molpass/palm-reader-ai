import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 브랜드 영역 */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Palm Reader AI
              </h3>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              AI 손금 분석 기술로 당신의 미래에 담긴 신비를 풀어보세요.
              현대의 AI로 되살린 지혜를 통해 인생, 사랑, 운명에 대한 통찰을 발견합니다.
            </p>
          </motion.div>

          {/* 바로가기 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-purple-300">바로가기</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#how-to-use"
                  className="group flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors"
                >
                  이용 방법
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="group flex items-center gap-2 text-gray-300 hover:text-purple-300 transition-colors"
                >
                  개인정보 처리방침
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 하단 영역 */}
        <motion.div
          className="mt-16 pt-8 border-t border-slate-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Palm Reader AI
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Next.js</span>
              <span>•</span>
              <span>Pinata</span>
              <span>•</span>
              <span>AI</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
