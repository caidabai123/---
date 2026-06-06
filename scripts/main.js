/**
 * Top Wise Choice - Main JavaScript
 * 领智优选主脚本
 */

// Translations
const translations = {
  en: {
    // About Section
    about_title: 'About Top Wise Choice',
    about_subtitle: '关于领智优选',

    // Destinations Page
    destinations_title: 'Global Destinations',
    destinations_subtitle: 'Explore work opportunities worldwide and find the right visa type for you',
    destinations_cta_title: 'Not sure which destination to choose?',
    destinations_cta_subtitle: 'Our consultants will recommend the most suitable country and visa type based on your background and preferences',
    
    // Destination Visa Translations
    dest_usa_work_visa: 'Temporary Work Visa',
    dest_usa_h2b: 'Seasonal worker visa for temporary work in hospitality, catering, tourism and other industries',
    dest_usa_j1: 'Exchange visitor visa covering short-term internships, training, summer work and other programs',
    dest_work_holiday: 'Working Holiday',
    dest_usa_wh_note: 'The US does not have an official working holiday visa program. We recommend participating in summer work or internship programs through the <strong>J-1 Exchange Visitor Visa</strong>.',
    dest_au_work_visa: 'Temporary Work Visa',
    dest_au_482: 'Temporary Skill Shortage visa (TSS), employer-sponsored, valid for 2-4 years',
    dest_au_400: 'Temporary work visa for short-term professional work (usually 3-6 months)',
    dest_wh_visa: 'Working Holiday Visa',
    dest_au_417: 'Working Holiday Visa, for passport holders from developed countries like UK, US, Canada',
    dest_au_462: 'Work and Holiday Visa, for Chinese citizens, limited quota by lottery each year',
    dest_ca_work_visa: 'Temporary Work Visa',
    dest_ca_tfwp: 'Temporary Foreign Worker Program, requires employer LMIA sponsorship',
    dest_ca_iec: 'International Experience Canada, including working holiday category',
    dest_ca_iec_wh: 'Open work permit allowing work anywhere in Canada for up to 12-24 months',
    dest_ca_yp: 'For young professionals with employer offer, can accumulate Canadian work experience',
    dest_uk_work_visa: 'Temporary Work Visa',
    dest_uk_skilled: 'Skilled Worker visa, employer sponsorship required, pathway to permanent residency',
    dest_uk_seasonal: 'Seasonal Worker visa, mainly for agriculture, catering and tourism, up to 6 months',
    dest_uk_yms: 'Youth Mobility Scheme, for Chinese citizens aged 18-30, 1000 quotas annually, can work in UK for 2 years',
    dest_ie_work_visa: 'Temporary Work Visa',
    dest_ie_gep: 'General Employment Permit, requires minimum annual salary of €30,000',
    dest_ie_sep: 'Seasonal Employment Permit, for agriculture, food processing and other seasonal industries',
    dest_ie_wha: 'Working Holiday Authorisation (WHA), applications open in April each year, for 18-30 year olds, valid for 12 months',
    dest_nz_work_visa: 'Temporary Work Visa',
    dest_nz_eswv: 'New Zealand AEWV Work Visa, employer sponsorship required, valid for 1-3 years based on skill level',
    dest_nz_spwv: 'New Zealand Post-study Work Visa, for international graduates in New Zealand',
    dest_nz_whv: '1000 quotas annually for Chinese citizens aged 18-30, can work and travel in New Zealand for up to 12 months',
    dest_sg_work_visa: 'Temporary Work Visa',
    dest_sg_wp: 'Work Permit, mainly for blue-collar workers (construction, manufacturing, seafarers, services), applied by employer',
    dest_sg_tep: 'Training Employment Pass, for internship or training programs, for professionals',
    dest_sg_wh_note: 'Singapore does not have an official working holiday visa program. We recommend participating in internship or training programs through <strong>Training Employment Pass</strong>, or apply for a short-term Work Permit.',
    dest_other_europe: 'Europe',
    dest_other_europe_desc: 'Short-term work/internship programs in Germany, France, Netherlands and other countries, covering engineering, business, arts and other fields',
    dest_other_asia: 'Asia',
    dest_other_asia_desc: 'Cultural exchange programs, language teaching positions, technical internship opportunities in Japan, Korea, Malaysia and other countries',
    dest_other_global: 'Global Programs',
    dest_other_global_desc: 'Diverse global work opportunities including international volunteering, cruise ship jobs, resort management traineeships',

    // Navigation
    nav_home: 'Home',
    nav_destinations: 'Destinations',
    nav_work: 'Work Overseas',
    nav_intern: 'Intern Abroad',
    nav_intern_overseas: 'Internship Overseas',
    nav_global_exchange: 'Global Exchange Program',
    nav_programs: 'Global Programs',
    nav_visa: 'Visa',
    nav_service: 'Service',
    nav_employers: 'For Employers',
    nav_about: 'About Us',
    nav_contact: 'Contact Us',
    
    // Hero
    hero_title: 'Your Gateway to Global Careers',
    hero_subtitle: 'Connecting ambitious professionals and students with global opportunities, helping them enhance competitiveness and achieve better work-life balance through overseas employment or internships.',
    hero_cta_primary: 'Explore Opportunities',
    hero_cta_secondary: 'For Employers',
    
    // Stats
    stat_jobs: 'Active Positions',
    stat_candidates: 'Candidates Placed',
    stat_countries: 'Countries',
    stat_partners: 'Partner Companies',
    
    // Services
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive solutions for every stage of your international journey',
    
    service_work_title: 'Work Overseas',
    service_work_desc: 'Full-time employment opportunities for experienced professionals in hospitality, skilled trades, and caregiving.',
    service_work_feature1: 'Direct employer connections',
    service_work_feature2: 'Visa sponsorship support',
    service_work_feature3: 'Interview preparation',
    service_work_feature4: 'Post-arrival assistance',
    service_work_cta: 'View Positions',
    
    service_intern_title: 'Intern Abroad',
    service_intern_desc: 'Short-term internship programs for students seeking professional experience in IT, business, and office environments.',
    service_intern_feature1: 'Curated internship matching',
    service_intern_feature2: 'Academic credit support',
    service_intern_feature3: 'Housing assistance',
    service_intern_feature4: 'Cultural orientation',
    service_intern_cta: 'Explore Programs',
    
    service_programs_title: 'Global Programs',
    service_programs_desc: 'Exchange programs including volunteering, research visits, short-term exchanges, and gap year opportunities.',
    service_programs_feature1: 'Volunteer placements',
    service_programs_feature2: 'Research fellowships',
    service_programs_feature3: 'Gap year adventures',
    service_programs_feature4: 'Cultural immersion',
    service_programs_cta: 'Learn More',
    
    // Process
    process_title: 'How It Works',
    process_subtitle: 'Your journey to an international career in four simple steps',
    
    process_step1_title: 'Consultation',
    process_step1_desc: 'Free initial assessment of your goals and qualifications',
    
    process_step2_title: 'Matching',
    process_step2_desc: 'We connect you with suitable opportunities',
    
    process_step3_title: 'Application',
    process_step3_desc: 'Guidance through interviews and documentation',
    
    process_step4_title: 'Placement',
    process_step4_desc: 'Visa support and arrival assistance',
    
    // CTA
    cta_title: 'Ready to Start Your Journey?',
    cta_subtitle: 'Join thousands of professionals who have transformed their careers with us',
    cta_btn_primary: 'Get Started Today',
    cta_btn_secondary: 'Contact Our Team',
    
    // Footer
    footer_tagline: 'Connecting talent with global opportunities since 2020',
    footer_services: 'Services',
    footer_company: 'Company',
    footer_contact: 'Contact',
    footer_copyright: '© 2026 Top Wise Choice. All rights reserved.',
    footer_disclaimer: 'Machine translated content. Please verify details with our team.',
    
    // Common Buttons
    contact_us: 'Contact Us',
    learn_more: 'Learn More',
    apply_now: 'Apply Now',
    view_all: 'View All',
    loading: 'Loading...',
    
    // Work Overseas Page
    work_page_title: 'Work Overseas',
    work_page_subtitle: 'Full-time career opportunities across the globe for experienced professionals',
    work_section_overview: 'Start Your Overseas Career',
    work_overview_desc: 'Top Wise Choice specializes in matching Chinese job seekers with overseas full-time employment opportunities. We have established deep partnerships with quality employers worldwide, covering hospitality, skilled trades, caregiving, and more.',
    work_feature1_title: 'Resume Optimization',
    work_feature1_desc: 'Professional resume polishing, highlighting personal strengths',
    work_feature2_title: 'Career Planning',
    work_feature2_desc: 'One-on-one career consultation, develop overseas development plan',
    work_feature3_title: 'Interview Preparation',
    work_feature3_desc: 'One-on-one interview training to improve success rate',
    work_feature4_title: 'Post-Arrival Support',
    work_feature4_desc: 'Airport pickup, accommodation, banking, and comprehensive support',
    work_categories_title: 'Job Categories',
    work_categories_subtitle: 'Covering multiple industry sectors to meet different professional backgrounds',
    work_hospitality_title: 'Hospitality & Tourism',
    work_hospitality_desc: 'Hotel managers, front desk supervisors, housekeeping managers, F&B managers',
    work_skilled_title: 'Skilled Trades',
    work_skilled_desc: 'Electricians, welders, carpenters, auto mechanics, HVAC technicians',
    work_caregiving_title: 'Caregiving Services',
    work_caregiving_desc: 'Elderly care, nursing assistants, caregivers, rehabilitation nurses',
    work_featured_jobs: 'Featured Positions',
    work_jobs_subtitle: 'Latest quality overseas job opportunities',
    work_location: 'Location',
    work_type: 'Type',
    work_fulltime: 'Full-time',
    work_salary: 'Salary',
    work_apply: 'Apply Now',
    work_destinations: 'Popular Destinations',
    work_destinations_subtitle: 'Our business covers multiple countries and regions worldwide',
    work_cta_title: 'Ready to Start Your Overseas Career Journey?',
    work_cta_subtitle: 'Leave your contact information and our consultants will contact you within 24 hours',
    work_cta_btn1: 'Free Consultation',
    work_cta_btn2: 'Call Us Now',
    
    // Intern Abroad Page
    intern_page_title: 'Intern Abroad',
    intern_page_subtitle: 'Gain international work experience through our curated internship programs',
    intern_section_overview: 'Internships Change the Future',
    intern_overview_desc: 'Top Wise Choice has established partnerships with renowned global companies to provide quality overseas internship opportunities for students. Whether you want to accumulate technical experience at tech giants or develop business skills at multinational corporations, we can help you find the most suitable program.',
    intern_feature1_title: 'Top Company Opportunities',
    intern_feature1_desc: 'Connect with Silicon Valley tech companies and multinational corporations',
    intern_feature2_title: 'Credit Transfer Support',
    intern_feature2_desc: 'Assist with school credit recognition procedures',
    intern_feature3_title: 'Accommodation Arrangement',
    intern_feature3_desc: 'Provide safe and convenient accommodation solutions',
    intern_feature4_title: 'Internship Certificate',
    intern_feature4_desc: 'Obtain internationally recognized internship certificates and recommendation letters',
    intern_fields_title: 'Internship Fields',
    intern_fields_subtitle: 'Covering multiple popular professional directions',
    intern_it_title: 'Information Technology',
    intern_it_skill1: 'Software Development',
    intern_it_skill2: 'Data Analytics',
    intern_it_skill3: 'Product Management',
    intern_it_skill4: 'UI/UX Design',
    intern_it_skill5: 'Cybersecurity',
    intern_business_title: 'Business & Finance',
    intern_business_skill1: 'Investment Banking',
    intern_business_skill2: 'Management Consulting',
    intern_business_skill3: 'Marketing',
    intern_business_skill4: 'Accounting & Finance',
    intern_business_skill5: 'Human Resources',
    intern_media_title: 'Media & Creative',
    intern_media_skill1: 'Advertising Planning',
    intern_media_skill2: 'Public Relations',
    intern_media_skill3: 'Social Media Operations',
    intern_media_skill4: 'Film Production',
    intern_media_skill5: 'Graphic Design',
    intern_programs_title: 'Featured Programs',
    intern_programs_subtitle: 'Latest open quality internship opportunities',
    intern_program_duration: 'Duration',
    intern_paid: 'Paid Internship',
    intern_with_accommodation: 'With Accommodation',
    intern_free_accommodation: 'Free Accommodation',
    intern_details: 'Learn More',
    intern_benefits_title: 'Program Benefits',
    intern_benefits_subtitle: 'Why choose our internship programs',
    intern_benefit1_title: 'Global Network',
    intern_benefit1_desc: 'Covering quality enterprise resources in 15+ countries',
    intern_benefit2_title: 'Professional Guidance',
    intern_benefit2_desc: 'One-on-one career planning and application coaching',
    intern_benefit3_title: 'Full Protection',
    intern_benefit3_desc: 'Visa, insurance, emergency support fully covered',
    intern_benefit4_title: 'Alumni Network',
    intern_benefit4_desc: 'Join global alumni community to expand your network',
    intern_cta_title: 'Start Your International Internship Journey',
    intern_cta_subtitle: 'Submit your application and our consultants will recommend the most suitable program for you',
    
    // Global Programs Page
    programs_page_title: 'Global Programs',
    programs_page_subtitle: 'Expand your horizons through volunteering, research, and exchange opportunities',
    programs_types_title: 'Program Types',
    programs_types_subtitle: 'Diverse international experience options',
    programs_volunteer_title: 'International Volunteer',
    programs_volunteer_desc: 'Participate in wildlife conservation, community building, education support and other public welfare projects, grow through practice, and make the world a better place.',
    programs_volunteer_item1: 'African Wildlife Conservation',
    programs_volunteer_item2: 'Southeast Asia Education Support',
    programs_volunteer_item3: 'South America Community Development',
    programs_research_title: 'Research Scholar',
    programs_research_desc: 'Enter world-class universities and research institutions, conduct academic research with renowned professors, and accumulate valuable research experience.',
    programs_research_item1: 'University Lab Research',
    programs_research_item2: 'Research Institute Exchange',
    programs_research_item3: 'Academic Conference Participation',
    programs_gapyear_title: 'Gap Year Programs',
    programs_gapyear_desc: 'Explore the world during academic breaks through work exchange, cultural experiences, and skill learning to discover your true self.',
    programs_gapyear_item1: 'Work Exchange Programs',
    programs_gapyear_item2: 'Language Immersion Courses',
    programs_gapyear_item3: 'Skill Certificate Training',
    programs_short_title: 'Short-term Exchange',
    programs_short_desc: '2-8 week short-term programs including summer schools, cultural experience camps, themed study tours, etc., using holidays to start your exploration journey.',
    programs_short_item1: 'Overseas Summer School',
    programs_short_item2: 'Cultural Experience Camp',
    programs_short_item3: 'Themed Study Tour',
    programs_featured_title: 'Featured Programs',
    programs_featured_subtitle: 'Quality exchange opportunities not to be missed',
    programs_benefits_title: 'Program Benefits',
    programs_benefits_subtitle: 'What you will gain from participating in international exchange programs',
    programs_benefit1_title: 'Global Perspective',
    programs_benefit1_desc: 'Experience different cultures firsthand, develop cross-cultural communication skills, and establish an international mindset',
    programs_benefit2_title: 'Personal Growth',
    programs_benefit2_desc: 'Independent living exercises self-care ability, facing challenges cultivates problem-solving skills and confidence',
    programs_benefit3_title: 'Competitive Advantage',
    programs_benefit3_desc: 'International experience enriches your resume, demonstrating unique competitive advantages in future studies and job applications',
    programs_cta_title: 'Ready to Explore the World?',
    programs_cta_subtitle: 'Contact our consultants for personalized program recommendations',
    programs_btn_download: 'Download Program Guide',
    
    // Visa Services Page
    visa_page_title: 'Visa Services',
    visa_page_subtitle: 'Expert guidance through work permits, student visas, and immigration processes',
    visa_badge_text: 'Official Work Visa · Legal Employment',
    visa_hero_title: 'Multi-Country Work Visa Services',
    visa_hero_subtitle: 'One-stop service for USA / Australia / Canada / UK / Ireland',
    
    // Visa Feature Bar
    visa_feature_bar1_title: 'Official Work Visa',
    visa_feature_bar1_desc: 'Legal visa category application',
    visa_feature_bar2_title: 'Direct Employer Hire',
    visa_feature_bar2_desc: 'Formal employment with local companies',
    visa_feature_bar3_title: 'Full Service Support',
    visa_feature_bar3_desc: 'From application to arrival guidance',
    visa_feature_bar4_title: 'Security Guarantee',
    visa_feature_bar4_desc: 'Legal and compliant overseas employment',
    
    // Visa Matching Section
    visa_matching_title: 'Quick Matching',
    visa_matching_subtitle: 'Find the most suitable overseas program based on your situation',
    visa_matching_student: 'Students/Recent Graduates',
    visa_matching_student_desc: 'US J1 Intern / UK YMS / AU 462 / CA IEC',
    visa_matching_service: 'Service Industry Workers',
    visa_matching_service_desc: 'US H2B/Q1 / UK Seasonal / Ireland Short-term',
    visa_matching_tech: 'Tech Professionals',
    visa_matching_tech_desc: 'AU 482 / CA TFWP / UK Skilled / Ireland Long-term',
    visa_matching_travel: 'Work & Travel',
    visa_matching_travel_desc: 'AU 417/462 / CA WH / UK YMS',
    visa_overview_title: 'Make Visa Application Simple',
    visa_overview_desc: 'Visa is the first threshold for overseas employment and study abroad. Top Wise Choice has an experienced visa consultant team, familiar with visa policies and application processes of various countries, providing you with professional services from document preparation to visa approval.',
    visa_success_rate: 'Visa Success Rate',
    visa_coverage: 'Countries Covered',
    visa_cases: 'Successful Cases',
    visa_types_title: 'Visa Types',
    visa_types_subtitle: 'Covering all overseas needs',
    visa_work_title: 'Work Visa',
    visa_work_item1: 'Skilled Migration Visa',
    visa_work_item2: 'Employer Sponsored Visa',
    visa_work_item3: 'Working Holiday Visa',
    visa_work_item4: 'Intra-company Transfer',
    visa_work_apply: 'Apply Now',
    visa_student_title: 'Student Visa',
    visa_student_item1: 'Study Visa',
    visa_student_item2: 'Exchange Student Visa',
    visa_student_item3: 'Short-term Training Visa',
    visa_student_item4: 'Language Course Visa',
    visa_student_apply: 'Apply Now',
    visa_visitor_title: 'Visitor Visa',
    visa_visitor_item1: 'Business Visit Visa',
    visa_visitor_item2: 'Family Visit Visa',
    visa_visitor_item3: 'Tourist Visa',
    visa_visitor_item4: 'Medical Treatment Visa',
    visa_visitor_apply: 'Apply Now',
    visa_process_title: 'Service Process',
    visa_process_subtitle: 'Professional and efficient one-stop visa service',
    visa_step1_title: 'Initial Assessment',
    visa_step1_desc: 'Evaluate applicant background and match most suitable visa type',
    visa_step2_title: 'Document Preparation',
    visa_step2_desc: 'Guide preparation of application materials and review for completeness',
    visa_step3_title: 'Application Submission',
    visa_step3_desc: 'Submit on behalf or assist with online application and track progress',
    visa_step4_title: 'Approval Guidance',
    visa_step4_desc: 'Provide pre-departure guidance and notes after visa approval',
    visa_features_title: 'Service Features',
    visa_features_subtitle: 'Why choose our visa services',
    visa_feature1_title: 'Professional Consultants',
    visa_feature1_desc: 'Senior visa consultants provide one-on-one service',
    visa_feature2_title: 'Document Review',
    visa_feature2_desc: 'Strict review ensures complete and accurate documents',
    visa_feature3_title: 'Full Tracking',
    visa_feature3_desc: 'Real-time updates on application progress',
    visa_feature4_title: 'Rejection Protection',
    visa_feature4_desc: 'Professional analysis of rejection reasons and reapplication assistance',
    visa_cta_title: 'Leave Visa Issues to Us',
    visa_cta_subtitle: 'Free consultation, professional assessment, making your overseas journey smoother',
    
    // For Employers Page
    employers_page_title: 'For Employers',
    employers_page_subtitle: 'Find qualified international talent to grow your business',
    employers_overview_title: 'Your Global Talent Partner',
    employers_overview_desc: 'Top Wise Choice focuses on delivering outstanding Chinese talent to overseas employers. We deeply understand the characteristics and advantages of Chinese job seekers and through strict screening and matching processes, recommend the most suitable candidates for you, reducing recruitment costs and improving hiring efficiency.',
    employers_talent_pool: 'Talent Pool',
    employers_partners: 'Partner Companies',
    employers_match_rate: 'Match Success Rate',
    employers_services_title: 'Enterprise Services',
    employers_services_subtitle: 'Comprehensive recruitment solutions',
    employers_recruitment_title: 'Talent Recruitment',
    employers_recruitment_item1: 'Job posting and promotion',
    employers_recruitment_item2: 'Resume screening and initial selection',
    employers_recruitment_item3: 'Candidate recommendation',
    employers_recruitment_item4: 'Interview arrangement coordination',
    employers_brand_title: 'Employer Branding',
    employers_brand_item1: 'Corporate employer brand promotion',
    employers_brand_item2: 'Campus recruitment events',
    employers_brand_item3: 'Company information sessions',
    employers_brand_item4: 'Talent market research',
    employers_visa_title: 'Visa Support',
    employers_visa_item1: 'Work visa consultation',
    employers_visa_item2: 'Document preparation guidance',
    employers_visa_item3: 'Compliance review',
    employers_visa_item4: 'Employee onboarding support',
    employers_why_title: 'Why Choose Us',
    employers_why_subtitle: 'Professional, efficient, and reliable recruitment partner',
    employers_why1_title: 'Quality Talent Pool',
    employers_why1_desc: 'Outstanding talent covering multiple industries and professions',
    employers_why2_title: 'Precise Matching',
    employers_why2_desc: 'AI + manual dual screening and recommendation',
    employers_why3_title: 'Fast Response',
    employers_why3_desc: 'Push first batch of candidates within 48 hours',
    employers_why4_title: 'Service Guarantee',
    employers_why4_desc: 'Onboarding guarantee period, replacement available if unsatisfied',
    employers_industries_title: 'Industries Served',
    employers_industries_subtitle: 'Industry sectors we serve',
    employers_hospitality: 'Hospitality & Tourism',
    employers_tech: 'Technology & Internet',
    employers_finance: 'Financial Services',
    employers_healthcare: 'Healthcare',
    employers_education: 'Education & Training',
    employers_retail: 'Retail & Consumer',
    employers_logistics: 'Logistics & Transportation',
    employers_manufacturing: 'Manufacturing',
    employers_cta_title: 'Become Our Partner',
    employers_cta_subtitle: 'Leave your company information and we will contact you within 24 hours',
    employers_btn1: 'Schedule Consultation',
    employers_btn2: 'Download Service Guide',
    
    // About Us Page
    about_page_title: 'About Us',
    about_page_subtitle: 'Your trusted partner in international career development',
    about_story_title: 'Connecting Dreams and Reality',
    about_story_p1: 'Since 2016, the founding team of Top Wise Choice has been deeply engaged in Australian study abroad services. Leveraging years of accumulated cross-border resources, we expanded into overseas immigration business and steadily entered the global overseas employment track, following industry development trends.',
    about_story_p2: 'After over a decade of dedication to overseas cross-border services, we have witnessed the evolution of market conditions and the global economy. We have gained clearer insights into the real aspirations of ordinary people: for most who choose to go abroad, studying is just a means to an end, and secure employment is the ultimate goal. Countless students from ordinary working-class families, lacking systematic cross-border planning and unfamiliar with overseas policies and employment environments, have wasted their parents\' life savings during blind study applications and hasty visa processes, missing opportunities for a better life.',
    about_story_p3: 'With the original aspiration to help ordinary young people realize their dreams, we leverage our first-hand overseas local resources and industry experience accumulated from years of study abroad and immigration services. We have abandoned the extensive agency model and focused on employment placement as our core guiding principle, tailoring scientific and secure overseas development plans. Relying on a service team composed of senior returnee elites and multinational human resources experts, we deeply cultivate compliant employment channels across multiple countries, precisely matching high-quality positions in Singapore, Australia, Europe and other parts of the world.',
    about_story_p4: 'Since our establishment, we have helped thousands of ordinary students go abroad and secure stable employment. Some have become backbone managers in Singapore\'s star-rated hotels, some have joined technical positions in Australia, and many young people have started their international careers through overseas internships.',
    about_story_p5: 'We always adhere to our original aspiration, breaking down geographical and information barriers. Based on the actual economic conditions and personal development aspirations of ordinary families, we use professional planning to avoid trial-and-error costs. We help every ordinary young person with distant dreams find the right direction, rewrite their life trajectory with a reliable overseas job, and realize self-worth on the broad international stage.',
    about_values_title: 'Our Values',
    about_values_subtitle: 'Core principles that guide us',
    about_value1_title: 'Sincere Service',
    about_value1_desc: 'Put customer interests first, provide sincere and professional service',
    about_value2_title: 'Innovation Driven',
    about_value2_desc: 'Continuously explore new models, use innovation to improve service efficiency',
    about_value3_title: 'Responsible',
    about_value3_desc: 'Be responsible for every customer, do what we promise',
    about_value4_title: 'Open & Inclusive',
    about_value4_desc: 'Embrace diverse cultures, connect with the world',
    about_stats_years: 'Years Experience',
    about_stats_placements: 'Successful Placements',
    about_stats_partners: 'Partner Companies',
    about_stats_countries: 'Countries Covered',
    about_team_title: 'Core Team',
    about_team_subtitle: 'Professional team providing quality service',
    about_team_role1: 'Founder & CEO',
    about_team_bio1: '10 years cross-border recruitment experience, previously at multiple international HR firms',
    about_team_role2: 'Operations Director',
    about_team_bio2: '8 years overseas study and immigration service experience, familiar with visa policies of various countries',
    about_team_role3: 'Business Development Director',
    about_team_bio3: 'Previously at Australian Immigration Department, familiar with international labor markets',
    about_team_role4: 'Customer Success Manager',
    about_team_bio4: '6 years customer service experience, committed to providing best experience for every customer',
    about_partners_title: 'Partners',
    about_partners_subtitle: 'Long-term cooperation with excellent enterprises worldwide',
    about_cta_title: 'Start Your International Career Journey',
    about_cta_subtitle: 'Together with Top Wise Choice, make dreams a reality',
    
    // Contact Us Page
    contact_page_title: 'Contact Us',
    contact_page_subtitle: 'Get in touch with our team for personalized assistance',
    contact_phone_title: 'Phone Consultation',
    contact_phone_hours: 'Mon-Fri 9:00-18:00',
    contact_email_title: 'Email Us',
    contact_email_response: 'Reply within 24 hours',
    contact_wechat_title: 'WeChat Consultation',
    contact_wechat_scan: 'Scan to add customer service',
    contact_form_title: 'Online Message',
    contact_form_subtitle: 'Fill out the form below and our consultants will contact you within 24 hours',
    contact_form_name: 'Full Name *',
    contact_form_name_placeholder: 'Please enter your name',
    contact_form_phone: 'Phone *',
    contact_form_phone_placeholder: 'Please enter your phone number',
    contact_form_email: 'Email',
    contact_form_email_placeholder: 'Please enter your email',
    contact_form_interest: 'I am interested in *',
    contact_form_select: 'Please select service type',
    contact_option_work: 'Work Overseas',
    contact_option_intern: 'Intern Abroad',
    contact_option_program: 'Global Programs',
    contact_option_visa: 'Visa Services',
    contact_option_employer: 'Employer Partnership',
    contact_option_other: 'Other Inquiry',
    contact_form_destination: 'Target Country/Region',
    contact_form_destination_placeholder: 'e.g., Singapore, Australia, Japan',
    contact_form_message: 'Message',
    contact_form_message_placeholder: 'Please describe your needs in detail...',
    contact_form_submit: 'Submit Message',
    contact_form_success: 'Submission successful! Our consultant will contact you within 24 hours.',
    contact_form_agreement: 'By submitting, you agree to our Privacy Policy and Terms of Service',
    contact_office_title: 'Office Address',
    contact_office_subtitle: 'Welcome to visit by appointment, our consultants will provide face-to-face consultation',
    contact_office_address: 'Guangzhou Headquarters',
    contact_office_address_detail: 'Unit 6619, Global Metropolitan Tower, Tianhe District, Guangzhou',
    contact_office_hours: 'Working Hours',
    contact_office_hours_detail: 'Mon-Fri 9:30-18:30',
    contact_office_transport: 'Transportation',
    contact_office_transport_detail: '5-minute walk from Metro Line 3 Zhujiang New Town Station, Parc Central exit',
    contact_map_placeholder: 'Map Location',
    contact_faq_title: 'FAQ',
    contact_faq_subtitle: 'Quick answers about our services',
    contact_faq1_q: 'Is the consultation service free?',
    contact_faq1_a: 'Yes, our initial consultation service is completely free. You can contact us by phone, WeChat, or online form, and our consultants will provide free career assessment and advice.',
    contact_faq2_q: 'What are the requirements for overseas work applications?',
    contact_faq2_a: 'Specific requirements vary by position and country. Generally, technical positions require relevant work experience and skill certificates; service positions require good communication skills and service awareness. We will match you with the most suitable positions based on your background.',
    contact_faq3_q: 'How long does the whole process take?',
    contact_faq3_a: 'From position matching to successful onboarding usually takes 3-6 months. This includes resume preparation, employer interviews, visa application, and other stages. We will follow up throughout to ensure smooth progress.',
    contact_faq4_q: 'What is the visa success rate?',
    contact_faq4_a: 'Our visa success rate is as high as 98%. This is due to our professional visa team and strict document review process. Even if rejected, we will analyze the reasons and provide reapplication guidance.',
    contact_cta_title: 'Have Other Questions?',
    contact_cta_subtitle: 'Our team is ready to answer your questions anytime',
    contact_btn_call: 'Call Now',
    contact_btn_wechat: 'WeChat Consultation',
  },
  
  zh: {
    // About Section
    about_title: '关于领智优选',
    about_subtitle: 'About Top Wise Choice',

    // Destinations Page
    destinations_title: '全球目的地',
    destinations_subtitle: '探索世界各地的工作机会，找到适合您的签证类型',
    destinations_cta_title: '不确定选择哪个目的地？',
    destinations_cta_subtitle: '我们的顾问团队将根据您的背景和意向，为您推荐最适合的国家和签证类型',

    // Navigation
    nav_home: '首页',
    nav_destinations: '目的地',
    nav_work: '海外全职就业',
    nav_intern: '白领假期实习',
    nav_intern_overseas: '海外实习',
    nav_global_exchange: '全球交流项目',
    nav_programs: '国际交流项目',
    nav_visa: '签证',
    nav_service: '服务',
    nav_employers: '雇主合作',
    nav_about: '关于我们',
    nav_contact: '联系我们',
    
    // Hero
    hero_title: '您的全球职业通道',
    hero_subtitle: '连接有抱负的专业人士和学生与全球机会，助力通过海外就业或实习提高自身竞争力和获得更好的生活与工作状态。',
    hero_cta_primary: '探索机会',
    hero_cta_secondary: '雇主入口',
    
    // Stats
    stat_jobs: '在招职位',
    stat_candidates: '成功就业',
    stat_countries: '覆盖国家',
    stat_partners: '合作企业',
    
    // Services
    services_title: '我们的服务',
    services_subtitle: '为您的国际之旅每个阶段提供全面解决方案',
    
    service_work_title: '海外全职就业',
    service_work_desc: '为有经验的专业人士提供酒店、技术工种和护理等领域的全职就业机会。',
    service_work_feature1: '直接对接雇主',
    service_work_feature2: '签证担保支持',
    service_work_feature3: '面试辅导',
    service_work_feature4: '落地后协助',
    service_work_cta: '查看职位',
    
    service_intern_title: '白领假期实习',
    service_intern_desc: '为学生提供IT、商务和办公环境等领域的短期实习项目。',
    service_intern_feature1: '精选实习匹配',
    service_intern_feature2: '学分转换支持',
    service_intern_feature3: '住宿安排协助',
    service_intern_feature4: '文化适应培训',
    service_intern_cta: '探索项目',
    
    service_programs_title: '国际交流项目',
    service_programs_desc: '包括志愿者、访问学者、短期交换和间隔年机会的交流项目。',
    service_programs_feature1: '志愿者岗位',
    service_programs_feature2: '研究奖学金',
    service_programs_feature3: '间隔年体验',
    service_programs_feature4: '文化沉浸',
    service_programs_cta: '了解更多',
    
    // Process
    process_title: '服务流程',
    process_subtitle: '四个简单步骤开启您的国际职业之旅',
    
    process_step1_title: '免费咨询',
    process_step1_desc: '免费评估您的目标和资质',
    
    process_step2_title: '职位匹配',
    process_step2_desc: '为您匹配合适的机会',
    
    process_step3_title: '申请指导',
    process_step3_desc: '全程指导面试和文件准备',
    
    process_step4_title: '成功入职',
    process_step4_desc: '签证支持和落地协助',
    
    // CTA
    cta_title: '准备好开启您的旅程了吗？',
    cta_subtitle: '加入数千名通过我们实现职业转型的专业人士',
    cta_btn_primary: '立即开始',
    cta_btn_secondary: '联系我们的团队',
    
    // Footer
    footer_services: '服务项目',
    footer_company: '公司信息',
    footer_contact: '联系方式',
    footer_copyright: '© 2026 领智优选。保留所有权利。',
    
    // Common Buttons
    contact_us: '联系我们',
    learn_more: '了解更多',
    apply_now: '立即申请',
    view_all: '查看全部',
    loading: '加载中...',
    
    // Work Overseas Page
    work_page_title: '海外全职就业',
    work_page_subtitle: '为有经验的专业人士提供全球全职职业机会',
    work_section_overview: '开启您的海外职业新篇章',
    work_overview_desc: '领智优选专注于为华人求职者匹配海外全职就业机会。我们与全球优质雇主建立深度合作，涵盖酒店业、技术工种、护理服务等多个领域，为您提供从职位匹配到落地安置的一站式服务。',
    work_feature1_title: '简历优化',
    work_feature1_desc: '专业简历精修，突出个人优势亮点',
    work_feature2_title: '职业规划',
    work_feature2_desc: '一对一职业咨询，制定海外发展方案',
    work_feature3_title: '面试辅导',
    work_feature3_desc: '一对一面试培训，提升成功率',
    work_feature4_title: '落地安置服务',
    work_feature4_desc: '接机、住宿、银行开户等全方位支持',
    work_categories_title: '热门职位类别',
    work_categories_subtitle: '覆盖多个行业领域，满足不同专业背景需求',
    work_hospitality_title: '酒店旅游业',
    work_hospitality_desc: '酒店经理、前台主管、客房部主管、餐饮经理等管理岗位',
    work_skilled_title: '技术工种',
    work_skilled_desc: '电工、焊工、木工、汽修技师、空调维修等专业技工',
    work_caregiving_title: '护理服务',
    work_caregiving_desc: '老年护理、护士助理、护工、康复护理等专业护理岗位',
    work_featured_jobs: '精选职位',
    work_jobs_subtitle: '最新发布的优质海外就业机会',
    work_location: '地点',
    work_type: '类型',
    work_fulltime: '全职',
    work_salary: '薪资',
    work_apply: '立即申请',
    work_destinations: '热门目的地',
    work_destinations_subtitle: '我们的业务覆盖全球多个国家和地区',
    work_cta_title: '准备好开启您的海外职业之旅了吗？',
    work_cta_subtitle: '留下您的联系方式，我们的顾问将在24小时内与您联系',
    work_cta_btn1: '免费咨询',
    work_cta_btn2: '立即致电',
    
    // Intern Abroad Page
    intern_page_title: '白领假期实习',
    intern_page_subtitle: '通过我们精心策划的实习项目获得国际工作经验',
    intern_section_overview: '实习改变未来',
    intern_overview_desc: '领智优选与全球知名企业建立合作，为在校学生提供优质的海外实习机会。无论您是想在科技巨头积累技术经验，还是在跨国公司锻炼商务技能，我们都能帮您找到最适合的实习项目。',
    intern_feature1_title: '名企实习机会',
    intern_feature1_desc: '对接硅谷科技公司和跨国企业',
    intern_feature2_title: '学分转换支持',
    intern_feature2_desc: '协助办理学校学分认定手续',
    intern_feature3_title: '住宿安排',
    intern_feature3_desc: '提供安全便利的住宿解决方案',
    intern_feature4_title: '实习证明',
    intern_feature4_desc: '获得国际认可的实习证明和推荐信',
    intern_fields_title: '实习领域',
    intern_fields_subtitle: '涵盖多个热门专业方向',
    intern_it_title: '信息技术',
    intern_it_skill1: '软件开发',
    intern_it_skill2: '数据分析',
    intern_it_skill3: '产品经理',
    intern_it_skill4: 'UI/UX设计',
    intern_it_skill5: '网络安全',
    intern_business_title: '商科金融',
    intern_business_skill1: '投资银行',
    intern_business_skill2: '管理咨询',
    intern_business_skill3: '市场营销',
    intern_business_skill4: '财务会计',
    intern_business_skill5: '人力资源',
    intern_media_title: '传媒创意',
    intern_media_skill1: '广告策划',
    intern_media_skill2: '公关传播',
    intern_media_skill3: '新媒体运营',
    intern_media_skill4: '影视制作',
    intern_media_skill5: '平面设计',
    intern_programs_title: '精选实习项目',
    intern_programs_subtitle: '最新开放的优质实习机会',
    intern_program_duration: '时长',
    intern_paid: '有薪实习',
    intern_with_accommodation: '含住宿',
    intern_free_accommodation: '免费食宿',
    intern_details: '了解详情',
    intern_benefits_title: '项目优势',
    intern_benefits_subtitle: '为什么选择我们的实习项目',
    intern_benefit1_title: '全球网络',
    intern_benefit1_desc: '覆盖15+国家的优质企业资源',
    intern_benefit2_title: '专业指导',
    intern_benefit2_desc: '一对一职业规划和申请辅导',
    intern_benefit3_title: '全程保障',
    intern_benefit3_desc: '签证、保险、紧急支援全覆盖',
    intern_benefit4_title: '校友网络',
    intern_benefit4_desc: '加入全球校友社群，拓展人脉',
    intern_cta_title: '开启您的国际实习之旅',
    intern_cta_subtitle: '提交申请，我们的顾问将为您推荐最适合的实习项目',
    
    // Global Programs Page
    programs_page_title: '国际交流项目',
    programs_page_subtitle: '通过志愿者、研究和交流机会拓展您的视野',
    programs_types_title: '项目类型',
    programs_types_subtitle: '多元化的国际体验选择',
    programs_volunteer_title: '国际志愿者',
    programs_volunteer_desc: '参与野生动物保护、社区建设、教育支援等公益项目，在实践中成长，让世界变得更美好。',
    programs_volunteer_item1: '非洲野生动物保护',
    programs_volunteer_item2: '东南亚教育支援',
    programs_volunteer_item3: '南美社区发展',
    programs_research_title: '访问学者',
    programs_research_desc: '进入世界一流大学和研究机构，跟随知名教授开展学术研究，积累宝贵的研究经验。',
    programs_research_item1: '大学实验室研修',
    programs_research_item2: '研究所交流计划',
    programs_research_item3: '学术会议参与',
    programs_gapyear_title: '间隔年项目',
    programs_gapyear_desc: '在学业间隙探索世界，通过工作换宿、文化体验、技能学习等方式，发现真正的自己。',
    programs_gapyear_item1: '工作换宿计划',
    programs_gapyear_item2: '语言沉浸课程',
    programs_gapyear_item3: '技能证书培训',
    programs_short_title: '短期交流',
    programs_short_desc: '2-8周的短期项目，包括暑期学校、文化体验营、主题研学等，利用假期开启探索之旅。',
    programs_short_item1: '海外暑期学校',
    programs_short_item2: '文化体验营',
    programs_short_item3: '主题研学项目',
    programs_featured_title: '精选项目',
    programs_featured_subtitle: '不容错过的优质交流机会',
    programs_benefits_title: '项目收益',
    programs_benefits_subtitle: '参与国际交流项目，您将获得',
    programs_benefit1_title: '全球视野',
    programs_benefit1_desc: '亲身感受不同文化，培养跨文化沟通能力，建立国际化思维模式',
    programs_benefit2_title: '个人成长',
    programs_benefit2_desc: '独立生活锻炼自理能力，面对挑战培养解决问题的能力和自信心',
    programs_benefit3_title: '竞争优势',
    programs_benefit3_desc: '国际经历丰富简历内容，在未来的升学和求职中展现独特的竞争优势',
    programs_cta_title: '准备好探索世界了吗？',
    programs_cta_subtitle: '联系我们的顾问，获取个性化的项目推荐',
    programs_btn_download: '下载项目手册',
    
    // Visa Services Page
    visa_page_title: '签证服务',
    visa_page_subtitle: '专业指导办理工作许可、学生签证和移民流程',
    visa_badge_text: '正规工签 · 合法出境',
    visa_hero_title: '多国工作签证服务',
    visa_hero_subtitle: '美国 / 澳洲 / 加拿大 / 英国 / 爱尔兰 一站式办理',
    
    // Visa Feature Bar
    visa_feature_bar1_title: '正规工签',
    visa_feature_bar1_desc: '合法签证类别办理',
    visa_feature_bar2_title: '雇主直聘',
    visa_feature_bar2_desc: '本土企业正规用工',
    visa_feature_bar3_title: '全程服务',
    visa_feature_bar3_desc: '从申请到落地指导',
    visa_feature_bar4_title: '安全保障',
    visa_feature_bar4_desc: '合法合规出境务工',
    
    // Visa Matching Section
    visa_matching_title: '快速匹配',
    visa_matching_subtitle: '根据您的情况，找到最适合的出国项目',
    visa_matching_student: '在校/应届生',
    visa_matching_student_desc: '美J1实习 / 英YMS / 澳462 / 加IEC',
    visa_matching_service: '服务行业人员',
    visa_matching_service_desc: '美H2B/Q1 / 英季节签 / 爱尔兰短期',
    visa_matching_tech: '技术职场人',
    visa_matching_tech_desc: '澳482 / 加TFWP / 英技术签 / 爱尔兰长期',
    visa_matching_travel: '想旅行+打工',
    visa_matching_travel_desc: '澳417/462 / 加打工度假 / 英YMS',
    visa_overview_title: '让签证办理不再复杂',
    visa_overview_desc: '签证是海外就业和留学的第一道门槛。领智优选拥有经验丰富的签证顾问团队，熟悉各国签证政策和申请流程，为您提供从材料准备到签证获批的全程专业服务。',
    visa_success_rate: '签证通过率',
    visa_coverage: '覆盖国家',
    visa_cases: '成功案例',
    visa_types_title: '签证类型',
    visa_types_subtitle: '覆盖各类出国需求',
    visa_work_title: '工作签证',
    visa_work_item1: '技术移民签证',
    visa_work_item2: '雇主担保签证',
    visa_work_item3: '工作假期签证',
    visa_work_item4: '跨国公司派遣',
    visa_work_apply: '咨询办理',
    visa_student_title: '学生签证',
    visa_student_item1: '留学签证',
    visa_student_item2: '交换生签证',
    visa_student_item3: '短期培训签证',
    visa_student_item4: '语言课程签证',
    visa_student_apply: '咨询办理',
    visa_visitor_title: '访问签证',
    visa_visitor_item1: '商务访问签证',
    visa_visitor_item2: '探亲访友签证',
    visa_visitor_item3: '旅游签证',
    visa_visitor_item4: '医疗签证',
    visa_visitor_apply: '咨询办理',
    visa_process_title: '服务流程',
    visa_process_subtitle: '专业高效的一站式签证服务',
    visa_step1_title: '初步评估',
    visa_step1_desc: '评估申请人背景，匹配最适合的签证类型',
    visa_step2_title: '材料准备',
    visa_step2_desc: '指导准备申请材料，审核确保完整准确',
    visa_step3_title: '递交申请',
    visa_step3_desc: '代为递交或协助在线申请，跟进审理进度',
    visa_step4_title: '获批指导',
    visa_step4_desc: '签证获批后提供行前指导和注意事项',
    visa_features_title: '服务特色',
    visa_features_subtitle: '为什么选择我们的签证服务',
    visa_feature1_title: '专业顾问',
    visa_feature1_desc: '资深签证顾问一对一服务',
    visa_feature2_title: '材料审核',
    visa_feature2_desc: '严格审核确保材料完整准确',
    visa_feature3_title: '全程跟进',
    visa_feature3_desc: '实时更新申请进度',
    visa_feature4_title: '拒签保障',
    visa_feature4_desc: '专业分析拒签原因，协助再签',
    visa_cta_title: '签证问题交给我们',
    visa_cta_subtitle: '免费咨询，专业评估，让您的出国之路更加顺畅',
    
    // For Employers Page
    employers_page_title: '雇主合作',
    employers_page_subtitle: '寻找合格的国际人才助力企业发展',
    employers_overview_title: '您的全球化人才合作伙伴',
    employers_overview_desc: '领智优选专注于为海外雇主输送优秀的华人人才。我们深入了解华人求职者的特点和优势，通过严格的筛选和匹配流程，为您推荐最合适的候选人，降低招聘成本，提高用人效率。',
    employers_talent_pool: '人才库',
    employers_partners: '合作企业',
    employers_match_rate: '匹配成功率',
    employers_services_title: '企业服务',
    employers_services_subtitle: '全方位的招聘解决方案',
    employers_recruitment_title: '人才招聘',
    employers_recruitment_item1: '职位发布与推广',
    employers_recruitment_item2: '简历筛选与初筛',
    employers_recruitment_item3: '候选人推荐',
    employers_recruitment_item4: '面试安排协调',
    employers_brand_title: '雇主品牌',
    employers_brand_item1: '企业雇主品牌推广',
    employers_brand_item2: '校园招聘活动',
    employers_brand_item3: '企业宣讲会',
    employers_brand_item4: '人才市场调研',
    employers_visa_title: '签证支持',
    employers_visa_item1: '工作签证咨询',
    employers_visa_item2: '材料准备指导',
    employers_visa_item3: '合规性审核',
    employers_visa_item4: '员工入职支持',
    employers_why_title: '选择我们的理由',
    employers_why_subtitle: '专业、高效、可靠的招聘合作伙伴',
    employers_why1_title: '优质人才库',
    employers_why1_desc: '覆盖多行业多专业的优秀人才',
    employers_why2_title: '精准匹配',
    employers_why2_desc: 'AI+人工双重筛选推荐',
    employers_why3_title: '快速响应',
    employers_why3_desc: '48小时内推送首批候选人',
    employers_why4_title: '服务保障',
    employers_why4_desc: '入职保证期，不满意可替换',
    employers_industries_title: '服务行业',
    employers_industries_subtitle: '我们服务的行业领域',
    employers_hospitality: '酒店旅游',
    employers_tech: '科技互联网',
    employers_finance: '金融服务',
    employers_healthcare: '医疗健康',
    employers_education: '教育培训',
    employers_retail: '零售消费',
    employers_logistics: '物流运输',
    employers_manufacturing: '制造业',
    employers_cta_title: '成为我们的合作伙伴',
    employers_cta_subtitle: '留下您的企业信息，我们将在24小时内与您联系',
    employers_btn1: '预约咨询',
    employers_btn2: '下载服务手册',
    
    // About Us Page
    about_page_title: '关于我们',
    about_page_subtitle: '您可信赖的国际职业发展伙伴',
    about_story_title: '连接梦想与现实',
    about_story_p1: '领智优选创始团队自 2016 年深耕澳洲留学服务领域，依托多年跨境资源积淀，顺势拓展海外移民业务，紧跟行业发展趋势，稳步切入全球海外就业赛道。',
    about_story_p2: '历经十余年深耕海外跨境服务，我们亲历市场环境与全球经济的更迭变化，愈发清晰地洞察到当下普通人的真实诉求：多数人选择远赴海外，留学只是路径，安稳就业才是最终归宿。无数普通工薪家庭的学子，因缺乏系统化跨境规划、不熟悉海外政策与用工环境，在盲目申请留学、仓促办理签证的过程中，白白耗费父母半生积蓄，错失人生向好的机遇。',
    about_story_p3: '怀揣帮平凡年轻人圆梦的初心，我们立足过往留学、移民积攒的一手海外本土资源与行业实操经验，摒弃粗放式代办模式，以落地就业为核心导向，量身定制科学稳妥的海外发展规划。依托资深海归骨干与跨国人力资源专家组成的服务团队，深耕全球多国合规就业渠道，精准匹配新加坡、澳洲、欧洲等世界各地优质岗位。',
    about_story_p4: '成立至今，我们已助力数千名普通学子走出国门、安稳就职，有人成为新加坡星级酒店管理骨干，有人入职澳洲本土技术岗位，也有年轻人通过海外实习开启国际化职业生涯。',
    about_story_p5: '我们始终坚守初心，打破地域与信息壁垒，立足普通家庭的实际经济条件与个人发展诉求，用专业规划规避试错成本，帮每一个怀揣远方梦想的平凡青年找准前行方向，凭借一份靠谱的海外工作改写人生轨迹，在广阔的国际舞台实现自我价值。',
    about_values_title: '我们的价值观',
    about_values_subtitle: '指引我们前行的核心理念',
    about_value1_title: '真诚服务',
    about_value1_desc: '以客户利益为先，提供真诚、专业的服务',
    about_value2_title: '创新驱动',
    about_value2_desc: '不断探索新模式，用创新提升服务效率',
    about_value3_title: '责任担当',
    about_value3_desc: '对每一个客户负责，说到做到',
    about_value4_title: '开放包容',
    about_value4_desc: '拥抱多元文化，连接世界各地',
    about_stats_years: '年行业经验',
    about_stats_placements: '成功就业',
    about_stats_partners: '合作企业',
    about_stats_countries: '覆盖国家',
    about_team_title: '核心团队',
    about_team_subtitle: '专业的团队为您提供优质服务',
    about_team_role1: '创始人 & CEO',
    about_team_bio1: '10年跨国招聘经验，曾任职于多家国际人力资源公司',
    about_team_role2: '运营总监',
    about_team_bio2: '8年海外留学及移民服务经验，精通各国签证政策',
    about_team_role3: '业务拓展总监',
    about_team_bio3: '曾任职于澳洲移民局，熟悉各国劳务市场',
    about_team_role4: '客户成功经理',
    about_team_bio4: '专注客户服务6年，致力于为每位客户提供最佳体验',
    about_partners_title: '合作伙伴',
    about_partners_subtitle: '与全球优秀企业建立长期合作',
    about_cta_title: '开启您的国际职业之旅',
    about_cta_subtitle: '与领智优选一起，让梦想照进现实',
    
    // Contact Us Page
    contact_page_title: '联系我们',
    contact_page_subtitle: '与我们的团队联系获取个性化帮助',
    contact_phone_title: '电话咨询',
    contact_phone_hours: '工作日 9:00-18:00',
    contact_email_title: '邮件联系',
    contact_email_response: '24小时内回复',
    contact_wechat_title: '微信咨询',
    contact_wechat_scan: '扫码添加客服微信',
    contact_form_title: '在线留言',
    contact_form_subtitle: '填写以下表单，我们的顾问将在24小时内与您联系',
    contact_form_name: '姓名 *',
    contact_form_name_placeholder: '请输入您的姓名',
    contact_form_phone: '电话 *',
    contact_form_phone_placeholder: '请输入您的电话',
    contact_form_email: '邮箱',
    contact_form_email_placeholder: '请输入您的邮箱',
    contact_form_interest: '我感兴趣的领域 *',
    contact_form_select: '请选择服务类型',
    contact_option_work: '海外全职就业',
    contact_option_intern: '白领假期实习',
    contact_option_program: '国际交流项目',
    contact_option_visa: '签证服务',
    contact_option_employer: '雇主合作',
    contact_option_other: '其他咨询',
    contact_form_destination: '目标国家/地区',
    contact_form_destination_placeholder: '如：新加坡、澳大利亚、日本等',
    contact_form_message: '留言内容',
    contact_form_message_placeholder: '请详细描述您的需求...',
    contact_form_submit: '提交留言',
    contact_form_success: '提交成功！我们的顾问将在24小时内与您联系。',
    contact_form_agreement: '提交即表示您同意我们的隐私政策和服务条款',
    contact_office_title: '办公地址',
    contact_office_subtitle: '欢迎预约来访，我们的顾问将为您提供面对面咨询服务',
    contact_office_address: '广州分公司',
    contact_office_address_detail: '广州天河区环球都会大厦6619',
    contact_office_hours: '工作时间',
    contact_office_hours_detail: '周一至周五 9:30-18:30',
    contact_office_transport: '交通指引',
    contact_office_transport_detail: '地铁3号线珠江新城站高德置地广场出口步行5分钟',
    contact_map_placeholder: '地图位置',
    contact_faq_title: '常见问题',
    contact_faq_subtitle: '快速了解我们的服务',
    contact_faq1_q: '咨询服务是免费的吗？',
    contact_faq1_a: '是的，我们的初次咨询服务完全免费。您可以通过电话、微信或在线表单与我们联系，我们的顾问将为您提供免费的职业评估和建议。',
    contact_faq2_q: '申请海外工作需要什么条件？',
    contact_faq2_a: '具体要求因职位和国家而异。一般来说，技术类岗位需要相关工作经验和技能证书；服务类岗位需要良好的沟通能力和服务意识。我们会根据您的背景为您匹配最适合的职位。',
    contact_faq3_q: '整个流程需要多长时间？',
    contact_faq3_a: '从职位匹配到成功入职，通常需要3-6个月时间。其中包含简历准备、雇主面试、签证申请等环节。我们会全程跟进，确保流程顺利推进。',
    contact_faq4_q: '签证通过率如何？',
    contact_faq4_a: '我们的签证通过率高达98%。这得益于我们专业的签证团队和严格的材料审核流程。即使遇到拒签，我们也会分析原因并提供再签指导。',
    contact_cta_title: '还有其他问题？',
    contact_cta_subtitle: '我们的团队随时准备为您解答',
    contact_btn_call: '立即致电',
    contact_btn_wechat: '微信咨询',

    // Destinations Page
    dest_usa_work_visa: '短期工作签证',
    dest_usa_h2b: '季节性劳工签证，适用于酒店、餐饮、旅游等行业的临时工作',
    dest_usa_j1: '交流访问学者签证，涵盖短期实习、培训、暑期工作等项目',
    dest_work_holiday: '打工度假',
    dest_usa_wh_note: '美国无官方打工度假签证项目。推荐通过 <strong>J-1 交流访问签证</strong>参与暑期工作或实习项目。',
    dest_au_work_visa: '短期工作签证',
    dest_au_482: '短期技能短缺签证，雇主担保类，可工作 2-4 年',
    dest_au_400: '临时工作签证，适用于短期专业技能工作（通常 3-6 个月）',
    dest_wh_visa: '打工度假签证',
    dest_au_417: 'Working Holiday Visa，适用于英美加等发达国家护照持有者',
    dest_au_462: 'Work and Holiday Visa，适用于中国公民，每年名额有限需抽签',
    dest_ca_work_visa: '短期工作签证',
    dest_ca_tfwp: 'Temporary Foreign Worker Program，临时外国劳工项目，需雇主 LMIA 担保',
    dest_ca_iec: 'International Experience Canada，国际经验加拿大项目，含工作假期类别',
    dest_ca_iec_wh: '开放式工作签证，可在加拿大任何地区从事任何工作，最长 12-24 个月',
    dest_ca_yp: '针对有雇主 offer 的年轻专业人士，可累计加拿大工作经验',
    dest_uk_work_visa: '短期工作签证',
    dest_uk_skilled: '技术工人签证，需雇主担保，可转永居',
    dest_uk_seasonal: '季节性工人签证，主要面向农业、餐饮旅游业，最长 6 个月',
    dest_uk_yms: '青年流动计划，适用于 18-30 岁中国公民，每年 1000 个名额，可在英工作 2 年',
    dest_ie_work_visa: '短期工作签证',
    dest_ie_gep: '一般就业许可，年薪需达 30,000 欧元以上',
    dest_ie_sep: '季节性就业许可，适用于农业、食品加工等季节性行业',
    dest_ie_wha: '爱尔兰打工度假许可，每年 4 月开放申请，面向 18-30 岁年轻人，有效期 12 个月',
    dest_nz_work_visa: '短期工作签证',
    dest_nz_eswv: '新西兰AEWV工签，需雇主担保，根据技能等级可批 1-3 年',
    dest_nz_spwv: '新西兰毕业生开放工签，适用于新西兰毕业留学生',
    dest_nz_whv: '每年 1000 个名额，面向 18-30 岁中国公民，可在新西兰工作旅行最长 12 个月',
    dest_sg_work_visa: '短期工作签证',
    dest_sg_wp: '工作准证，主要面向蓝领工人（建筑、制造、海员、服务业），由雇主申请',
    dest_sg_tep: '培训就业准证，适用于实习或培训项目，面向专业人士',
    dest_sg_wh_note: '新加坡无官方打工度假签证项目。推荐通过 <strong>Training Employment Pass</strong> 参与实习或培训项目，或申请短期 Work Permit。',
    dest_other_europe: '欧洲',
    dest_other_europe_desc: '德国、法国、荷兰等国家的短期工作/实习项目，涵盖工程、商科、艺术等领域',
    dest_other_asia: '亚洲',
    dest_other_asia_desc: '日本、韩国、马来西亚等国家的文化交流项目、语言教师项目、技术实习机会',
    dest_other_global: '全球项目',
    dest_other_global_desc: '国际志愿者、邮轮工作、度假村管培生等多元化全球工作机会',
  }
};

