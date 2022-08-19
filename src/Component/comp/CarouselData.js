import First from '../Assets/img/banner_dashboard.jpg';
import Second from '../Assets/img/banner_denver.jpg';
import Third from '../Assets/img/banner_old_denver.jpg';
// icon import
import icon1 from '../Assets/img/icon1.png'
import icon2 from '../Assets/img/icon2.png'
import icon3 from '../Assets/img/Icon3.png'

//company logo photos
import logo1 from '../Assets/img/a.png'
import logo2 from '../Assets/img/b.png'
import logo3 from '../Assets/img/c.png'
import logo4 from '../Assets/img/d.png'
import logo5 from '../Assets/img/e.png'


const CD = [
    {
        title: "EXPERIENCE MATTERS",
        description: "With over 15,000 service calls under our belt, we've probably seen it before.",
        urls: First
    }, {
        title: "OLD SCHOOL DETAIL. NEW SCHOOL SKILLS",
        description: " Our solutions leverage cutting-edge designs and technology.",
        urls: Second
    }, {
        title: " WE'RE NOT NEW IN TOWN",
        description: " We've worked with over 600 companies in Denver and counting",
        urls: Third
    }
];

export const section2Data = [
    {
        url: icon1,
        title: "EXPERT IT SUPPORT & IT SERVICES",
        body: "Choosing the right provider of IT services in Denver can be challenging and conf" +
                "using. With a vast number of companies offering IT products and services, it is " +
                "hard to know which one is the best fit for your company. The cost to continuousl" +
                "y switch IT companies can become expensive when you consider their time to get t" +
                "o know your network. Our clients utilize our services for many years.",
        link:"window.location.href='www.google.com' "

    }, {
        url: icon2,
        title: "MANAGED IT SERVICES",
        body: "Aspire provides a complete range of IT products and IT services. We are with you" +
                " every step of the way from design and procurement to implementation, management" +
                " and recycling. We provide on-site service, remote service, managed IT services," +
                " product sales, custom built computers, project services, and hourly IT services" +
                ". Denver’s trusted IT provider.",
        link:"www.google.com "

    }, {
        url: icon3,
        title: "THE ASPIRE DIFFERENCE TO DENVER",
        body: "With over 50 years of combined experience, our staff of well-trained technicians" +
                " has completed thousands of service calls. Our technicians are quick to diagnose" +
                " issues and highly efficient at implementing a permanent solution. We pride ours" +
                "elves in doing it right the first time. It is simple to make the transition to A" +
                "spire, and we would be happy to discuss how we can solve your IT issues.",
        link:"window.location.href='www.google.com' "

    }
];


export const LinkSectionData=[
    {
        link:"",
        title:"The Aspire Gaurantee",
        body:"Service you can Trust"

    },
    {
        link:"",
        title:"IT & Network Security for SMB",
        body:"Next Level Cyber Security"

    },
];

export default CD;

export const CompanyLogoData=[
    {
        url:logo1,
        alt:"company logo"
    },
    {
        url:logo2,
        alt:"company logo"
    },
    {
        url:logo3,
        alt:"company logo"
    },
    {
        url:logo4,
        alt:"company logo"
    },
    {
        url:logo5,
        alt:"company logo"
    },


];