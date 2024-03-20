export const FormsFieldsData = {
  personalInfo: {
    label: "Personal Info",
    sections: [
      {
        label: "Personal Data",
        fields: [
          { label: "First Name", placeholder: "First Name", width:"w-2/5" },
          { label: "Last Name", placeholder: "Last Name", width:"w-2/5" },
          { label: "Email", placeholder: "Email" },
          { label: "Phone", placeholder: "Phone" },
          { label: "Country", placeholder: "Country" },
          { label: "City", placeholder: "City" },
        ],
      },
    ],
  },
  workExperience: {
    label: "Work Experience",
    sections: [
      {
        label: "Work Experience",
        fields: [
          { label: "Company", placeholder: "Company" },
          { label: "Position", placeholder: "Position" },
          { label: "Start Date", placeholder: "Start Date" },
          { label: "End Date", placeholder: "End Date" },
          { label: "Description", placeholder: "Description", width:"w-full" },
        ],
      },
    ],
  },
  education: {
    label: "Education",
    sections: [
      {
        label: "Education",
        fields: [
          { label: "Institution", placeholder: "Institution" },
          { label: "Degree", placeholder: "Degree" },
          { label: "Field of Study", placeholder: "Field of Study" },
          { label: "Start Date", placeholder: "Start Date" },
          { label: "End Date", placeholder: "End Date" },
        ],
      },
    ],
  },
};
