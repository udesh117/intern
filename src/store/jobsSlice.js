import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all jobs
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
});

// Fetch job details
export const fetchJobDetails = createAsyncThunk("jobs/fetchJobDetails", async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return response.data;
});

// Submit job application
export const submitJobApplication = createAsyncThunk("jobs/submitApplication", async (applicationData) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/posts", applicationData);
  return response.data;
});

const jobsSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    jobDetails: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchJobDetails.fulfilled, (state, action) => {
        state.jobDetails = action.payload;
      });
  },
});

export default jobsSlice.reducer;
