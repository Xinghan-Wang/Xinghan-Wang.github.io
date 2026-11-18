export interface Project {
  title: string;
  description: string;
  details?: string;
  thumbnail?: { src: string; alt: string };
  repository?: string;
  paper?: string;
  page?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  url?: string;
}

// Put images and PDFs in public/ and refer to them as /filename.ext.
// Empty contact fields display a short availability note. An empty CV is hidden.
export const profile = {
  name: 'Xinghan Wang',
  role: 'Undergraduate Student in Artificial Intelligence',
  university: 'Westlake University',
  universityUrl: 'https://en.westlake.edu.cn/',
  photo: '',
  email: 'wangxinghan@westlake.edu.cn',
  github: 'https://github.com/Xinghan-Wang',
  cv: '',
  biography: [
    'I’m an undergraduate student majoring in Artificial Intelligence at Westlake University. My interests include computer vision and 3D reconstruction, especially how we can recover shape and motion from images.',
    'I enjoy exploring research questions through implementation. Reproducing ideas from papers gives me a way to understand how they work in practice.',
  ],
  interests: ['Computer Vision', '3D Reconstruction', '3D Human Modeling and Motion'],
  projects: [
    {
      title: 'MeshTailor Reproduction',
      description: 'My personal implementation of the method described in the MeshTailor research paper.',
      details: '', // Add verified implementation notes here.
      repository: '', paper: '', page: '',
      thumbnail: { src: 'mesh-study.svg', alt: 'Illustrative wireframe surface, project image placeholder' },
    },
  ] as Project[],
  // Add one entry per published work. The section appears with the first entry.
  publications: [] as Publication[],
  updated: '2026-11-18', // Update when you change content (YYYY-MM-DD).
};

