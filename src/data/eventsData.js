const events =[
    {
        id: 1,
        title: "Title1",
        oneliner: "One Liner 1 - Lorem ipsum dolor sit amet consectetur. Porttitor purus amet libero nibh vel dignissim.",
        image: "https://thumbs.dreamstime.com/b/technical-support-customer-service-business-technology-internet-concept-154148058.jpg",
        eventDetails: {
            teamSize: 2,
            rules:[
                "rule1",
                "rule1",
                "rule2"
            ],
            rounds:[
                "Lorem ipsum dolor",
                "Lorem ipsum dolor"
            ],
            judging: "Lorem ipsum dolor",
            deadline:"5th May 2021, 11:59 p.m",
            registerLink: "",
            contact: {
                "Karthick.K:" : "+91 94448 53879",
                "Vishnuvardan.A" : "+91 72992 13502"
            }
        }
    },
    {
        id: 2,
        title: "Title2",
        oneliner: "One Liner 1 - Lorem ipsum dolor sit amet consectetur. Porttitor purus amet libero nibh vel dignissim.",
        image: "https://thumbs.dreamstime.com/b/technical-support-customer-service-business-technology-internet-concept-154148058.jpg",
        eventDetails: {
            teamSize: 3,
            rules:[
                "rule1",
                "rule1",
                "rule2"
            ],
            rounds:[
                "Lorem ipsum dolor",
                "Lorem ipsum dolor"
            ],
            judging: "Lorem ipsum dolor",
            deadline:"5th May 2021, 11:59 p.m",
            registerLink: "",
            contact: {
                "Karthick.K:" : "+91 94448 53879",
                "Vishnuvardan.A" : "+91 72992 13502"
            }
        }
    },
   
   
];

export default function getEvents(){
    return events;
};