// Import the Upwork API client library
const Upwork = require('upwork-api');

// Create a new instance of the Upwork API client
const upwork = new Upwork({
  public_key: 'your_public_key',
  secret_key: 'your_secret_key'
});

// Get the job ID from the URL
const jobId = window.location.href.match(/\/jobs\/(\d+)/)[1];

// Send a proposal for the job
upwork.provider.submitProposal({
  job_key: jobId,
  cover_letter: 'I am interested in this job and I believe I am the perfect fit for it.'
}, function(error, data, response) {
  if (error) {
    console.error('Error submitting proposal:', error);
  } else {
    console.log('Proposal submitted successfully');
  }
});
