import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const About = () => {
  const skills = [
    "Data Structures and Algorithms (DSA)" , 'Problem Solving' ,"Data Science", "Python", "Machine Learning", "Natural Language Processing (NLP)", "Data Analysis", "Deep Learning",
    "Scikit-Learn", "TensorFlow", "PyTorch", 'Exploratory Data Analysis (EDA)',"Data Cleaning" ,"SQL", "Data Visualization",
    "Feature Engineering", "Model Deployment", "Model Evaluation" , "Statistical Analysis"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio */}
            <div className="space-y-6 animate-fade-in">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-semibold">Data Science enthusiast</span> who 
                loves exploring datasets and uncovering insights that drive decisions. Currently pursuing 
                <span className="text-foreground font-semibold"> B.Tech Computer Science and Engineering at Manipal University Jaipur.</span>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in <span className="text-foreground font-semibold">ML, NLP, and predictive modeling</span> through 
                internships at <span className="text-foreground font-semibold">Celebal Technologies</span> and <span className="text-foreground font-semibold">Boson Catalyst Ventures</span>, I'm passionate about 
                problem-solving and finding data-driven solutions to complex challenges.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                What excites me most is taking complex challenges and finding data-driven solutions. 
                Always learning, always exploring what the data has to say next.
              </p>
            </div>

            {/* Quick facts */}
            <div className="space-y-6">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Education</h3>
                      <p className="text-muted-foreground">B.Tech CSE, Manipal University Jaipur</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Briefcase className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Current Role</h3>
                      <p className="text-muted-foreground">Data Science Intern</p>
                      <p className="text-sm text-muted-foreground">Celebal Technologies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/10 rounded-full">
                      <Award className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-foreground mb-2">Certifications</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                      <li>
                        <a href="https://drive.google.com/file/d/1xcH_qwWiYkgfhYSi7CAXCZK615l3rDAP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          McKinsey Forward Program
                        </a>
                      </li>
                      <li>
                        <a href="https://learn.microsoft.com/api/credentials/share/en-us/ArnavChopra-0356/8F34B1F65C32CA?sharingId=AB1E370207397B1F" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Microsoft Azure AI Fundamentals
                        </a>
                      </li>
                      <li>
                        <a href="https://learn.microsoft.com/api/credentials/share/en-us/ArnavChopra-0356/33149E07021AADBE?sharingId=AB1E370207397B1F" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Microsoft Azure Fundamentals
                        </a>
                      </li>
                      <li>
                        <a href="https://verify.eicta.digitalcredentials.in/115dd492-497b-439c-b771-d6b32d95ead4?utm_source=direct_link&utm_medium=portal" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Industrial Level Training in Machine Learning from IIT Kanpur
                        </a>
                      </li>
                      <li>
                        <a href="https://cognitiveclass.ai/courses/enterprise-grade-ai" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Getting Started with Enterprise Grade AI by IBM
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/learning/certificates/5b13e7acca4230ee25cb81e9875d8be9c4f2f711f2139b76097a35792fc4eb42?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BBZ8Pn0v6SgWmfI0RpUBFPA%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Business Analysis Foundations by LinkedIn
                        </a>
                      </li>
                      <li>
                        <a href="https://education.oracle.com/database-programming-with-sql" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Database Programming in SQL by Oracle
                        </a>
                      </li>
                      <li>
                        <a href="https://www.credly.com/badges/6d0c8ff4-668a-4285-a29a-1bd5c4d390f6/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Python for Data Science and AI by IBM (Coursera)
                        </a>
                      </li>
                      <li>
                        <a href="https://www.credly.com/badges/79c020cc-146c-45d3-9f5e-365afe6429cb/public_url" target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Tools for Data Science
                        </a>
                      </li>
                    </ul>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-16 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 text-sm border-accent/20 hover:border-accent hover:bg-accent/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;