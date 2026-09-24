const fs = require('fs');
const path = require('path');

const dir = 'src/components';
const componentFiles = fs.readdirSync(dir).filter(f => f.endsWith('.tsx')).map(f => path.join(dir, f));
const files = ['src/App.tsx', ...componentFiles];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (file.includes('HeroSection.tsx')) {
    // Make Hero a clean white/light blue theme to match "biru putih"
    content = content.replace(/bg-\[\#000000\]/g, 'bg-slate-50');
    content = content.replace(/from-\[\#000000\]/g, 'from-slate-50');
    content = content.replace(/via-\[\#000000\]\/90/g, 'via-slate-50/90');
    content = content.replace(/from-\[\#000000\]\/40/g, 'from-slate-50/40');
    
    // Text in Hero
    content = content.replace(/text-white/g, 'text-slate-900');
    content = content.replace(/text-zinc-300/g, 'text-slate-600');
    content = content.replace(/text-zinc-400/g, 'text-slate-500');
    content = content.replace(/text-zinc-500/g, 'text-slate-400');
    
    // Buttons and Accents
    content = content.replace(/bg-yellow-500/g, 'bg-blue-600');
    content = content.replace(/hover:bg-yellow-400/g, 'hover:bg-blue-700');
    content = content.replace(/text-yellow-400/g, 'text-blue-600');
    content = content.replace(/text-yellow-500/g, 'text-blue-600');
    content = content.replace(/fill-yellow-400/g, 'fill-blue-600');
    content = content.replace(/border-yellow-500/g, 'border-blue-600');
    
    // Backgrounds in Hero
    content = content.replace(/bg-zinc-900/g, 'bg-white');
    content = content.replace(/bg-zinc-950/g, 'bg-white');
    content = content.replace(/border-zinc-800/g, 'border-slate-200');
    content = content.replace(/shadow-\[0_0_15px_rgba\(234,179,8,0\.2\)\]/g, 'shadow-sm');
    content = content.replace(/shadow-\[0_0_20px_rgba\(234,179,8,0\.4\)\]/g, 'shadow-lg shadow-blue-600/20');
    content = content.replace(/bg-yellow-500\/10/g, 'bg-blue-50');
    content = content.replace(/fill-yellow-500\/20/g, 'fill-blue-100');
    content = content.replace(/shadow-black\/50/g, 'shadow-slate-200/50');
    
    // Button text
    content = content.replace(/text-zinc-950/g, 'text-white');
    
    // Menu Dropdown
    content = content.replace(/bg-white\/5/g, 'bg-slate-50');
    content = content.replace(/hover:text-white/g, 'hover:text-blue-600');
    content = content.replace(/text-slate-900 font-medium px-4 py-3 rounded-lg transition-colors/g, 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 font-medium px-4 py-3 rounded-lg transition-colors');
    
  } else if (file.includes('TrustPricingSection.tsx')) {
    // TrustPricingSection - make it a blue theme
    content = content.replace(/bg-zinc-950/g, 'bg-slate-900');
    content = content.replace(/bg-black/g, 'bg-slate-900');
    content = content.replace(/text-white/g, 'text-white');
    content = content.replace(/text-zinc-300/g, 'text-slate-300');
    content = content.replace(/text-zinc-400/g, 'text-slate-400');
    content = content.replace(/bg-yellow-500\/10/g, 'bg-blue-500/20');
    content = content.replace(/text-yellow-500/g, 'text-blue-400');
    content = content.replace(/bg-zinc-900/g, 'bg-slate-800');
    content = content.replace(/border-zinc-800/g, 'border-slate-700');
    
    // Pakej Lengkap Card
    content = content.replace(/from-yellow-500 to-yellow-600/g, 'from-blue-600 to-blue-800');
    content = content.replace(/text-zinc-950/g, 'text-white');
    content = content.replace(/shadow-yellow-500\/20/g, 'shadow-blue-900/50');
    content = content.replace(/border-yellow-400/g, 'border-blue-400/30');
    content = content.replace(/bg-black\/10/g, 'bg-white/20');
    content = content.replace(/text-zinc-900/g, 'text-white');
    content = content.replace(/text-yellow-900/g, 'text-blue-200');
    content = content.replace(/bg-black\/5/g, 'bg-white/10');
    content = content.replace(/border-black\/10/g, 'border-white/10');
    content = content.replace(/border-yellow-500\/20/g, '');
    content = content.replace(/bg-zinc-950 text-blue-400/g, 'bg-white text-blue-900');
    content = content.replace(/hover:bg-black/g, 'hover:bg-blue-50');
  } else {
    // General Light Theme for others
    content = content.replace(/bg-black/g, 'bg-slate-50');
    content = content.replace(/bg-zinc-950/g, 'bg-slate-50');
    content = content.replace(/bg-zinc-900/g, 'bg-white');
    content = content.replace(/bg-zinc-800/g, 'bg-slate-100');
    
    content = content.replace(/border-zinc-800/g, 'border-slate-100');
    content = content.replace(/border-zinc-900/g, 'border-slate-200');
    content = content.replace(/border-zinc-950/g, 'border-slate-200');
    
    content = content.replace(/text-white/g, 'text-slate-900');
    content = content.replace(/text-zinc-300/g, 'text-slate-600');
    content = content.replace(/text-zinc-400/g, 'text-slate-600');
    content = content.replace(/text-zinc-500/g, 'text-slate-500');
    content = content.replace(/text-zinc-950/g, 'text-white');
    
    content = content.replace(/yellow-500/g, 'blue-600');
    content = content.replace(/yellow-400/g, 'blue-500');
    content = content.replace(/yellow-900/g, 'blue-100');
    
    content = content.replace(/shadow-black\/50/g, 'shadow-slate-200/50');
    content = content.replace(/shadow-black\/20/g, 'shadow-slate-200/20');
  }

  // App.tsx
  if (file.includes('App.tsx')) {
    content = content.replace(/bg-black/g, 'bg-white');
    content = content.replace(/text-slate-900/g, 'text-slate-900'); // Wait, already replaced text-white with text-slate-900
    content = content.replace(/border-t border-slate-200/g, 'border-t border-slate-100');
    content = content.replace(/bg-slate-50 text-slate-500 py-12/g, 'bg-slate-950 text-slate-400 py-12');
    content = content.replace(/bg-white text-slate-500 py-12/g, 'bg-slate-950 text-slate-400 py-12');
  }

  fs.writeFileSync(file, content);
});
