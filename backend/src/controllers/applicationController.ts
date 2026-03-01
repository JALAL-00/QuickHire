import { Request, Response } from 'express';
import Application from '../models/Application';
import Job from '../models/Job';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const urlRegex = /^(https?:\/\/[^\s$.?#].[^\s]*)$/i;


export const createApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const { jobId, name, email, resumeLink, coverNote } = req.body;

    if (!jobId || !name || !email || !resumeLink) {
      res.status(400).json({ success: false, message: 'Please provide all required fields' });
      return;
    }

    if (!emailRegex.test(email)) {
      res.status(400).json({ success: false, message: 'Please provide a valid email address' });
      return;
    }

    if (!urlRegex.test(resumeLink)) {
      res.status(400).json({ success: false, message: 'Please provide a valid URL for the resume' });
      return;
    }

    const jobExists = await Job.findById(jobId);
    if (!jobExists) {
      res.status(404).json({ success: false, message: 'The job you are applying for does not exist' });
      return;
    }

    const application = await Application.create({
      jobId,
      name,
      email,
      resumeLink,
      coverNote,
    });

    res.status(201).json({ success: true, data: application, message: 'Application submitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};