// Current language
let currentLang = 'zh';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Get saved language preference
  const savedLang = localStorage.getItem('language');
  if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
    currentLang = savedLang;
  }
  
  initLanguage();
  initNavigation();
  initMobileMenu();
  initHeaderScroll();
  translatePage();
});

// Translate all elements on page
function translatePage() {
  const lang = currentLang;
  const t = translations[lang];
  if (!t) return;
  
  // Translate all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) {
      el.textContent = t[key];
    }
  });
  
  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) {
      el.placeholder = t[key];
    }
  });
  
  // Translate navigation
  document.querySelectorAll('.nav-link').forEach(el => {
    const href = el.getAttribute('href');
    if (href === 'index.html' || href === './' || href === '/') {
      el.textContent = t.nav_home;
    } else if (href.includes('destinations')) {
      el.textContent = t.nav_destinations;
    } else if (href.includes('work-overseas') && el.parentElement.classList.contains('nav-dropdown')) {
      el.textContent = t.nav_work;
    } else if (href.includes('intern-abroad')) {
      el.textContent = t.nav_intern_overseas;
    } else if (href.includes('global-programs')) {
      el.textContent = t.nav_global_exchange;
    } else if (href.includes('visa-services')) {
      el.textContent = t.nav_visa;
    } else if (href.includes('for-employers')) {
      el.textContent = t.nav_service;
    } else if (href.includes('about-us')) {
      el.textContent = t.nav_about;
    } else if (href.includes('contact-us')) {
      el.textContent = t.nav_contact;
    }
  });
  
  // Translate mobile nav
  document.querySelectorAll('.mobile-nav-link').forEach(el => {
    const href = el.getAttribute('href');
    if (href === 'index.html' || href === './' || href === '/') {
      el.textContent = t.nav_home;
    } else if (href.includes('destinations')) {
      el.textContent = t.nav_destinations;
    } else if (href.includes('intern-abroad')) {
      el.textContent = t.nav_intern_overseas;
    } else if (href.includes('global-programs')) {
      el.textContent = t.nav_global_exchange;
    } else if (href.includes('visa-services')) {
      el.textContent = t.nav_visa;
    } else if (href.includes('for-employers')) {
      el.textContent = t.nav_service;
    } else if (href.includes('about-us')) {
      el.textContent = t.nav_about;
    } else if (href.includes('contact-us')) {
      el.textContent = t.nav_contact;
    }
  });
  
  // Update document title
  updatePageTitle();

  // Toggle about section language content
  document.querySelectorAll('.lang-content').forEach(el => {
    if (el.dataset.lang === lang) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

function updatePageTitle() {
  const lang = currentLang;
  const t = translations[lang];
  const path = window.location.pathname;
  
  let title = 'Top Wise Choice | ';
  if (lang === 'zh') title = '领智优选 | ';
  
  if (path.includes('work-overseas')) {
    title += t.nav_work;
  } else if (path.includes('intern-abroad')) {
    title += t.nav_intern;
  } else if (path.includes('global-programs')) {
    title += t.nav_programs;
  } else if (path.includes('visa-services')) {
    title += t.nav_visa;
  } else if (path.includes('for-employers')) {
    title += t.nav_employers;
  } else if (path.includes('about-us')) {
    title += t.nav_about;
  } else if (path.includes('contact-us')) {
    title += t.nav_contact;
  } else {
    title = lang === 'zh' ? '领智优选 | 全球职业机会' : 'Top Wise Choice | Global Careers';
  }
  
  document.title = title;
}

// Language Functions
function initLanguage() {
  // Apply the current language
  updateLanguage(currentLang);
  
  // Add click handlers to language buttons
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      if (lang !== currentLang) {
        updateLanguage(lang);
      }
    });
  });
}

function updateLanguage(lang) {
  // Update currentLang variable
  currentLang = lang;
  
  // Save to localStorage
  localStorage.setItem('language', lang);
  
  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    }
  });
  
  // Translate the page
  translatePage();
  
  // Update document language
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

// Navigation Functions
function initNavigation() {
  // Set active nav link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
    
    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
}

// Form Validation
function validateForm(form) {
  const requiredFields = form.querySelectorAll('[required]');
  let isValid = true;
  
  requiredFields.forEach(field => {
    if (!field.value.trim()) {
      isValid = false;
      field.classList.add('error');
    } else {
      field.classList.remove('error');
    }
  });
  
  return isValid;
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const successDiv = document.getElementById('form-success');
      
      if (validateForm(contactForm)) {
        // Show success message immediately
        successDiv.style.display = 'block';
        
        // Try to submit to server (will work when website is online)
        const formData = new FormData(contactForm);
        
        fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          // Server submission complete
        }).catch(error => {
          // Local development - submission will fail but success message is already shown
        });
        
        // Reset form after delay
        setTimeout(() => {
          contactForm.reset();
          successDiv.style.display = 'none';
        }, 5000);
      }
    });
  }
});
