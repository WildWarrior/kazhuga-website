import { BiBrain } from 'react-icons/bi';
import { RiRobot2Line, RiAiGenerate } from 'react-icons/ri';
import { MdAutoGraph } from 'react-icons/md';
import { TbLanguage } from 'react-icons/tb';
import { GiArtificialIntelligence } from 'react-icons/gi';

const AdvancedAI = () => {
  return (
    <section id='advanced-ai' className='services'>
      <div className='container'>
        <h2>Advanced AI Solutions</h2>
        <div className='grid'>
          <div className='flex-row'>
            <BiBrain
              size={64}
              className='services-icon pink-text'
            />
            <div className='right'>
              <h3>Machine Learning Solutions</h3>
              <p>
                Custom ML models for predictive analytics, pattern recognition, and 
                automated decision-making. Expertise in supervised, unsupervised, and 
                reinforcement learning using TensorFlow, PyTorch, and scikit-learn.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <RiRobot2Line
              size={64}
              className='services-icon yellow-text'
            />
            <div className='right'>
              <h3>Deep Learning & Neural Networks</h3>
              <p>
                Advanced neural network architectures for complex pattern recognition, 
                computer vision, and natural language processing. Implementation of 
                CNNs, RNNs, and Transformer models for enterprise applications.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <TbLanguage
              size={64}
              className='services-icon teal-text'
            />
            <div className='right'>
              <h3>Natural Language Processing</h3>
              <p>
                Enterprise NLP solutions including sentiment analysis, text classification, 
                named entity recognition, and language generation. Integration of 
                latest LLM technologies like GPT and BERT models.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <MdAutoGraph
              size={64}
              className='services-icon green-text'
            />
            <div className='right'>
              <h3>AI-Powered Analytics</h3>
              <p>
                Intelligent analytics solutions using AI for anomaly detection, 
                forecasting, and optimization. Advanced algorithms for real-time 
                data processing and automated insights generation.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <RiAiGenerate
              size={64}
              className='services-icon limeGreen-text'
            />
            <div className='right'>
              <h3>Generative AI Solutions</h3>
              <p>
                Implementation of generative AI models for content creation, 
                design automation, and synthetic data generation. Custom solutions 
                using GANs and other generative models.
              </p>
            </div>
          </div>

          <div className='flex-row'>
            <GiArtificialIntelligence
              size={64}
              className='services-icon blue-text'
            />
            <div className='right'>
              <h3>AI Integration & MLOps</h3>
              <p>
                End-to-end AI deployment pipelines, model monitoring, and 
                maintenance. MLOps solutions for automated training, testing, 
                and deployment of AI models at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAI; 