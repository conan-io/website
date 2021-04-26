var tribeMembers = [
  {
      name: 'Nenad Miksa',
      image: 'trollface_med_-_Nenad_Miksa.png',
      description: 'Head of Tools and Software Infrastructure at Microblink Ltd.',
      linkedin: 'https://www.linkedin.com/in/nmiksa/',
      twitter: 'https://twitter.com/DodoMiksa/',
      company: 'Microblink'
  },
  {
      name: 'Chandler Scott',
      description: "Developer at Aquaveo. I hack on all things computer, regardless of where they came from. I consider C/C+ my 'home' language, but I have had fun learning all sorts of new ones too.",
      twitter: 'https://twitter.com/Tsubashi/',
      company: 'Aquaveo'
  },
  {
      name: 'Alexandr Timofeev',
      image: 'photo_-_Александр_Тимофеев.jpg',
      description: 'C++ developer with experience in touch-screen QML applications for testing of avionics and related systems.',
      linkedin: 'https://www.linkedin.com/in/alexandr-timofeev-982719180/',
      company: 'ООО НТФ «АСД»'
  },
  {
      name: 'Daniel Roberts',
      image: '0_-_Daniel_Roberts.jpg',
      description: 'Software Engineer with a wealth of experience in embedded software developement and a passion for good design and system architecture',
      linkedin: 'https://www.linkedin.com/in/daniel-roberts-81b22850/',
      company: 'Bose'
  },
  {
      name: 'Yoann Potinet',
      image: 'pp_-_Yoann_Potinet.jpg',
      description: 'Software Engineer at Bluemanoid and Game Developer ',
      linkedin: 'https://www.linkedin.com/in/www.linkedin.com/',
      twitter: 'https://twitter.com/ypotinet/',
      company: 'Bluemanoid'
  },
  {
      name: 'Michael Maguire',
      image: 'Michael_Maguire.jpg',
      description: 'C++ and Java software engineering professional at Bloomberg, previously at Microsoft in Redmond and at Research in Motion on the BlackBerry team. Architected the Java email and SMS applications for the BlackBerry. Inventor of the threaded message view UI now ubiquitous for mobile chat and text applications.',
      linkedin: 'https://www.linkedin.com/in/michaelmaguire/',
      twitter: 'https://twitter.com/michaelmaguire/',
      company: 'Bloomberg LP'
  },
  {
      name: 'Kai Wolf',
      image: 'kwolf_-_Kai_Wolf.jpg',
      description: 'Computer scientist (M.Sc.) with a strong focus on Computer Vision, Machine Learning and Mobile Computing mainly in the languages C, C++, Kotlin and Python',
      linkedin: 'https://www.linkedin.com/in/kw0lf/',
      twitter: 'https://twitter.com/kw0lf/',
      company: 'Kai Wolf - SW Consulting'
  },
  {
      name: 'Daniel Heater',
      linkedin: 'https://www.linkedin.com/in/danielheater/',
      company: 'VMware'
  },
  {
      name: 'Romain Deterre',
      image: 'photo_profil_-_Romain_Deterre.jpg',
      description: 'Software Manager at Alazar Technologies. Uses C++ in a wide variety of environments to enable high performance data acquisition and processing applications.',
      linkedin: 'https://www.linkedin.com/in/romain-deterre-50161941/',
      twitter: 'https://twitter.com/romaindeterre/',
      company: 'Alazar Technologies Inc.'
  },
  {
      name: 'Nils Gerke',
      image: 'IMG_0706_-_Nils_Gerke.jpg',
      description: "I'm a DevOps Engineer at Digitalwerk GmbH and love Linux, Open Source Software, and to automate things.",
      linkedin: 'https://www.linkedin.com/in/nils-gerke/',
      company: 'Digitalwerk GmbH'
  },
  {
      name: 'Julien Marrec',
      image: 'Julien_Marrec-B_W-400x400_-_Julien_Marrec.jpg',
      description: 'Energy engineer/BEM professional, Founder of EffiBEM. Interests include: building energy modeling, Python, ruby, C++, CI/CD, dataviz, machine learning. ',
      linkedin: 'https://www.linkedin.com/in/julienmarrec/',
      twitter: 'https://twitter.com/MarrecJulien/',
      company: 'EffiBEM'
  },
  {
      name: 'Ayaz Salikhov',
      image: 'photo_-_Ayaz_Salikhov.jpg',
      description: "I create a low-latency high-frequency trading platform.\r\nI'm in love with C++ and conan so far.\r\nI do believe that the C++ world should be better and try to help that.",
      linkedin: 'https://www.linkedin.com/in/mathbunnyru/',
      company: 'AIM Tech'
  },
  {
      name: 'Harald Achitz',
      image: 'PhotoMe1small_-_Harald_Achitz.jpg',
      description: 'Harald is long time developer who worked in a wide range of different fields and on all major platforms, mostly, but not exclusive, in projects where C++ played an important role. One of his favorite spare time activities is organizing the Stockholm C++ meetup group, StockholmCpp.',
      linkedin: 'https://www.linkedin.com/in/harald-achitz-860657139/',
      twitter: 'https://twitter.com/haralda4z/',
  },
  {
      name: 'Zack Johnson',
      description: 'R&D Software Engineer for Keysight Technologies creating and maintaining modern C++ libraries for Electronic Measurement based applications dealing with signal generation and analysis.',
      linkedin: 'https://www.linkedin.com/in/zack-johnson-0ba738a7/',
      company: 'Keysight Technologies'
  },
  {
      name: 'Fabien Laurent',
      image: 'id_-_Fabien_Laurent.jpg',
      description: 'I am software engineer at ASAP GmbH focusing on C++ and Python tooling in the automotive Industry. I help improve CI/CD workflow in particular through Conan and Artifactory.',
      linkedin: 'https://www.linkedin.com/in/fabienlaurent/',
      company: 'ASAP'
  },
  {
      name: 'Yuri Timenkov',
      image: 'avatarka2_-_Yuri_Timenkov.jpg',
      description: 'A C++ developer, too lazy to not automate my work ',
      linkedin: 'https://www.linkedin.com/in/yuri-timenkov-8457303a/',
      company: 'Nasdaq'
  },
  {
      name: 'Nils Brinkmann',
      image: 'Nils_Brinkmann_-_Nils_Brinkmann.jpg',
      description: 'Developer with 14 years of experience. Working within Simulation & Training, Augmented and Virtual Reality. Using Conan since early 2016.',
      linkedin: 'https://www.linkedin.com/in/nils-brinkmann-93183677/',
      company: 'Rheinmetall Electronics GmbH'
  },
  {
      name: 'Johannes Asal',
      image: 'Johannes_Asal.png',
      description: 'Graduate physicist with interest in Computer Science ended up in Software Engineering. Working for SICK AG as Embedded Software Engineer since 2011. Key competencies are C++, Linux system development and tooling, especially build systems.',
      linkedin: 'https://www.linkedin.com/in/johannes-asal-8695b746/',
      company: 'SICK AG'
  },
  {
      name: 'Martin Stelzer',
      image: 'Screenshot_2020-11-04_ieee_aerospace_conf_2017_pdf_-_Martin_Stelzer.png',
      description: 'Martin is a software engineer at the Robotics Institute of the German Aerospace Center. There he is maintaining the CI infrastructure thats helps to build the robots of tomorrow.',
      company: 'German Aerospace Center'
  },
  {
      name: 'Christopher McArthur',
      image: 'download_-_chris_mc.png',
      description: 'Passionate about the entire software process. Strong foundation in IP and web technologies. Bringing new ideas and a fresh perspective to an established build process.',
      linkedin: 'https://www.linkedin.com/in/christophermcarthur1996/',
      company: 'Matrox'
  },
  {
      name: 'Andreas Kleber',
      image: 'aln-mittel_-_Andreas_Kleber.jpg',
      description: 'Starting as C++ developer 12y years ago, I moved more and more to DevOps topics since about 7 years ago and I am now a DevOps Engineer since about 2,5 years. My big focus in our company currently is the introduction of Conan.',
      linkedin: 'https://www.linkedin.com/in/andreas-kleber/',
      twitter: 'https://twitter.com/andreasklebe_r/',
      company: 'ESI Group'
  },
  {
      name: 'Ken Frederickson',
      description: 'Engineer working in audio signal processing and embedded systems. Also interested in desktop, mobile, and web application development.',
      linkedin: 'https://www.linkedin.com/in/kenfrederickson/',
      company: 'NXC Systems'
  },
  {
      name: 'Ryan Maki',
      image: 'ryan-maki_-_BlueCalyx.jpg',
      description: 'Ryan works behind the scenes building Apple Maps services and infrastructure. Years ago he introduced the Conan team to the JFrog team and the rest is history.',
  },
  {
      name: 'Aleksa Pavlovic',
      description: "I'm a software engineer at Everseen working on real-time video analysis systems. I love to keep up to date with the bleeding edge development in whichever field I'm in at the moment and that's how I got drawn to Conan. I believe that a good C++ package manager will be essential for the continued relevance of the language and that developers can't just wait for a perfect one to arrive, but need to actively work towards creating one.",
      linkedin: 'https://www.linkedin.com/in/aleksa-pavlovic/',
      company: 'Everseen'
  },
  {
      name: 'Kellya Clanzig',
      image: 'user-avatar_-_Kellya_Clanzig.jpg',
      description: 'I studied Electronics in Paris and informatics in Munich. I am since 10 years working as an embedded Software developer in the automotive industry. Since 3 years I am working mainly in c++ and Python projects built with Conan.',
      linkedin: 'https://www.linkedin.com/in/kellya-clanzig-7a67a215/',
      company: 'ASAP Engineering'
  },
  {
      name: 'Claudio Bantaloukas',
      image: '71266393_10216465417762767_1132351119519907840_o_-_Claudio_Bantaloukas.jpg',
      description: "I'm covering a DevOps and Software Engineer role at CCDC, with a focus on build maintainance. I break down complex interdependencies, using conan to deal with complexity and detail.",
      linkedin: 'https://www.linkedin.com/in/claudiobantaloukas/',
      company: 'CCDC'
  },
  {
      name: 'Alban Lefebvre',
      image: 'Alban_Lefebvre_523A6978_-_Alban_Lefebvre.jpg',
      description: 'Software Engineer at Bloomberg in Lugano, Switzerland. One of my focus is SDLC and in particular improving our Windows Build infrastructure.',
      linkedin: 'https://www.linkedin.com/in/albanlefebvre/',
      company: 'Bloomberg'
  },
  {
      name: 'Theo Delrieu',
      image: 'Theo_Delrieu.jpg',
      description: 'Started with C++ metaprogramming, went to package management, now to CI/CD, tomorrow with DevOps?',
      company: 'Tanker'
  },
  {
      name: 'Roman Zaytsev',
      description: 'Head of software development department, developing software using C++, python, Qt and conan.',
      linkedin: 'https://www.linkedin.com/in/zaytsevr/',
      company: 'NTT LLC'
  },
  {
      name: 'Martin Pausch',
      image: 'IMG_0200_200x200_-_Martin_Pausch.jpg',
      description: 'Martin is Head of Device Framework at Carl Zeiss Meditec AG. With his experience as a Technical Consultant and Lead Software Engineer, he solves problems for the users of Medical Software to meet their needs and he relies on his analytic skills and the interdisciplinary team he works with.',
      linkedin: 'https://www.linkedin.com/in/martinpausch/',
      twitter: 'https://twitter.com/mapau/',
      company: 'Zeiss Meditec AG'
  },
  {
      name: 'James Weir',
      image: 'IMG_0953_-_James_Weir.JPG',
      description: 'Principal Architect and Software Engineer at heart with more than 20 years experience in everything from Ada to YAML, a few more years to get to Z :D',
      linkedin: 'https://www.linkedin.com/in/jameswweir/',
      twitter: 'https://twitter.com/jameswweir/',
      company: 'TomTom'
  },
  {
      name: 'Maikel van den Hurk',
      image: 'image-2_-_Maikel_van_den_Hurk.png',
      description: 'Principal software engineer with a main interest in building and distributing C++ software! The typical slacking off “My code’s compiling” is the main reason for this interest. Fond off trying out new tools to improve the day-to-day job of every other developer!',
      linkedin: 'https://www.linkedin.com/in/maikelvdhurk/',
      company: 'TomTom'
  },
  {
      name: 'Matthias Fuchs',
      image: '20201106_151321_-_Matthias_Fuchs.jpg',
      description: 'Matthias is a software architect at Zeiss Meditec. He wants to have a state-of-the-art CI infrastructure so that people can create solutions instead of fixing builds.',
      linkedin: 'https://www.linkedin.com/in/matzfuchs/',
      company: 'Carl Zeiss Meditec AG'
  },
  {
      name: 'Max Kolesin',
      image: 'photo_2020-11-07_12-12-56_-_Max_Kolesin.jpg',
      description: 'Max Kolesin, V-Nova Ltd. Max is a GPU engineer and CI babysitter at V-Nova. Active conan user since 1.12.3',
      linkedin: 'https://www.linkedin.com/in/max-kolesin/',
      company: 'V-Nova Ltd'
  },
  {
      name: 'Eric Pederson',
      image: 'CIMG00481b_-_Eric_Pederson.jpeg',
      description: 'I am a software developer working in finance.  My focus over the last few years has been DevOps.  ',
      linkedin: 'https://www.linkedin.com/in/sourcedelica/',
      twitter: 'https://twitter.com/sourcedelica/',
      company: 'Tradeweb Markets'
  },
  {
      name: 'Gerben van der Lubbe',
      description: "My name is Gerben, 33 years old. I'm a C++ enthousiast, and over the last year or so started to use Conan both professionally and for personal projects. Currently, I work as an architect and team lead in a medium-sized company.",
  },
  {
      name: 'Andreas Hader-Kregl',
      image: 'Andreas_Hader-Kregl.jpg',
      description: "I am a software developer and architect at ENGEL Austria. I have a master's degree in software engineering and been working as a software developer since 2011. My main languages are C++, C# and Python. I like hiking and playing quidditch in my spare time.",
      company: 'ENGEL Austria GmbH'
  },
  {
      name: 'Thomas Steiner',
      image: 'Thomas_Steiner.png',
      description: "I'm a software developer for an Austrian injection moulding machine manufacturer. My programming languages are C++, Java and some Python (for conan recipes ;). I also do PLC programming and sometimes DevOps stuff.",
      company: 'ENGEL Austria GmbH'
  },
  {
      name: 'Tamás Szelei',
      image: 'Tamas_Szelei.jpg',
      description: 'I enjoy wrangling build systems and long walks on the beach at sunset.',
      linkedin: 'https://www.linkedin.com/in/tamasszelei/',
      twitter: 'https://twitter.com/szeleitamas/',
      company: 'Plex'
  },
  {
      name: 'Mark Final',
      image: 'me_-_Mark_Final.png',
      description: 'Build and cross platform development architect (desktop platforms; Windows, Linux, macOSX), VFX industry, 20 years experience (games and VFX) mostly across C/C++/Python/GPU languages,  GPU and offline rendering background, mathematics degree, bit of a build troubleshooter',
      linkedin: 'https://www.linkedin.com/in/markfinal/',
      company: 'The Foundry Visionmongers Ltd'
  },
  {
      name: 'Kerstin Keller',
      image: 'DSC02180_-_Kerstin_Keller.JPG',
      description: "Kerstin is a software developer at Continental where she focuses on optimizing the build process and engineering workflow for large scale C++ projects. She's a firm believer, that with CMake as a build system and Conan as dependency management, building and reusing C++ components will be easier than ever before.",
      company: 'Continental'
  },
  {
      name: 'Jason Walter',
      image: '440_-_Jason_Walter.jpg',
      description: 'Senior Tools Programmer with a focus on real-time 3d computer graphics. ',
  },
  {
      name: 'Javier Povedano',
      image: '0_-_Javier_Povedano_Molina.jpeg',
      description: 'Javier Povedano is currently working at RTI as a Internal Tools Lead. After some years developing in C/C++ middleware for the Industrial Internet of Things, I moved to a newly created team to make our developers and our release process more efficient. There I started learning more about Jenkins, Artifactory, and, obviously Conan.',
      linkedin: 'https://www.linkedin.com/in/jpovedano/',
      twitter: 'https://twitter.com/jpovedano/',
      company: 'RTI'
  },
  {
      name: 'Marcel Pfütze',
      image: 'me_-_Salamibrodel.jpg',
      description: 'Senior Software Developer.\r\nMostly working with Cloud Integration of existing C/C++/Java/python projects.',
      twitter: 'https://twitter.com/KepptnK/',
  },
  {
      name: 'R. Andrew Ohana',
      image: '00100trPORTRAIT_00100_BURST20191124151656008_COVER_-_Andrew_Ohana.jpg',
      description: "Andrew is a software engineer with ESI Group with a master's degree in mathematics, and is a long time supporter and contributor of open source projects. He spent the last 2 years transforming a legacy, home-grown build system into a modern example of conan's power and flexibility. He now serves as the point-person within ESI for anything related to build systems and dependency management.",
      company: 'ESI Group'
  },
  {
      name: 'Jayanth Bapu',
      description: 'R&D Software Engineer working on DevOps and all things Cloud.',
      linkedin: 'www.linkedin.com/in/jayanthbapu',
      company: 'Keysight Technologies'
  },
  {
      name: 'Janosch Steinhoff',
      image: 'Janosch_Steinhoff.png',
      description: 'Product owner basis software for automated driving at Bosch. Expert in nothing, know enough to solve most of the problems thrown at me.',
      linkedin: 'https://www.linkedin.com/in/janosch-steinhoff-a501b6142/',
      company: 'Robert Bosch GmbH'
  },
  {
    name: 'Kevin A. Mitchell',
    image: 'Kevin_Mitchell.jpg',
    description: "Kevin is a Senior Software Architect at Datalogics, where he introduced Conan to our C++ projects. He's also got a strong background in Python and Java as well as other programming languages.",
    company: 'Datalogics',
    twitter: 'https://twitter.com/kamitchell/'
  },
  {
    name: 'Alex Brinkman',
    image: 'Alex_Brinkman.jpg',
    description: "Robotics software developer at NASA-JPL leveraging Conan to develop C/C++ manipulation applications",
    company: 'NASA-JPL'
  },
  {
    name: 'Ihar Shashura',
    image: 'Ihar_Shashura.jpg',
    description: "I am cross-platform (Android, iOS, Linux, macOS, Windows) engineer who passionate about cross-platform solutions based on c++. Had experience with different embedded devices, CAD systems, high-load servers, Video/Audio applications, financial software. M. Sc. in Math. ",
  },
  {
    name: 'Michael Aigner',
    image: 'michael_aigner.png',
    description: "Build cross platform products including CAD system, raytracer, package manager mainly for desktop and server applications with C++ and Qt. I also write applications in python, golang, typescript and many more. Daily conan user since 0.7. Huge CI/CD fan mostly done with GitLab CI.",
    company: 'ZKW Lichtsysteme GmbH',
    twitter: 'https://twitter.com/tonka_2000/',
    linkedin: 'https://www.linkedin.com/in/michael-aigner-ab06809/'
  },
  {
    name: 'Joel Johnson',
    image: 'joel_johnson.jpg',
    description: "Joel is a Software Engineer supporting development and CI/CD across multiple software products.",
    company: 'Stellar Science'
  },
  {
    name: 'Chris Robinson',
    image: 'chris_robinson.jpg',
    description: "ANSYS employee. Use conan in our softare builds. Support use of Conan thoughout the company. Streamline Conan deployment within the organization.",
    company: 'ANSYS'
  },
  {
    name: 'Mateusz Pusz',
    image: 'mateuszpusz.jpg',
    description: "A software architect, principal engineer, and security champion with more than 15 years of experience in designing, writing, and maintaining C++ code for fun and living. A trainer with 10 years of C++ teaching experience, consultant, conference speaker, and evangelist. A member of the ISO C++ Committee and MISRA C++.",
    company: 'Train IT',
    twitter: 'https://twitter.com/mateusz_pusz/',
    linkedin: 'https://www.linkedin.com/in/mpusz/'
  },
  {
    name: 'Udo Tremel',
    description: "Principal R&D Engineer working on the geometry acquisition for meshing and the exposure of meshing technology in Ansys products.",
    company: 'ANSYS'
  },
  {
    name: 'Antoine Charpentier',
    description: "Space Operation Engineer, mainly focused on ground segment development, flight dynamics, data analysis, and tactical operations in deep space exploration. I've worked on several space exploration missions and foundamental physics experiments with CNES, NASA/JPL, DLR, ESA and JAXA.",
    company: 'Telespazio',
    linkedin: 'https://www.linkedin.com/in/antoine-charpentier-831b0a4'
  },
  {
    name: 'Gayan Pathirage',
    image: 'gayan_pathirage.jpg',
    description: "I’m a C++ and Python developer with about 14 years of experience in FinTech. I’m currently responsible for the engineering tool chain of LSEG Technology. (Technology arm of London Stock Exchange Group)",
    company: 'LSEG Technology',
    linkedin: 'https://lk.linkedin.com/in/gayancp/',
    twitter: 'https://twitter.com/gayanpathirage/'
  },
]
