export const projects = [
    {
        id: 1,
        title: "Review-Based Product Assessment",
        category: "GenAI & NLP",
        subtitle: "Leveraging GenAI and Roberta for aspect-based sentiment analysis.",
        overview: "This project focuses on analyzing large-scale customer reviews to extract actionable insights and identify product strengths and weaknesses through advanced NLP techniques.",
        problem: "The challenge was to accurately classify sentiment and distinct aspects from unstructured text data, which is often noisy and domain-specific, to understand real-time product performance.",
        techStack: ["Roberta Model", "GenAI Integration", "Python", "PyTorch", "Transformers", "Flask"],
        keyAchievements: [
            { value: "84%", label: "Classification Accuracy" },
            { value: "20%", label: "Faster Insight Extraction" },
            { value: "1M+", label: "Scalable to Reviews" }
        ],
        heroImage: "/assets/project1.png",
        systemArchitecture: [
            { id: 1, title: "Raw Review", subtitle: "(Data Source)" },
            { id: 2, title: "Data Preprocessing", subtitle: "(Cleaning, Tokenization)" },
            { id: 3, title: "Roberta Model", subtitle: "(Sentiment & Aspect)" },
            { id: 4, title: "GenAI Engine", subtitle: "(Summarization)" },
            { id: 5, title: "Dashboard", subtitle: "(Visualization)" },
        ],
        links: { github: "#", demo: "#" }
    },
    {
        id: 2,
        title: "Automated Alerts using Brand Watch API",
        category: "Automation",
        subtitle: "Real-time alerts via Brand Watch API.",
        overview: "Developed an automated reporting pipeline integrated with the Brand Watch API to fetch real-time data, process it, and trigger immediate alerts.",
        problem: "Manual monitoring of brand mentions across channels was time-consuming and inefficient, leading to delayed responses and missed opportunities.",
        techStack: ["Python", "Pandas", "Brand Watch API", "Flask", "Docker", "AWS", "Slack"],
        keyAchievements: [
            { value: "40%", label: "Faster Response Time" },
            { value: "50%", label: "Reduction in Manual Effort" },
            { value: "Brand", label: "Improved Perception" }
        ],
        heroImage: "/assets/project2.png",
        links: { github: "#", demo: "#" }
    },
    {
        id: 3,
        title: "Aspect Based Sentiment Analysis (ABSA)",
        category: "NLP & Machine Learning",
        subtitle: "Classifying sentiments for specific product aspects.",
        overview: "Analyzing customer feedback from Play Store reviews using advanced machine learning techniques to understand nuanced customer sentiment towards specific app features.",
        problem: "Need to understand sentiment towards specific app features to better address customer needs and requirements.",
        techStack: ["Python", "Scikit-learn", "XGBoost", "Word2Vec", "GloVe", "Selenium"],
        keyAchievements: [
            { value: "87%", label: "Model Accuracy" },
            { value: "60%", label: "Reduced Analysis Time" },
            { value: "5", label: "Key Aspects Identified" }
        ],
        heroImage: "/assets/project3.png",
        systemArchitecture: [
            { id: 1, title: "Play Store Reviews", subtitle: "Scraping via Selenium" },
            { id: 2, title: "Text Preprocessing", subtitle: "Glove & Word2Vec" },
            { id: 3, title: "XGBoost Classifier", subtitle: "Aspect Prediction" },
            { id: 4, title: "Insight Generation", subtitle: "Aggregated Metrics" }
        ],
        links: { github: "#", demo: "#" }
    },
    {
        id: 4,
        title: "Text Mining and Sentiment Assessment",
        category: "Text Mining",
        subtitle: "Quantifying Discussions & Analyzing Sentiments.",
        overview: "This project aimed to quantify online discussions and analyze sentiment trends across various platforms. By aggregating data from social media, news outlets, and forums.",
        problem: "To understand public opinion shifts and identify key topics of discourse, moving beyond simple volume metrics to gauge underlying sentiment.",
        techStack: ["NLP", "Sentiment Analysis", "LDA Topic Modeling", "Data Visualization"],
        keyAchievements: [
            { value: "Valuable", label: "Data-Driven Insights" },
            { value: "High", label: "Trend Pattern Recognition" }
        ],
        heroImage: "/assets/project4.png",
        links: { github: "#", demo: "#" }
    },
    {
        id: 5,
        title: "Cross Sell Prediction",
        category: "Predictive Modeling",
        subtitle: "Predicting High-Potential Leads for Campaigns.",
        overview: "The objective was to identify existing customers with a high probability of purchasing an additional product, specifically a premium credit card.",
        problem: "To optimize marketing efforts and increase cross-sell conversion rates by targeting the right customers, reducing overall CAC.",
        techStack: ["Python", "Scikit-learn", "Random Forest", "Gradient Boosting", "SMOTE", "SQL", "Tableau"],
        keyAchievements: [
            { value: "60%", label: "Conversion Rate Increase" },
            { value: "Reduced", label: "Marketing Spend" }
        ],
        heroImage: "/assets/project5.png",
        links: { github: "#", demo: "#" }
    },
    {
        id: 6,
        title: "Product Review Analysis",
        category: "Customer Analytics",
        subtitle: "Model Accuracy 88% | CSAT Increase +15%",
        overview: "Collaborated with the product team to develop an automated system for analyzing thousands of customer reviews to classify sentiment and extract actionable key phrases.",
        problem: "Manual analysis of reviews was time-consuming and unable to keep up with the volume of feedback.",
        techStack: ["Python", "XGBoost", "Scikit-learn", "NLTK", "Pandas", "Tableau"],
        keyAchievements: [
            { value: "88%", label: "Model Accuracy" },
            { value: "+15%", label: "CSAT Score Increase" },
            { value: "+4.5%", label: "Sales Increase" }
        ],
        heroImage: "/assets/project6.png",
        links: { github: "#", demo: "#" }
    },
    {
        id: 7,
        title: "Auto Claims Management System",
        category: "Fraud Detection",
        subtitle: "Model Accuracy 93% | Faster Settlement 40%",
        overview: "An intelligent system to detect fraudulent claims and streamline the settlement process using machine learning.",
        problem: "The auto insurance industry faces significant financial losses due to fraudulent claims and inefficient manual review processes.",
        techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Docker"],
        keyAchievements: [
            { value: "93%", label: "Model Accuracy" },
            { value: "40%", label: "Faster Settlement" },
            { value: "25%", label: "Reduced Expenditure" }
        ],
        heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        links: { github: "#", demo: "#" }
    },
    {
        id: 8,
        title: "Agentic AI for News Classification",
        category: "GenAI & RAG",
        subtitle: "Efficiency +30% | Accuracy 95%",
        overview: "A scalable RAG system designed to ingest, process, and classify high-volume news streams in real-time using Generative AI.",
        problem: "Manual tracking of relevant news across numerous sources is time-consuming and error-prone.",
        techStack: ["LangChain", "OpenAI (GPT-4)", "Hugging Face", "Pinecone", "FastAPI", "Streamlit"],
        keyAchievements: [
            { value: "30%", label: "Efficiency Improvement" },
            { value: "95%", label: "Classification Accuracy" },
            { value: "<5 min", label: "Alert Latency" }
        ],
        heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
        links: { github: "#", demo: "#" }
    }
];
