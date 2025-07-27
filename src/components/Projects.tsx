import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, MessageSquare, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Automated Content Tagger & Keyword Extraction System",
      description: "Developed a smart keyword extraction and content tagging system using hybrid NLP approach. Uses POS tagging, Named Entity Recognition (NER), and noun chunking to extract candidate keywords. Applied Sentence Transformers to compute semantic similarity between keywords and main content.",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Natural Language Processing", "NLP", "Problem Solving", "Python", "Transformers"],
      metrics: ["88% accuracy", "Semantic similarity", "Interactive demo"],
      links: {
        demo: "https://huggingface.co/spaces/ac2607/content-tagger",
        github: "https://github.com/ac-26/Automated-Content-Tagging-Provision"
      }
    },
    {
      title: "RAG based Q&A Chatbot for Loan Approval", 
      description: "Developed an advanced Retrieval-Augmented Generation (RAG) chatbot for answering queries related to loan approval. Integrates Pinecone vector database for fast retrieval of relevant documents, combined with Grok LLM for generating context-aware responses.",
      icon: <MessageSquare className="h-6 w-6" />,
      skills: ["Retrieval-Augmented Generation", "RAG", "Generative AI", "Transformers", "Vector Database"],
      metrics: ["Real-time support", "Context-aware responses", "Production deployment"],
      links: {
        demo: "https://github.com/ac-26/CSI-25/blob/main/week8_assignment.ipynb",
        github: "https://github.com/ac-26/CSI-25/blob/main/week8_assignment.ipynb"
      }
    },
    {
      title: "Telecom Customer Churn Prediction",
      description: "Built a robust churn prediction model for a telecom company using end-to-end machine learning practices. Engineered new features from raw data, addressed class imbalance using SMOTE, and applied cross-validation with hyperparameter tuning for optimal performance.",
      icon: <TrendingUp className="h-6 w-6" />,
      skills: ["Machine Learning", "Feature Engineering", "Scikit-Learn", "Data Cleaning", "EDA", "Data Analysis"],
      metrics: ["79.5% Accuracy", "72.5% Recall", "84.2% ROC-AUC"],
      links: {
        demo: "https://arnavchopra-ct-csi-ds-4264-telecom-churn.streamlit.app/",
        github: "https://github.com/ac-26/Telecom-Customer-Churn-Prediction"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Showcasing my passion for data science through real-world applications and innovative solutions
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="group shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      {project.links.demo && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => window.open(project.links.demo, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                      {project.links.github && (
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          onClick={() => window.open(project.links.github, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>

                  {/* Metrics */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Results</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.metrics.map((metric) => (
                        <Badge 
                          key={metric}
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent-foreground border-accent/20"
                        >
                          {metric}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="outline"
                          className="text-xs hover:bg-accent/10 hover:border-accent transition-colors duration-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="text-center mt-16 animate-fade-in">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/20 hover:border-accent hover:bg-accent/10"
              onClick={() => window.open('https://github.com/ac-26?tab=repositories', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;