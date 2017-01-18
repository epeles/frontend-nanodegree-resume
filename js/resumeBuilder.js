var bio = {
	"name": "Eitan Menahem Peles",
	"role": "Web Developer",
	"age": 35,
	"welcomeMessage": "Career built in the area of Information Technology, with solid experience in Web Developer (Front End/Back End) and Database.", 
    "skills": ["JavaScript", "HTML5", "CSS3", "SQL"],
    "biopic": "images/eitan5x7.png",
	"contacts": 
	{
		"mobile": "+55-21-994872360",
		"facebook": "facebook.com/epeles",
		"twitter": "@epeles",
		"email": "epeles@gmail.com",
		"skype": "epeles",
		"location": "Rio de Janeiro"
	}
}

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$('#header').prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$('#header').prepend(formattedName);
	var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
	$('#header').append(formattedImage);
	var formattedMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$('#header').append(formattedMessage); 
	$('#header').append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$('#skills').append(formattedSkills);
	}
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts.skype);
	$('#topContacts').append(formattedMobile,formattedEmail,formattedSkype,formattedtwitter);
	$('#footerContacts').append(formattedMobile,formattedEmail,formattedSkype,formattedtwitter);
}

var work = {
	"jobs": [
	{ 
     "employer": "Petrobras", 
     "title": "Web Developer", 
     "location": "Rio de Janeiro", 
     "dates": "March 2008 - February 2016",
     "description": "<b>Responsible for the analysis and implementation of data extraction from any data repository / database in order to display to the user the content in a intuitive way:</b><br>- Management of all stages of the implementation process of the Babylon-Enterprise tool in the entire company. Acquisition of virtual machines, server configuration, client preparation and implementation / client distribution to 120,000 users;<br>- Weekly usage statistics with the Log Parser tool;<br>- Responsible of dozens of corporate glossaries, extracting data from any database, using an ETL tool, in order to display information content to end users in a quick and friendly way, using Front End;<br>- Content development, training end users and new spaces creations of collaboration tools such as MS SharePoint 2013, Wiki Confluence, JIRA, JForum, Blog Apache Roller and IBM Quickr;<br>- Preparation of manuals and FAQs for the Babylon-Enterprise and collaboration tools, and fourth-level support for these tools."
	},
	{
	 "employer": "Norskan Offshore", 
     "title": "Intern", 
     "location": "Rio de Janeiro", 
     "dates": "January 2006 - July 2007",
     "description": "<b>Leading provider of support vessels and subsea services to the Brazilian Market</b><br>- Programming using SQL and Delphi language;<br>- Desktops/Notebook maintenance;<br>- Maintenance and configuration of computer networks;<br>- Provided technical support for internal clients."
	}
	]
}

work.display = function(){
	for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
	var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedWorkLocation);
	var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedWorkDates);
	var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedWorkDescription);
	};
}

var education = {
	"schools": [
		   {
           "name": "Universidade Estácio de Sá",
           "location": "Rio de Janeiro",
           "degree": "Bachelor",
           "majors": "Computer Science",
           "dates": "February 2004 - December 2008",
           "url": "http://estacio.br"
    }],      
    "onlineCourses": 
    	   {
           "title": "Nanodegree Front-End Developer",
           "school": "Udacity",
           "dates": "December 2016 - current",
           "url": "http://udacity.com"
    }       
}

education.display = function(){
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajor);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolUrl = HTMLonlineURL.replace("%data%",education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolUrl);
	};
	$(".education-entry:last").append(HTMLonlineClasses);
	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses.title);
	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses.school);
	$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
	var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses.dates);
	$(".education-entry:last").append(formattedOnlineDates);
	var formattedOnlineUrl = HTMLonlineURL.replace("%data%",education.onlineCourses.url);
	$(".education-entry:last").append(formattedOnlineUrl);
}

var projects = {
        "title": "Babylon Enterprise", 
        "dates": "2008 - 2016",
        "description": "Management of all stages of the implementation process of the Babylon-Enterprise tool in the entire company. Acquisition of virtual machines, server configuration, client preparation and implementation / client distribution to 120,000 users",
        "images": "images/babylon.png"
}

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.title);
	$(".project-entry:last").append(formattedprojectTitle);
	var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.dates);
	$(".project-entry:last").append(formattedprojectDates);
	var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.description);
	$(".project-entry:last").append(formattedprojectDescription);
	var formattedprojectImage = HTMLprojectImage.replace("%data%",projects.images);	
	$(".project-entry:last").append(formattedprojectImage);
}

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
}

bio.display();
work.display();
education.display();
projects.display();

//$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);