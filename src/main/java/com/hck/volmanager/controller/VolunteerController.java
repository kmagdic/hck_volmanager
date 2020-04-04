package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundException;
import com.hck.volmanager.model.Volunteer;
import com.hck.volmanager.model.Volunteer;
import com.hck.volmanager.repository.VolunteerRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class VolunteerController {
	private static final Logger log = LoggerFactory.getLogger(VolunteerController.class);

	@Autowired
	private VolunteerRepository volunteerRepository;

	@GetMapping("/volunteers")
	public List<Volunteer> getAllVolunteers() {
		log.info("Listing all volunteers ...");
		return volunteerRepository.findAll();
	}

	@GetMapping("/volunteers/{id}")
	public ResponseEntity<Volunteer> getVolunteerById(@PathVariable(value = "id") Long id)
			throws ResourceNotFoundException {
		Volunteer volunteer = volunteerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Volunteer not found for this id :: " + id));

		log.info("Get volunteer by id " + volunteer.getId()  + ": " +  volunteer);
		return ResponseEntity.ok().body(volunteer);
	}

	@PostMapping("/volunteers")
	public Volunteer createVolunteer(@Valid @RequestBody Volunteer volunteer) {
		Volunteer newVolunteer = volunteerRepository.save(volunteer);
		log.info("Creating volunteer:  " + volunteer.getId());
		return newVolunteer;
	}

	@PutMapping("/volunteers/{id}")
	public ResponseEntity<Volunteer> updateVolunteer(@PathVariable(value = "id") Long volunteerId,
													@Valid @RequestBody Volunteer volunteerDetails) throws ResourceNotFoundException {
		Volunteer volunteer = volunteerRepository.findById(volunteerId)
				.orElseThrow(() -> new ResourceNotFoundException("Volunteer not found for this id :: " + volunteerId));

		log.info("Updating of volunteer by id: " + volunteer.getId() + ", Voluneteer: " + volunteer);

		// TODO: when proprerty is null it is overwriten to non-null property
		BeanUtils.copyProperties(volunteerDetails, volunteer);
		final Volunteer updatedVolunteer = volunteerRepository.save(volunteer);
		return ResponseEntity.ok(updatedVolunteer);
	}

	@DeleteMapping("/volunteers/{id}")
	public Map<String, Boolean> deleteVolunteer(@PathVariable(value = "id") Long volunteerId)
			throws ResourceNotFoundException {
		Volunteer volunteer = volunteerRepository.findById(volunteerId)
				.orElseThrow(() -> new ResourceNotFoundException("Volunteer not found for this id :: " + volunteerId));

		log.info("Deleting volunteer by id: " + volunteer.getId());

		volunteerRepository.delete(volunteer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
