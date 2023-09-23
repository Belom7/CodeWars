function match(candidate, job) {
    if (!candidate.minSalary || !job.maxSalary) throw "Invalid Job or Candidate";
    return job.maxSalary >= candidate.minSalary * 0.9;
}