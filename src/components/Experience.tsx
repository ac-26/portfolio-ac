import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Celebal Technologies",
      period: "May 2025 - Aug 2025",
      type: "Internship",
      description: "During the data science internship at Celebal Technologies I worked on the full ML pipeline and gained hands-on experience in machine learning, NLP, and model deployment. I developed a telecom customer churn prediction model using end-to-end data processing, feature engineering, and model optimization. Additionally, I also built a RAG-based QnA chatbot for loan prediction using semantic search with embeddings and language models, fine-tuned on domain-specific data for accurate responses.",
      skills: ["Feature Engineering", "Data Preprocessing", "Machine Learning", "NLP", "Model Deployment"],
      highlights: ["88% ROC-AUC", "1000+ customer records", "Production deployment"]
    },
    {
      title: "Data Science Intern",
      company: "Bosson Catalyst Ventures LLP",
      period: "May 2025 - Aug 2025",
      type: "Internship",
      description: "Developed a smart, enterprise-grade content tagging system using a hybrid NLP approach. Combined POS tagging, Named Entity Recognition (NER), and noun chunking to extract high-quality candidate keywords. Leveraged Sentence Transformers to compute semantic similarity between extracted keywords and content context, enabling accurate and dynamic tag generation. Delivered scalable, real-time performance suitable for production environments.",
      skills: ["Natural Language PRocessing (NLP)", "NER" , 'Noun Chunks', "POS Tagging", "Data Preprocessing", "Machine Learning", "Sentance Transformer" , "Model Deployment"],
      highlights: ["Key Word Extraction", "Enterprise Grade AI Tool", "Production deployment"]
    },
    {
      title: "Project Management Intern", 
      company: "Grape Events",
      period: "Aug 2024 - Nov 2024",
      type: "Internship",
      description: "Completed a project management internship at Grape Events, where I contributed to planning, coordinating, and executing corporate and social events. Gained practical experience in vendor management, budgeting, client communication, and on-ground coordination. Worked closely with cross-functional teams to ensure timely delivery and smooth execution of event operations, enhancing my skills in time management, stakeholder handling, and agile project execution.",
      skills: ["Client Relations", "Vendor Management", "Business Analytics", "Project Management", "Data Visualization"],
      highlights: ["83% prediction accuracy", "Tableau dashboard", "Vendor management"]
    },
    {
      title: "Volunteer",
      company: "Smart India Hackathon", 
      period: "Aug 2024 - Sep 2024",
      type: "Volunteer",
      description: "Volunteered as part of the organizing team for Smart India Hackathon at my college, assisting in event coordination, team management, and logistics. Supported participants and judges throughout the event, ensuring smooth communication and timely execution. Gained valuable experience in teamwork, problem-solving, and handling large-scale tech events.",
      skills: ["Data Project Co-ordination", "Team Work", "Communication", "Problem Solving"],
      highlights: ["Crowd Handling", "Project Leadership"]
    },
    {
      title: "Internshala Student Partner",
      company: "Internshala",
      period: "Jun 2024 - Aug 2024", 
      type: "Full-time",
      description: "Team Leadership and Project Management role focusing on student engagement and program development.",
      skills: ["Team Leadership", "Project Management", "Student Engagement", "Program Development"],
      highlights: ["Team leadership", "Student engagement", "Program management"]
    },
    {
      title: "Executive Committee Member",
      company: "MUJHackX",
      period: "Apr 2024 - Aug 2024",
      type: "Leadership",
      description: "Teamwork, Leadership and project management experience in organizing hackathon events and technical competitions.",
      skills: ["Teamwork", "Leadership", "Project Management", "Event Organization"],
      highlights: ["Event organization", "Technical competitions", "Leadership role"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship": return "bg-accent/10 text-accent";
      case "Full-time": return "bg-primary/10 text-primary";
      case "Volunteer": return "bg-secondary/50 text-secondary-foreground";
      case "Leadership": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-xl text-muted-foreground mt-6">
              Building expertise through hands-on experience and meaningful contributions
            </p>
          </div>

          {/* Experience timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={`${exp.company}-${exp.title}`}
                className="shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in border-l-4 border-l-accent"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Badge className={getTypeColor(exp.type)}>
                        {exp.type}
                      </Badge>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </CardDescription>

                  {/* Key highlights */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <Badge 
                          key={highlight}
                          variant="secondary"
                          className="text-xs bg-accent/10 text-accent border-accent/20"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Skills & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
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
        </div>
      </div>
    </section>
  );
};

export default Experience;