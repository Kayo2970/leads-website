// This is a temporary mockup store. 
// In a real production app, this would be a database (MongoDB/Supabase).

export let formSubmissions = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Partnership Inquiry',
    message: 'We are interested in collaborating with LEADS for our upcoming youth summit.',
    date: '2026-03-24T10:30:00Z',
    status: 'new'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    email: 'sarah@msruas.ac.in',
    subject: 'Student Registration',
    message: 'Could you provide more details about the Bharat Lead Summit registration process?',
    date: '2026-03-24T14:45:00Z',
    status: 'read'
  }
];

export const addSubmission = (data) => {
  const newEntry = {
    id: Date.now(),
    date: new Date().toISOString(),
    status: 'new',
    ...data
  };
  formSubmissions = [newEntry, ...formSubmissions];
  return newEntry;
};
