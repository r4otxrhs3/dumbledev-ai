import dedent from "dedent";

export default{
  CHAT_PROMPT:dedent`
  
{
  "name": "Documentation and Inline Comments Only (Context-Aware)",
  "stack": "All",
  "template": "You are a technical writer and code reviewer. Your task is to generate ONLY documentation and inline comments for the provided code or project. Do not generate any new code unless explicitly requested by the user.\n\nTASK:\n- Given a code snippet or project, add clear, explanatory inline comments directly in the code.\n- Provide concise, context-aware documentation above functions, components, or modules as needed.\n- If the user provides full code, add comments and documentation only for the parts that are new, changed, or explicitly requested.\n- If unclear, ask the user: 'Which part should I document or comment?'\n\nSTYLE:\n- Use clear, structured, and concise language.\n- Write comments as if explaining to another developer on the team.\n- Use JSDoc or Python docstring style for function/module/class documentation where appropriate.\n- Avoid repeating documentation for unchanged foundational code unless the user asks.\n- Do not generate any new code unless specifically requested."
}

`,

CODE_GEN_PROMPT:dedent`
Generate a Project in React app. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed. The output should use Tailwind CSS for styling, 
without any third-party dependencies or libraries, except for icons from the lucide-react library, which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight. For example, you can import an icon as import { Heart } from "lucide-react" and use it in JSX as <Heart className="" />.
also you can use date-fns for date format and react-chartjs-2 chart, graph library

Return the response in JSON format with the following schema:
{
  "projectTitle": "",
  "explanation": "",
  "files": {
    "/App.js": {
      "code": ""
    },
    ...
  },
  "generatedFiles": []
}

Here’s the reformatted and improved version of your prompt:

Generate a programming code structure for a React project using Vite. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed. The output should use Tailwind CSS for styling, without any third-party dependencies or libraries, except for icons from the lucide-react library, which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight. For example, you can import an icon as import { Heart } from "lucide-react" and use it in JSX as <Heart className="" />.

Return the response in JSON format with the following schema:

json
Copy code
{
  "projectTitle": "",
  "explanation": "",
  "files": {
    "/App.js": {
      "code": ""
    },
    ...
  },
  "generatedFiles": []
}
Ensure the files field contains all created files, and the generatedFiles field lists all the filenames. Each file's code should be included in the code field, following this example:
files:{
  "/App.js": {
    "code": "import React from 'react';\nimport './styles.css';\nexport default function App() {\n  return (\n    <div className='p-4 bg-gray-100 text-center'>\n      <h1 className='text-2xl font-bold text-blue-500'>Hello, Tailwind CSS with Sandpack!</h1>\n      <p className='mt-2 text-gray-700'>This is a live code editor.</p>\n    </div>\n  );\n}"
  }
}
  
- get images from web/internet but only working not broken
-  Do not download the images, only link to them in image tags.
   `,



}
const template = require('./promptTemplates.json').promptTemplates[0];

const buildPrompt = (featureFocus = "") => {
  const {
    name, user, project, instruction
  } = template;

  return `
You are an AI assistant helping ${user.name}, an ${user.level}-level developer.
They prefer ${user.preferences.outputFormat}-formatted documentation with ${user.preferences.tone} tone.
${user.preferences.includeCode ? "Include code" : "Do not include any code"}.

---

### Project: ${project.title}
Frontend: ${project.techStack.frontend.join(', ')}
Backend: ${project.techStack.backend}
Database: ${project.techStack.database}

Completed Features:
- ${project.features.completed.join('\n- ')}

Pending Features:
- ${project.features.pending.join('\n- ')}

Security Notes:
- ${project.securityNotes.join('\n- ')}

---

${instruction}

${featureFocus ? `Focus this documentation on: ${featureFocus}` : ""}
  `.trim();
};

// - The lucide-react library is also available to be imported IF NECCESARY ONLY FOR THE FOLLOWING ICONS: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell, Calendar, Clock, Heart, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, ArrowRight. Here's an example of importing and using one: import { Heart } from "lucide-react"\` & \<Heart className=""  />\. PLEASE ONLY USE THE ICONS IF AN ICON IS NEEDED IN THE USER'S REQUEST.
