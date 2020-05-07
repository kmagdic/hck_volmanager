package com.hck.volmanager.controller;

import com.hck.volmanager.exception.ResourceNotFoundHttpException;
import com.hck.volmanager.model.Service;
import com.hck.volmanager.repository.ServiceRepository;
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
public class ServiceController {
    private static final Logger log = LoggerFactory.getLogger(ServiceController.class);

    @Autowired
    private ServiceRepository serviceRepository;

    @GetMapping("/services")
    public List<Service> getAllServices() {
        log.info("Listing all services ...");
        return serviceRepository.findAll();
    }

    /*
    @PostMapping("/services")
    public Service createService(@Valid @RequestBody Service service) throws ResourceNotFoundHttpException {
        Service newService = serviceRepository.save(service);
        log.info("Creating service:  " + service.getId());

        newService = serviceRepository.findById(service.getId())
                .orElseThrow(() -> new ResourceNotFoundHttpException("Service not found for this id :: " + service.getId()));

        return newService;
    }

    @PutMapping("/services/{id}")
    public ResponseEntity<Service> updateService(@PathVariable(value = "id") Long serviceId,
                                                     @Valid @RequestBody Service serviceJSON) throws ResourceNotFoundHttpException {
        Service serviceDB = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Service not found for this id :: " + serviceId));

        BeanUtils.copyProperties(serviceJSON, serviceDB);
        log.info("Updated: " + serviceDB.getId() + ", Service: " + serviceDB);
        final Service updatedService = serviceRepository.save(serviceDB);
        return ResponseEntity.ok(updatedService);
    }

    @DeleteMapping("/services/{id}")
    public Map<String, Boolean> deleteService(@PathVariable(value = "id") Long serviceId)
            throws ResourceNotFoundHttpException {
        Service service = serviceRepository.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundHttpException("Service not found for this id :: " + serviceId));

        log.info("Deleting service by id: " + service.getId());

        serviceRepository.delete(service);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }

    */
}
