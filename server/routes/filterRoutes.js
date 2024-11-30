import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const filters = {
    expertise: [
      'Commodities Trading and Risk Management',
      'Data Engineering',
      'GenAI',
      'Artificial Intelligence',
      'Machine Learning'
    ],
    technology: [
      'Openlink Endur',
      'Openlink Findur',
      'Allegro',
      'Aspect',
      'Align',
      'Spark',
      'Kubernetes'
    ]
  };
  res.json(filters);
});

export default router; 