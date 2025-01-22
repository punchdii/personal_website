import PortfolioItem from './block';

export default function PortfolioPage() {
  const portfolioData = [
    {
      imageSrc: '/gsrCover.png',
      title: 'GSR Wristband',
      description: 'During my internship at the Neuromechanics and Assistive Robotics Lab at the University of Waterloo, I conducted GSR (galvanic skin response) signal processing and analysis to study stress responses and evaluate exoskeleton controller performance. Using a wrist-worn device with GSR electrodes and an IMU, I designed an experiment where participants watched stress-inducing videos, pre-labeled for stress events, while GSR data was recorded. I applied the CVXEDA algorithm to separate tonic and phasic components from raw signals, enabling the identification of stress peaks hidden in slow-changing trends. I developed and tested machine learning models(KNN and Naive Bayes) to classify three- second GSR windows as stressed or non - stressed, achieving reliable classification accuracy for binary stress states.For the second phase, I designed treadmill experiments to evaluate the correlation between GSR signals and exoskeleton controller performance under three conditions: time - based, gait - phase - based, and adaptive feedforward control.I segmented multimodal data—including GSR, IMU, ground reaction forces, and EMG—and extracted key metrics like peak frequency, mean phasic response, and variance. Statistical tests revealed no significant differences in stress metrics between controllers(e.g., Friedman test: (𝑝 = 0.0871), but trends suggested potential correlations between stress and user preferences(𝜏 = 0.299, 𝑝 = 0.132).I streamlined data workflows, performed visualizations with Matplotlib, and provided detailed insights into controller performance and stress - response dynamics.This project showcased my ability to design experiments, analyze complex datasets, and develop data - driven solutions for human - centered robotics.',
    },
    {
      imageSrc: '/botCover.png',
      title: 'FIrefighter robot',
      description: 'Maze navigating pic18 controller firefighter bot. DIY, handmade PCBs. Navigation was done using two infared sensors and real time data was displayed on LCD for debugging  ',
    },
    {
      imageSrc: '/webCover.png',
      title: 'This Website',
      description: 'A nice interactive website built with next.js and deployed on vercel',
    },
    {
      imageSrc: '/memoCover.png',
      title: 'Memorease',
      description: 'Helped develop an application to support individuals with dementia by transforming user-inputted memory journals into an interactive visual network of interpersonal relationships, similar to Obsidian graph view.The application, built with Next.js and deployed on Vercel, used ChatGPT to analyze journal entries and extract the interpersonal relationship, representing people as nodes and their connections as lines in a graph.By using vis.js for visualization and Neo4j Aura graph database for data storage, users could interact with the graph to explore relationships, click on connections to access GPT- generated summaries of shared stories, and hear the summaries narrated through OpenAIs text - to - speech(TTS) functionality.User authentication was managed with Auth0, ensuring secure access to journal pages, and journal data, including text and images, was seamlessly processed by the OpenAI API to enable relationship mapping and provide meaningful insights'
    },
    {
      imageSrc: '/rocketCover.png',
      title: 'Rocketry',
      description: 'Working in the firmware team, developing an UART interface for the canards processor board(STM32)',
    },
  ];

  return (
    <section className="portfolio-page">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.map((item, index) => (
          <PortfolioItem
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}