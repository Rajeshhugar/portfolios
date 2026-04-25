import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BarChart3,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  CloudCog,
  Code2,
  Database,
  Download,
  Mail,
  MapPin,
  MessageSquareText,
  Network,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react';
import { projects } from '../data/projects';

const skills = [
  {
    category: 'GenAI Engineering',
    icon: BrainCircuit,
    items: ['RAG', 'LangChain', 'Vector Search', 'Prompt Engineering', 'Agentic AI', 'LLM Evaluation'],
  },
  {
    category: 'ML & NLP',
    icon: Bot,
    items: ['PyTorch', 'Transformers', 'Scikit-learn', 'ABSA', 'Topic Modeling', 'Model Tuning'],
  },
  {
    category: 'Data Platforms',
    icon: Database,
    items: ['Python', 'SQL', 'PySpark', 'Pandas', 'Airflow', 'ETL Pipelines'],
  },
  {
    category: 'Cloud & Delivery',
    icon: CloudCog,
    items: ['AWS', 'Docker', 'Kubernetes', 'FastAPI', 'Flask', 'MLOps'],
  },
  {
    category: 'Analytics',
    icon: BarChart3,
    items: ['Power BI', 'Tableau', 'Plotly', 'Experiment Metrics', 'Forecasting'],
  },
  {
    category: 'Product Thinking',
    icon: BriefcaseBusiness,
    items: ['AI Roadmaps', 'Automation Discovery', 'Stakeholder Demos', 'Impact Tracking'],
  },
];

const experience = [
  {
    role: 'Senior Data Analyst, Data Science & Engineering',
    company: 'C5i.ai',
    location: 'Mumbai, India',
    period: 'Apr 2024 - Present',
    bullets: [
      'Built NLP and ML workflows that improved business decision efficiency by 25%.',
      'Led cross-functional delivery across analytics, engineering, and business teams.',
      'Standardized preprocessing and validation practices to reduce data errors by 20%.',
    ],
  },
  {
    role: 'Data Analyst, Data Science & Engineering',
    company: 'C5i.ai',
    location: 'Mumbai, India',
    period: 'Mar 2023 - Mar 2024',
    bullets: [
      'Developed forecasting and classification models with 15-20% accuracy gains.',
      'Applied sentiment analysis to customer and brand data to improve insight quality.',
      'Automated large-scale data collection, reducing manual collection effort by 25%.',
    ],
  },
];

const expertise = [
  {
    title: 'Enterprise RAG Assistants',
    description: 'Private knowledge retrieval systems with grounded answers, citation trails, and measurable evaluation loops.',
    icon: MessageSquareText,
  },
  {
    title: 'NLP Intelligence Pipelines',
    description: 'Aspect sentiment, text mining, classification, summarization, and topic discovery for large feedback streams.',
    icon: Network,
  },
  {
    title: 'Decision Automation',
    description: 'ML-backed workflows that route alerts, prioritize cases, and reduce manual operations for business teams.',
    icon: Workflow,
  },
  {
    title: 'Model Delivery',
    description: 'APIs, dashboards, model monitoring, and containerized services that make AI usable beyond notebooks.',
    icon: Code2,
  },
  {
    title: 'AI Strategy for Teams',
    description: 'Discovery, proof-of-concepts, and production roadmaps aligned to cost, risk, adoption, and business value.',
    icon: Sparkles,
  },
];

const certifications = [
  {
    title: 'ALGO TRADING AND QUANTITATIVE ANALYSIS USING PYTHON',
    provider: 'Udemy',
    issued: 'Jun 2024',
    status: 'Certificate',
  },
  {
    title: 'Full Stack Data Science Bootcamp',
    provider: 'iNeuron.ai',
    issued: 'Oct 2023',
    credentialId: 'd671d31d-c23b-4b0d-9851-bd4dfe6f77b8',
    skills: 'Machine Learning, Deep Learning, and related data science skills',
    status: 'Certificate',
  },
  {
    title: 'Data Science Methodology',
    provider: 'IBM',
    issued: 'Dec 2022',
    credentialId: 'UCDSGFWU4699',
    status: 'Certificate',
  },
  {
    title: 'Python for Data Science, AI & Development',
    provider: 'IBM',
    issued: 'Dec 2022',
    credentialId: 'Y7Q2F9APT7ST',
    skills: 'Python, Data Science, AI Development',
    status: 'Certificate',
  },
  {
    title: 'Getting Started with AWS Machine Learning',
    provider: 'Amazon Web Services',
    issued: 'Dec 2022',
    credentialId: '3V64QTDPV3ZX',
    status: 'Certificate',
  },
  {
    title: 'Data Science Fundamentals with Python and SQL Specialization',
    provider: 'IBM',
    issued: 'Dec 2022',
    credentialId: '3NV5CSKLJRAU',
    status: 'Certificate',
  },
  {
    title: 'Machine Learning with Python',
    provider: 'IBM',
    issued: 'Dec 2022',
    credentialId: 'LMAM7ULT3G7A',
    status: 'Certificate',
  },
  {
    title: 'IBM Data Science Professional Certificate',
    provider: 'Coursera',
    issued: 'Dec 2022',
    credentialId: 'EHF4UWEJS3PC',
    status: 'Professional Certificate',
  },
  {
    title: 'SQL for Data Science',
    provider: 'Coursera',
    issued: 'Feb 2023',
    credentialId: 'ASDXV4SJM46Q',
    status: 'Certificate',
  },
];

