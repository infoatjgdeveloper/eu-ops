
import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { aiConsultant } from '../services/geminiService';
import { Message } from '../types';

const AIChatOverlay: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Welcome to JG Developer EU Operations. How can I assist you with our European service delivery today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    const history = messages.slice(-6); // Keep last few messages for context
    const responseText = await aiConsultant.chat(input, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-[90vw] sm:w-[380px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col mb-4 overflow-hidden animate-in zoom-in slide-in-from-bottom-4 duration-300">
          <div className="eu-blue p-6 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <div className="font-bold">JG AI Consultant</div>
                <div className="text-[10px] opacity-70 uppercase font-bold tracking-widest">EU Regional Node</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-500/10'
                    : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
                    }`}
                >
                  {msg.role === 'user' ? (
                    msg.text
                  ) : (
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p className="mb-2 last:mb-0" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc ml-4 mb-2 space-y-1" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal ml-4 mb-2 space-y-1" {...props} />,
                        li: ({ node, ...props }) => <li className="ml-1" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                        em: ({ node, ...props }) => <em className="italic" {...props} />,
                        code: ({ node, ...props }) => <code className="bg-slate-200 px-1 py-0.5 rounded text-xs" {...props} />,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-100 px-4 py-3 rounded-2xl rounded-tl-none border border-slate-200">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Ask about our EU operations..."
                className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 pr-12 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="absolute right-2 top-1.5 w-9 h-9 eu-blue text-white rounded-lg flex items-center justify-center hover:opacity-90 disabled:opacity-50 transition-opacity"
              >
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
            <p className="text-[9px] text-center text-slate-400 mt-2">
              Powered by JG AI — European Union Regional Node
            </p>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full eu-blue text-white shadow-2xl shadow-blue-900/40 flex items-center justify-center text-2xl hover:scale-110 transition-transform active:scale-95 group relative"
      >
        {isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-comment-dots"></i>}
        {!isOpen && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-[10px] font-bold px-2 py-0.5 rounded-full animate-pulse">AI</span>
        )}
      </button>
    </div>
  );
};

export default AIChatOverlay;
