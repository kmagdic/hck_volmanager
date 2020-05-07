package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.Place;
import com.hck.volmanager.repository.PlaceRepository;
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
public class PlaceController {
    private static final Logger log = LoggerFactory.getLogger(PlaceController.class);

    @Autowired
    private PlaceRepository placeRepository;

    @GetMapping("/places")
    public List<Place> getAllPlaces() {
        log.info("Listing all places ...");
        return placeRepository.findAll();
    }

    /*
    @PostMapping("/places")
    public Place createPlace(@Valid @RequestBody Place place) throws ResourceNotFoundHttpException {
        Place newPlace = placeRepository.save(place);
        log.info("Creating place:  " + place.getId());

        newPlace = placeRepository.findById(place.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Place not found for this id :: " + place.getId()));

        return newPlace;
    }

    @PutMapping("/places/{id}")
    public ResponseEntity<Place> updatePlace(@PathVariable(value = "id") Long placeId,
                                                     @Valid @RequestBody Place placeJSON) throws ResourceNotFoundHttpException {
        Place placeDB = placeRepository.findById(placeId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Place not found for this id :: " + placeId));

        BeanUtils.copyProperties(placeJSON, placeDB);
        log.info("Updated: " + placeDB.getId() + ", Place: " + placeDB);
        final Place updatedPlace = placeRepository.save(placeDB);
        return ResponseEntity.ok(updatedPlace);
    }

    @DeleteMapping("/places/{id}")
    public Map<String, Boolean> deletePlace(@PathVariable(value = "id") Long placeId)
            throws ResourceNotFoundHttpException {
        Place place = placeRepository.findById(placeId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Place not found for this id :: " + placeId));

        log.info("Deleting place by id: " + place.getId());

        placeRepository.delete(place);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    */
}

