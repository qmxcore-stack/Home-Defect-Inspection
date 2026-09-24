const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const componentFiles = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
const files = ['src/App.tsx', ...componentFiles];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // HeroSection should be dark blue
  if (file.includes('HeroSection.tsx')) {
    content = content.replace(/bg-slate-50 text-slate-900/g, 'bg-[#0f172a] text-white'); // bg-slate-900
    content = content.replace(/from-slate-50 via-slate-50\/90/g, 'from-[#0f172a] via-[#0f172a]/90');
    content = content.replace(/from-slate-50 via-\[\#000000\]\/40/g, 'from-[#0f172a] via-[#0f172a]/40');
    content = content.replace(/text-slate-900/g, 'text-white');
    content = content.replace(/text-slate-600/g, 'text-slate-300');
    content = content.replace(/text-slate-500/g, 'text-slate-400');
    content = content.replace(/text-slate-400/g, 'text-slate-500');
    
    // Backgrounds in Hero
    content = content.replace(/bg-white/g, 'bg-slate-900');
    content = content.replace(/bg-slate-50/g, 'bg-slate-800');
    content = content.replace(/border-slate-200/g, 'border-slate-700');
    content = content.replace(/shadow-sm/g, 'shadow-lg');
    content = content.replace(/bg-blue-50/g, 'bg-blue-500/10');
    content = content.replace(/fill-blue-100/g, 'fill-blue-500/20');
  } 
  
  // ProblemSection should be dark
  else if (file.includes('ProblemSection.tsx')) {
    content = content.replace(/bg-slate-50/g, 'bg-slate-900');
    content = content.replace(/text-slate-900/g, 'text-white');
    content = content.replace(/text-slate-600/g, 'text-slate-300');
    content = content.replace(/text-slate-500/g, 'text-slate-400');
    content = content.replace(/bg-white/g, 'bg-slate-800');
    content = content.replace(/border-slate-200/g, 'border-slate-700');
    content = content.replace(/bg-slate-100/g, 'bg-slate-700');
  }
  
  // TrustPricingSection should be dark
  else if (file.includes('TrustPricingSection.tsx')) {
    content = content.replace(/bg-slate-50/g, 'bg-slate-900');
    content = content.replace(/bg-white/g, 'bg-slate-800');
    content = content.replace(/text-slate-900/g, 'text-white');
    content = content.replace(/text-slate-600/g, 'text-slate-300');
    content = content.replace(/text-slate-500/g, 'text-slate-400');
    content = content.replace(/border-slate-100/g, 'border-slate-700');
    content = content.replace(/border-slate-200/g, 'border-slate-700');
  }

  // General App.tsx
  if (file.includes('App.tsx')) {
    content = content.replace(/bg-slate-50/g, 'bg-white');
  }

  fs.writeFileSync(file, content);
});
