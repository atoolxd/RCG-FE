const data = [
    {
      img: 'market.svg',
      title: 'Market research',
      text: 'We are at your service for marketing and delivering your requirements.',
    },
    {
      img: 'consulting.svg',
      title: 'Strategic Advisory',
      text: 'Consulting with us today, results your dream project to come to life.',
    },
    {
      img: 'cognity.svg',
      title: 'Cognitive Solution',
      text: 'One stop solution for all your tech needs including websites and mobile apps.',
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(data);
  }