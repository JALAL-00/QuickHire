import { Request, Response } from 'express';
import Job from '../models/Job';


export const getJobs = async (req: Request, res: Response): Promise<void> => {
  try {
    const { search, category, location } = req.query;
    
    let query: any = {};

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } },
      ];
    }
    if (category) query.category = category;
    if (location) query.location = location;

    const jobs = await Job.find(query).sort({ createdAt: -1 }); 

    res.status(200).json({ success: true, count: jobs.length, data: jobs });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


export const getJobById = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      res.status(404).json({ success: false, message: 'Job not found' });
      return;
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error or Invalid ID format' });
  }
};


export const createJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, company, location, category, description } = req.body;

    if (!title || !company || !location || !category || !description) {
      res.status(400).json({ success: false, message: 'Please provide all required fields' });
      return;
    }

    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


export const deleteJob = async (req: Request, res: Response): Promise<void> => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      res.status(404).json({ success: false, message: 'Job not found' });
      return;
    }
    res.status(200).json({ success: true, message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};