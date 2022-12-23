const projects = [
    {
        title: 'Longitudinal Mapping of Transportation Infrastructure',
        imagePath: '/Images/seg.png',
        description: "Building a spatio-temporal model to enhance satellite imagery and a segmentation model to map transportation infrastructure over time. This would provide valuable data for assessing the impact of transportation policy on emissions.",
        date: 'Present',
        link: '/Images/transprez.pdf',
    },
    {
        title: 'Crypto DEX',
        imagePath: '/Images/crypto.png',
        description: 'I made a web client and two solidity contracts to build a basic DEX modeled off of Uniswap V1. The first contract was for minting my own ERC20 token ($SPAUL after my nickname) and the second was an exchange contract to swap it with ETH. The exchange consists of two participants: liquidity providers (LP) and traders.',
        date: 'December 2022',
        link: '#/',
    },
    {
        title: 'Graphics Project',
        imagePath: '/Images/graphicsproj.png',
        description: 'I made this scene with my friend Matt Frank as our final project for a computer graphics class using blender. We both share a love of music and wanted to create a cool looking room with a vinyl player and some records. This was my first expeirence using blender - I learned a ton about texturing, lighting and modeling objects building this.',
        date: 'December 2022',
        link: '#/',
    },
    {
        title: 'SolarX: Solar Panel Segmentation and Classification',
        imagePath: '/Images/solarX.png',
        description: 'Rodri Neito, Ethan Hellman and I trained a Segmentation (Unet) and Classification (ResNet-34) model to identify and segment solar panels from remotely sensed imagery. Motivated by the fight against climate change, we wanted to work on a project related to renewable energy',
        date: 'May 2022',
        link: 'http://cs231n.stanford.edu/reports/2022/pdfs/100.pdf',
    },
    {
        title: 'TESLA authentication scheme implementation for SBAS in MATLAB',
        imagePath: '/Images/tesla.png',
        description: 'I worked with an Aero/Astro PhD to implement a cryptographic authentication scheme for GPS signals in MATLAB as a proof of concept for the FAA. Hopefully this work serves as a starting point for a new system to prevent spoofing of SBAS signals.',
        date: 'May 2021',
        link: '/Images/tesla.pdf',
    }
]

export default projects;