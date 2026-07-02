import fotoPerfil from './assets/foto.png';

import { 
  FaGithub, 
  FaLinkedin, 
  FaArrowRight, 
  FaTerminal, 
  FaBuffer,  
} from 'react-icons/fa';

export default function App() {
  return (
    // 60% PRETO: Fundo dominante com grid tecnológico sutil
    <div className="min-h-screen bg-black text-zinc-400 font-sans selection:bg-red-600 selection:text-white relative overflow-hidden bg-[linear-gradient(to_right,#121214_1px,transparent_1px),linear-gradient(to_bottom,#121214_1px,transparent_1px)] bg-[size:4rem_4rem]">
      
      {/* Efeito Glow Vermelho de Fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-red-900/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-900/10 blur-[150px] pointer-events-none" />

      {/* NAV BAR */}
      <header className="border-b-2 border-red-700 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-xl font-black tracking-widest text-white flex items-center gap-2">
            <FaTerminal className="text-red-600" /> KAUÃ<span className="text-red-600">_</span>
          </span>
          <nav className="hidden md:flex gap-8 text-sm font-black text-red-500 uppercase tracking-wider">
            <a href="#sobre" className="hover:text-white transition-colors">// início</a>
            <a href="#skills" className="hover:text-white transition-colors">// skills</a>
            <a href="#formacao" className="hover:text-white transition-colors">// formação</a>
            <a href="#projetos" className="hover:text-white transition-colors">// interfaces</a>
          </nav>
          <a href="mailto:seu-email@provedor.com" className="px-4 py-2 border-2 border-red-600 text-red-500 font-black text-xs uppercase tracking-wider rounded hover:bg-red-600 hover:text-white transition-all">
            Contato
          </a>
        </div>
      </header>

      {/* HERO SECTION PRINCIPAL */}
      <section id="sobre" className="max-w-5xl mx-auto px-6 pt-24 pb-32 flex flex-col md:flex-row items-center gap-12 relative">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-black bg-red-950/60 text-red-400 border border-red-600 rounded-md tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            Buscando Estágio / Dev Júnior
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-red-600 leading-none">
            ENGENHARIA DE <br />
            <span className="text-white text-3xl md:text-5xl font-extrabold tracking-tight block mt-2">
              SOFTWARE UFLA
            </span>
          </h1>

          <p className="text-lg text-zinc-400 max-w-xl leading-relaxed">
            Olá! Eu sou o <span className="text-white font-bold">Kauã Winycyus</span>, graduando em Engenharia de Software na Universidade Federal de Lavras. Desenvolvo interfaces web modernas, responsivas e limpas, aplicando na prática o ecossistema <span className="text-white border-b border-red-600 pb-0.5">React, TypeScript e Tailwind CSS</span>.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projetos" 
               className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded shadow-lg shadow-red-900/30 group transition-all transform hover:-translate-y-0.5">
              Ver Meus Projetos <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/kauawinycyus-dev" target="_blank" rel="noreferrer"
               className="flex items-center gap-2 bg-zinc-950 text-zinc-400 hover:text-white border border-zinc-800 hover:border-red-600 font-bold px-6 py-4 rounded transition-all">
              <FaGithub /> GitHub Perfil
            </a>
          </div>
        </div>

        {/* CONTAINER DA SUA FOTO */}
        <div className="flex-1 w-full max-w-sm relative group">
          <div className="absolute inset-0 bg-red-600/20 rounded-lg blur-xl group-hover:bg-red-600/30 transition-all opacity-70" />
          <div className="relative bg-zinc-950 border-2 border-red-900 p-2 rounded-lg shadow-2xl transition-all group-hover:border-red-500">
            <img 
              src={fotoPerfil} 
              alt="Kauã Winycyus" 
              className="w-full h-auto object-cover rounded grayscale hover:grayscale-0 transition-all duration-500" 
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DIFERENCIAIS */}
      <section className="bg-zinc-950 border-y-2 border-red-900/50 py-12 mb-24">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-black text-white">UFLA</h3>
            <p className="text-xs uppercase font-bold tracking-widest text-red-500 mt-1">Base Acadêmica Sólida</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white">Figma</h3>
            <p className="text-xs uppercase font-bold tracking-widest text-red-500 mt-1">Fidelidade de Design</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white">Clean</h3>
            <p className="text-xs uppercase font-bold tracking-widest text-red-500 mt-1">Componentização Reutilizável</p>
          </div>
          <div>
            <h3 className="text-4xl font-black text-white">Git</h3>
            <p className="text-xs uppercase font-bold tracking-widest text-red-500 mt-1">Versionamento Organizado</p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-5xl mx-auto px-6 space-y-32 pb-24">
        
        {/* TECH SKILLS */}
        <section id="skills" className="space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-red-500 font-bold text-xs uppercase tracking-widest">
              <FaBuffer /> Tech Stack
            </div>
            <h2 className="text-3xl font-black text-white">TECNOLOGIAS E ESTUDOS</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'JavaScript', desc: 'Manipulação do DOM, lógica assíncrona e ES6+.', type: 'Linguagem' },
              { name: 'TypeScript', desc: 'Tipagem de componentes e redução de bugs em desenvolvimento.', type: 'Segurança' },
              { name: 'React.js', desc: 'Criação de Single Page Applications estruturadas com Hooks.', type: 'Frontend' },
              { name: 'Tailwind CSS', desc: 'Estilização ágil com foco em performance e layouts modernos.', type: 'Estilos' },
              { name: 'Python', desc: 'Algoritmos, scripts e lógica utilitária automatizada.', type: 'Estudos' },
              { name: 'C# / .NET', desc: 'Fundamentos de POO e desenvolvimento de APIs de backend.', type: 'Estudos' },
              { name: 'HTML5 & CSS3', desc: 'Estruturação de tags semânticas, Flexbox e Grid Layout.', type: 'Estrutura' },
              { name: 'Git & GitHub', desc: 'Gerenciamento de branches, commits limpos e documentação.', type: 'Workflow' },
            ].map((skill) => (
              <div key={skill.name} className="p-6 bg-zinc-950/60 border-2 border-red-950 rounded-lg hover:border-red-600 transition-all group flex flex-col justify-between min-h-[140px]">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-black text-white group-hover:text-red-500 transition-colors">{skill.name}</h3>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-red-950 text-red-400 rounded">{skill.type}</span>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FORMAÇÃO ACADÊMICA */}
        <section id="formacao" className="grid md:grid-cols-3 gap-12">
          <div className="space-y-3 md:sticky md:top-24 h-fit">
            <div className="text-red-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
              <FaTerminal /> Acadêmico
            </div>
            <h2 className="text-3xl font-black text-white leading-none">TRAJETÓRIA EDUCACIONAL</h2>
            <p className="text-sm text-zinc-500">Desenvolvendo forte base teórica e de engenharia para aplicar no mercado.</p>
          </div>

          <div className="md:col-span-2 border-l-2 border-red-700 space-y-12 pl-8 relative ml-4">
            <div className="relative">
              <div className="absolute -left-[39px] top-1.5 w-4 h-4 rounded-full bg-black border-4 border-red-600" />
              <span className="text-xs font-mono font-black text-red-500 bg-red-950/40 border border-red-900/50 px-2 py-0.5 rounded">UNIVERSIDADE PÚBLICA</span>
              <h3 className="text-xl font-black text-white mt-3">Bacharelado em Inovação Ciência e Tecnologia</h3>
              <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">Universidade Federal de Lavras (UFLA)</p>
              <p className="text-sm text-zinc-400 mt-2 leading-relaxed">
                Foco no aprendizado de arquitetura de software, engenharia de requisitos, estruturas de dados, metodologias ágeis e qualidade de código. 
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="border-t-2 border-red-700 bg-zinc-950 py-12 relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
          <p className="font-mono">&copy; 2026 KAUÃ WINYCYUS // ESTUDANTE DE ENGENHARIA DE SOFTWARE.</p>
          <div className="flex gap-6 text-xl text-red-500">
            <a href="https://github.com/kauawinycyus-dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><FaLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}