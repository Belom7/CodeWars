function match(job, candidates) {
    return candidates.filter((candidate) => (
        (!candidate?.desiresEquity || job.equityMax > 0) && job.locations.some((location) => (
            candidate.currentLocation === location || candidate.desiredLocations.includes(location)
        ))
    ))
}