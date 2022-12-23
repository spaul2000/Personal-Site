const jobs = [
    {
        company: 'Stanford AI Lab',
        role: 'Climate AI Bootcamp',
        start: 'September 2022',
        end: 'Present',
        description: [
            "Working in Andrew Ng's Climate AI lab at Stanford on a deep learning project to map transportation infrastructure (sidewalks and bus lanes) from remote-sensed aerial imagery",
            "Developed a Spatio-temporal model to generate high-resolution satellite imagery from a time series of low-resolution imagery and a single high-resolution image",
            "Trained a segmentation model on a dataset of 180k satellite images to predict the locations of sidewalks and bike lanes, with the goal of deploying the model to the entire US to map transportation infrastructure from 2010-2022",
            "Utilized PyTorch, TensorBoard, conda, numpy, mathplotlib, Jupyter Notebook for preprocessing, package managment, model training, and evaluation"
        ]
    },
    {
        company: 'AWS',
        role: 'SDE Intern',
        start: 'June 2022',
        end: 'September 2022',
        description: [
            "Developed a List Certificates API with filtering capabilities based on X.509 certificate extensions as part of the Private Certificate Authorities team in AWS's cryptography division",
            "Utilized various AWS services, including CloudFormation, DynamoDB, Kinesis, Lambda, and API Gateway, to build and implement the API",
            "Led the end-to-end migration of new customer certificate data from DynamoDB to OpenSearch to improve scan performance at scale",
            "Designed and implemented the API syntax, including making calls to OpenSearch using a REST client"
        ]
    },
    {
        company: 'Photo Butler',
        role: 'Machine Learning Intern',
        start: 'June 2021',
        end: 'September 2021',
        description: [
            "Conducted research on Facial Expression Recognition models to assist in the development of an emotion classifier",
            "Utilized AWS, Google Colab, PyTorch, and TensorFlow to train and test various model architectures, resulting in a high-performing model",
            "Started by reviewing relevant literature on successful Facial Expression Recognition models and used this knowledge to build and deploy the model using Docker"
        ]
    },
    {
        company: 'Stanford GPS Lab',
        role: 'Research Assistant',
        start: 'December 2020',
        end: 'June 2021',
        description: [
            'Developed a message authentication extension for GPS simulation in MATLAB using cryptographic techniques, which served as a proof of concept for the FAA',
            'Collaborated with the FAA, U.S. Air Force, NASA, and the Department of Transportation at the GPS Research Lab to enhance the Global Positioning System (GPS) and other Global Navigation Satellite Systems (GNSS)'
        ]
    },
    {
        company: 'Chegg Inc.',
        role: 'Corporate Strategy & Development Intern',
        start: 'June 2020',
        end: 'September 2020',
        description: [
            'Conducted a competitive analysis of major tech companies entering the EdTech industry for Chegg, a leading online textbook rental and tutoring company',
            'Presented strategic growth vectors for consideration at an offsite board meeting and collaborated with product and engineering teams to assess feasibility',
            "Assisted in evaluating potential M&A decisions for the company"
        ]
    },

]

export default jobs;