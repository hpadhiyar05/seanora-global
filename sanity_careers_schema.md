// schemas/job.js
export default {
  name: 'job',
  title: 'Job Posting',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g., Product Designer, Engineering Manager',
    },
    {
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          'Development',
          'Design',
          'Marketing',
          'Customer Service',
          'Operations',
          'Finance',
          'Management',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Job Type',
      type: 'string',
      options: {
        list: [
          'Full-time',
          'Part-time',
          'Contract',
          'Internship',
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., 100% Remote, Hybrid – Lagos, Nigeria, On-site',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'experience',
      title: 'Experience Level',
      type: 'string',
      description: 'e.g., 3–5 years, 6+ years',
    },
    {
      name: 'salary',
      title: 'Salary Range',
      type: 'string',
      description: 'e.g., $80,000 – $110,000',
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief 1-2 sentence summary shown on the main careers board.',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'about',
      title: 'About the Role',
      type: 'text',
      rows: 5,
      description: 'Detailed paragraph shown at the top of the Job Details page.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional bullet points for bonus qualifications.',
    },
    {
      name: 'benefits',
      title: 'What We Offer (Benefits)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isActive',
      title: 'Is Active?',
      type: 'boolean',
      description: 'Toggle off to temporarily hide the job without deleting it.',
      initialValue: true,
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'department',
    },
  },
};
```

## 2. Preparing the Frontend for Integration

Currently, your UI uses `job.id` directly as an integer to route to the detail page (`/careers/1`, `/careers/2`). 

When migrating to Sanity, you have two choices for routing:
1. **Use Sanity's built-in `_id`**: Update your `<Link to={\`/careers/\${job._id}\`}>` and use `_id` instead of `id` in [JobDetail.jsx](file:///c:/Users/mihir/Desktop/seanora-global/src/pages/Careers/JobDetail.jsx).
2. **Add a `slug` field to the schema**: (Recommended for SEO)
   ```javascript
   {
     name: 'slug',
     title: 'Slug',
     type: 'slug',
     options: {
       source: 'title',
       maxLength: 96,
     },
     validation: (Rule) => Rule.required(),
   }
   ```
   If you do this, your routes become `/careers/product-designer` instead of `/careers/1`.

## 3. How your Frontend Filtering will work with Sanity

Your current filtering in [CareersBoard.jsx](file:///c:/Users/mihir/Desktop/seanora-global/src/pages/Careers/components/CareersBoard.jsx) is done completely client-side in React after importing `JOBS_DATA`:
```javascript
const filteredJobs = JOBS_DATA.filter((job) => {
    // ... filtering logic
})
```

Once you connect Sanity, you can easily maintain this exact seamless filtering experience without rewriting your UI logic. 
1. You will fetch *all* active jobs from Sanity when the page loads:
   `*[_type == "job" && isActive == true]`
2. You save that array to a React state variable (e.g., `const [jobsData, setJobsData] = useState([])`).
3. Your existing `filteredJobs` variable will gracefully continue to filter that state array just like it currently filters the static array, ensuring the dropdowns work identically.
