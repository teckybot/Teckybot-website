import linked from '../data/aboutus/linked.png'
import img1 from '../data/aboutus/team/Chief Operating Officer_teckybot.jpg'
import img2 from '../data/aboutus/team/HR Manager_teckybot.jpg'
import img3 from '../data/aboutus/team/HR Associate_teckybot.jpg'
import img4 from '../data/aboutus/team/Senior Developer (ES)_teckybot.jpg'
import img5 from '../data/aboutus/team/Senior Developer (Robotics)_teckybot.jpg'
import img6 from '../data/aboutus/team/Senior Developer (3D Printing)_teckybot.jpg'
import img7 from '../data/aboutus/team/Senior Developer (AI)_teckybot.jpg'
import img8 from '../data/aboutus/team/Business Dev. Manager__teckybot.jpg'
import img9 from '../data/aboutus/team/Digital Marketing Executive_teckybot.jpg'
import img10 from '../data/aboutus/team/Business Development manager_teckybot.jpg'
import img11 from '../data/aboutus/team/Technical Trainer_teckybot.jpg'
import img12 from '../data/aboutus/team/Technical Trainer2_teckybot.jpg'
import img13 from '../data/aboutus/team/Technical Trainer1_teckybot.png'
import img14 from '../data/aboutus/team/Full Stack Developer_teckybot.jpg'
import img15 from '../data/aboutus/team/Supply Chain Manage_teckybotr.jpg'

const teamMembers = [
    {
        name: 'V. L. PREM KUMAR',
        position: 'Chief Operating Officer',
        imageUrl: img1,
        linkedInUrl: 'https://www.linkedin.com/in/premkumarvanamu/',
    },
    {
        name: 'K. SAMPURNA',
        position: 'HR Manager',
        imageUrl: img2,
        linkedInUrl: 'https://www.linkedin.com/in/sampurna-kesireddy-843406160/',
     },
    {
        name: 'M. SRIPOUSHYA',
        position: 'HR Associate',
        imageUrl: img3,
        linkedInUrl: 'https://www.linkedin.com/in/sripoushya/',
    },
    {
        name: 'M. REVATIPATI',
        position: 'Senior Developer (ES)',
        imageUrl: img4,
        linkedInUrl: 'https://www.linkedin.com/in/revatipati-m-48b50b200/',
    },
    {
        name: 'VIJAY PATRO',
        position: 'Senior Developer (Robotics)',
        imageUrl: img5,
        linkedInUrl: 'https://www.linkedin.com/in/vijay-patro-38484112b/',
    },
    {
        name: 'A. RAJESH',
        position: 'Senior Developer (3D Printing)',
        imageUrl: img6,
        linkedInUrl: 'https://www.linkedin.com/in/arjilli-rajesh-1632781b2/',
    },
    {
        name: 'B. BHARGAVI',
        position: 'Senior Developer (AI)',
        imageUrl: img7,
        linkedInUrl: 'https://www.linkedin.com/in/bandaru-bhargavi-3b1340217/',
    },
    {
        name: 'B. DURGA PRASAD ',
        position: 'Business Dev. Manager',
        imageUrl: img8,
        linkedInUrl: 'https://www.linkedin.com/in/durgaprasad-bonagiri-684408172/',
    },
    {
        name: 'S. DEVI KIRAN',
        position: 'Digital Marketing Executive',
        imageUrl: img9,
        linkedInUrl: 'https://www.linkedin.com/in/devikiransanapala/',
    },
    {
        name: 'T. KARTHEEK',
        position: 'Business Development Manager',
        imageUrl: img10,
        linkedInUrl: 'https://www.linkedin.com/in/kartheek-thalluru-885b90179/',
    },
    {
        name: 'P. NARESH',
        position: 'Technical Trainer',
        imageUrl: img11,
        linkedInUrl: 'https://www.linkedin.com/in/p-naresh-09a5612a9/',
    },
    {
        name: 'C. Sai Charan',
        position: 'Technical Trainer',
        imageUrl: img12,
        linkedInUrl: 'https://www.linkedin.com/in/sai-charan-839231320/',
    },
    {
        name: 'P. Venkat Charan',
        position: 'Technical Trainer',
        imageUrl: img13,
        linkedInUrl: 'https://www.linkedin.com/in/venkatcharan21/',
    },
    {
        name: 'B. K. S. S. S MALLIK',
        position: 'Full Stack Developer',
        imageUrl: img14,
        linkedInUrl: 'https://www.linkedin.com/in/bksssmallik/',
    },
    
    {
        name: 'N. DINESH',
        position: 'Supply Chain Manager',
        imageUrl: img15,
        linkedInUrl: '',
    },
    
];

const TeamSection = () => {
    return (
        
        <div className="flex flex-wrap justify-center gap-16 lg:gap-32 p-24 pt-12">
            
            {teamMembers.map((member, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center w-[200px] sm:w-[250px] text-center"
                >
                    <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px]">
                        <img
                            src={member.imageUrl}
                            alt={member.name}
                            className="rounded-[20%] w-full h-full object-cover"
                        />

                    </div>
                    <div className='flex gap-4 items-center mt-4 '>
                        <h2 className="font-semibold text-lg sm:text-xl">{member.name}</h2>
                        <a
                            href={member.linkedInUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linked} alt='linked in' className='w-6 h-6' />
                        </a>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 sm:text-base">{member.position}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamSection;

