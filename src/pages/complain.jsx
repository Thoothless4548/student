import React, { useState } from 'react';
import './complain.css'; // Import the CSS file

function StudentComplaintForm() {
  // State variables to handle form inputs
  const [formData, setFormData] = useState({
    complaint: 'nothing',
    details: '',
    orderDate: '',
    tos: false,
    files: [], // State variable for the uploaded files
  });

  // State to handle form errors
  const [formErrors, setFormErrors] = useState({});

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === 'file') {
      // Update the state for file input
      const newFiles = Array.from(files); // Convert file list to array
      setFormData((prevData) => ({
        ...prevData,
        files: [...prevData.files, ...newFiles], // Append new files to existing files
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  // Function to remove a file from the selected files
  const removeFile = (index) => {
    setFormData((prevData) => {
      const newFiles = [...prevData.files];
      newFiles.splice(index, 1);
      return {
        ...prevData,
        files: newFiles,
      };
    });
  };

  // Function to validate form data
  const validateForm = () => {
    let errors = {};

    // Validate complaint details
    if (formData.complaint !== 'nothing' && !formData.details) {
      errors.details = 'Please provide details about your complaint';
    }

    // Validate file upload
    if (formData.files.length === 0) {
      errors.file = 'Uploading a file (image or document) is required';
    }

    // Validate terms of service
    if (!formData.tos) {
      errors.tos = 'You must agree to the terms and conditions';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    if (validateForm()) {
      // Implement the form submission logic here
      console.log('Form submitted:', formData);
      alert('Form submitted');
      // Reset the form
      setFormData({
        complaint: 'nothing',
        details: '',
        orderDate: '',
        tos: false,
        files: [],
      });
      setFormErrors({});
    }
  };

  // Function to format file size
  const formatFileSize = (size) => {
    const units = ['B', 'KB', 'MB', 'GB'];
    let index = 0;
    while (size >= 1024 && index < units.length - 1) {
      size /= 1024;
      index++;
    }
    return `${size.toFixed(2)} ${units[index]}`;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {/* Complaint details */}
      <div style={{ flex: '1', marginRight: '20px' }}>
        <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Student Complaint Form</h1>
          <p>
            Fill out this form to complain about any issues you have faced as a student.
            Please note that it may take us several days to respond to your request.
          </p>

          <form onSubmit={handleSubmit}> {/* Added form element */}
            <label htmlFor="details">Details about your complaint</label>
            <textarea
              name="details"
              id="details"
              rows="10"
              cols="50"
              placeholder="Please provide as much detail as possible"
              value={formData.details}
              onChange={handleChange}
            />
            {formErrors.details && <span className="error">{formErrors.details}</span>}
            <br /><br />

            {/* Terms of Service checkbox */}
            <label htmlFor="tos" style={{ textAlign: 'center' }}>
              <input
                type="checkbox"
                name="tos"
                id="tos"
                checked={formData.tos}
                onChange={handleChange}
              />
              I agree to the terms and conditions
            </label>
            {formErrors.tos && <span className="error">{formErrors.tos}</span>}
            <br /><br />

            {/* Submit button */}
            <button type="submit" style={{  margin: 'auto' }}>Submit Complaint</button>
          </form>
        </fieldset>
      </div>

      {/* File Upload Section */}
      <div style={{ flex: '2' }}>
        <fieldset style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '50px', marginTop: '200px', padding: '20px' }}>
          <div className="file-upload-box"style={{ height: '100px', width: '400px', overflow: 'hidden' }}>
            <h4>Upload the proof</h4>
            <h4>
              <i className="fa-solid fa-upload"></i> Choose Files to Upload
            </h4>
            <input
              type="file"
              id="fileInput"
              hidden
              multiple
              accept="image/*, .pdf, .doc, .docx"
              onChange={handleChange}
            />
            <small className="small-text">Supported file types: PDF, DOC, DOCX, JPG, PNG</small>
          </div>

          {/* Displaying selected files */}
          {formData.files.length > 0 && (
            <div className="selected-files">
              <h5>Selected Files</h5>
              <ul className="file-list">
                {formData.files.map((file, index) => (
                  <li key={index} className="item">
                    <span>{file.name} ({formatFileSize(file.size)})</span>
                    <button type="button" className="remove" onClick={() => removeFile(index)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {formErrors.file && <span className="error">{formErrors.file}</span>}
        </fieldset>
      </div>
    </div>
  );
}

export default StudentComplaintForm;