const metrics = [
  { value: '4+', label: 'Years Experience' },
  { value: '8+', label: 'Major Projects' },
];

const workflowSteps = [
  'Business question',
  'Data ingestion',
  'Embeddings + models',
  'Human-ready insights',
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xbjewroq';

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-300">{eyebrow}</p>
    <h2 className="text-3xl font-bold text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>}
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border-l border-slate-200 px-5 first:border-l-0 dark:border-white/15">
    <div className="text-3xl font-black text-slate-950 dark:text-white">{value}</div>
    <div className="mt-1 text-sm text-slate-500 dark:text-slate-300">{label}</div>
  </div>
);

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus('sending');
    setFormError('');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error('Unable to send message');
      }

      setFormStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3500);
    } catch {
      setFormStatus('error');
      setFormError('There was an error sending your message. Please try again or email me directly.');
    }
  };

  return (
    <>
      <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-white pt-24 dark:bg-slate-950">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,rgba(240,253,250,0.95),rgba(239,246,255,0.85)_45%,rgba(255,255,255,1))] dark:bg-[linear-gradient(135deg,#020617,#07121f_52%,#0f172a)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(20,184,166,0.16),transparent_32%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(20,184,166,0.16),transparent_34%)]" />

        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-teal-600 dark:text-teal-300">About Me</p>
          <h1 className="text-5xl font-black leading-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Rajesh Hugar
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-bold leading-8 text-teal-700 dark:text-teal-300 sm:text-xl">
            Senior Software Engineer (GenAI) | Machine Learning Engineer | NLP Specialist
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-2xl font-light leading-9 text-slate-700 dark:text-slate-200 sm:text-3xl">
            Building AI-powered data solutions that drive business impact
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/projects" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl">
              View Projects <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-400 hover:text-teal-700 dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:border-teal-300 dark:hover:text-teal-300">
              <Mail className="h-5 w-5" /> Contact Me
            </a>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white/85 px-6 py-8 shadow-xl shadow-slate-900/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06] sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-4xl font-black text-teal-600 dark:text-teal-300">{metric.value}</div>
                <div className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-slate-950 dark:text-white">About Me</h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-teal-600" />
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xl dark:border-white/10 dark:bg-slate-900 sm:p-12">
              <p className="mb-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                Machine Learning Engineer with 4+ years of experience specializing in NLP, deep learning, and LLM-powered architectures. Currently working as Senior Software Engineer at bizmetric, focusing on GenAI solutions. Proven track record in designing and deploying scalable ML solutions, delivering measurable improvements in efficiency, accuracy, and business outcomes through data-driven strategies.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                  <div>
                    <div className="font-semibold text-slate-950 dark:text-white">Location</div>
                    <div className="text-slate-600 dark:text-slate-400">Pune, India</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-teal-600" />
                  <div>
                    <div className="font-semibold text-slate-950 dark:text-white">Experience</div>
                    <div className="text-slate-600 dark:text-slate-400">4+ years in Data & AI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="Skills organized around real AI delivery."
            description="From retrieval and NLP modeling to APIs, cloud delivery, and dashboards that stakeholders can use."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    {React.createElement(skillGroup.icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-200">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Experience" title="Professional work focused on measurable AI outcomes." />
          <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-slate-200 dark:before:bg-white/10 sm:before:block">
            {experience.map((job) => (
              <div key={job.role} className="relative rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:ml-14">
                <div className="absolute -left-[3.25rem] top-6 hidden h-10 w-10 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-700 dark:border-teal-400/25 dark:bg-slate-950 dark:text-teal-300 sm:flex">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-950 dark:text-white">{job.role}</h3>
                    <p className="mt-1 font-semibold text-teal-700 dark:text-teal-300">{job.company} | {job.location}</p>
                  </div>
                  <span className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-600 shadow-sm dark:bg-slate-950 dark:text-slate-300">{job.period}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-slate-600 dark:text-slate-300">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-600 dark:text-teal-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects-preview" className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects that show practical GenAI and ML execution."
            description="A mix of RAG, sentiment intelligence, automation, fraud detection, and predictive modeling work."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 6).map((project) => (
              <Link key={project.id} to={`/projects/${project.id}`} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-950">
                <div className="relative h-52 overflow-hidden">
                  <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" onError={(event) => { event.currentTarget.src = '/assets/overview.png'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-md bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur dark:bg-slate-950/80 dark:text-white">{project.category}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{project.title}</h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.overview}</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-teal-700 dark:text-teal-300">
                    View case study <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 font-bold text-white transition hover:bg-teal-700 dark:bg-white dark:text-slate-950 dark:hover:bg-teal-200">
              Explore All Projects <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Expertise" title="Where I can create value." />
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04]">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-teal-600 dark:text-teal-300">AI delivery map</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950 dark:text-white">From problem framing to shipped intelligence</h3>
                </div>
                <ShieldCheck className="h-9 w-9 text-teal-600 dark:text-teal-300" />
              </div>
              <div className="space-y-3">
                {workflowSteps.map((step, index) => (
                  <div key={step} className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-slate-950">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600 text-sm font-black text-white">{index + 1}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-100">{step}</span>
                    {index < workflowSteps.length - 1 && <ArrowRight className="ml-auto h-5 w-5 text-slate-400" />}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {expertise.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    {React.createElement(item.icon, { className: 'h-6 w-6' })}
                  </div>
                  <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="bg-slate-50 py-14 dark:bg-slate-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-2xl border border-teal-200 bg-white p-7 shadow-sm dark:border-teal-400/20 dark:bg-slate-950 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white">
              <Download className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-slate-950 dark:text-white">Need the resume version?</h3>
              <p className="mt-1 text-slate-600 dark:text-slate-300">A concise profile covering GenAI, ML, NLP, delivery experience, and project outcomes.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-3 font-bold text-white transition hover:bg-teal-700">
              Download Resume <Download className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <section id="certifications" className="bg-white py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications and recognition."
            description="Verified learning across machine learning, Python, SQL, data science methodology, AWS ML, and professional recognition."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((cert) => (
              <div key={cert.title} className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                  <Award className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-950 dark:text-white">{cert.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-slate-600 dark:text-slate-300">{cert.provider}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 dark:border-teal-400/25 dark:bg-teal-400/10 dark:text-teal-200">{cert.status}</span>
                    <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600 dark:border-white/10 dark:bg-slate-950 dark:text-slate-300">Issued {cert.issued}</span>
                  </div>
                  {cert.credentialId && (
                    <p className="mt-3 break-all text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.skills && (
                    <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                      Skills: {cert.skills}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-50 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's talk about an AI system worth shipping."
            description="Share the workflow, product idea, or data problem. I will bring structure, implementation thinking, and a bias toward measurable impact."
          />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-4">
              {[
                { label: 'Email', value: 'rajeshhugar94@gmail.com', href: 'mailto:rajeshhugar94@gmail.com', icon: Mail },
                { label: 'Phone', value: '+91 7020985029', href: 'tel:+917020985029', icon: Phone },
                { label: 'Location', value: 'Pune, India', href: null, icon: MapPin },
              ].map((contact) => (
                <div key={contact.label} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-300">
                    {React.createElement(contact.icon, { className: 'h-5 w-5' })}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950 dark:text-white">{contact.label}</p>
                    {contact.href ? <a href={contact.href} className="text-sm font-semibold text-teal-700 hover:underline dark:text-teal-300">{contact.value}</a> : <p className="text-sm text-slate-600 dark:text-slate-300">{contact.value}</p>}
                  </div>
                </div>
              ))}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-slate-950">
                <p className="mb-4 font-bold text-slate-950 dark:text-white">Profiles</p>
                <div className="flex gap-3">
                  {[
                    { label: 'LinkedIn', href: 'https://linkedin.com/in/Rajeshhugar', mark: 'in' },
                    { label: 'GitHub', href: 'https://github.com/rajeshhugar', mark: 'GH' },
                    { label: 'Twitter', href: 'https://twitter.com/hugarrajesh_', mark: 'X' },
                  ].map(({ label, href, mark }) => (
                    <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-teal-700 dark:border-white/10 dark:text-slate-200 dark:hover:bg-teal-400/10 dark:hover:text-teal-300">
                      <span className="text-sm font-black">{mark}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} action={FORMSPREE_ENDPOINT} method="POST" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-950 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Full Name</span>
                  <input type="text" name="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Your name" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-white" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Email Address</span>
                  <input type="email" name="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="you@example.com" className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-white" />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Subject</span>
                <input type="text" name="subject" required value={formData.subject} onChange={(event) => setFormData({ ...formData, subject: event.target.value })} placeholder="GenAI project, automation, consulting..." className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-white" />
              </label>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Message</span>
                <textarea name="message" rows={6} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Tell me about the data, users, and outcome you want." className="w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 dark:border-white/10 dark:bg-white/[0.04] dark:text-white" />
              </label>
              <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
              <button type="submit" disabled={formStatus === 'sending'} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-teal-600 px-6 py-4 font-bold text-white transition hover:bg-teal-700 disabled:cursor-not-allowed disabled:bg-teal-400">
                {formStatus === 'sending' ? 'Sending...' : formStatus === 'sent' ? <><Check className="h-5 w-5" /> Message Sent</> : <><Send className="h-5 w-5" /> Send Message</>}
              </button>
              {formStatus === 'sent' && <p className="mt-4 text-center font-semibold text-teal-700 dark:text-teal-300">Thank you. I will get back to you soon.</p>}
              {formStatus === 'error' && <p className="mt-4 text-center font-semibold text-red-600 dark:text-red-300">{formError}</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
